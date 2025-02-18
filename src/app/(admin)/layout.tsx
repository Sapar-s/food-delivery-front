import { ReactNode } from "react";
import { LeftSide } from "../_components/adminComponents/LeftSide";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex bg-[#f4f4f5] ">
      <LeftSide />
      {props.children}
    </div>
  );
};

export default Layout;
