import type1 from "../../../../assets/training/type1.png";
import type2 from "../../../../assets/training/type2.png";
import type3 from "../../../../assets/training/type3.png";
import acc1 from "../../../../assets/training/acc1.png";
import acc2 from "../../../../assets/training/acc2.png";
import acc3 from "../../../../assets/training/acc3.png";
import acc4 from "../../../../assets/training/acc4.png";
import acc5 from "../../../../assets/training/acc5.png";
import razorpayLogo from "../../../../assets/training/razorpay.png";
import calendarIcon from "../../../../assets/icons/calendar-color.svg";
import userIcon from "../../../../assets/icons/user.svg";
import cartIcon from "../../../../assets/icons/cart.svg";
import tickIcon from "../../../../assets/icons/tick.svg";
import pdfIcon from "../../../../assets/icons/pdf.svg";
import errorIcon from "../../../../assets/icons/error.svg";

import type {
  Plan,
  AquacultureType,
  TechnologyMap,
  TrainingPriceMap,
} from "./types";

// Training plans data
export const PLANS: Plan[] = [
  {
    title: "Visit",
    price: "Rs/2500 + 18% GST",
    points: [
      "Total site visit (3 Hrs).",
      "Our Employee Guidance.",
      "Explanation about existing technologies.",
    ],
  },
  {
    title: "1 Day",
    price: "Rs/5000 + 18% GST",
    points: [
      "Basic Introduction about Aquaculture Type (Fresh/ Brackish Water)",
      "Species Selection & Introduction",
    ],
  },
  {
    title: "3 Days",
    price: "Rs/10,000 + 18% GST",
    points: [
      "Basic Introduction about Aquaculture Type (Fresh/ Brackish Water)",
      "Species Selection & Introduction",
      "Technologies & Users ( RAS, CAS, Cage Culture, Pond Farming etc..)",
      "Culture Practices",
    ],
  },
  {
    title: "7 Days",
    price: "Rs/15,000 + 18% GST",
    points: [
      "Basic Introduction about Aquaculture Type (Fresh/ Brackish Water)",
      "Species Selection & Introduction",
      "Technologies & Users ( RAS, CAS, Cage Culture, Pond Farming etc..)",
      "Culture Practices",
      "Project Implementation Planning.",
      "Budget, Finance",
      "Investments",
      "Profits & Returns",
    ],
    badge: "Most Popular",
  },
];

// Aquaculture types data
export const AQUACULTURE_TYPES: AquacultureType[] = [
  {
    id: 1,
    title: "FRESH WATER AQUACULTURE",
    image: type1,
    description: "Freshwater aquaculture systems for inland water bodies",
  },
  {
    id: 2,
    title: "BRACKISH WATER AQUACULTURE",
    image: type2,
    description: "Brackish water systems for coastal and estuarine areas",
  },
  {
    id: 3,
    title: "MARINE AQUACULTURE",
    image: type3,
    description: "Marine aquaculture for open ocean environments",
  },
];

// Technology mapping from short codes to full names
export const TECHNOLOGY_MAP: TechnologyMap = {
  ras: "Recirculating Aquaculture System (RAS)",
  cas: "Circulating Aquaculture System (CAS)",
  cage: "Cage Culture",
  pond: "Pond Farming",
  hatchery: "Fish Hatchery",
};

// Training price mapping
export const TRAINING_PRICE_MAP: TrainingPriceMap = {
  "1day": "₹5,000 +18% GST",
  "3days": "₹10,000 +18% GST",
  "7days": "₹15,000 +18% GST",
};

// Image assets
export const IMAGES = {
  acc1,
  acc2,
  acc3,
  acc4,
  acc5,
  razorpayLogo,
  calendarIcon,
  userIcon,
  cartIcon,
  tickIcon,
  pdfIcon,
  errorIcon,
};

// Form validation patterns
export const VALIDATION_PATTERNS = {
  phone: /^\+91\d{10}$/,
  email: /\S+@\S+\.\S+/,
  pincode: /^\d{6}$/,
};

// Auto-transition timers
export const TRANSITION_TIMERS = {
  STEP6_TO_STEP7: 2000, // 2 seconds
  STEP7_TO_STEP8: 5000, // 5 seconds
};
