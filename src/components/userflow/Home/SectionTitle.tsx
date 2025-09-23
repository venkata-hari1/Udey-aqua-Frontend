// src/components/userflow/Home/SectionTitle.tsx
import { Box, Typography, Button } from "@mui/material";
import sectionHeader from "../../../assets/home/section_header.svg";
import useHomeStyles from "./homeStyles";
import { useNavigate } from "react-router-dom";  // Add this import for useNavigate

const SectionTitle = ({
  title,
  whiteBg = true,
}: {
  title: string;
  whiteBg?: boolean;
}) => {
  const { classes } = useHomeStyles();
  const navigate = useNavigate();  // Hook directly here for testing

  const handleArrowClick = () => {
    try {
      navigate("/about/our-team");
    } catch {}
    // Prevent any residual scroll position issues
    try { setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0); } catch {}
  };

  return (
    <Box className={classes.sectionTitleRoot}>
      <Box
        className={`${classes.sectionTitleInner} ${
          whiteBg ? "" : classes.sectionTitleNoBg
        }`}
      >
        <Box
          component="img"
          src={sectionHeader}
          alt=""
          className={classes.sectionTitleImg}
        />
        <Typography className={classes.sectionTitleText}>{title}</Typography>
        <Button
          onClick={handleArrowClick}  // Direct handler with debug
          disableRipple
          sx={{
            p: 0,
            minWidth: "auto",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            "&:hover": {
              backgroundColor: "transparent",
              transform: "scale(1.1)",
            },
          }}
        >
          <Box
            component="img"
            src={sectionHeader}
            alt="Navigate to Our Team"
            className={classes.sectionTitleImg}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default SectionTitle;