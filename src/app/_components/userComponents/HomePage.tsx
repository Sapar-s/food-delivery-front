"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Cart } from "./Carts";
import { useCategory } from "@/app/_context/CategoryContext";
import { useFood } from "@/app/_context/FoodContext";

export const HomePage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const { categories } = useCategory();
  const { foods } = useFood();

  const handleClick = (categoryId: string) => {
    setSelectedCategoryId(
      categoryId === selectedCategoryId ? null : categoryId
    );
  };

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
            <CarouselContent className="pl-4 flex gap-2 items-center ">
              {categories?.map((category, index) => (
                <div key={index} className="p-1">
                  <Badge
                    onClick={() => handleClick(category._id)}
                    variant={
                      category._id === selectedCategoryId
                        ? "destructive"
                        : "secondary"
                    }
                    className={` py-1 px-5 text-[18px] font-[400] whitespace-nowrap leading-[28px]  cursor-pointer rounded-full  ${
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

                <div
                  key={index}
                  className="w-full flex justify-center gap-9 mt-[54px] flex-wrap  "
                >
                  <Cart foods={foods} categoryId={category._id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
