"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/shadcn-ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn-ui/form";
import { Input } from "@/components/shadcn-ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn-ui/select";
import { Textarea } from "@/components/shadcn-ui/textarea";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { VerticalDivisor } from "@/components/shadcn-ui/vertical-divisor";
import { TechnologieComponentPreview } from "../ui/TechnologieComponentPreview";

const createTechnologieSchema = z.object({
    name: z.string().min(1).max(20),
    experience: z.string().min(1).max(20),
    category: z.enum(["FRONTEND", "BACKEND"]),
    about: z.string().min(1).max(150),
    imageUrl: z.string(),
    twColorClasses: z.string(),
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
            twColorClasses: "",
        },
    });

    async function onSubmit(data: CreateTechnologieFormData) {
        console.log(data);
    }

    return (
        <div className="flex w-full h-full gap-5">
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
                                <FormLabel>Name</FormLabel>
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
                                <FormLabel>Experience</FormLabel>
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
                                <FormLabel>Image URL</FormLabel>
                                <FormControl>
                                    <Input
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
                                <FormLabel>Category</FormLabel>
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
                                <FormLabel>About</FormLabel>
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
                        name="twColorClasses"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tailwind Color Classes</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder={`Describe the classes by dividing them by a space.\nEx: bg-blue-500 shadow-yellow-500...`}
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    The classes entered will be applied to the
                                    content.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Create</Button>
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
