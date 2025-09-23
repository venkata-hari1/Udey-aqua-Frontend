// src/components/userflow/About/teamData.ts
import team1 from "../../../assets/team/team_1.png";
import team2 from "../../../assets/team/team_2.png";
import team3 from "../../../assets/team/team_3.png";
import adv1 from "../../../assets/team/adv_1.png";
import adv2 from "../../../assets/team/adv_2.png";
import adv3 from "../../../assets/team/adv_3.png";
import adv4 from "../../../assets/team/adv_4.png";

export type MemberCategory = "Directors" | "Advisors";

export interface MemberData {
  name: string;
  designation: string;
  bigDesignation?: string;
  qualification?: string;
  image: string;
  description: string;
  category: MemberCategory;
}

export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const membersData: MemberData[] = [
  {
    name: "Mr. Uday Kishan Cherukuneedi",
    designation: "Managing Director",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(M.Pharm,MBA(IIM-Kolkata))",
    image: team1,
    description:
      "A Pharmaceutical Researcher worked in various Pharma organisations and completed his MBA from IIM Kolkata with an aspiration to improve livelihood of the Rural Farmers. Established his own startup on 2019 – based out in Hyderabad, Telangana. Established the first of its kind R&D Facility involved with various technological based aqua farming methods based out in Nizamagar, Kammredy District, Telangana. As a social Enterprise along with his team working to create a corridor of Fresh water species in a stretch of 123 Kms between Two biggest dam of Telangana, namely Nizamagar and Sriram Sagar Dams. Further to expand the total ecosystem, already involved 3000+ individual women farmers in educating themselves into new method of Aqua Culture. Creating the financial support from the banks to invest on the farming of individual women to help in their livelihood. It has been planned to bring 10,000+ farmers into this livelihood activity by 2028. New R&D facility is being built on the other end cluster based out Sriram Sagar Dam, Armoor, Nizamabad District.",
    category: "Directors",
  },
  {
    name: "Sridhar Devineni",
    designation: "Co-Director",
    image: team2,
    description: "Description for Sridhar Devineni",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(M.Pharm,MBA(IIM-Kolkata))",
    category: "Directors",
  },
  {
    name: "Sridhar Devineni",
    designation: "Co-Director",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(M.Pharm,MBA(IIM-Kolkata))",
    image: team3,
    description: "Another image of Sridhar Devineni",
    category: "Directors",
  },
  {
    name: "Dr. Dilip Kumar",
    designation: "Chairman",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(M.Pharm,MBA(IIM-Kolkata))",
    image: adv1,
    description: "Description for Dr. Dilip Kumar",
    category: "Advisors",
  },
  {
    name: "Dr. V.V. Sadamate",
    designation: "Member",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(M.Pharm,MBA(IIM-Kolkata))",
    image: adv2,
    description: "Description for Dr. V.V. Sadamate",
    category: "Advisors",
  },
  {
    name: "S.V. Reddy",
    designation: "Co-Chairman",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(M.Pharm,MBA(IIM-Kolkata))",
    image: adv3,
    description: "Description for S.V. Reddy",
    category: "Advisors",
  },
  {
    name: "Dr. Radha Madhav",
    designation: "Member",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    image: adv4,
    description: "Description for Dr. Radha Madhav",
    category: "Advisors",
  },
];

export const getMemberBySlug = (slug: string): MemberData | undefined =>
  membersData.find((m) => slugify(m.name) === slug);


