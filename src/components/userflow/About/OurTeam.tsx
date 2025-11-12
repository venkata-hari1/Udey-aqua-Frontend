import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
  IconButton,
  Fade,
} from "@mui/material";
import {
  ArrowBack,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";
import useAboutStyles from "./aboutStyles";
import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import aboutImg from "../../../assets/about_us/team.png";

// Images
import team1 from "../../../assets/team/team_1.png";
import team2 from "../../../assets/team/team_2.png";
import team3 from "../../../assets/team/team_3.png";
import adv1 from "../../../assets/team/adv_1.png";
import adv2 from "../../../assets/team/adv_2.png";
import adv3 from "../../../assets/team/adv_3.png";
import adv4 from "../../../assets/team/adv_4.png";
/* import { useNavigate } from "react-router-dom"; */

// Types
interface Member {
  name: string;
  designation: string;
  bigDesignation?: string;
  qualification?: string;
  image: string;
  description: string;
  category: "Directors" | "Advisors";
}

const membersData: Member[] = [
  {
    name: "Mr. Uday Kishan",
    designation: "Managing Director",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(M.Pharm,MBA(IIM-Kolkata))",
    image: team1,
    description: `A Pharmaceutical Researcher worked in various Pharma organisations and completed his MBA from IIM Kolkata with an aspiration to improve livelihood of the Rural Farmers. Established his own startup on 2019 – based out in Hyderabad, Telangana. Established the first of its kind R&amp;D Facility involved with various technological based aqua farming methods based out in Nizamagar, Kammredy District, Telangana. As a social Enterprise along with his team working to create a corridor of Fresh water species in a stretch of 123 Kms between Two biggest dam of Telangana, namely NizamagarandSriramSagarDams.Furthertoexpandthetotalecosystem,already involved 3000+ individual women farmers in educating themselves into new method of Aqua Culture. Creating the financial support from the banks to invest on the farming of individual women to help in their livelihood. It has been planned to bring 10,000+ farmers into this livelihood activity by 2028. New R&D facility is being built on the other end fluster rebased out Sriram Sagar Dam,Armoor, Nizamabad District.`,
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
    name: "Dr. Rajesh Kumar",
    designation: "Director",
    bigDesignation: "Managing Director – Uday Aqua Connects Private Ltd.",
    qualification: "(Ph.D., Aquaculture)",
    image: team3,
    description: "Director with expertise in sustainable aquaculture and RAS/CAS systems.",
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

const OurTeam = () => {
  const { classes } = useAboutStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  //const memberref= useRef<HTMLDivElement | null>(null)

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"Directors" | "Advisors">("Directors");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { memberSlug } = useParams<{ memberSlug?: string }>();

  // Handle URL parameter for direct member access
  useEffect(() => {
    if (memberSlug) {
      const memberIndex = membersData.findIndex(
        (member) => member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === memberSlug
      );
      if (memberIndex !== -1) {
        const member = membersData[memberIndex];
        setActiveTab(member.category);
        const categoryMembers = membersData.filter((m) => m.category === member.category);
        const categoryIndex = categoryMembers.findIndex((m) => m.name === member.name);
        setCurrentIndex(categoryIndex);
        setOpen(true);
      }
    }
  }, [memberSlug]);

  const handleCardClick = (
    category: "Directors" | "Advisors",
    index: number
  ) => {
    const categoryMembers = membersData.filter((m) => m.category === category);
    const member = categoryMembers[index];
    const slug = member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    navigate(`/about/our-team/${slug}`);
  };

  const handlePrev = () => {
    const list = membersData.filter((m) => m.category === activeTab);
    if (currentIndex > 0) {
      const prevMember = list[currentIndex - 1];
      const slug = prevMember.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      navigate(`/about/our-team/${slug}`);
    }
    
  };

  const handleNext = () => {
    const list = membersData.filter((m) => m.category === activeTab);
    if (currentIndex < list.length - 1) {
      const nextMember = list[currentIndex + 1];
      const slug = nextMember.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      navigate(`/about/our-team/${slug}`);
    }
    
    
  };

  const renderMembers = (category: "Directors" | "Advisors") => (
    <>
      <Typography variant="h6" className={classes.sectionTitle}>
        {category}
      </Typography>
      <Grid container spacing={3} className={classes.gridWrapper}>
        {membersData
          .filter((member) => member.category === category)
          .map((member, idx) => (
            <Grid
              size={{ xs: 12, sm: 6, lg: 4 }}
              key={idx}
              onClick={() => handleCardClick(category, idx)}
              className={classes.memberGridItem}
            >
              <Card className={classes.memberCard}>
                <CardMedia
                  component="img"
                  height="240" 
                  image={member.image}
                  alt={member.name}
                  className={classes.memberImage}
                />
                <CardContent className={classes.teamPaper}>
                  <Typography
                    variant="subtitle2"
                    className={classes.memberName}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.memberDesignation}
                  >
                    {member.designation}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );

  const selectedMembers = membersData.filter((m) => m.category === activeTab);
  const currentMember = selectedMembers[currentIndex];

  return (
    <Box>
      {/* Header Section */}
      <Box className={classes.headerSection}>
        <Box className={classes.headerPill}>Our Directors & Advisors</Box>
        <Typography className={classes.teamSubtitle}>
          Leading With Vision, Guided By Expertise
        </Typography>

        {!open ? (
          <Box className={classes.headerIconContainer}>
            <Box
              component="img"
              src={aboutImg}
              className={classes.headerIcon}
            />
          </Box>
        ) : (
          <Box className={classes.autoHeaderTabWrapper}>
            <Typography
              className={`${classes.autoHeaderTab} ${
                activeTab === "Directors" ? classes.autoHeaderTabActive : ""
              }`}
              onClick={() => {
                setActiveTab("Directors");
                setCurrentIndex(0);
              }}
            >
              Directors
            </Typography>

            <Typography className={classes.autoHeaderTabSeparator}>
              |
            </Typography>

            <Typography
              className={`${classes.autoHeaderTab} ${
                activeTab === "Advisors" ? classes.autoHeaderTabActive : ""
              }`}
              onClick={() => {
                setActiveTab("Advisors");
                setCurrentIndex(0);
              }}
            >
              Advisors
            </Typography>
          </Box>
        )}
      </Box>
      <Box  className={classes.sectionWrapper}>
        {!open ? (
          <>
            {renderMembers("Directors")}
            {renderMembers("Advisors")}
          </>
        ) : (
          <Fade in={open}>
            <Box  className={classes.carouselWrapperCustom}>
              {isMobile ? (
                <>
                  <Box  className={classes.carouselMobileImgBox}>
                    <img
                      src={currentMember.image}
                      alt={currentMember.name}
                      className={classes.carouselImageCustom}
                    />
                  </Box>
                  <Box className={classes.carouselMobileInfoBox}>
                    {currentMember.designation && (
                      <Box className={classes.designationPill}>
                        {currentMember.designation}
                      </Box>
                    )}
                  <Typography className={classes.carouselNameCustom}>
                      {currentMember.name}
                    </Typography>
                    {currentMember.bigDesignation && (
                      <Typography className={classes.bigDesignationCustom}>
                        {currentMember.bigDesignation}
                      </Typography>
                    )}
                    {currentMember.qualification && (
                      <Typography className={classes.qualificationCustom}>
                        {currentMember.qualification}
                      </Typography>
                    )}
                  </Box>
                  <Box className={classes.carouselMobileDescBox}>
                    <Typography className={classes.carouselDetailsCustom}>
                      {currentMember.description}
                    </Typography>
                  </Box>
                  <Box className={classes.carouselMobileBottomArrowsBox}>
                    <IconButton
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className={classes.arrowButtonMobile}
                      size="small"
                    >
                      <ArrowBackIosNew fontSize="small" />
                    </IconButton>
                    <IconButton
                      //onClick={() => navigate("/about/our-team")}
                      onClick={handleNext}
                      disabled={currentIndex === selectedMembers.length - 1}
                      className={classes.arrowButtonMobile}
                      size="small"
                    >
                      <ArrowForwardIos fontSize="small" />
                    </IconButton>
                  </Box>
                </>
              ) : (
                <>
                  <Box className={classes.carouselDesktopTopRow}>
                    <Box className={classes.carouselDesktopImgBox}>
                      <img
                        src={currentMember.image}
                        alt={currentMember.name}
                        className={classes.carouselImageCustom}
                      />
                    </Box>
                    <Box className={classes.carouselDesktopInfoBox}>
                      {currentMember.designation && (
                        <Box className={classes.designationPill}>
                          {currentMember.designation}
                        </Box>
                      )}
                      <Typography className={classes.carouselNameCustom}>
                        {currentMember.name}
                      </Typography>
                      {currentMember.bigDesignation && (
                        <Typography className={classes.bigDesignationCustom}>
                          {currentMember.bigDesignation}
                        </Typography>
                      )}
                      {currentMember.qualification && (
                        <Typography className={classes.qualificationCustom}>
                          {currentMember.qualification}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Box className={classes.carouselDesktopDescRow}>
                    <IconButton
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className={classes.arrowButtonDesktop}
                      size="small"
                    >
                      <ArrowBackIosNew fontSize="small" />
                    </IconButton>
                    <Box className={classes.carouselDesktopDescBox}>
                      <Typography className={classes.carouselDetailsCustom}>
                        {currentMember.description}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={handleNext}
                      disabled={currentIndex === selectedMembers.length - 1}
                      className={classes.arrowButtonDesktop}
                      size="small"
                    >
                      <ArrowForwardIos fontSize="small" />
                    </IconButton>
                  </Box>
                </>
              )}
              {/* Back Button */}
              <Box className={classes.backButtonWrapper}>
                <IconButton
                  onClick={() => navigate("/about/our-team")}
                  className={classes.backButton}
                >
                  <ArrowBack className={classes.backIconSmall} />
                </IconButton>
              </Box>
            </Box>
          </Fade>
        )}

        {open && (
          <Box className={classes.dotsWrapperCustom}>
            {selectedMembers.map((_, i) => (
              <Typography
                component="span"
                key={i}
                className={`${classes.dot} ${
                  i === currentIndex ? classes.activeDot : ""
                }`}
                onClick={() => {
                  const member = selectedMembers[i];
                  const slug = member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  navigate(`/about/our-team/${slug}`);
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OurTeam;