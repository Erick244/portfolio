"use client";

import { Button } from "@/components/shadcn-ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn-ui/form";
import { Input } from "@/components/shadcn-ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const adminFormSchema = z.object({
    login: z.string().min(2).max(50),
    password: z.string().min(8).max(16),
});

type AdminFormData = z.infer<typeof adminFormSchema>;

export function AdminForm() {
    const form = useForm<AdminFormData>({
        resolver: zodResolver(adminFormSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });

    async function onSubmit(data: AdminFormData) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-lg w-full"
            >
                <FormField
                    control={form.control}
                    name="login"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Login</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Add predefined login..."
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Add predefined password..."
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
