"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const CloudinaryUpload = ({ width }: { width: string }) => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  console.log("fiileee", image);
  // const PRESET_NAME = "food-delivery-app";
  // const CLOUDINARY_NAME = "da2ltmfaf";

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const deleteImage = () => {
    setImage(null);
  };

  console.log(file);

  return (
    <>
      {image ? (
        <div className="w-full h-full relative ">
          <Image
            alt="file-input"
            src={image}
            width={1000}
            height={1000}
            className={`${width}  object-cover rounded-md border border-dashed border-blue-500/20 bg-blue-500/5 bg-cover bg-no-repeat bg-center`}
          />
          <Button
            onClick={deleteImage}
            className="absolute top-2 right-2 rounded-full w-9 h-9  "
          >
            <X />
          </Button>
        </div>
      ) : (
        <label
          htmlFor="file-input"
          className={` ${width} flex flex-col items-center justify-center cursor-pointer gap-2 p-4  rounded-md border border-dashed border-blue-500/20 bg-blue-500/5 `}
        >
          <div className="p-2 bg-[#fff] rounded-full">
            <ImageIcon className=" w-4 h-4 " />{" "}
          </div>
          Choose a file or drag & drop it here
          <Input
            id="file-input"
            type="file"
            onChange={handleFile}
            className="hidden"
          />
        </label>
      )}
    </>
  );
};
