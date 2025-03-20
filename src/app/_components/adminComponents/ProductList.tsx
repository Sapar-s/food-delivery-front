"use client";

import { Dish } from "./Dish";
import { useCategory } from "@/app/_context/CategoryContext";

export const ProductList = () => {
  const { categories } = useCategory();

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
