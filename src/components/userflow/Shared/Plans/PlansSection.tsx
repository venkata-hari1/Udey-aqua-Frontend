import { useState, useEffect } from "react";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  TRANSITION_TIMERS,
} from "./index";
import type {
  PlansSectionProps,
  FormData,
  FormErrors,
  Step2Data,
  Step4Data,
  Step4Errors,
} from "./types";

const PlansSection = ({ onStepChange, currentStep = 1 }: PlansSectionProps) => {
  // Form data state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    pincode: "",
    state: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Step 2 data state
  const [step2Data, setStep2Data] = useState<Step2Data>({
    selectedCultureType: "",
  });

  // Step 4 data state
  const [step4Data, setStep4Data] = useState<Step4Data>({
    rdFaculty: "",
    availableSlotFrom: "",
    availableSlotTo: "",
    trainingCourse: "",
    technologies: "",
    termsAccepted: false,
  });

  const [step4Errors, setStep4Errors] = useState<Step4Errors>({});

  // Auto-transition from Step 6 to Step 7 after 2 seconds
  useEffect(() => {
    if (currentStep === 6) {
      const timer = setTimeout(() => {
        if (onStepChange) {
          onStepChange(7);
        }
      }, TRANSITION_TIMERS.STEP6_TO_STEP7);

      return () => clearTimeout(timer);
    }
  }, [currentStep, onStepChange]);

  // Auto-transition from Step 7 to Step 8 after 5 seconds
  useEffect(() => {
    if (currentStep === 7) {
      const timer = setTimeout(() => {
        if (onStepChange) {
          onStepChange(8);
        }
      }, TRANSITION_TIMERS.STEP7_TO_STEP8);

      return () => clearTimeout(timer);
    }
  }, [currentStep, onStepChange]);

  // Render appropriate step component
  const renderStep = () => {
    const commonProps = {
      onStepChange,
      currentStep,
    };

    switch (currentStep) {
      case 1:
        return <Step1 {...commonProps} />;

      case 2:
        return (
          <Step2
            {...commonProps}
            step2Data={step2Data}
            setStep2Data={setStep2Data}
          />
        );

      case 3:
        return (
          <Step3
            {...commonProps}
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        );

      case 4:
        return (
          <Step4
            {...commonProps}
            step4Data={step4Data}
            setStep4Data={setStep4Data}
            step4Errors={step4Errors}
            setStep4Errors={setStep4Errors}
          />
        );

      case 5:
        return (
          <Step5
            {...commonProps}
            formData={formData}
            step2Data={step2Data}
            step4Data={step4Data}
          />
        );

      case 6:
        return <Step6 {...commonProps} />;

      case 7:
        return <Step7 />;

      case 8:
        return <Step8 {...commonProps} />;

      default:
        return <Step1 {...commonProps} />;
    }
  };

  return renderStep();
};

export default PlansSection;
