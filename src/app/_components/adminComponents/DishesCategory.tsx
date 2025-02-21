import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

export const DishesCategory = () => {
  return (
    <div className="w-full p-6 bg-white rounded-[12px] mt-[84px] ">
      <h4 className="text-[20px] font-[600] leading-[28px] tracking-[-0.5px] ">
        Dishes category
      </h4>
      <div className="mt-4 flex gap-3 ">
        <Toggle variant={"outline"} className="py-2 px-4 rounded-full ">
          All Dishes
        </Toggle>
        <Toggle variant={"outline"} className="py-2 px-4 rounded-full ">
          Appetizers
        </Toggle>
        <Toggle variant={"outline"} className="py-2 px-4 rounded-full ">
          Salads
        </Toggle>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"destructive"}
              className="w-9 h-9 flex items-center justify-center rounded-full "
            >
              <Plus />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader hidden></DialogHeader>
            <DialogTitle hidden></DialogTitle>
            <div className="w-[460px] p-6 flex flex-col items-start gap-6 ">
              <div className="w-full pb-4 fle justify-center items-center gap-[10px] ">
                <h4 className="text-[18px] font-[600] leading-[28px]  ">
                  Add new category
                </h4>
              </div>
              <div className="w-full h-[60px] flex flex-col gap-[8px] ">
                <p className="text-[14px] leading-[14px] font-[500] ">
                  Category name
                </p>
                <Input
                  placeholder="Type category name... "
                  className="w-full py-2 px-3 "
                />
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
