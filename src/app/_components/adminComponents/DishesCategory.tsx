"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { Toggle } from "@/components/ui/toggle";

import { useEffect, useState } from "react";
import { AddCategory } from "./AddCategory";

export const DishesCategory = () => {
  const [categories, setCategories] = useState<
    { categoryName: string; _id: string }[] | null
  >(null);
  const [openDialog, setOpenDialog] = useState(false);

  const getCategories = async () => {
    const data = await fetch("http://localhost:5000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.categories_data);
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

  const updateCategory = async (categoryId: string) => {
    await fetch(`http://localhost:5000/food-category/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: categoryId }),
    });
    getCategories();
    setOpenDialog(true);
  };

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
                  <ContextMenuItem
                    onClick={() => updateCategory(category._id)}
                    className="cursor-pointer "
                  >
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
        <AddCategory
          createCategories={createCategories}
          title={"Add new category"}
          button={"Add category"}
          updateCategory={updateCategory}
          openDialog={openDialog}
        />
      </div>
    </div>
  );
};
