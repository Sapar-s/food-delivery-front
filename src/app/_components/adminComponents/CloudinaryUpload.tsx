"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div>
      <div onClick={handleUpload} className="w-[200px] h-[200px] ">
        Upload
        <label hidden htmlFor="file">
          <Input id="file" type="file" onChange={handleFile} />
        </label>
      </div>

      {image && (
        <div>
          {" "}
          <Image alt="a" src={image} width={200} height={150} />{" "}
        </div>
      )}
    </div>
  );
};
