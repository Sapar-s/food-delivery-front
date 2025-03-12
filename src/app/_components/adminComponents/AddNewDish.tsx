"use client";

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

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  foodName: z.string().min(2, {
    message: "Food name must be at least 2 characters.",
  }),
  price: z.string({
    message: "Price is required",
  }),
  ingredients: z
    .string()
    .describe("A useful bit of text, if you know what to do with it."),
  category: z.string(),
});

export const AddNewDish = ({ categoryId }: { categoryId: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      price: "",
      ingredients: "",
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createFood();
    console.log(values);
  }

  const createFood = async () => {
    try {
      await fetch("http://localhost:5000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: "Steak",
          price: 100,
          ingredients:
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, necessitatibus.",
          category: categoryId,
        }),
      });
    } catch (error) {
      console.log("Error", error);
      alert("Error in createFood");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-[270.75px] h-full flex-col gap-6 py-2 px-4 justify-center items-center border-[1px]  border-dashed border-[#ef4444] rounded-[20px] ">
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

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[460px] p-6 flex flex-col items-start gap-6  "
          >
            <div className="w-full pb-4 flex justify-center items-center gap-[10px] ">
              <h4 className="text-[18px] font-[600] leading-[28px]  ">
                Add new Dish to Appetizers
              </h4>
            </div>

            <div className="flex gap-6 items-start ">
              <div className="flex flex-col gap-2 items-start h-[60px] w-full ">
                <h4 className="text-[14px] font-[500] leading-[14px] ">
                  Food name
                </h4>
                <FormField
                  control={form.control}
                  name="foodName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Type food name"
                          className="w-full "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2 items-start h-[60px] w-full ">
                <h4 className="text-[14px] font-[500] leading-[14px] ">
                  Food price
                </h4>
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter price..."
                          className="w-full "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full h-[60px] flex flex-col gap-[8px] ">
              <p className="text-[14px] leading-[14px] font-[500] ">
                Ingredients
              </p>
              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="List ingredients..."
                        className="w-full py-2 px-3 "
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="h-[160px] w-full flex flex-col gap-2 ">
              <h4 className="text-[14px] font-[500] leading-[14px] ">
                Food image
              </h4>
              <CloudinaryUpload width="size-full" />
            </div>

            <div className="w-full pt-6 flex items-center justify-end ">
              <Button type="submit">Add Dish</Button>
            </div>
          </form>
        </Form>
        {/*  */}
        {/* <div className="w-[460px] p-6 flex flex-col items-start gap-6 "> */}
        {/* <div className="w-full pb-4 flex justify-center items-center gap-[10px] ">
          <h4 className="text-[18px] font-[600] leading-[28px]  ">
            Add new Dish to Appetizers
          </h4>
        </div> */}

        {/* <div className="flex gap-6 items-start ">
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
        </div> */}

        {/* <div className="w-full h-[60px] flex flex-col gap-[8px] ">
          <p className="text-[14px] leading-[14px] font-[500] ">Ingredients</p>
          <Input
            placeholder="List ingredients... "
            className="w-full py-2 px-3 "
          />
        </div> */}

        {/* <div className="h-[160px] w-full flex flex-col gap-2 ">
          <h4 className="text-[14px] font-[500] leading-[14px] ">Food image</h4>
          <CloudinaryUpload width="size-full" />
        </div> */}

        {/* <div className="w-full pt-6 flex items-center justify-end ">
          <Button className="h-10 py-2 px-4 ">Add Dish</Button>
        </div> */}

        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
};
