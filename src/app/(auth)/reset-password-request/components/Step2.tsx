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

export const Step2 = ({
  currentStep,
  setCurrentStep,
  setEmail,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  setEmail: Dispatch<string>;
}) => {
  const resendEmail = () => {
    alert("Okay");
  };
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
          Please verify Your Email
        </h3>
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          We just sent an email to{" "}
          <span className="text-foreground ">Test@gmail.com</span>. Click the
          link in the email to verify your account.
        </h4>
      </div>
      <Button className="w-full " onClick={() => resendEmail()}>
        Resend email
      </Button>
    </div>
  );
};
