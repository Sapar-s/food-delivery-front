"use client";

import { useState } from "react";
import FirsStep from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [FirsStep, SecondStep][currentStep];

  return (
    <div className="flex">
      <FormSteps setCurrentStep={setCurrentStep} currentStep={currentStep} />
    </div>
  );
}
