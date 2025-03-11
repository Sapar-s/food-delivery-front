"use client";

import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formShema = z.object({
  categoryName: z.string().min(2, "Minimum 2 letter !"),
});

export const DishesCategory = () => {
  const [categories, setCategories] = useState<
    { categoryName: string; _id: string }[] | null
  >(null);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: {
      categoryName: "",
    },
  });

  const getCategories = async () => {
    const data = await fetch("http://localhost:5000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.getCategory);
    console.log({ jsonData });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategories = async (category: string) => {
    await fetch("http://localhost:5000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: category }),
    });
    getCategories();
  };

  const deleteCategory = async (categoryId: string) => {
    await fetch(`http://localhost:5000/food-category/${categoryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: categoryId }),
    });
    getCategories();
  };

  function onSubmit(values: z.infer<typeof formShema>) {
    console.log(values);
    createCategories(values.categoryName);
    form.reset();
    setOpen(false);
  }

  return (
    <div className="w-full p-6 bg-white rounded-[12px] mt-[84px] ">
      <h4 className="text-[20px] font-[600] leading-[28px] tracking-[-0.5px]">
        Dishes category
      </h4>
      <div className="mt-4 flex gap-3 ">
        <Toggle variant={"outline"} className="py-2 px-4 rounded-full ">
          All Dishes
        </Toggle>
        <div className="flex gap-3 ">
          {categories?.map((category, index: number) => {
            return (
              <ContextMenu key={index}>
                <ContextMenuTrigger>
                  <Toggle
                    variant={"outline"}
                    className="py-2 px-4 rounded-full "
                  >
                    {category.categoryName}
                  </Toggle>
                </ContextMenuTrigger>
                <ContextMenuContent className="mt-5 ">
                  <ContextMenuItem className="cursor-pointer ">
                    Edit
                  </ContextMenuItem>
                  <ContextMenuItem
                    className="cursor-pointer "
                    onClick={() => deleteCategory(category._id)}
                  >
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            );
          })}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
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
            {/* <div className="w-[460px] p-6 flex flex-col items-start gap-6 "> */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" w-[460px] flex flex-col items-start gap-6 "
              >
                <div className="w-full pb-4 fle justify-center items-center gap-[10px] ">
                  <h4 className="text-[18px] font-[600] leading-[28px]  ">
                    Add new category
                  </h4>
                </div>
                <FormField
                  control={form.control}
                  name="categoryName"
                  render={({ field }) => (
                    <FormItem className="w-full ">
                      <FormControl className="w-full ">
                        {/* <Input
                            className="w-[416px]"
                            placeholder="Enter your email address"
                            {...field}
                          /> */}
                        <div className="w-full h-[60px] flex flex-col gap-[8px] ">
                          <p className="text-[14px] leading-[14px] font-[500] ">
                            Category name
                          </p>
                          <Input
                            placeholder="Type category name... "
                            className="w-full py-2 px-3 "
                            {...field}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button className="w-full " type="submit">
                    Let&#39;s Go
                  </Button> */}

                <div className="w-full pt-6 flex items-center justify-end ">
                  <Button type="submit" className="h-10 py-2 px-4 ">
                    Add category
                  </Button>
                </div>
              </form>
            </Form>
            {/* </div> */}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
