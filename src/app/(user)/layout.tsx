import { ReactNode } from "react";
import { Header } from "../_components/userComponents/Header";
import { Footer } from "../_components/userComponents/Footer";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className=" bg-[#f4f4f5] w-screen h-screen ">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
