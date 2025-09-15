import { VALIDATION_PATTERNS } from "./constants";
import type {
  FormData,
  FormErrors,
  Step4Data,
  Step4Errors,
  MonthOption,
} from "./types";

// Generate month options for the next 12 months
export const generateMonthOptions = (): MonthOption[] => {
  const options: MonthOption[] = [];
  const now = new Date();

  for (let i = 0; i < 12; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
    const label = d.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
    options.push({ value, label });
  }

  return options;
};

// Parse year-month string to number for comparison
export const parseYearMonth = (ym: string): number | null => {
  if (!ym) return null;
  const [y, m] = ym.split("-").map((v) => parseInt(v, 10));
  if (Number.isNaN(y) || Number.isNaN(m)) return null;
  return y * 12 + (m - 1);
};

// Validate form data
export const validateForm = (
  formData: FormData
): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (/^\d+$/.test(formData.name.trim())) {
    errors.name = "Name cannot contain only numbers";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Enter a valid Phone number";
  } else if (!VALIDATION_PATTERNS.phone.test(formData.phone)) {
    errors.phone = "Enter a valid Phone number";
  }

  if (!formData.email.trim()) {
    errors.email = "Enter a valid email";
  } else if (!VALIDATION_PATTERNS.email.test(formData.email)) {
    errors.email = "Enter a valid email";
  }

  if (!formData.address.trim()) {
    errors.address = "Enter a valid address";
  } else if (/^\d+$/.test(formData.address.trim())) {
    errors.address = "Address cannot contain only numbers";
  }

  if (!formData.district.trim()) {
    errors.district = "District is required";
  } else if (/^\d+$/.test(formData.district.trim())) {
    errors.district = "Enter a valid district";
  }

  if (!formData.pincode.trim()) {
    errors.pincode = "Enter a valid 6-digit pincode";
  } else if (!VALIDATION_PATTERNS.pincode.test(formData.pincode)) {
    errors.pincode = "Enter a valid 6-digit pincode";
  }

  if (!formData.state.trim()) {
    errors.state = "State is required";
  } else if (/^\d+$/.test(formData.state.trim())) {
    errors.state = "Enter a valid state";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validate step 4 data
export const validateStep4 = (
  step4Data: Step4Data
): { isValid: boolean; errors: Step4Errors } => {
  const errors: Step4Errors = {};

  if (!step4Data.rdFaculty.trim()) {
    errors.rdFaculty = "R&D Faculty is required";
  }

  if (!step4Data.availableSlotFrom.trim()) {
    errors.availableSlotFrom = "Please Select Available Time Slots";
  }

  if (!step4Data.availableSlotTo.trim()) {
    errors.availableSlotTo = "To Date is required";
  }

  const fromIndex = parseYearMonth(step4Data.availableSlotFrom);
  const toIndex = parseYearMonth(step4Data.availableSlotTo);
  if (fromIndex !== null && toIndex !== null && fromIndex > toIndex) {
    errors.availableSlotTo = "To Date must be same or after From Date";
  }

  if (!step4Data.trainingCourse.trim()) {
    errors.trainingCourse = "Please choose a training course";
  }

  if (!step4Data.technologies.trim()) {
    errors.technologies = "Please Select atleast one Technology";
  }

  if (!step4Data.termsAccepted) {
    errors.termsAccepted =
      "By checking this box, you agree to our Terms & Conditions";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Format training course display name
export const formatTrainingCourse = (course: string): string => {
  switch (course) {
    case "1day":
      return "1 Day";
    case "3days":
      return "3 Days";
    case "7days":
      return "7 Days";
    default:
      return "-";
  }
};

// Format available slot display
export const formatAvailableSlot = (from: string, to: string): string => {
  if (!from) return "-";
  if (!to) return from;
  return `${from} to ${to}`;
};
