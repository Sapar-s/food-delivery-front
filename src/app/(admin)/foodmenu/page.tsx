import { DishesCategory } from "@/app/_components/adminComponents/DishesCategory";
import { ProductList } from "@/app/_components/adminComponents/ProductList";

export default function FoodMenuPage() {
  return (
    <div className="p-4 pr-10 w-full bg-[#f4f4f5] ">
      <DishesCategory />
      <ProductList />
    </div>
  );
}
