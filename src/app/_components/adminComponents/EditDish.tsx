import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash } from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const EditDish = ({
  deleteFood,
  foodID,
}: {
  deleteFood: (_e: string) => void;
  foodID: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-11 h-11 py-2 px-4 flex items-center justify-center gap-2 bg-[#fff] rounded-full cursor-pointer ">
          <Pencil className="text-[#ef4444] w-4 h-4 " />
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader hidden></DialogHeader>
        <DialogTitle hidden></DialogTitle>

        <div className="w-[472px] p-6 flex flex-col items-start gap-3 ">
          <div className="w-full pb-4 flex justify-center items-center gap-[10px] ">
            <h4 className="text-[18px] font-[600] leading-[28px]  ">
              Dishes info
            </h4>
          </div>
          <div className="flex flex-col items-start w-full ">
            <div className="flex p-3 items-start gap-4 w-full ">
              <h5 className="w-[120px] text-[12px] font-[400] leading-[16px] text-muted-foreground ">
                Dish name
              </h5>
              <Input className="w-[288px] " type="text" />
            </div>
            <div className="flex p-3 items-start gap-4 w-full ">
              <h5 className="w-[120px] text-[12px] font-[400] leading-[16px] text-muted-foreground ">
                Dish category
              </h5>
              <Select>
                <SelectTrigger className="w-[288px]">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">
                    <div className="flex py-[2px] px-[10px] items-start gap-[10px] rounded-full bg-secondary ">
                      Grilled Chicken cobb salad
                    </div>
                  </SelectItem>
                  <SelectItem value="b">
                    <div className="flex py-[2px] px-[10px] items-start gap-[10px] rounded-full bg-secondary ">
                      Burrata Caprese
                    </div>
                  </SelectItem>
                  <SelectItem value="c">
                    <div className="flex py-[2px] px-[10px] items-start gap-[10px] rounded-full bg-secondary ">
                      Grilled chicken
                    </div>
                  </SelectItem>
                  <SelectItem value="d">
                    <div className="flex py-[2px] px-[10px] items-start gap-[10px] rounded-full bg-secondary ">
                      Sunshine Stackers
                    </div>
                  </SelectItem>
                  <SelectItem value="e">
                    <div className="flex py-[2px] px-[10px] items-start gap-[10px] rounded-full bg-secondary ">
                      Brie Crostini Appetizer
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex p-3 items-start gap-4 w-full ">
              <h5 className="w-[120px] text-[12px] font-[400] leading-[16px] text-muted-foreground ">
                Ingredients
              </h5>
              <Input className="w-[288px] " type="text" />
            </div>
            <div className="flex p-3 items-start gap-4 w-full ">
              <h5 className="w-[120px] text-[12px] font-[400] leading-[16px] text-muted-foreground ">
                Price
              </h5>
              <Input className="w-[288px]  " type="text" />
            </div>
            <div className="flex p-3 items-start gap-4 w-full ">
              <h5 className="w-[120px] text-[12px] font-[400] leading-[16px] text-muted-foreground ">
                Image
              </h5>
              <CloudinaryUpload width="full" />
            </div>
          </div>

          <div className="flex justify-between items-center w-full pt-6 ">
            <Button
              onClick={() => deleteFood(foodID)}
              variant={"outline"}
              className="h-10 py-2 px-4 flex justify-center items-center gap-2 rounded-md border-destructive "
            >
              <Trash className="w-4 h-4 text-[#ef4444] " />
            </Button>
            <Button className="h-10  py-2 px-4 flex justify-center items-center gap-2 ">
              Save changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
