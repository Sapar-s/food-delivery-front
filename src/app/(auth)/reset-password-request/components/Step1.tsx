"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch } from "react";

const formSchema = z.object({
  email: z.string().email(),
});

export const Step1 = ({
  currentStep,
  setCurrentStep,
  setEmail,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  setEmail: Dispatch<string>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCurrentStep(currentStep + 1);
    setEmail(values.email);
  }
  return (
    <div className="w-[416px] flex flex-col gap-6 justify-center items-start ">
      <Link href={"/"}>
        <Button
          variant={"outline"}
          className="w-9 h-9 py-2 px-4 flex items-center justify-center "
        >
          <ChevronLeft />
        </Button>
      </Link>
      <div>
        <h3 className="text-[24px] font-[600] leading-[32px] ">
          Reset your password
        </h3>
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Enter your email to receive a password reset link.
        </h4>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-[416px]"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full " type="submit">
            Send link
          </Button>
        </form>
      </Form>
      <div className="flex w-full justify-center gap-3 items-center">
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Don’t have an account?
        </h4>
        <Link href={"/signup"}>
          <Button variant={"link"} className="text-[#2563EB]">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};
