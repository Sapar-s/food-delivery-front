"use client";

import { useEffect, useState } from "react";
import { AddNewDish } from "./AddNewDish";
import { Dish } from "./Dish";
import { FoodCategoryType } from "@/utils/types";

export const ProductList = () => {
  const [categories, setCategories] = useState<FoodCategoryType[] | null>(null);

  const getCategories = async () => {
    try {
      const data = await fetch("http://localhost:5000/food-category");
      const jsonData = await data.json();
      setCategories(jsonData.categories_data);
      console.log({ jsonData });
    } catch (error) {
      console.log("Error", error);
      alert("Error in getCategories");
    }
  };

  useEffect(() => {
    getCategories();
  }, [categories]);

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
            <div className="w-full h-[241px] flex flex-wrap gap-4 items-start ">
              {/* add new dish heseg */}
              <AddNewDish categoryId={category._id} />
              <Dish />
            </div>
          </div>
        );
      })}
    </div>
  );
};
