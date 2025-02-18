import { Toggle } from "@/components/ui/toggle";
import { LayoutDashboard, Settings, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const LeftSide = () => {
  return (
    <div className="w-[205px] h-screen bg-[#fff] py-9 px-5 ">
      <div className="flex items-center justify-center gap-[10px]  ">
        <Image src="/logo.svg" alt="" width={40} height={40} />
        <div>
          <h4 className="text-[18px] font-[600] leading-[28px]  ">NomNom</h4>
          <h4 className="text-[12px] font-[400] leading-[16px] text-[#71717A] ">
            Swift delivery
          </h4>
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-6 ">
        <Link href="/foodmenu">
          <div>
            <Toggle className="h-10 w-[165px] rounded-full py-2 px-6 flex justify-start gap-[10px] ">
              <LayoutDashboard />
              Food menu
            </Toggle>
          </div>
        </Link>
        <Link href={"/orders"}>
          <div>
            <Toggle className="h-10 w-full flex py-2 px-6 justify-start gap-[10px] rounded-full">
              <Truck />
              Orders
            </Toggle>
          </div>
        </Link>

        <Toggle className="h-10 w-full py-2 px-6 flex justify-start gap-[10px] rounded-full">
          <Settings />
          Settings
        </Toggle>
      </div>
    </div>
  );
};
