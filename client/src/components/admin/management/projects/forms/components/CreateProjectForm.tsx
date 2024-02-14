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
    IconLabel,
} from "@/components/shadcn-ui/form";
import { Input } from "@/components/shadcn-ui/input";
import { Textarea } from "@/components/shadcn-ui/textarea";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { toast } from "@/components/shadcn-ui/use-toast";
import { VerticalDivisor } from "@/components/shadcn-ui/vertical-divisor";
import { postData } from "@/functions/api";
import {
    ExternalLink,
    Github,
    ImageIcon,
    Palette,
    TextIcon,
    WholeWord,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ProjectComponentPreview } from "../ui/ProjectComponentPreview";

const createProjectSchema = z.object({
    name: z.string().min(1).max(20),
    description: z.string().min(1).max(150),
    imageUrl: z.string().min(0),
    repoUrl: z.string(),
    siteUrl: z.string().min(0),
    color: z.string(),
});

export type CreateProjectFormData = z.infer<typeof createProjectSchema>;

export function CreateProjectForm() {
    const form = useForm<CreateProjectFormData>({
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            name: "",
            description: "",
            imageUrl: "",
            repoUrl: "",
            siteUrl: "",
            color: "#74d3fe",
        },
    });

    const router = useRouter();

    async function onSubmit(data: CreateProjectFormData) {
        try {
            await postData("/projects", data);

            toast({
                title: "Success",
                description: `Technologie "${data.name}" created!`,
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
        <div className="flex w-full h-full gap-5">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full"
                >
                    <H2 className="my-5 text-xl">Create Project</H2>
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
                                        placeholder="Project name..."
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
                                        label="Image URL (optional)"
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
                        name="repoUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel Icon={Github} label="Repo URL" />
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="url"
                                        placeholder="Repo URL..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="siteUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel
                                        Icon={ExternalLink}
                                        label="Site URL (optional)"
                                    />
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="url"
                                        placeholder="Site URL..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel
                                        Icon={TextIcon}
                                        label="Description"
                                    />
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        minLength={1}
                                        maxLength={150}
                                        placeholder="Briefly describe the project..."
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
                    <Button type="submit">Create</Button>
                </form>
            </Form>
            <VerticalDivisor />
            <ProjectComponentPreview
                form={form}
                className="w-full self-center"
            />
        </div>
    );
}
