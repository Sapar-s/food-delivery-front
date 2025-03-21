"use client";

import { ReactNode } from "react";
import { LeftSide } from "../_components/adminComponents/LeftSide";
import { useUser } from "../_context/UserContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const router = useRouter();
  const { user } = useUser();
  if (!user) {
    return (
      <div className="w-screen h-screen flex items-center justify-center ">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[36px] text-red-500 ">
            Zovhon admin nevtreh erhtei ! <br /> Nevtreegui bol nevterne uu! ! !
          </h1>
          <Button onClick={() => router.push("/")}>Back to Home Page</Button>
        </div>
      </div>
    );
  } else if (user.role == "ADMIN") {
    return (
      <div className="flex bg-[#f4f4f5] ">
        <LeftSide />
        {props.children}
      </div>
    );
  }
};

export default Layout;
