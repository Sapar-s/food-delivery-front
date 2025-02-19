"use client";

import { Inputs } from "@/app/_components/userComponents/Inputs";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import FirsStep from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const FormSteps = [FirsStep, SecondStep][currentStep];

  // useEffect(()=>{
  //   const savedPages = localStorage.getItem("currentPage")
  //   setCurrentStep(Number(savedPages))
  // },[])
  return (
    <div className="flex">
      <FormSteps handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
}
