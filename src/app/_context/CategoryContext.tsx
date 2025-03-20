"use client";

import { FoodCategoryType } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type categoryContextType = {
  getCategories: () => void;
  setCategories: React.Dispatch<
    React.SetStateAction<FoodCategoryType[] | null>
  >;
  categories: FoodCategoryType[] | null;
  createCategories: (categoryName: string) => void;
  deleteCategory: (categoryId: string) => void;
  updateCategory(categoryId: string, categoryName: string): void;
};

const categoryContext = createContext<categoryContextType>(
  {} as categoryContextType
);
export const useCategory = () => {
  return useContext(categoryContext);
};
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<FoodCategoryType[] | null>(null);

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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <categoryContext.Provider
      value={{
        getCategories,
        categories,
        setCategories,
        createCategories,
        deleteCategory,
        updateCategory,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};
