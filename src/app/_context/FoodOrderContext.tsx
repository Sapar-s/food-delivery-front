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
  foodId: string;
  count: number;
};

type foodOrderContextType = {
  addToCart: (foodId: string, count: number) => void;
};

const foodOrderContext = createContext<foodOrderContextType>(
  {} as foodOrderContextType
);

export const useFoodOrder = () => {
  return useContext(foodOrderContext);
};

export const FoodOrderProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<Basket[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [foodId, setFoodId] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = async (foodId: string, count: number) => {
    const userId = localStorage.getItem("userId");
    const address = localStorage.getItem("address");

    console.log("foodId", foodId);
    try {
      const resFood = await fetch(`http://localhost:5000/food/${foodId}`);
      const foodData = await resFood.json();

      const totalPrice = foodData.price * count;

      const res = await fetch("http://localhost:5000/food-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodId,
          userId,
          count,
          address,
          totalPrice,
        }),
      });

      const data = await res.json();
      alert("Order placed successfully!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
    const getAddress = localStorage.getItem("address");
    setAddress(getAddress);
    const foodId = localStorage.getItem("foodId");
    setFoodId(foodId);
    const count = localStorage.getItem("count");
    setCount(Number(count));
  }, []);

  return (
    <foodOrderContext.Provider value={{ addToCart }}>
      {children}
    </foodOrderContext.Provider>
  );
};
