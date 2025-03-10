import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Pencil, Plus } from "lucide-react";
import { CloudinaryUpload } from "./CloudinaryUpload";

export const ProductList = () => {
  return (
    <div className="w-full p-5 bg-background rounded-xl mt-6 flex flex-col gap-4 items-start ">
      <h4>Appetizers</h4>
      <div className="w-full h-[241px] flex flex-wrap gap-4 items-start ">
        {/* add new dish heseg */}

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
              <div className="h-[160px] w-full flex flex-col gap-2 ">
                <h4 className="text-[14px] font-[500] leading-[14px] ">
                  Food image
                </h4>
                <CloudinaryUpload />
              </div>
              <div className="w-full pt-6 flex items-center justify-end ">
                <Button className="h-10 py-2 px-4 ">Add Dish</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* dish heseg zuragtai ! */}

        <div className="flex w-[270.75px] h-full flex-col gap-5  p-4  items-start border-[1px] bg-[#fff] border-border rounded-[20px] ">
          <div
            className="w-full h-full bg-cover bg-center flex p-5 justify-end items-end gap-[10px] rounded-xl  "
            style={{
              backgroundImage: `url("https://res.cloudinary.com/da2ltmfaf/image/upload/v1740015838/Food_Image_hirwob.png")`,
            }}
          >
            <Dialog>
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
                      <Input className="w-[288px] " />
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
                    </div>
                    <div className="flex p-3 items-start gap-4 w-full ">
                      <h5 className="w-[120px] text-[12px] font-[400] leading-[16px] text-muted-foreground ">
                        Price
                      </h5>
                    </div>
                    <div className="flex p-3 items-start gap-4 w-full ">
                      <h5 className="w-[120px] text-[12px] font-[400] leading-[16px] text-muted-foreground ">
                        Image
                      </h5>
                    </div>
                  </div>

                  <div></div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col items-start gap-2 ">
            <div className="flex justify-center items-center gap-[10px] ">
              <small className="text-[14px] font-[500] leading-[20px] text-[#ef4444] ">
                Grilled Chicken cobb salad
              </small>
              <h5 className="text-[12px] font-[400] leading-[16px] ">$12.99</h5>
            </div>
            <h5 className="text-[12px] font-[400] leading-[16px] text-foreground ">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
