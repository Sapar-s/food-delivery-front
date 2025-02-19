import { Inputs } from "@/app/_components/userComponents/Inputs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const SecondStep = ({ handlePrev }: { handlePrev: () => void }) => {
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
      <div className="flex flex-col gap-4">
        <Inputs type="password" place="Password" />
        <Inputs type="password" place="Confirm" />
        <div className="flex gap-2 items-center">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="cursor-pointer">
            Show password
          </label>
        </div>
      </div>
      <Link className="w-full" href={"/login"}>
        <Button className="w-full ">Let's Go</Button>
      </Link>
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
