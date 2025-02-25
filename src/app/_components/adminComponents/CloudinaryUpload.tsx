"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const CloudinaryUpload = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState<any>(null);

  const PRESET_NAME = "food-delivery-app";
  const CLOUDINARY_NAME = "da2ltmfaf";

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("api_key", CLOUDINARY_NAME);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.secure_url);
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("Error uploading image");
    }
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
            className="size-full object-cover"
          />
          <Button className="absolute top-2 right-2 rounded-full w-9 h-9  ">
            <X />
          </Button>
        </div>
      ) : (
        <label htmlFor="file-input" className="bg-blue-300 p-4 block size-full">
          <ImageIcon />
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
