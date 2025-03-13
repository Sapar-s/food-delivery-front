export type FoodCategoryType = {
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type FoodType = {
  category: string;
  createdAt: string;
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type ApiResponse = {
  getFood: FoodType[];
  message: string;
};
