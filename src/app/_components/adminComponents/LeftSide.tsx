"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutDashboard, Settings, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LeftSide = () => {
  const pathname = usePathname();

  const getActiveValue = () => {
    if (pathname === "/foodmenu") return "a";
    if (pathname === "/orders") return "b";
    return "c";
  };

  return (
    <div className="w-[205px] h-screen bg-[#fff] py-9 px-5">
      <div className="flex items-center justify-center gap-[10px]">
        <Image src="/logo.svg" alt="" width={40} height={40} />
        <div>
          <h4 className="text-[18px] font-[600] leading-[28px]">NomNom</h4>
          <h4 className="text-[12px] font-[400] leading-[16px] text-[#71717A]">
            Swift delivery
          </h4>
        </div>
      </div>
      <ToggleGroup
        type="single"
        value={getActiveValue()}
        className="flex flex-col items-start mt-10 gap-6"
      >
        <Link href="/foodmenu">
          <ToggleGroupItem
            value="a"
            className="h-10 w-[165px] rounded-full py-2 px-6 flex justify-start gap-[10px]"
          >
            <LayoutDashboard />
            Food menu
          </ToggleGroupItem>
        </Link>
        <Link href="/orders">
          <ToggleGroupItem
            value="b"
            className="h-10 w-[165px] flex py-2 px-6 justify-start gap-[10px] rounded-full"
          >
            <Truck />
            Orders
          </ToggleGroupItem>
        </Link>
        <div className="w-full">
          <ToggleGroupItem
            value="c"
            className="h-10 w-full py-2 px-6 flex justify-start gap-[10px] rounded-full"
          >
            <Settings />
            Settings
          </ToggleGroupItem>
        </div>
      </ToggleGroup>
    </div>
  );
};
