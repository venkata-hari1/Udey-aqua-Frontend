// src/components/userflow/Shared/Plans/indiaLocations.ts
export type DistrictInfo = {
  name: string;
  pincode: string; // representative/default pincode for demo purposes
};

export const INDIA_STATES: Record<string, DistrictInfo[]> = {
  "Andhra Pradesh": [
    { name: "Srikakulam", pincode: "532001" },
    { name: "Vishakhapatnam", pincode: "530001" },
    { name: "East Godavari", pincode: "533001" },
    { name: "Guntur", pincode: "522002" },
  ],
  Telangana: [
    { name: "Hyderabad", pincode: "500001" },
    { name: "Rangareddy", pincode: "500074" },
    { name: "Nizamabad", pincode: "503001" },
    { name: "Karimnagar", pincode: "505001" },
  ],
  "Tamil Nadu": [
    { name: "Chennai", pincode: "600001" },
    { name: "Coimbatore", pincode: "641001" },
    { name: "Madurai", pincode: "625001" },
    { name: "Tiruchirappalli", pincode: "620001" },
  ],
  Karnataka: [
    { name: "Bengaluru", pincode: "560001" },
    { name: "Mysuru", pincode: "570001" },
    { name: "Mangaluru", pincode: "575001" },
    { name: "Hubballi", pincode: "580020" },
  ],
};

export const INDIA_STATE_NAMES = Object.keys(INDIA_STATES);

