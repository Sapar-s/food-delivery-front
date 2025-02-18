import { ReactNode } from "react";
import { Header } from "../_components/userComponents/Header";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className=" bg-[#f4f4f5] ">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
