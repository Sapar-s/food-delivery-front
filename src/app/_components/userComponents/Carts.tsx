"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Cart = () => {
  const [count, setCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(12.99);

  const minusButton = () => {
    if (count === 1) {
      setTotalPrice(12.99);
    }
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalPrice - 12.99);
    }
  };

  const plusButton = () => {
    setCount(count + 1);
    setTotalPrice(totalPrice + 12.99);
  };
  return (
    <div className=" ">
      <div className="w-[397.333px] h-[342px] p-4 flex flex-col items-start gap-5  ">
        <div
          className="h-full w-full p-5 bg-cover bg-center rounded-xl flex items-end justify-end "
          style={{
            backgroundImage: `url("https://res.cloudinary.com/da2ltmfaf/image/upload/v1740015838/Food_Image_hirwob.png")`,
          }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full w-11 h-11 " variant="outline">
                <Plus className="text-[#ef4444] " />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[826px] max-w-auto h-[412px] p-6 flex gap-6 ">
              <DialogHeader hidden>
                <DialogTitle hidden></DialogTitle>
                {/* <DialogDescription ></DialogDescription> */}
              </DialogHeader>
              {/* <div className="w-[826px] h-[412px] p-6 flex gap-6  "> */}
              {/* <div className="w-full"> */}
              <Image
                height={364}
                width={377}
                alt=""
                className="w-full rounded-xl "
                src={
                  "https://res.cloudinary.com/da2ltmfaf/image/upload/v1740015838/Food_Image_hirwob.png"
                }
              />
              {/* </div> */}
              <div className="w-full h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[30px] leading-[36px] text-[#ef4444] font-[600] ">
                    Finger food
                  </h3>
                  <p className="text-[16px] font-[400] leading-[24px] text-foreground mt-3 ">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-[16px] leading-[24px] font-[400] ">
                        Total price
                      </h5>
                      <h4 className="text-[24px] font-[600] leading-[32px] ">
                        ${totalPrice}
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
                  <Button className="h-11 w-full rounded-full ">
                    Add to cart
                  </Button>
                </div>
              </div>
              {/* </div> */}
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col items-start gap-2 w-full ">
          <div className="w-full flex justify-between items-center ">
            <h3 className="text-[24px] leading-[32px] text-[#ef4444] font-[600] ">
              Finger food
            </h3>
            <h4 className="text-[18px] font-[600] leading-[28px] ">$12.99</h4>
          </div>
          <div>
            <p className="text-[14px] font-[400] leading-[20px] text-foreground ">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
