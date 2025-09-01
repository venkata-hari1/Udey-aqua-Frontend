import { Box, Typography, Select, MenuItem, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import NewsCard from "../Home/NewsCard";

import blog1 from "../../../assets/news/blog/blog1.png";
import blog2 from "../../../assets/news/blog/blog2.png";

import calendarIcon from "../../../assets/icons/calendar-color.svg";
import calendarIcon2 from "../../../assets/icons/calendar.svg";

interface BlogItem {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  time?: string;
}

interface ReadMoreBlogItem {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  author: string;
  authorLink?: string;
}

interface DetailView {
  active: boolean;
  image: string;
  title: string;
  date: string;
  description: string;
  author: string;
  body: string[];
}

const heroBlogItems: ReadonlyArray<BlogItem> = [
  {
    id: 1,
    image: blog1,
    title: "Sustainable Aquaculture Practices in Modern Farming",
  },
  {
    id: 2,
    image: blog2,
    title: "Innovations in Fish Farming Technology",
  },
  {
    id: 3,
    image: blog1,
    title: "Community Development Through Aquaculture",
  },
];

const readMoreBlogData: ReadonlyArray<ReadMoreBlogItem> = [
  {
    id: 1,
    image: blog1,
    date: "27 Jun 2025",
    title: "Sustainable Aquaculture Practices in Modern Farming",
    description:
      "Exploring innovative approaches to sustainable aquaculture that benefit both farmers and the environment.",
    author: "Dr. Rajesh Kumar",
  },
  {
    id: 2,
    image: blog2,
    date: "01 Jun 2025",
    title: "Innovations in Fish Farming Technology",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Priya Sharma",
  },
  {
    id: 3,
    image: blog1,
    date: "15 Jun 2025",
    title: "Community Development Through Aquaculture",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Amit Patel",
  },
  {
    id: 4,
    image: blog2,
    date: "27 Jun 2025",
    title: "Sustainable Aquaculture Practices in Modern Farming",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Dr. Rajesh Kumar",
  },
  {
    id: 5,
    image: blog1,
    date: "01 Jun 2025",
    title: "Innovations in Fish Farming Technology",
    description:
      "How modern technology is revolutionizing traditional fish farming methods and improving yields.",
    author: "Priya Sharma",
  },
  {
    id: 6,
    image: blog2,
    date: "15 Jun 2025",
    title: "Community Development Through Aquaculture",
    description:
      "Stories of how aquaculture projects are transforming rural communities and creating sustainable livelihoods.",
    author: "Amit Patel",
  },
];

const Blog = () => {
  const { classes } = useNewsEventsStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [detail, setDetail] = useState<DetailView>({
    active: false,
    image: "",
    title: "",
    date: "",
    description: "",
    author: "",
    body: [],
  });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ] as const;
  const years = [2024, 2025, 2026];
  const [selMonth, setSelMonth] = useState<number>(5);
  const [selYear, setSelYear] = useState<number>(2025);
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroBlogItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === heroBlogItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentBlog = heroBlogItems[currentIndex];

  // Pagination logic
  const itemsPerPage = 4;
  const totalPages = Math.ceil(readMoreBlogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = readMoreBlogData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleReadMore = (blog: ReadMoreBlogItem) => {
    setDetail({
      active: true,
      image: blog.image,
      title: blog.title,
      date: blog.date,
      description: blog.description,
      author: blog.author,
      body: [
        "Our comprehensive research into sustainable aquaculture practices has revealed innovative approaches that can significantly improve both environmental outcomes and economic returns for farmers. By implementing integrated multi-trophic aquaculture systems, we've seen remarkable improvements in water quality and resource utilization.",
        "The adoption of modern technology in traditional fish farming has opened new possibilities for small-scale farmers. Smart monitoring systems, automated feeding mechanisms, and data-driven decision making are transforming how aquaculture operations are managed across the country.",
        "Community-based aquaculture projects have demonstrated the power of collective action in rural development. When local communities come together to implement sustainable farming practices, the results extend far beyond individual farms to benefit entire regions.",
        "The future of aquaculture lies in balancing technological innovation with traditional wisdom. Our research continues to explore ways to make advanced farming techniques accessible to farmers of all scales while maintaining the ecological integrity of our water resources.",
      ],
    });
  };

  if (detail.active) {
    return (
      <Box className={classes.newsDetailView}>
        <Box className={classes.newsDetailHeader}>
          <Box className={classes.newsDetailCalendarTopRight}>
            <Box
              component="img"
              src={calendarIcon}
              alt="Calendar"
              width={16}
              height={16}
            />
            <Typography variant="body2">{detail.date}</Typography>
          </Box>
          <Box
            component="img"
            src={detail.image}
            alt={detail.title}
            className={classes.newsDetailImage}
          />
        </Box>

        <Box className={classes.newsDetailContent}>
          <Typography variant="h4" className={classes.newsDetailTitle}>
            {detail.title}
          </Typography>

          <Typography className={classes.newsDetailDescription}>
            {detail.description}
          </Typography>

          {detail.body.map((paragraph, index) => (
            <Typography key={index} className={classes.newsDetailParagraph}>
              {paragraph}
            </Typography>
          ))}

          <Typography className={classes.newsDetailAuthor}>
            {detail.author}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      {/* Top Carousel Section - from SuccessStories */}
      <Box className={classes.successStoriesRoot}>
        <Typography variant="h4" className={classes.successStoriesHeading}>
          Read Our Latest Blog Posts
        </Typography>

        <Box className={classes.successStoriesCarousel}>
          <Box
            className={classes.successStoriesBg}
            style={{ backgroundImage: `url(${currentBlog.image})` }}
          />

          <IconButton
            onClick={handlePrevious}
            className={`${classes.successStoriesArrow} ${classes.successStoriesArrowLeft}`}
            aria-label="Previous"
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            className={`${classes.successStoriesArrow} ${classes.successStoriesArrowRight}`}
            aria-label="Next"
          >
            <ChevronRightIcon />
          </IconButton>

          <Box className={classes.successStoriesOverlay}>
            <Typography className={classes.successStoriesTitle}>
              {currentBlog.title}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section - from News */}
      <Box className={classes.readMoreNewsSection}>
        <Box className={classes.readMoreNewsHeader}>
          <Typography variant="h4" className={classes.readMoreNewsTitle}>
            Explore More Blog Articles
          </Typography>
          <Box className={classes.readMoreNewsHeaderRight}>
            <Box
              className={classes.readMoreNewsCalendarPill}
              sx={{ cursor: "pointer" }}
            >
              <Box
                component="img"
                src={calendarIcon2}
                alt="Calendar"
                width={16}
                height={16}
              />
              <Select
                value={`${selMonth}-${selYear}`}
                onChange={(e) => {
                  const [m, y] = String(e.target.value).split("-");
                  setSelMonth(Number(m));
                  setSelYear(Number(y));
                  setOpenSelect(false);
                }}
                open={openSelect}
                onOpen={() => setOpenSelect(true)}
                onClose={() => setOpenSelect(false)}
                className={classes.readMoreNewsSelect}
                MenuProps={{
                  PaperProps: {
                    style: { maxHeight: 200, overflowY: "auto" },
                  },
                  MenuListProps: {
                    style: { maxHeight: 200, overflowY: "auto" },
                  },
                  disableScrollLock: true,
                }}
                renderValue={() => (
                  <Typography variant="body2">24-08-2025</Typography>
                )}
                IconComponent={KeyboardArrowDownIcon}
              >
                {years.map((y) =>
                  months.map((_, mIdx) => (
                    <MenuItem
                      key={`${mIdx}-${y}`}
                      value={`${mIdx}-${y}`}
                      onClick={() => setOpenSelect(false)}
                    >
                      {months[mIdx]} {y}
                    </MenuItem>
                  ))
                )}
              </Select>
            </Box>
          </Box>
        </Box>

        <Box className={classes.readMoreNewsGrid}>
          {currentBlogs.map((blog: ReadMoreBlogItem) => (
            <Box key={blog.id} onClick={() => handleReadMore(blog)}>
              <NewsCard {...blog} />
            </Box>
          ))}
        </Box>

        <Box className={classes.readMoreNewsPagination}>
          <IconButton
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={classes.readMoreNewsPaginationArrow}
          >
            <ChevronLeftIcon />
          </IconButton>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Box
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${classes.readMoreNewsPaginationButton} ${
                page === currentPage
                  ? classes.readMoreNewsPaginationButtonActive
                  : ""
              }`}
            >
              {page}
            </Box>
          ))}
          <IconButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={classes.readMoreNewsPaginationArrow}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
