"use client";

import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [email, setEmail] = useState<string | null>(null);
  const FormSteps = [Step1, Step2][currentStep];

  const sendLink = async () => {
    try {
      await fetch("http://localhost:5000/auth/reset-password-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
    } catch (error) {
      console.log("Error", error);
      alert("Error in send link function");
    }
  };

  return (
    <div className="flex">
      <FormSteps
        setEmail={setEmail}
        sendLink={sendLink}
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Page;
