import { Input } from "@/components/ui/input";

export const Inputs = ({ type, place }: { type: string; place: string }) => {
  return (
    <div className="w-[416px] ">
      <Input type={type} placeholder={place} className="w-full " />
    </div>
  );
};
