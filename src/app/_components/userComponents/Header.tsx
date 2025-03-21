"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const formShema = z.object({
  address: z.string().min(2, "Please enter your address first. !"),
});

export const Header = () => {
  const router = useRouter();
  const [address, setAddress] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: {
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formShema>) {
    console.log(values);
    setAddress(values.address);
    closeDialog();
    form.reset();
  }
  const signOutHandler = () => {
    localStorage.clear();
    router.push("/login");
  };

  const clearHandler = () => {
    setAddress(null);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const userEmail = localStorage.getItem("email");
  return (
    <div className="w-full bg-[#18181B] flex justify-center ">
      <div className="max-w-[1440px] w-full py-3 px-[88px]  flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" width={46} height={37.29} alt="" />
          <div>
            <h4 className="text-[20px] font-[600] leading-[28px] text-primary-foreground ">
              Nom<span className="text-[#ef4444] ">Nom</span>
            </h4>
            <h5 className="text-[12px] font-[400] leading-[16px] text-secondary ">
              Swift delivery
            </h5>
          </div>
        </div>
        <div className="flex gap-3">
          {userEmail ? (
            <Dialog open={open} onOpenChange={setOpen}>
              {address ? (
                <div className="relative ">
                  <DialogTrigger asChild>
                    <div className="w-[251px] bg-[#FFFFFF] rounded-full  ">
                      <h4 className="flex gap-2 items-center bg-[#ffffff] rounded-full border-none py-2 px-3">
                        <MapPin color="#EF4444" className="w-5 h-5 " />
                        <p className="text-primary font-[400] leading-[16px] flex gap-2 text-[12px]">
                          {address}
                        </p>
                      </h4>
                    </div>
                  </DialogTrigger>
                  <X
                    onClick={clearHandler}
                    className="z-20 absolute top-2 right-3 cursor-pointer "
                    color="gray"
                  />
                </div>
              ) : (
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="flex gap-2 items-center bg-[#FFFFFF] py-2 px-3 rounded-full"
                  >
                    <MapPin color="#EF4444" />
                    <p className="text-[#EF4444] flex gap-2 text-[12px]">
                      Delivery address:
                      <span className="text-muted-foreground text-[12px]">
                        Add Location
                      </span>
                    </p>
                    <ChevronRight color="gray" />
                  </Button>
                </DialogTrigger>
              )}

              <DialogContent>
                <DialogHeader hidden></DialogHeader>
                <DialogTitle hidden></DialogTitle>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" w-[480px] flex flex-col items-start gap-6 "
                  >
                    <div className="w-full pb-4 fle justify-center items-center gap-[10px] ">
                      <h4 className="text-[18px] font-[600] leading-[28px]  ">
                        Delivery address
                      </h4>
                    </div>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="w-full ">
                          <FormControl className="w-full ">
                            <div className="w-full flex flex-col gap-[8px]">
                              <Textarea
                                placeholder="Please provide specific address details such as building number, entrance, and apartment number"
                                className="w-full h-[112px] py-2 px-3  "
                                {...field}
                              />
                            </div>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="w-full pt-6 flex items-center justify-end gap-4 ">
                      <Button variant={"outline"} className="h-10 py-2 px-4  ">
                        Cancel
                      </Button>
                      <Button type="submit" className="h-10 py-2 px-4 ">
                        Deliver Here
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          ) : (
            ""
          )}
          {userEmail ? (
            <Sheet>
              <SheetTrigger>
                <div className="w-[36px] h-[36px] bg-[#f4f4f5] rounded-[50%] flex justify-center items-center">
                  <ShoppingCart color="black" className="w-[13px] h-[13px]" />
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex gap-3 text-background">
                    <ShoppingCart />
                    Order detail
                  </SheetTitle>
                  <Tabs defaultValue="account">
                    <TabsList className="w-[100%] rounded-full">
                      <TabsTrigger
                        value="cart"
                        className="w-[50%] rounded-full"
                      >
                        Cart
                      </TabsTrigger>
                      <TabsTrigger
                        value="order"
                        className="w-[50%] rounded-full"
                      >
                        Order
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="cart" className="text-background">
                      <div className="w-[439px] h-[508px] p-4 rounded-[20px] "></div>
                    </TabsContent>
                    <TabsContent value="order" className=" ">
                      Change your password here.
                    </TabsContent>
                  </Tabs>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ) : (
            ""
          )}
          {userEmail ? (
            <Popover>
              <PopoverTrigger>
                <div className="w-[36px] h-[36px] bg-[#EF4444] rounded-[50%] flex justify-center items-center">
                  <User color="white" className="w-[13px] h-[13px]" />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex gap-2 p-4 rounded-xl flex-col justify-center items-center">
                  <p className="font-bold text-[20px] tracking-[-0.5px]">
                    {userEmail}
                  </p>
                  <Button variant="secondary" onClick={signOutHandler}>
                    sign out
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex gap-[13px] ">
              <Link href="/signup">
                <Button
                  variant={"secondary"}
                  className="py-2 px-3 rounded-full  "
                >
                  Sign up
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant={"destructive"}
                  className="py-2 px-3 rounded-full  "
                >
                  Log in
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
