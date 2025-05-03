"use client";

import { FoodType } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Basket = {
  food: FoodType;
  count: number;
};

type foodOrderContextType = {
  basket: Basket[];
  handleBasket: (item: Basket) => void;
  addToCart: () => void;
};

const foodOrderContext = createContext<foodOrderContextType>(
  {} as foodOrderContextType
);

export const useFoodOrder = () => {
  return useContext(foodOrderContext);
};

export const FoodOrderProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<Basket[]>([]);

  const addToCart = async () => {
    try {
      const res = await fetch("http://localhost:5000/food-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const data = await res.json();
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  const handleBasket = (item: Basket) => {
    setBasket((prev) => [...prev, item]);
  };

  return (
    <foodOrderContext.Provider value={{ basket, addToCart, handleBasket }}>
      {children}
    </foodOrderContext.Provider>
  );
};
