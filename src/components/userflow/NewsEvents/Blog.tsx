// src/components/userflow/NewsEvents/Blog.tsx
import { Box, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import NewsCard from "../Home/NewsCard";
import {
  useCarousel,
  usePagination,
  useCalendarFilter,
  useScrollWithOffset,
} from "./hooks";
import { HeroCarousel, Pagination, CalendarFilter } from "./components";

import blog1 from "../../../assets/news/blog/blog1.png";
import blog2 from "../../../assets/news/blog/blog2.png";

import calendarIcon from "../../../assets/icons/calendar-color.svg";

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
  const { ref: readMoreSectionRef, scrollTo: scrollToReadMore } =
    useScrollWithOffset(200);
  const { ref: detailTopRef, scrollTo: scrollToDetailTop } =
    useScrollWithOffset(200);
  const [detail, setDetail] = useState<DetailView>({
    active: false,
    image: "",
    title: "",
    date: "",
    description: "",
    author: "",
    body: [],
  });

  // Use custom hooks
  const carousel = useCarousel({ items: heroBlogItems });
  const pagination = usePagination({
    items: readMoreBlogData,
    itemsPerPage: 4,
  });
  const calendarFilter = useCalendarFilter();

  const [lastClickedId, setLastClickedId] = useState<number | null>(() => {
    try {
      const v = sessionStorage.getItem("news_last_blog_id");
      return v ? parseInt(v, 10) : null;
    } catch {
      return null;
    }
  });
  // Fade-out highlight after return
  useEffect(() => {
    if (lastClickedId) {
      const t = setTimeout(() => setLastClickedId(null), 2000);
      return () => clearTimeout(t);
    }
  }, [lastClickedId]);

  const handleReadMore = (blog: ReadMoreBlogItem) => {
    setLastClickedId(blog.id);
    try { sessionStorage.setItem("news_last_blog_id", String(blog.id)); } catch {}
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
    setTimeout(() => {
      scrollToDetailTop();
    }, 0);
  };

  // When returning to list (detail closed), scroll to previously clicked card on mobile
  useEffect(() => {
    if (!detail.active && lastClickedId) {
      // Ensure the page containing the blog is visible
      const idx = readMoreBlogData.findIndex((b) => b.id === lastClickedId);
      if (idx >= 0) {
        const page = Math.floor(idx / pagination.itemsPerPage) + 1;
        if (page !== pagination.currentPage) {
          pagination.goToPage(page);
        }
      }
      setTimeout(() => {
        const el = document.getElementById(`blog-card-${lastClickedId}`);
        if (el) {
          try {
            const rect = el.getBoundingClientRect();
            const y = window.scrollY + rect.top - 120;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          } catch {}
        } else {
          scrollToReadMore();
        }
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail.active]);

  if (detail.active) {
    return (
      <Box className={classes.newsDetailView} ref={detailTopRef}>
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

          <Box
            className={classes.backButtonContainer}
            onClick={() =>
              setDetail({
                active: false,
                image: "",
                title: "",
                date: "",
                description: "",
                author: "",
                body: [],
              })
            }
          >
            <Box className={classes.backButton}>
              <ArrowBack />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <HeroCarousel
        title="Read Our Latest Blog Posts"
        currentItem={carousel.currentItem}
        onPrevious={carousel.goToPrevious}
        onNext={carousel.goToNext}
        renderBackground={(item) => (
          <Box className={classes.successStoriesBg}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              className={classes.successStoriesBgImg}
            />
          </Box>
        )}
      />

      {/* Bottom Section - from News */}
      <Box className={classes.readMoreNewsSection}>
        <Box ref={readMoreSectionRef} />
        <Box className={classes.readMoreNewsHeader}>
          <Typography variant="h4" className={classes.readMoreNewsTitle}>
            Explore More Blog Articles
          </Typography>
          <CalendarFilter
            selectedMonth={calendarFilter.selectedMonth}
            selectedYear={calendarFilter.selectedYear}
            openSelect={calendarFilter.openSelect}
            months={calendarFilter.months}
            years={calendarFilter.years}
            onMonthYearChange={calendarFilter.handleMonthYearChange}
            onOpenSelect={calendarFilter.setOpenSelect}
            getDisplayValue={calendarFilter.getDisplayValue}
            pillClassName={`${classes.readMoreNewsCalendarPill} ${classes.blogCalendarPillClickable}`}
            menuPaperClassName={classes.blogSelectMenuPaper}
            menuListClassName={classes.blogSelectMenuList}
          />
        </Box>

        <Box className={classes.readMoreNewsGrid}>
          {pagination.currentItems.map((blog: ReadMoreBlogItem) => (
            <Box
              key={blog.id}
              id={`blog-card-${blog.id}`}
              onClick={() => handleReadMore(blog)}
              className={blog.id === lastClickedId ? classes.blogCardHighlight : undefined}
            >
              <NewsCard {...blog} autoWidth />
            </Box>
          ))}
        </Box>

        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={(p) => {
            pagination.goToPage(p);
            scrollToReadMore();
          }}
          onPrevious={() => {
            pagination.goToPreviousPage();
            scrollToReadMore();
          }}
          onNext={() => {
            pagination.goToNextPage();
            scrollToReadMore();
          }}
          canGoPrevious={pagination.canGoPrevious}
          canGoNext={pagination.canGoNext}
        />
      </Box>
    </Box>
  );
};

export default Blog;
