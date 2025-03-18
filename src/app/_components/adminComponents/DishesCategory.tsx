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
import { toast } from "sonner";

export const DishesCategory = () => {
  const [categories, setCategories] = useState<FoodCategoryType[] | null>(null);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [saveID, setSaveID] = useState<string>("");

  const getCategories = async () => {
    try {
      const data = await fetch("http://localhost:5000/food-category");
      const jsonData = await data.json();
      setCategories(jsonData.categories_data);
    } catch (error) {
      console.log("Error", error);
      alert("Error in getCategories");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const createCategories = async (category: string) => {
    try {
      await fetch("http://localhost:5000/food-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: category }),
      });
      getCategories();
    } catch (error) {
      console.log("Error", error);
      alert("Error in createCategories");
    }
  };

  const deleteCategory = async (categoryId: string) => {
    try {
      const res = await fetch(
        `http://localhost:5000/food-category/${categoryId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categoryName: categoryId }),
        }
      );
      const jsonData = await res.json();

      if (jsonData.message == "Category dotor food bainaaa !!! ") {
        toast.error(jsonData.message);
        return;
      }

      toast.success(jsonData.message);
      getCategories();
    } catch (error) {
      console.log("Error", error);
      alert("Error in deleteCategory");
    }
  };

  const updateCategory = async (categoryId: string, categoryName: string) => {
    try {
      await fetch(`http://localhost:5000/food-category/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: categoryName }),
      });
      getCategories();
    } catch (error) {
      console.log("Error", error);
      alert("Error in updateCategory");
    }
  };

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
          createCategories={createCategories}
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
