import Image from "next/image";

export const HomePage = () => {
  return (
    <div className="w-screen h-[550px] overflow-hidden ">
      <img
        alt=""
        src={
          "https://res.cloudinary.com/da2ltmfaf/image/upload/v1739938113/BG_fqe4au.png"
        }
        className="w-full h-full  "
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
