// src/components/userflow/Home/Team.tsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  TEAM_FISH_INITIAL,
  TEAM_FISH_ANIMATE,
  TEAM_FISH_TRANSITION,
} from "../Shared/animations";
import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";
import teamImg from "../../../assets/team/team_1.png";
import teamImg2 from "../../../assets/team/team_2.png";
import teamImg3 from "../../../assets/team/team_3.png";
import teamBg from "../../../assets/team/team_bg.png";
import fishesImg from "../../../assets/home/team_image.png";
import { useRef, useState } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";
import useHomeStyles from "./homeStyles";
// import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const teamData = [
  {
    image: teamImg,
    name: "Mr. Uday Kishan Cherukuneedi",
    location: "Hyderabad, Telangana",
    role: "Managing Director",
    roleColor: "#1976d2",
  },
  {
    image: teamImg2,
    name: "Sridhar Devineni",
    location: "Hyderabad, Telangana",
    role: "Co-Director",
    roleColor: "#1976d2",
  },
  {
    image: teamImg3,
    name: "Dr. Rajesh Kumar",
    location: "Hyderabad, Telangana",
    role: "Director",
    roleColor: "#1976d2",
  },
];

const advisorsData = [
  {
    image: teamImg2,
    name: "Dr. Meera Nair",
    location: "Kochi, Kerala",
    role: "Senior Aquaculture Advisor",
    roleColor: "#1976d2",
  },
  {
    image: teamImg3,
    name: "Rajesh Kumar",
    location: "Chennai, Tamil Nadu",
    role: "Technical Advisor",
    roleColor: "#1976d2",
  },
  {
    image: teamImg,
    name: "Anita Verma",
    location: "Vizag, Andhra Pradesh",
    role: "Sustainability Advisor",
    roleColor: "#1976d2",
  },
];

const testimonialData = [
  {
    image: teamImg,
    name: "Mr. Sandeep Rao",
    position: "Regional Director",
    place: "AquaTech Solutions Pvt. Ltd.",
    heading: "Driving Aquaculture Innovation Together",
    quote:
      "Collaborating with Uday Aqua Connect has been one of the most transformative partnerships in our aquaculture journey. Their team combines deep industry knowledge with a hands-on, farmer-first approach that truly sets them apart. From curriculum design to on-ground training delivery, every step was executed with precision, transparency, and genuine passion for sustainable aquaculture.",
    shortQuote:
      "Collaborating with Uday Aqua Connect has been one of the most transformative partnerships in our aquaculture journey. Their team combines deep industry knowledge with a hands-on, farmer-first approach that truly sets them apart...",
  },
  {
    image: teamImg2,
    name: "Dr. Priya Sharma",
    position: "Aquaculture Consultant",
    place: "Marine Biology Institute",
    heading: "Revolutionary Technical Expertise",
    quote:
      "The technical expertise and innovative solutions provided by Uday Aqua Connect have revolutionized how we approach aquaculture development. Their commitment to sustainability is truly commendable and has set new industry standards.",
    shortQuote:
      "The technical expertise and innovative solutions provided by Uday Aqua Connect have revolutionized how we approach aquaculture development. Their commitment to sustainability is truly commendable...",
  },
  {
    image: teamImg3,
    name: "Krishna Reddy",
    position: "Aquaculture Entrepreneur",
    place: "Sustainable Fisheries Ltd.",
    heading: "Comprehensive Training & Support",
    quote:
      "Uday Aqua Connect's comprehensive training programs and ongoing support have been instrumental in scaling my aquaculture business. Their practical approach makes complex concepts accessible and has transformed our operations.",
    shortQuote:
      "Uday Aqua Connect's comprehensive training programs and ongoing support have been instrumental in scaling my aquaculture business. Their practical approach makes complex concepts accessible...",
  },
];

interface TeamProps {
  showTabs?: boolean;
  isTestimonialMode?: boolean;
}

const Team: React.FC<TeamProps> = ({
  showTabs = true,
  isTestimonialMode = false,
}) => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [showFullQuote, setShowFullQuote] = useState(false);
  const [activeTab, setActiveTab] = useState<"directors" | "advisors">(
    "directors"
  );
  const currentTestimonial = testimonialData[currentTestimonialIndex];
  
  const handleTabChange = (tab: "directors" | "advisors") => {
    setActiveTab(tab);
  };

  if (isTestimonialMode) {
    return (
      <Box className={classes.teamRoot}>
        <Box
          component={motion.img}
          src={fishesImg}
          alt="Fishes"
          className={classes.teamFishesImg}
          initial={TEAM_FISH_INITIAL}
          animate={TEAM_FISH_ANIMATE}
          transition={TEAM_FISH_TRANSITION}
        />
        <SectionTitle title="Our Testimonials" />
        <Box className={classes.teamScrollWrap}>
          <Box
            component="img"
            src={teamBg}
            alt="Team Background"
            className={classes.teamBgImg}
          />
          <Box className={classes.testimonialCarouselWrapper}>
            <Box className={classes.testimonialCarouselCard}>
              <Box className={classes.testimonialCarouselContent}>
                <Box className={classes.testimonialImageContainer}>
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className={classes.testimonialImage}
                  />
                </Box>
                <Box className={classes.testimonialTextContainer}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={classes.testimonialHeading}
                  >
                    {currentTestimonial.heading}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.testimonialQuote}
                  >
                    "
                    {showFullQuote
                      ? currentTestimonial.quote
                      : currentTestimonial.shortQuote}
                    "
                  </Typography>
                  {!showFullQuote && (
                    <Typography
                      variant="body2"
                      component="span"
                      className={classes.testimonialReadMore}
                      onClick={() => setShowFullQuote(true)}
                    >
                      Read More
                    </Typography>
                  )}
                  <Box className={classes.testimonialAttribution}>
                    <Typography
                      variant="subtitle2"
                      component="span"
                      className={classes.testimonialName}
                    >
                      {currentTestimonial.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="span"
                      className={classes.testimonialDesignation}
                    >
                      {currentTestimonial.position}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="span"
                      className={classes.testimonialPlace}
                    >
                      {currentTestimonial.place}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Navigation Arrows
              <IconButton
                onClick={handlePrev}
                className={classes.testimonialArrowButton}
                size="small"
              >
                <ArrowBackIosNew fontSize="small" />
              </IconButton> */}
              {/* <IconButton
                onClick={handleOurTeam}
                className={classes.testimonialArrowButton}
                size="small"
              >
                <ArrowForwardIos fontSize="small" />
              </IconButton> */}
            </Box>

            {/* Pagination Dots */}
            <Box className={classes.testimonialDotsWrapper}>
              {testimonialData.map((_, i) => (
                <Typography
                  component="span"
                  key={i}
                  className={`${classes.testimonialDot} ${
                    i === currentTestimonialIndex
                      ? classes.testimonialActiveDot
                      : ""
                  }`}
                  onClick={() => {
                    setCurrentTestimonialIndex(i);
                    setShowFullQuote(false);
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.teamRoot}>
    
      <SectionTitle
        title="Our Directors & Advisors"
        
      />
      {showTabs && (
        <Box className={classes.teamTabs}>
          <Box
            className={
              activeTab === "directors"
                ? classes.teamTabActive
                : classes.teamTabInactive
            }
            onClick={() => handleTabChange("directors")}
          >
            <Typography variant="subtitle1" component="span">
              Directors
            </Typography>
          </Box>
          <Box className={classes.teamTabDivider}>
            <Typography component="span">|</Typography>
          </Box>
          <Box
            className={
              activeTab === "advisors"
                ? classes.teamTabActive
                : classes.teamTabInactive
            }
            onClick={() => handleTabChange("advisors")}
          >
            <Typography variant="subtitle1" component="span">
              Advisors
            </Typography>
          </Box>
        </Box>
      )}
      <Box className={classes.teamScrollWrap} style={{ position: "relative" }}>
        <Box
          component="img"
          src={teamBg}
          alt="Team Background"
          className={classes.teamBgImg}
        />

       

        <Box
          ref={scrollRef}
          className={
            classes.teamCardsScroll +
            (isOverflowing ? " " + classes.teamCardsScrollFlexStart : "")
          }
        >
          {isOverflowing && <Box />}
          {(activeTab === "directors" ? teamData : advisorsData).map(
            (item, idx) => (
              <Box key={idx} className={classes.teamCardOuter}>
                <Box className={classes.teamCardInner}>
                  <TeamCard {...item} />
                </Box>
              </Box>
            )
          )}
          {isOverflowing && <Box />}
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
