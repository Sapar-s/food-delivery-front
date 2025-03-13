import { useEffect, useState } from "react";
import { AddNewDish } from "./AddNewDish";
import { ApiResponse, FoodType } from "@/utils/types";
import { EditDish } from "./EditDish";

export const Dish = ({
  categoryId,
  categoryName,
}: {
  categoryId: string;
  categoryName: string;
}) => {
  const [foods, setFoods] = useState<ApiResponse | null>(null);

  const getFoods = async () => {
    try {
      const data = await fetch("http://localhost:5000/food");
      const jsonData = await data.json();
      setFoods(jsonData);

      console.log("Dish.tsx in jsonData => ", jsonData);
    } catch (error) {
      console.log("Error", error);
      alert("Error in getFoods");
    }
  };

  const deleteFood = async (foodId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/food/${foodId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      getFoods();
    } catch (error) {
      console.log("Error", error);
      alert("Error in deleteFoods");
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className="h-full flex flex-wrap gap-4 ">
      <AddNewDish categoryId={categoryId} categoryName={categoryName} />
      {foods?.getFood?.map((food: FoodType, index: number) => {
        return (
          <div
            key={index}
            className="flex w-[270.75px] h-[241px] flex-col gap-5  p-4  items-start border-[1px] bg-[#fff] border-border rounded-[20px] "
          >
            <div
              className="w-full h-full bg-cover bg-center flex p-5 justify-end items-end gap-[10px] rounded-xl  "
              style={{
                backgroundImage: `url("https://res.cloudinary.com/da2ltmfaf/image/upload/v1740015838/Food_Image_hirwob.png")`,
              }}
            >
              <EditDish deleteFood={deleteFood} foodID={food?._id} />
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <div className="flex justify-center items-center gap-[10px] ">
                <small className="text-[14px] font-[500] leading-[20px] text-[#ef4444] ">
                  {food?.foodName}
                </small>
                <h5 className="text-[12px] font-[400] leading-[16px] ">
                  {food?.price}
                </h5>
              </div>
              <h5 className="text-[12px] font-[400] leading-[16px] text-foreground ">
                {food?.ingredients}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};
