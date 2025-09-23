// src/components/userflow/About/Testimonials.tsx
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import fishesImg from "../../../assets/home/news_img.png";
import { NavLink, useLocation } from "react-router-dom";
import useAboutStyles from "./aboutStyles";
import AboutHero from "./AboutHero";
import HelpSection from "../Shared/HelpSection";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import aboutImg from "../../../assets/about_us/testimonials.png";
import person3 from "../../../assets/testimonials/person_3.jpg";
import person4 from "../../../assets/testimonials/person_4.jpg";
import person5 from "../../../assets/testimonials/person_5.jpg";
import {
  NEWS_FISHES_INITIAL,
  NEWS_FISHES_ANIMATE,
  NEWS_FISHES_TRANSITION,
} from "../Shared/animations";
import { useState, useEffect, useRef } from "react";

const sidebarItems = [
  { label: "Who We Are", path: "/about" },
  { label: "Our History", path: "/about/our-history" },
  { label: "Our Directors & Advisors", path: "/about/our-team" },
  { label: "Sustainable Development", path: "/about/sustainable-development" },
  { label: "Careers", path: "/about/careers" },
  { label: "Milestones", path: "/about/milestones" },
  { label: "Testimonials", path: "/about/testimonials" },
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Sandeep Rao",
    designation: "Regional Director, AquaTech Solutions Pvt. Ltd.",
    image: person4,
    title: "Driving Aquaculture Innovation Together",
    quotes: [
      "Collaborating with Uday Aqua Connect has been one of the most transformative partnerships in my career. Their deep industry knowledge with a hands-on, farmer-first approach was executed with precision, transparency, and genuine passion for sustainable aquaculture.",
      "Collaborating with Uday Aqua Connect has been one of the most transformative partnerships in my career. Their deep industry knowledge with a hands-on, farmer-first approach was executed with precision, transparency, and genuine passion for sustainable aquaculture.",
    ],
  },
  {
    id: 2,
    name: "Ravi Kumar",
    designation: "Fish Farmer, Srikakulam, Andhra Pradesh",
    image: person5,
    title: "From Struggle to Success",
    quotes: [
      "Before I joined Uday Aqua Connect's training, I struggled with low yield and inconsistent results. Thanks to Uday Aqua, my income has doubled and I now mentor other farmers in sustainable practices.",
    ],
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    designation: "Aquaculture Consultant",
    image: person3,
    title: "Revolutionary Technical Expertise",
    quotes: [
      "The technical expertise and innovative solutions provided by Uday Aqua Connect have revolutionized how we approach aquaculture development. Their commitment to sustainability is truly commendable.",
    ],
  },
  {
    id: 4,
    name: "Krishna Reddy",
    designation: "Aquaculture Entrepreneur",
    image: person4,
    title: "Comprehensive Training & Support",
    quotes: [
      "Uday Aqua Connect's comprehensive training programs and ongoing support have been instrumental in scaling my aquaculture business. Their practical approach makes complex concepts accessible.",
    ],
  },
  {
    id: 5,
    name: "Anita Patel",
    designation: "Research Scientist, Marine Biology",
    image: person5,
    title: "Innovative Methodologies",
    quotes: [
      "Working with Uday Aqua Connect has opened new possibilities in aquaculture research. Their innovative methodologies and commitment to scientific excellence are setting new industry standards.",
    ],
  },
];

const Testimonials = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useAboutStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReadMoreMode, setIsReadMoreMode] = useState(false);
  const [bottomScrollIndex, setBottomScrollIndex] = useState(0);
  const bottomCardsRef = useRef<HTMLDivElement>(null);

  const currentLabel = "Testimonials";

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (isReadMoreMode) return Math.max(0, prev - 1);
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (isReadMoreMode) return Math.min(testimonials.length - 1, prev + 1);
      return prev === testimonials.length - 1 ? 0 : prev + 1;
    });
  };

  const handleReadMore = () => {
    setIsReadMoreMode(true);
  };

  const handleBack = () => {
    setIsReadMoreMode(false);
  };

  const handlePageClick = (index: number) => {
    setCurrentIndex(index);
  };

  // bottom carousel lines are decorative; no state needed

  const currentTestimonial = testimonials[currentIndex];
  const quotes = ((currentTestimonial as any).quotes as string[]) || [""];

  const bottomCards = testimonials.filter(
    (t) => t.id !== currentTestimonial.id
  );
  const totalBottomSlides = bottomCards.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= testimonials.length - 1) return 0;
        return prev + 1;
      });
    }, 10000);
    return () => clearInterval(id);
  }, []);

  // Update active line based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (bottomCardsRef.current && bottomCards.length > 0) {
        const container = bottomCardsRef.current;
        const cardWidth = container.scrollWidth / bottomCards.length;
        const currentScroll = container.scrollLeft;
        const visibleIndex = Math.round(currentScroll / cardWidth);
        setBottomScrollIndex(Math.min(visibleIndex, bottomCards.length - 1));
      }
    };

    const container = bottomCardsRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [bottomCards.length]);

  return (
    <>
      <Grid container className={classes.aboutLayoutRoot} direction="column">
        <Grid size={{ xs: 12 }}>
          <AboutHero currentLabel={currentLabel} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container className={classes.aboutMainRow} wrap="nowrap">
            {!isMobile && (
              <Grid size={{ xs: 3 }} className={classes.aboutSidebarWrapper}>
                <Box className={classes.aboutSidebar}>
                  <Box className={classes.aboutSidebarNavTitle}>About Us</Box>
                  {sidebarItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={() =>
                        cx(classes.aboutSidebarNavItem, {
                          active: location.pathname === item.path,
                        })
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </Box>
                <HelpSection />
              </Grid>
            )}
            <Grid
              size={{ xs: 12, md: 10 }}
              className={classes.aboutMainContent}
            >
              {/* Header Section */}
              <Grid container size={{ xs: 12 }}>
                <Grid size={isMobile ? 12 : 9}>
                  <Typography className={classes.aboutHeaderTitle}>
                    Testimonials
                  </Typography>
                  <Typography className={classes.aboutHeaderSubtitle}>
                    Real Journeys of Growth Through Aquaculture Innovation
                  </Typography>
                </Grid>
                {!isMobile && (
                  <Grid size={{ xs: 3 }} className={classes.aboutHeaderSideGrid}>
                    <Box
                      component="img"
                      src={aboutImg}
                      className={classes.sideImg}
                    />
                  </Grid>
                )}
              </Grid>

              {/* Main Testimonial Carousel */}
              <Box className={classes.testimonialCarouselWrapper}>
                <Box
                  className={cx(
                    classes.testimonialCarouselCard,
                    isReadMoreMode && classes.testimonialReadMoreCard
                  )}
                >
                  <Box
                    className={cx(
                      classes.testimonialCarouselContent,
                      isReadMoreMode && classes.testimonialReadMoreContent
                    )}
                  >
                    <Box
                      className={cx(
                        classes.testimonialImageContainer,
                        isReadMoreMode &&
                          classes.testimonialReadMoreImageContainer
                      )}
                    >
                      <Box
                        component="img"
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className={classes.testimonialImage}
                      />
                    </Box>
                    <Box
                      className={cx(
                        classes.testimonialTextContainer,
                        isReadMoreMode &&
                          classes.testimonialReadMoreTextContainer
                      )}
                    >
                      <Typography className={classes.testimonialTitle}>
                        {currentTestimonial.title}
                      </Typography>
                      {!isReadMoreMode ? (
                        <Typography className={classes.testimonialQuote}>
                          {quotes[0].slice(0, 200)}
                          <Typography
                            component="span"
                            className={classes.testimonialDots}
                          >
                            ...
                          </Typography>
                          <Typography
                            component="span"
                            className={classes.testimonialReadMore}
                            onClick={handleReadMore}
                          >
                            Read More
                          </Typography>
                        </Typography>
                      ) : (
                        <Box>
                          {quotes.map((q: string, idx: number) => (
                            <Typography
                              key={idx}
                              className={classes.testimonialQuoteCompact}
                            >
                              {q}
                            </Typography>
                          ))}
                        </Box>
                      )}
                      <Box className={classes.testimonialAttribution}>
                        <Typography className={classes.testimonialName}>
                          {currentTestimonial.name}
                        </Typography>
                        <Typography className={classes.testimonialDesignation}>
                          {currentTestimonial.designation.split(",")[0]}
                          {isReadMoreMode ? "," : ""}
                        </Typography>
                        <Typography className={classes.testimonialPlace}>
                          {currentTestimonial.designation.split(",")[1] ||
                            currentTestimonial.designation}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Navigation Arrows in middle - hidden in Read More mode */}
                  {!isReadMoreMode && (
                    <>
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
                    </>
                  )}
                </Box>
              </Box>
                            {/* Fish animation for Read More */}
              {isReadMoreMode && (
                <Box className={classes.testimonialRoot}>
                  <motion.img
                    src={fishesImg}
                    alt="Fishes"
                    className={classes.testimonialFishesImg2}
                    initial={NEWS_FISHES_INITIAL}
                    animate={NEWS_FISHES_ANIMATE}
                    transition={NEWS_FISHES_TRANSITION}
                  />
                </Box>
              )}


              {/* Back to overview button - bottom right, only in Read More mode */}
              {isReadMoreMode && (
                <Box className={classes.backButtonWrapper}>
                  <IconButton
                    className={classes.backButton}
                    onClick={handleBack}
                  >
                    <ArrowBack fontSize="small" />
                  </IconButton>
                </Box>
              )}

              {/* Pagination Section - Only show in Read More mode */}
              {isReadMoreMode && (
                <Box className={classes.testimonialPaginationWrapper}>
                  <Box className={classes.testimonialPagination}>
                    {/* Prev Arrow: acts as previous, hidden on first slide */}
                    {currentIndex > 0 && (
                      <IconButton
                        onClick={handlePrev}
                        className={classes.testimonialBackButton}
                        size="small"
                      >
                        <ArrowBack
                          fontSize="small"
                          className={classes.smallText}
                        />
                      </IconButton>
                    )}

                    {/* Page Numbers */}
                    {testimonials.map((_, index) => (
                      <Box
                        key={index}
                        className={cx(classes.testimonialPageButton, {
                          [classes.testimonialActivePageButton]:
                            index === currentIndex,
                        })}
                        onClick={() => handlePageClick(index)}
                      >
                        {index + 1}
                      </Box>
                    ))}

                    {/* Next Button: hidden on last slide */}
                    {currentIndex < testimonials.length - 1 && (
                      <IconButton
                        onClick={handleNext}
                        className={classes.testimonialNextButton}
                        size="small"
                      >
                        <ArrowForward
                          className={classes.smallText}
                          fontSize="small"
                        />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom section - Hide when in Read More mode */}
        {!isReadMoreMode && (
          <Grid size={{ xs: 12 }}>
            <Box className={classes.testimonialBottomWrapper}>
            <Box className={classes.testimonialRoot}>
            <motion.img
              src={fishesImg}
              alt="Fishes"
              className={classes.testimonialFishesImg}
              initial={NEWS_FISHES_INITIAL}
              animate={NEWS_FISHES_ANIMATE}
              transition={NEWS_FISHES_TRANSITION}
            />
            </Box>
              <Box
                ref={bottomCardsRef}
                className={classes.testimonialWideCards}
              >
                {bottomCards.map((t) => (
                  <Box key={t.id} className={classes.testimonialWideCard}>
                    <Box className={classes.testimonialWideContent}>
                      <Box className={classes.testimonialWideImageContainer}>
                        <Box
                          component="img"
                          src={t.image}
                          alt={t.name}
                          className={classes.testimonialImage}
                        />
                      </Box>
                      <Box className={classes.testimonialWideTextBox}>
                        <Typography className={classes.testimonialWideQuote}>
                          "{((t as any).quotes?.[0] || "").slice(0, 150)}..."
                        </Typography>
                        <Box className={classes.testimonialWideAttribution}>
                          <Typography className={classes.testimonialWideName}>
                            {t.name}
                          </Typography>
                          <Typography
                            className={classes.testimonialWideDesignation}
                          >
                            {t.designation.split(",")[0]}
                          </Typography>
                          <Typography className={classes.testimonialWidePlace}>
                            {t.designation.split(",")[1] || t.designation}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Box className={classes.extraWidth} />
              </Box>

              {/* Line Pagination for Bottom Carousel */}
              <Box className={classes.testimonialLinePagination}>
                {Array.from({ length: totalBottomSlides }, (_, index) => (
                  <Box
                    key={index}
                    className={cx(classes.testimonialLine, {
                      [classes.testimonialActiveLine]:
                        index === bottomScrollIndex,
                    })}
                    onClick={() => {
                      if (bottomCardsRef.current) {
                        const cardWidth =
                          bottomCardsRef.current.scrollWidth /
                          bottomCards.length;
                        bottomCardsRef.current.scrollTo({
                          left: index * cardWidth,
                          behavior: "smooth",
                        });
                        setBottomScrollIndex(index);
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Testimonials;
