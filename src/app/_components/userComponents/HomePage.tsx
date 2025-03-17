"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Cart } from "./Carts";
import { FoodCategoryType, FoodType } from "@/utils/types";

export const HomePage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [categories, setCategories] = useState<FoodCategoryType[] | null>(null);
  const [foods, setFoods] = useState<FoodType[] | null>(null);

  const handleClick = (categoryId: string) => {
    setSelectedCategoryId(
      categoryId === selectedCategoryId ? null : categoryId
    );
  };

  const getCategories = async () => {
    try {
      const data = await fetch("http://localhost:5000/food-category");
      const jsonData = await data.json();
      setCategories(jsonData.categories_data);
      // console.log({ jsonData });
    } catch (error) {
      console.log("Error", error);
      alert("Error in getCategories");
    }
  };

  const getFoods = async () => {
    try {
      const data = await fetch(`http://localhost:5000/food`);
      const jsonData = await data.json();
      setFoods(jsonData.getFood);

      console.log("HomePage.tsx in jsonDataa => ", jsonData.getFood);
    } catch (error) {
      console.log("Error", error);
      alert("Error in getFoods homePage.tsx ");
    }
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);

  return (
    <div className="mb-[134px] ">
      <div className="w-screen h-[550px] overflow-hidden ">
        <img
          alt=""
          src={
            "https://res.cloudinary.com/da2ltmfaf/image/upload/v1739938113/BG_fqe4au.png"
          }
          className="w-full h-full  "
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-screen flex flex-col items-center ">
        <div className="max-w-[1440px] w-full flex flex-col gap-9 mt-8 ">
          <h2 className="text-[30px]  font-[600] leading-[36px] tracking-[-0.75px] text-white  ">
            Categories
          </h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full flex gap-3  "
          >
            <CarouselPrevious className="bg-background-none border-none text-white" />
            <CarouselContent className="pl-4">
              {categories?.map((category, index) => (
                <div key={index} className="p-1">
                  <Badge
                    onClick={() => handleClick(category._id)}
                    variant={
                      category._id === selectedCategoryId
                        ? "destructive"
                        : "secondary"
                    }
                    className={`w-[100px] py-2 px-3 cursor-pointer rounded-full flex items-center justify-center ${
                      category._id === selectedCategoryId
                        ? "bg-[#EF4444]"
                        : "bg-background"
                    }  text-primary `}
                  >
                    {category?.categoryName}
                  </Badge>
                </div>
              ))}
            </CarouselContent>

            <CarouselNext className="bg-background-none border-none text-white" />
          </Carousel>
        </div>
        <div className="max-w-[1264px] w-full ">
          {categories?.map((category, index) => {
            return (
              <div key={index}>
                <h2 className="text-[30px] leading-[36px] font-[600] text-white mt-[72px] ">
                  {category?.categoryName}
                </h2>
                <div className="">
                  {/* {Array.from({ length: 6 }).map((_, index) => ( */}
                  <div key={index} className="">
                    <Cart foods={foods} categoryId={category._id} />
                  </div>
                  {/* ))} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
