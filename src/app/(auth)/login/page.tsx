"use client";

import { Inputs } from "@/app/_components/userComponents/Inputs";
import { Button } from "@/components/ui/button";
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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/");
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
        <h3 className="text-[24px] font-[600] leading-[32px] ">Login</h3>
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Log in to enjoy your favorite dishes.
        </h4>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="w-[416px]"
                    placeholder="Enter your email address"
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
                <FormControl>
                  <Input
                    type="password"
                    className="w-[416px]"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full " type="submit">
            Let's Go
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
}
