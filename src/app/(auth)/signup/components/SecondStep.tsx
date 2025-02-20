"use client";

import { Inputs } from "@/app/_components/userComponents/Inputs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordForm = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must include at least one uppercase letter.",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must include at least one lowercase letter.",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must include at least one number.",
      }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export const SecondStep = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
}) => {
  const [type, setType] = useState("password");
  const router = useRouter();

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const form = useForm<z.infer<typeof passwordForm>>({
    resolver: zodResolver(passwordForm),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof passwordForm>) {
    console.log(values);
    router.push("/login");
  }

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="w-[416px] flex flex-col gap-6 justify-center items-start ">
      <Button
        onClick={handlePrev}
        variant={"outline"}
        className="w-9 h-9 py-2 px-4 flex items-center justify-center "
      >
        <ChevronLeft />
      </Button>
      <div>
        <h3 className="text-[24px] font-[600] leading-[32px] ">
          Create a strong password
        </h3>
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Create a strong password with letters, numbers.
        </h4>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type={type}
                    className="w-[416px]"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type={type}
                    className="w-[416px]"
                    placeholder="Confirm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2 items-center">
            <Checkbox onClick={handleToggle} id="terms" />
            <label htmlFor="terms" className="cursor-pointer">
              Show password
            </label>
          </div>
          <Button className="w-full " type="submit">
            Let's Go
          </Button>
        </form>
      </Form>

      <div className="flex w-full justify-center gap-3 items-center">
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Already have an account?
        </h4>
        <Link href={"/login"}>
          <Button variant={"link"} className="text-[#2563EB]">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};
