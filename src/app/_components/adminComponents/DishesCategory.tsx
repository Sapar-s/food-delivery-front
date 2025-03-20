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
import { FoodCategoryType } from "@/utils/types";

import { useCategory } from "@/app/_context/CategoryContext";

export const DishesCategory = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [saveID, setSaveID] = useState<string>("");
  const { deleteCategory, updateCategory, categories } = useCategory();

  // useEffect(() => {
  //   getCategories();
  // }, []);

  const EditHandleClick = (id: string) => {
    setOpen(true);
    setIsEdit(true);
    setSaveID(id);
  };

  return (
    <div className="w-full p-6 bg-white rounded-[12px] mt-[84px] ">
      <h4 className="text-[20px] font-[600] leading-[28px] tracking-[-0.5px]">
        Dishes category
      </h4>
      <div className="mt-4 flex gap-3 flex-wrap ">
        <Toggle variant={"outline"} className="py-2 px-4 rounded-full ">
          All Dishes
        </Toggle>
        {categories?.map((category, index: number) => {
          return (
            <ContextMenu key={index}>
              <ContextMenuTrigger>
                <Toggle variant={"outline"} className="py-2 px-4 rounded-full ">
                  {category.categoryName}
                </Toggle>
              </ContextMenuTrigger>
              <ContextMenuContent className="mt-5 ">
                <ContextMenuItem
                  onClick={() => EditHandleClick(category._id)}
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
        <AddCategory
          updateCategory={updateCategory}
          isEdit={isEdit}
          saveID={saveID}
          setOpen={setOpen}
          open={open}
        />
      </div>
    </div>
  );
};
