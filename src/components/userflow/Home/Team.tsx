import { Box, Typography, IconButton } from "@mui/material";
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
import useAutoHorizontalScroll from "./UseAutoHorizontalScroll";
import useIsOverflowing from "./UseIsOverflowing";
import useHomeStyles from "./homeStyles";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const teamData = [
  {
    image: teamImg,
    name: "Uday Krishna",
    location: "Hyderabad, Telangana",
    role: "Managing Director",
    roleColor: "#1976d2",
  },
  {
    image: teamImg2,
    name: "Uday Krishna",
    location: "Hyderabad, Telangana",
    role: "Co- Director",
    roleColor: "#1976d2",
  },
  {
    image: teamImg3,
    name: "Uday Krishna",
    location: "Hyderabad, Telangana",
    role: "Director",
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

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
    setShowFullQuote(false);
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
    setShowFullQuote(false);
  };

  const currentTestimonial = testimonialData[currentTestimonialIndex];

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
                  <Typography className={classes.testimonialHeading}>
                    {currentTestimonial.heading}
                  </Typography>
                  <Typography className={classes.testimonialQuote}>
                    "
                    {showFullQuote
                      ? currentTestimonial.quote
                      : currentTestimonial.shortQuote}
                    "
                  </Typography>
                  {!showFullQuote && (
                    <Typography
                      className={classes.testimonialReadMore}
                      onClick={() => setShowFullQuote(true)}
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      Read More
                    </Typography>
                  )}
                  <Box className={classes.testimonialAttribution}>
                    <Typography className={classes.testimonialName}>
                      {currentTestimonial.name}
                    </Typography>
                    <Typography className={classes.testimonialDesignation}>
                      {currentTestimonial.position}
                    </Typography>
                    <Typography className={classes.testimonialPlace}>
                      {currentTestimonial.place}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Navigation Arrows */}
              <IconButton
                onClick={handlePrev}
                className={classes.testimonialArrowButton}
                size="small"
              >
                <ArrowBackIosNew fontSize="small" />
              </IconButton>
              <IconButton
                onClick={handleNext}
                className={classes.testimonialArrowButton}
                size="small"
              >
                <ArrowForwardIos fontSize="small" />
              </IconButton>
            </Box>

            {/* Pagination Dots */}
            <Box className={classes.testimonialDotsWrapper}>
              {testimonialData.map((_, i) => (
                <span
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
                  style={{ cursor: "pointer" }}
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
      <Box
        component={motion.img}
        src={fishesImg}
        alt="Fishes"
        className={classes.teamFishesImg}
        initial={TEAM_FISH_INITIAL}
        animate={TEAM_FISH_ANIMATE}
        transition={TEAM_FISH_TRANSITION}
      />
      <SectionTitle title="Our Directors & Advisors" />
      {showTabs && (
        <Box className={classes.teamTabs}>
          <Box className={classes.teamTabActive}>Directors</Box>
          <Box className={classes.teamTabDivider}>|</Box>
          <Box className={classes.teamTabInactive}>Advisors</Box>
        </Box>
      )}
      <Box className={classes.teamScrollWrap}>
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
          {teamData.map((item, idx) => (
            <Box key={idx} className={classes.teamCardOuter}>
              <Box className={classes.teamCardInner}>
                <TeamCard {...item} />
              </Box>
            </Box>
          ))}
          {isOverflowing && <Box />}
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
