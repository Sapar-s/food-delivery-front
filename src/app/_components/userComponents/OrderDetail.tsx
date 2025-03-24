import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const OrderDetail = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger
          onClick={() => {
            setActiveTab("cart");
            setIsSheetOpen(true);
          }}
        >
          <div className="w-[36px] h-[36px] bg-[#f4f4f5] rounded-[50%] flex justify-center items-center">
            <ShoppingCart color="black" className="w-[13px] h-[13px]" />
          </div>
        </SheetTrigger>
        <SheetContent className="w-[535px] p-4 flex flex-col items-start gap-6 border-none rounded-tl-[20px] rounded-bl-[20px] bg-[#404040]">
          <SheetHeader>
            <SheetTitle className="flex gap-3 text-background text-[20px] font-[600] leading-[28px]">
              <ShoppingCart />
              Order detail
            </SheetTitle>
          </SheetHeader>
          <Tabs
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full rounded-full p-1 flex items-center gap-2 bg-background">
              <TabsTrigger
                value="cart"
                className="w-full rounded-full data-[state=active]:bg-[#ef4444] data-[state=active]:text-[#ffffff]"
              >
                Cart
              </TabsTrigger>
              <TabsTrigger
                value="order"
                className="w-full rounded-full data-[state=active]:bg-[#ef4444] data-[state=active]:text-[#ffffff]"
              >
                Order
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="cart"
              className="w-full h-full flex flex-col items-start gap-4 p-4 bg-background rounded-[20px]"
            >
              <div className="flex flex-col items-start gap-5 w-full">
                <h4 className="text-[20px] font-[600] leading-[28px]">
                  My cart
                </h4>
                <div className="h-[120px] flex items-start gap-[10px]">
                  <Image
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFq1jBrOu_6HA0OS_65_A8GPo5n0pwiZwbjw&s"
                    height={130}
                    width={124}
                    className="w-[124px] rounded-xl h-full"
                  />
                  <div className="w-full h-full flex flex-col items-start gap-6">
                    <div className="w-full flex items-start gap-[10px]">
                      <div>
                        <h4 className="text-[16px] font-[700] leading-[28px] text-[#ef4444]">
                          Sunshine Stackers
                        </h4>
                        <h5 className="text-[12px] font-[400] leading-[16px]">
                          Fluffy pancakes stacked with fruits, cream, syrup, and
                          powdered sugar.
                        </h5>
                      </div>
                      <Button
                        variant="outline"
                        className="w-9 h-9 rounded-full flex items-center justify-center py-2 px-4 gap-2 border-[#ef4444] text-[#ef4444]"
                      >
                        <X />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full border-b-[1px] border-dashed"></div>
              </div>
              <div className="flex flex-col items-start gap-5 w-full rounded-[20px] bg-background ">
                <h4 className="text-[20px">Payment info</h4>
              </div>
            </TabsContent>
            <TabsContent value="order">Change your password here.</TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
};
