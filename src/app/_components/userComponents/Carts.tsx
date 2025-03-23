"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FoodType } from "@/utils/types";

export const Cart = ({
  foods,
  categoryId,
}: {
  foods: FoodType[] | null;
  categoryId: string;
}) => {
  const [count, setCount] = useState<number>(1);
  const [address, setAddress] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const minusButton = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusButton = () => {
    setCount(count + 1);
  };

  const addToCart = () => {
    alert("Added to cart");
    setOpen(false);
  };

  useEffect(() => {
    const getAddress = localStorage.getItem("address");
    setAddress(getAddress);
  }, [open]);
  return (
    <>
      {foods
        ?.filter((food) => food.category._id === categoryId)
        .map((food, index) => {
          return (
            <div
              key={index}
              className="w-[397.333px] h-[342px] p-4 flex flex-col items-start  bg-white rounded-[20px] gap-5  "
            >
              <div
                className="h-full w-full p-5 bg-cover bg-center rounded-xl flex items-end justify-end "
                style={{
                  backgroundImage: `url(${food?.image})`,
                }}
              >
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="rounded-full w-11 h-11 "
                      variant="outline"
                    >
                      <Plus className="text-[#ef4444] " />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[826px] max-w-auto h-[412px] p-6 flex gap-6 ">
                    <DialogHeader hidden>
                      <DialogTitle hidden></DialogTitle>
                    </DialogHeader>
                    <Image
                      height={364}
                      width={377}
                      alt=""
                      className="w-full rounded-xl "
                      src={food?.image}
                    />
                    <div className="w-full h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-[30px] leading-[36px] text-[#ef4444] font-[600] ">
                          {food?.foodName}
                        </h3>
                        <p className="text-[16px] font-[400] leading-[24px] text-foreground mt-3 ">
                          {food?.ingredients}
                        </p>
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="text-[16px] leading-[24px] font-[400] ">
                              Total price
                            </h5>
                            <h4 className="text-[24px] font-[600] leading-[32px] ">
                              ${food?.price * count}
                            </h4>
                          </div>

                          <div className="flex items-center gap-3">
                            <Button
                              onClick={minusButton}
                              variant={"outline"}
                              className="w-11 h-11 rounded-full bg-background text-primary"
                            >
                              <Minus />
                            </Button>
                            <span className="text-[18px] leading-[28px] font-[600] ">
                              {count}
                            </span>
                            <Button
                              onClick={plusButton}
                              variant={"outline"}
                              className="w-11 h-11 rounded-full bg-background text-primary"
                            >
                              <Plus />
                            </Button>
                          </div>
                        </div>
                        {address ? (
                          <Button
                            onClick={addToCart}
                            className="h-11 w-full rounded-full "
                          >
                            Add to cart
                          </Button>
                        ) : (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="h-11 w-full rounded-full ">
                                Add to cart
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="w-[664px] h-[320px] p-6 flex flex-col justify-between items-center rounded-[20px] bg-background ">
                              <DialogHeader hidden>
                                <DialogTitle>
                                  Please select your delivery address!
                                </DialogTitle>
                              </DialogHeader>
                              <Image
                                alt=""
                                src={"logo.svg"}
                                height={200}
                                width={200}
                                className="w-[142px] h-[116px] "
                              />
                              <DialogClose className="h-11 py-2 px-12 rounded-full bg-secondary ">
                                Close
                              </DialogClose>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex flex-col items-start gap-2 w-full ">
                <div className="w-full flex justify-between items-center ">
                  <h3 className="text-[24px] leading-[32px] text-[#ef4444] font-[600] ">
                    {food?.foodName}
                  </h3>
                  <h4 className="text-[18px] font-[600] leading-[28px] ">
                    {food?.price}
                  </h4>
                </div>
                <div>
                  <p className="text-[14px] font-[400] leading-[20px] text-foreground ">
                    {food?.ingredients}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
