export type FoodCategoryType = {
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type FoodType = {
  category: FoodCategoryType;
  createdAt: string;
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type DishType = {
  category: string;
  foodName: string;
  ingredients: string;
  price: string;
};
