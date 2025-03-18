"use client";

import { useState } from "react";
import FirsStep from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const FormSteps = [FirsStep, SecondStep][currentStep];
  const [email, setEmail] = useState<string | null>(null);

  const createUser = async (password: string) => {
    try {
      await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
    } catch (error) {
      console.log("Error", error);
      alert("Error in signUp function");
    }
  };

  return (
    <div className="flex">
      <FormSteps
        setEmail={setEmail}
        createUser={createUser}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </div>
  );
}
