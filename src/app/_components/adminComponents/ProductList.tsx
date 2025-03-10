import { AddNewDish } from "./AddNewDish";
import { EditDish } from "./EditDish";

export const ProductList = () => {
  return (
    <div className="w-full p-5 bg-background rounded-xl mt-6 flex flex-col gap-4 items-start ">
      <h4>Appetizers</h4>
      <div className="w-full h-[241px] flex flex-wrap gap-4 items-start ">
        {/* add new dish heseg */}
        <AddNewDish />
        <EditDish />
      </div>
    </div>
  );
};
