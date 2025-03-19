"use client";

import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [Step1, Step2][currentStep];
  return (
    <div className="flex">
      <FormSteps setCurrentStep={setCurrentStep} currentStep={currentStep} />
    </div>
  );
};

export default Page;
