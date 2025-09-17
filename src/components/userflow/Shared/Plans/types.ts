// Form data interfaces
export interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  pincode: string;
  state: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  district?: string;
  pincode?: string;
  state?: string;
}

export interface Step2Data {
  selectedCultureType: string;
}

export interface Step4Data {
  rdFaculty: string;
  availableSlotFrom: string;
  availableSlotTo: string;
  trainingCourse: string;
  technologies: string;
  termsAccepted?: boolean;
}

export interface Step4Errors {
  rdFaculty?: string;
  availableSlotFrom?: string;
  availableSlotTo?: string;
  trainingCourse?: string;
  technologies?: string;
  termsAccepted?: string;
}

// Plan and aquaculture type interfaces
export interface Plan {
  title: string;
  price: string;
  points: string[];
  badge?: string;
}

export interface AquacultureType {
  id: number;
  title: string;
  image: string;
  description: string;
}

// Month option interface
export interface MonthOption {
  value: string;
  label: string;
}

// Technology mapping
export interface TechnologyMap {
  [key: string]: string;
}

// Training price mapping
export interface TrainingPriceMap {
  [key: string]: string;
}

// Component props interfaces
export interface PlansSectionProps {
  onStepChange?: (step: number) => void;
  currentStep?: number;
  initialCulture?: string;
  initialPrice?: number;
  skipStep4FromPdf?: boolean;
  onSkipConsumed?: () => void;
}

export interface StepComponentProps {
  onStepChange?: (step: number) => void;
  currentStep?: number;
  formData?: FormData;
  setFormData?: React.Dispatch<React.SetStateAction<FormData>>;
  formErrors?: FormErrors;
  setFormErrors?: React.Dispatch<React.SetStateAction<FormErrors>>;
  step2Data?: Step2Data;
  setStep2Data?: React.Dispatch<React.SetStateAction<Step2Data>>;
  step4Data?: Step4Data;
  setStep4Data?: React.Dispatch<React.SetStateAction<Step4Data>>;
  step4Errors?: Step4Errors;
  setStep4Errors?: React.Dispatch<React.SetStateAction<Step4Errors>>;
  overridePrice?: number;
  skipStep4FromPdf?: boolean;
}
