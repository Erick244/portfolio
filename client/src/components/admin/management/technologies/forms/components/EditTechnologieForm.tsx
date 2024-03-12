"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { TechnologieCard } from "@/components/home/templates/technologie-card";
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
import { putData } from "@/functions/api";
import { checkForErrorInResponseData } from "@/functions/data";
import {
    GraduationCap,
    ImageIcon,
    Layers,
    Palette,
    TextIcon,
    WholeWord,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Technologie } from "../../table/TechnologiesTableColumns";
import { TechnologieComponentPreview } from "../ui/TechnologieComponentPreview";

const editTechnologieSchema = z.object({
    name: z.string().min(1).max(20),
    knowledge: z.enum(["BASIC", "INTERMEDIATE", "EXPERT"]),
    category: z.enum(["FRONTEND", "BACKEND"]),
    about: z.string().min(1).max(150),
    imageUrl: z.string().max(255),
    color: z.string(),
});

export type EditTechnologieFormData = z.infer<typeof editTechnologieSchema>;

interface EditTechnologieFormProps {
    technologie: Technologie;
}

export function EditTechnologieForm({ technologie }: EditTechnologieFormProps) {
    const form = useForm<EditTechnologieFormData>({
        resolver: zodResolver(editTechnologieSchema),
        defaultValues: { ...technologie },
    });

    const router = useRouter();

    async function onSubmit(editTechnologieFormData: EditTechnologieFormData) {
        try {
            const data = await putData(
                "/technologies",
                editTechnologieFormData
            );

            checkForErrorInResponseData(data);

            toast({
                title: "Success",
                description: `Technologie "${editTechnologieFormData.name}" edited!`,
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
                    <H2 className="my-5 text-xl">Edit Technologie</H2>
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
                                        disabled
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
                        name="knowledge"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel
                                        Icon={GraduationCap}
                                        label="Knowledge"
                                    />
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a technologie knowledge" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="BASIC">
                                            <TechnologieCard.Star
                                                fill
                                                toolTipText="Basic"
                                            />
                                        </SelectItem>
                                        <SelectItem value="INTERMEDIATE">
                                            <TechnologieCard.Star
                                                fill
                                                toolTipText="Basic"
                                            />
                                            <TechnologieCard.Star
                                                fill
                                                toolTipText="Intermediate"
                                            />
                                        </SelectItem>
                                        <SelectItem value="EXPERT">
                                            <TechnologieCard.Star
                                                fill
                                                toolTipText="Basic"
                                            />
                                            <TechnologieCard.Star
                                                fill
                                                toolTipText="Intermediate"
                                            />
                                            <TechnologieCard.Star
                                                fill
                                                toolTipText="Expert"
                                            />
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
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
                                        maxLength={255}
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
                                    disabled
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
                            {form.formState.isSubmitting ? <Spinner /> : "Save"}
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
