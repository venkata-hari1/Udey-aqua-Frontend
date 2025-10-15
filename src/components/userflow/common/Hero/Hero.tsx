import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "./heroStyles.css";
import SwimmingFish from "../../../animations/SwimmingFish";
import BubbleCanvas from "../../../animations/BubbleCanvas";

// Use the imported image variables
import aboutHero from "../../../../assets/about_us/about_hero.png";
import contactHero from "../../../../assets/contact/contact.png";
import culturesHero from "../../../../assets/cultures/main.jpg";
import newsHero from "../../../../assets/news/main.png";
import technologiesHero from "../../../../assets/technologies/hero.png";
import trainingHero from "../../../../assets/training/hero.png";

interface HeroProps {
  page: "about" | "contact" | "cultures" | "news" | "technologies" | "training";
  align?: "left" | "center" | "right";
  overlayColor?: string;
  fishCount?: number;
  fishHeight?: number;
}

const heroContent = {
  about: {
    title: "About Us",
    subtitle: "Empowering the Future of Aquaculture Through Knowledge",
    image: aboutHero,
  },
  contact: {
    title: "Contact Us",
    subtitle: "Empowering the Future of Aquaculture Through Knowledge",
    image: contactHero,
  },
  cultures: {
    title: "Cultures",
    subtitle: "Exploring Diverse Aquaculture Practices and Innovations",
    image: culturesHero,
  },
  news: {
    title: "News & Events",
    subtitle: "Stay Updated with Latest Developments and Success Stories",
    image: newsHero,
  },
  technologies: {
    title: "Technologies",
    subtitle: "Advanced Aquaculture Systems and Innovative Solutions",
    image: technologiesHero,
  },
  training: {
    title: "Training Programs",
    subtitle: "Upskill with expert-led aquaculture training designed for real-world impact",
    image: trainingHero,
  },
};

const Hero: React.FC<HeroProps> = ({
  page,
  align = "center",
  overlayColor = "rgba(0,0,0,0.5)",
  fishCount = 20,
  fishHeight = 2000,
}) => {
  const { title, subtitle, image } = heroContent[page];

  return (
    <Box
      className={`hero-section align-${align}`}
      style={{
        "--bg-image": `url(${image})`,
        "--overlay-color": overlayColor,
        backgroundColor: "#0A4FA469",
      } as React.CSSProperties}
    >
      <SwimmingFish Count={fishCount} Height={fishHeight} />
      <BubbleCanvas />
      <Box className="hero-overlay" />
      <Container className="hero-content">
        <Typography className="hero-title">{title}</Typography>
        <Typography className="hero-subtitle">{subtitle}</Typography>
      </Container>
    </Box>
  );
};

export default Hero;
