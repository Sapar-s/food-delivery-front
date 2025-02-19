import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="w-screen h-screen bg-[#f4f4f5] flex items-center justify-center px-5 pt-5 ">
      <div className=" flex gap-12  ">
        {props.children}
        <div>
          <Image
            alt=""
            src={
              "https://res.cloudinary.com/da2ltmfaf/image/upload/v1739929534/frame_h8teog.png"
            }
            width={856}
            height={904}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
