import { Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import NewsCard from "./NewsCard";
import fishesImg from "../../../assets/home/news_img.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";
import useHomeStyles from "./homeStyles";
import {
  NEWS_FISHES_INITIAL,
  NEWS_FISHES_ANIMATE,
  NEWS_FISHES_TRANSITION,
} from "../Shared/animations";

import newsImg1 from "../../../assets/news_and_blogs/news_1.jpg";
import newsImg2 from "../../../assets/news_and_blogs/news_2.jpg";
import newsImg3 from "../../../assets/news_and_blogs/news_3.jpg";

const newsData = [
  {
    image: newsImg1,
    date: "01 Jun 2025",
    title: "Boosting Fish Farming with Indian Tech",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
    authorLink: "#",
  },
  {
    image: newsImg2,
    date: "15 Jun 2025",
    title: "Sustainable Farming Along India's Coasts",
    description:
      "Andhra Pradesh to Gujarat, India's coastline is becoming a hub for eco-friendly aquaculture Innovations.",
    author: "Shruti Nair",
    authorLink: "#",
  },
  {
    image: newsImg3,
    date: "27 Jun 2025",
    title: "India's Inland Fisheries See Growth",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
    authorLink: "#",
  },
];

const NewsAndBlogs = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box className={classes.newsRoot}>
      <motion.img
        src={fishesImg}
        alt="Fishes"
        className={classes.newsFishesImg}
        initial={NEWS_FISHES_INITIAL}
        animate={NEWS_FISHES_ANIMATE}
        transition={NEWS_FISHES_TRANSITION}
      />
      <SectionTitle title="News & Blogs" />
      <Box
        ref={scrollRef}
        className={
          classes.newsScrollWrap +
          " " +
          (isOverflowing
            ? classes.newsScrollFlexStart
            : classes.newsScrollCenter)
        }
      >
        {isOverflowing && <Box className={classes.newsOverflowBox} />}
        {newsData.map((item, idx) => (
          <Box
            key={idx}
            className={
              classes.newsCardOuter +
              (idx === 0 && !isOverflowing
                ? " " + classes.newsCardOuterFirst
                : "") +
              (idx === newsData.length - 1 && !isOverflowing
                ? " " + classes.newsCardOuterLast
                : "")
            }
          >
            <Box className={classes.newsCardInner}>
              <NewsCard {...item} />
            </Box>
          </Box>
        ))}
        {isOverflowing && <Box />}
      </Box>
    </Box>
  );
};

export default NewsAndBlogs;
