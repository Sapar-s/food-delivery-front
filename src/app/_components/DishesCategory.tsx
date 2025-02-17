import { Toggle } from "@/components/ui/toggle";

export const DishesCategory = () => {
  return (
    <div className="w-full p-6 bg-white rounded-[12px] mt-[84px] ">
      <h4 className="text-[20px] font-[600] leading-[28px] tracking-[-0.5px] ">
        Dishes category
      </h4>
      <div className="mt-4 ">
        <Toggle variant={"outline"} className="py-2 px-4 rounded-full ">
          All Dishes
        </Toggle>
      </div>
    </div>
  );
};
