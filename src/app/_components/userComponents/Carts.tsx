import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export const Cart = () => {
  return (
    <div>
      <h2 className="text-[30px] leading-[36px] font-[600] text-white ">
        Appetizers
      </h2>
      <div className="p-4 flex flex-col items-start gap-5  ">
        <div
          className="h-full w-full p-5 bg-cover bg-center flex items-end justify-end "
          style={{
            backgroundImage: `url("https://res.cloudinary.com/da2ltmfaf/image/upload/v1739971335/Product_Image_c38vlf.png")`,
          }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
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
