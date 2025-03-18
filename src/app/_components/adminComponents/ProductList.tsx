"use client";

import { useEffect, useState } from "react";
import { Dish } from "./Dish";
import { FoodCategoryType } from "@/utils/types";

export const ProductList = () => {
  const [categories, setCategories] = useState<FoodCategoryType[] | null>(null);
  const [open, setOpen] = useState<boolean>(false);
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

  return (
    <div className="w-full ">
      {categories?.map((category, index) => {
        return (
          <div
            key={index}
            className="bg-background w-full  p-5 rounded-xl mt-6 flex flex-col gap-4 items-start "
          >
            <h4 className="text-[20px] font-[600] leading-[28px] ">
              {category.categoryName}
            </h4>
            <div className="w-full flex gap-4 items-start ">
              <Dish
                open={open}
                setOpen={setOpen}
                categoryId={category._id}
                categoryName={category.categoryName}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
