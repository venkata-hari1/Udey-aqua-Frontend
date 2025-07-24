import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import useAutoHorizontalScroll from "./UseAutoHorizontalScroll";
import useIsOverflowing from "./UseIsOverflowing";
import useHomeStyles from "./homeStyles";

import project1 from "../../../assets/projects/project_1.jpg";
import project2 from "../../../assets/projects/project_2.jpg";
import project3 from "../../../assets/projects/project_3.jpg";
import project4 from "../../../assets/projects/project_4.png";

const categories = [
  "All",
  "Hatchery",
  "Cage Culture",
  "Pond Culture",
  "Sea Weed",
  "Recirculatory Aquaculture System (RAS)",
  "Circulatory Aquaculture System (CAS)"
];

const projects = [
  {
    title: "Our Journey and Mission",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting and comprehensive training programs.`,
    img: project1,
    highlight: false
  },{
    title: "Uday Aqua sustainable water projects in Hyderabad",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Our Journey and Mission Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting. Our Journey and Mission Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers`,
    img: project2,
    highlight: true
  },
  {
    title: "Our Journey and Mission",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting and comprehensive training programs.`,
    img: project3,
    highlight: false
  },
  {
    title: "Our Journey and Mission",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting and comprehensive training programs.`,
    img: project4,
    highlight: false
  }
];

const OurProjects = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box className={classes.ourProjectsRoot}>
      <SectionTitle title="Our Projects" />
      <Box className={classes.ourProjectsInner}>
        <Box className={classes.ourProjectsCategories}>
          {categories.map((cat, idx) => (
            <Box
              key={cat}
              className={
                classes.ourProjectsCategory +
                (idx === 0 ? ' ' + classes.ourProjectsCategoryActive : '')
              }
            >
              {cat}
            </Box>
          ))}
        </Box>
        <Box
          ref={scrollRef}
          className={
            classes.ourProjectsScroll +
            (isOverflowing ? ' ' + classes.ourProjectsScrollFlexStart : '')
          }
        >
          {isOverflowing && <Box />}
          {projects.map((project, idx) => (
            <Box key={idx} className={classes.ourProjectsCardOuter}>
                <ProjectCard {...project} />
            </Box>
          ))}
          {isOverflowing && <Box />}
        </Box>
      </Box>
    </Box>
  );
};

export default OurProjects;