import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";
import teamImg from "../../../assets/team/team_1.png";
import teamBg from "../../../assets/team/team_bg.png";
import fishesImg from "../../../assets/home/team_image.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./UseAutoHorizontalScroll";
import useIsOverflowing from "./UseIsOverflowing";
import useHomeStyles from "./homeStyles";

const teamData = [
  {
    image: teamImg,
    name: "Uday Krishna",
    location: "Hyderabad, Telangana",
    role: "Managing Director",
    roleColor: "#1976d2"
  },
  {
    image: teamImg,
    name: "Uday Krishna",
    location: "Hyderabad, Telangana",
    role: "Director",
    roleColor: "#1976d2"
  }
];

const Team = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box className={classes.teamRoot}>
      <Box component="img" src={fishesImg} alt="Fishes" className={classes.teamFishesImg} />
      <SectionTitle title="Our Directors & Advisors" />
      <Box className={classes.teamTabs}>
        <Box className={classes.teamTabActive}>Directors</Box>
        <Box className={classes.teamTabDivider}>|</Box>
        <Box className={classes.teamTabInactive}>Advisors</Box>
      </Box>
      <Box className={classes.teamScrollWrap}>
        <Box component="img" src={teamBg} alt="Team Background" className={classes.teamBgImg} />
        <Box
          ref={scrollRef}
          className={
            classes.teamCardsScroll +
            (isOverflowing ? ' ' + classes.teamCardsScrollFlexStart : '')
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