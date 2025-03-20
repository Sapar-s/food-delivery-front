"use client";

import { FoodType } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type foodContextType = {
  foods: FoodType[] | null;
  deleteFood: (foodId: string) => void;
  getFoods: () => void;
};

const foodContext = createContext<foodContextType>({} as foodContextType);

export const useFood = () => {
  return useContext(foodContext);
};

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [foods, setFoods] = useState<FoodType[] | null>(null);

  const getFoods = async () => {
    try {
      const data = await fetch(`http://localhost:5000/food`);
      const jsonData = await data.json();
      setFoods(jsonData.getFood);
    } catch (error) {
      console.log("Error", error);
      alert("Error in getFoods123");
    }
  };

  const deleteFood = async (foodId: string) => {
    try {
      await fetch(`http://localhost:5000/food/${foodId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    <foodContext.Provider value={{ foods, deleteFood, getFoods }}>
      {children}
    </foodContext.Provider>
  );
};
