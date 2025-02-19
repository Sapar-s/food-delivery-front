import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full bg-[#18181B] flex justify-center ">
      <div className="max-w-[1440px] w-full py-3 px-[88px]  flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" width={46} height={37.29} alt="" />
          <div>
            <h4 className="text-[20px] font-[600] leading-[28px] text-primary-foreground ">
              Nom<span className="text-[#ef4444] ">Nom</span>
            </h4>
            <h5 className="text-[12px] font-[400] leading-[16px] text-secondary ">
              Swift delivery
            </h5>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/signup">
            <Button variant={"secondary"} className="py-2 px-3 rounded-full  ">
              Sign up
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant={"destructive"}
              className="py-2 px-3 rounded-full  "
            >
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
