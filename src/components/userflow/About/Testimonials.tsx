import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import useAboutStyles from "./aboutStyles";
import AboutHero from "./AboutHero";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import aboutImg from "../../../assets/about_us/testimonials.png";
import person1 from "../../../assets/testimonials/person_1.jpg";
import person2 from "../../../assets/testimonials/person_2.jpg";
import person3 from "../../../assets/testimonials/person_3.jpg";
import person4 from "../../../assets/testimonials/person_4.jpg";
import person5 from "../../../assets/testimonials/person_5.jpg";
import { useState } from "react";

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
    image: person1,
    quote:
      "Collaborating with Uday Aqua Connect has been one of the most transformative partnerships in my career. Their deep industry knowledge with a hands-on, farmer-first approach was executed with precision, transparency, and genuine passion for sustainable aquaculture.",
    shortQuote:
      "Transformative partnerships with deep industry knowledge and farmer-first approach.",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    designation: "Fish Farmer, Srikakulam, Andhra Pradesh",
    image: person2,
    quote:
      "Before I joined Uday Aqua Connect's training, I struggled with low yield and inconsistent results. Thanks to Uday Aqua, my income has doubled and I now mentor other farmers in sustainable practices.",
    shortQuote: "My income has doubled and I now mentor other farmers.",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    designation: "Aquaculture Consultant",
    image: person3,
    quote:
      "The technical expertise and innovative solutions provided by Uday Aqua Connect have revolutionized how we approach aquaculture development. Their commitment to sustainability is truly commendable.",
    shortQuote:
      "Revolutionary technical expertise with innovative sustainable solutions.",
  },
  {
    id: 4,
    name: "Krishna Reddy",
    designation: "Aquaculture Entrepreneur",
    image: person4,
    quote:
      "Uday Aqua Connect's comprehensive training programs and ongoing support have been instrumental in scaling my aquaculture business. Their practical approach makes complex concepts accessible.",
    shortQuote:
      "Comprehensive training and ongoing support for business scaling.",
  },
  {
    id: 5,
    name: "Anita Patel",
    designation: "Research Scientist, Marine Biology",
    image: person5,
    quote:
      "Working with Uday Aqua Connect has opened new possibilities in aquaculture research. Their innovative methodologies and commitment to scientific excellence are setting new industry standards.",
    shortQuote: "Innovative methodologies setting new industry standards.",
  },
];

const Testimonials = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useAboutStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLabel = "Testimonials";

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

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
                      style={{ textDecoration: "none" }}
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
                <Box className={classes.aboutSidebarContact}>
                  <Typography className={classes.aboutSidebarContactTitle}>
                    Do You Need Any Help?
                  </Typography>
                  <Typography className={classes.aboutSidebarContactLabel}>
                    Call Us Now:
                  </Typography>
                  <Box className={classes.aboutSidebarContactRow}>
                    <PhoneIcon className={classes.aboutSidebarContactIcon} />
                    <Typography className={classes.aboutSidebarContactValue}>
                      +91 97911-99909
                    </Typography>
                  </Box>
                  <Typography className={classes.aboutSidebarContactLabel}>
                    Talk Us Now:
                  </Typography>
                  <Box className={classes.aboutSidebarContactRow}>
                    <EmailIcon className={classes.aboutSidebarContactIcon} />
                    <Typography className={classes.aboutSidebarContactValue}>
                      info@Uday.com
                    </Typography>
                  </Box>
                </Box>
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
                  <Grid size={{ xs: 3 }} style={{ placeItems: "center" }}>
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
                      <Typography className={classes.testimonialQuote}>
                        "{currentTestimonial.quote}"
                      </Typography>
                      <Typography className={classes.testimonialName}>
                        {currentTestimonial.name}
                      </Typography>
                      <Typography className={classes.testimonialDesignation}>
                        {currentTestimonial.designation}
                      </Typography>
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
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`${classes.testimonialDot} ${
                        i === currentIndex ? classes.testimonialActiveDot : ""
                      }`}
                      onClick={() => setCurrentIndex(i)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom section outside the grid (spans full width) */}
        <Grid size={{ xs: 12 }}>
          <Box className={classes.testimonialBottomWrapper}>
            <Box className={classes.testimonialWideCards}>
              {testimonials.map((t) => (
                <Box
                  key={t.id}
                  className={classes.testimonialWideCard}
                  style={{ backgroundImage: `url(${t.image})` }}
                >
                  <Box className={classes.testimonialWideOverlay} />
                  <Box className={classes.testimonialWideTextBox}>
                    <Typography className={classes.testimonialWideQuote}>
                      "{t.shortQuote}"
                    </Typography>
                    <Typography className={classes.testimonialWideName}>
                      {t.name}
                    </Typography>
                    <Typography className={classes.testimonialWideDesignation}>
                      {t.designation}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Testimonials;
