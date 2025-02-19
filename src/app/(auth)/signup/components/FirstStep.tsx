import { Inputs } from "@/app/_components/userComponents/Inputs";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function FirsStep({ handleNext }: { handleNext: () => void }) {
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
          Create your account
        </h3>
        <h4 className="text-[16px] font-[400] leading-[24px] text-muted-foreground ">
          Sign up to explore your favorite dishes.
        </h4>
      </div>
      <Inputs type="email" place="Enter your email address" />
      <Button onClick={handleNext} className="w-full ">
        Let's Go
      </Button>
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
}
