"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/shadcn-ui/button";
import { Calendar } from "@/components/shadcn-ui/calendar";
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
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/shadcn-ui/popover";
import { Spinner } from "@/components/shadcn-ui/spinner";
import { H2 } from "@/components/shadcn-ui/typography/H2";
import { toast } from "@/components/shadcn-ui/use-toast";
import { VerticalDivisor } from "@/components/shadcn-ui/vertical-divisor";
import { putData } from "@/functions/api";
import { checkForErrorInResponseData } from "@/functions/data";
import { cn } from "@/lib/utils";
import { CalendarIcon, Palette, WholeWord } from "lucide-react";
import { useRouter } from "next/navigation";
import { Achievement } from "../../table/JourneyTableColumns";
import { AchievementComponentPreview } from "../ui/AchievementComponentPreview";

const editAchievementSchema = z.object({
    title: z.string().min(1).max(20),
    date: z.date(),
    color: z.string(),
});

export type EditAchievementFormData = z.infer<typeof editAchievementSchema>;

interface EditAchievementFormProps {
    achievement: Achievement;
}

export function EditAchievementForm({ achievement }: EditAchievementFormProps) {
    const form = useForm<EditAchievementFormData>({
        resolver: zodResolver(editAchievementSchema),
        defaultValues: {
            date: parse(achievement.dateFormatted, "PPP", new Date()),
            ...achievement,
        },
    });

    const router = useRouter();

    async function onSubmit(editAchievementFormData: EditAchievementFormData) {
        const dateFormatted = format(editAchievementFormData.date, "PPP");

        try {
            const data = await putData("/journey", {
                dateFormatted,
                ...editAchievementFormData,
            });

            checkForErrorInResponseData(data);

            toast({
                title: "Success",
                description: `Technology "${editAchievementFormData.title}" edited!`,
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
                    <H2 className="my-5 text-xl">Edit Achievement</H2>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <IconLabel Icon={WholeWord} label="Title" />
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled
                                        minLength={1}
                                        maxLength={20}
                                        placeholder="Achievement name..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>
                                    <IconLabel
                                        Icon={CalendarIcon}
                                        label="Achievement Date"
                                    />
                                </FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date: Date) =>
                                                date > new Date() ||
                                                date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    The date you earned this achievement.
                                </FormDescription>
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
            <AchievementComponentPreview
                form={form}
                className="w-full self-center"
            />
        </div>
    );
}
