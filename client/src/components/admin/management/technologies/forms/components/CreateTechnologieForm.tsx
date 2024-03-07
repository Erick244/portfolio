"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/shadcn-ui/button";
import { DialogClose } from "@/components/shadcn-ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    IconLabel,
} from "@/components/shadcn-ui/form";
import { Input } from "@/components/shadcn-ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn-ui/select";
import { Spinner } from "@/components/shadcn-ui/spinner";
import { Textarea } from "@/components/shadcn-ui/textarea";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { toast } from "@/components/shadcn-ui/use-toast";
import { VerticalDivisor } from "@/components/shadcn-ui/vertical-divisor";
import { postData } from "@/functions/api";
import { checkForErrorInResponseData } from "@/functions/data";
import {
    CalendarClock,
    ImageIcon,
    Layers,
    Palette,
    TextIcon,
    WholeWord,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { TechnologieComponentPreview } from "../ui/TechnologieComponentPreview";

const createTechnologieSchema = z.object({
    name: z.string().min(1).max(20),
    experience: z.string().min(1).max(20),
    category: z.enum(["FRONTEND", "BACKEND"]),
    about: z.string().min(1).max(150),
    imageUrl: z.string(),
    color: z.string(),
});

export type CreateTechnologieFormData = z.infer<typeof createTechnologieSchema>;

export function CreateTechnologieForm() {
    const form = useForm<CreateTechnologieFormData>({
        resolver: zodResolver(createTechnologieSchema),
        defaultValues: {
            name: "",
            experience: "",
            imageUrl: "",
            category: "" as "FRONTEND",
            about: "",
            color: "#adb0ac",
        },
    });

    const router = useRouter();

    async function onSubmit(
        createTechnologieFormData: CreateTechnologieFormData
    ) {
        try {
            const data = await postData(
                "/technologies",
                createTechnologieFormData
            );

            checkForErrorInResponseData(data);

            toast({
                title: "Success",
                description: `Technologie "${createTechnologieFormData.name}" created!`,
            });

            router.refresh();
            router.prefetch("/");
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        }
    }

    return (
        <div className="flex sm:flex-row flex-col w-full h-full gap-5 p-2 sm:p-0">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full"
                >
                    <H2 className="my-5 text-xl">Create Technologie</H2>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel Icon={WholeWord} label="Name" />
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        minLength={1}
                                        maxLength={20}
                                        placeholder="Technologie name..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel
                                        Icon={CalendarClock}
                                        label="Experience"
                                    />
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        minLength={1}
                                        maxLength={20}
                                        placeholder="ex: 2 years..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel
                                        Icon={ImageIcon}
                                        label="Image URL"
                                    />
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="url"
                                        placeholder="Image URL..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel Icon={Layers} label="Category" />
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a technologie category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="FRONTEND">
                                            Frontend
                                        </SelectItem>
                                        <SelectItem value="BACKEND">
                                            Backend
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    The category will separate technology from
                                    other categories.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="about"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel Icon={TextIcon} label="About" />
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        minLength={1}
                                        maxLength={150}
                                        placeholder="Briefly describe the technology..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel Icon={Palette} label="Color" />
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="color"
                                        className="h-12"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Select the predominant color of the
                                    component.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogClose asChild>
                        <Button type="submit">
                            {form.formState.isSubmitting ? (
                                <Spinner />
                            ) : (
                                "Create"
                            )}
                        </Button>
                    </DialogClose>
                </form>
            </Form>
            <VerticalDivisor />
            <TechnologieComponentPreview
                className="w-full self-center"
                form={form}
            />
        </div>
    );
}
