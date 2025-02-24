import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";

export const ProductList = () => {
  return (
    <div className="w-full p-5 bg-background rounded-xl mt-6 flex flex-col gap-4 items-start ">
      <h4>Appetizers</h4>
      <div className="w-full h-[241px] flex flex-wrap gap-4 items-start ">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex w-[270.75px] h-full flex-col gap-6 py-2 px-4 justify-center items-center border-[1px] border-dashed border-[#ef4444] rounded-[20px] ">
              <Button
                variant={"destructive"}
                className="w-10 h-10 flex items-center justify-center rounded-full "
              >
                <Plus />
              </Button>
              <small className="text-[14px] font-[500] leading-[20px] ">
                Add new Dish to Appetizers
              </small>
            </div>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader hidden></DialogHeader>
            <DialogTitle hidden></DialogTitle>
            <div className="w-[460px] p-6 flex flex-col items-start gap-6 ">
              <div className="w-full pb-4 fle justify-center items-center gap-[10px] ">
                <h4 className="text-[18px] font-[600] leading-[28px]  ">
                  Add new Dish to Appetizers
                </h4>
              </div>
              <div className="flex gap-6 items-start ">
                <div className="flex flex-col gap-2 items-start h-[60px] w-full ">
                  <h4 className="text-[14px] font-[500] leading-[14px] ">
                    Food name
                  </h4>
                  <Input placeholder="Type food name " className="w-full " />
                </div>
                <div className="flex flex-col gap-2 items-start h-[60px] w-full ">
                  <h4 className="text-[14px] font-[500] leading-[14px] ">
                    Food price
                  </h4>
                  <Input placeholder="Enter price... " className="w-full " />
                </div>
              </div>
              <div className="w-full h-[60px] flex flex-col gap-[8px] ">
                <p className="text-[14px] leading-[14px] font-[500] ">
                  Ingredients
                </p>
                <Input
                  placeholder="List ingredients... "
                  className="w-full py-2 px-3 "
                />
              </div>
              <div>
                <h4 className="text-[14px] font-[500] leading-[14px] ">
                  Food image
                </h4>
                <CloudinaryUpload />
              </div>
              <div className="w-full pt-6 flex items-center justify-end ">
                <Button className="h-10 py-2 px-4 ">Add category</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
