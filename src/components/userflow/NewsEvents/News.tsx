// src/components/userflow/NewsEvents/News.tsx
import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useNewsEventsStyles from "./newsEventsStyles";
import NewsCard from "../Home/NewsCard";
import { useScrollWithOffset } from "./hooks";

import latest1 from "../../../assets/news/latest/img0.png";
import latest2 from "../../../assets/news/latest/img1.png";
import latest3 from "../../../assets/news/latest/img2.png";
import latest4 from "../../../assets/news/latest/img3.png";
import latest5 from "../../../assets/news/latest/img0.png";
import latest6 from "../../../assets/news/latest/img0.png";

import newsImg1 from "../../../assets/news_and_blogs/news_1.jpg";
import newsImg2 from "../../../assets/news_and_blogs/news_2.jpg";
import newsImg3 from "../../../assets/news_and_blogs/news_3.jpg";

import calendarIcon from "../../../assets/icons/calendar-color.svg";
import calendarIcon2 from "../../../assets/icons/calendar.svg";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface LatestUpdateItem {
  id: number;
  image: string;
}

interface ReadMoreNewsItem {
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

interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

const newsData: ReadonlyArray<NewsItem> = [
  {
    id: 1,
    title: "Govt Launches New Subsidy Scheme for Aquaculture Farmers",
    date: "July 5, 2025",
    description:
      "The Ministry of Fisheries has announced a new subsidy scheme for aquaculture startups and small-scale farmers. This initiative aims to promote sustainable seafood production and improve rural livelihoods.",
  },
  {
    id: 2,
    title: "Uday Aqua Wins 'Best Innovation in Aquaculture' Award",
    date: "May 29, 2025",
    description:
      "Uday Aqua was honored at the National Aquaculture Innovation Summit 2025 for its pioneering work in Recirculating Aquaculture Systems (RAS) and farmer training programs.",
  },
  {
    id: 3,
    title: "New Sustainable Farming Techniques Introduced",
    date: "April 15, 2025",
    description:
      "Our research team has developed innovative sustainable farming techniques that reduce water consumption by 40% while maintaining optimal fish growth rates.",
  },
  {
    id: 4,
    title: "Partnership Announced with Leading Research Institute",
    date: "March 22, 2025",
    description:
      "Uday Aqua has entered into a strategic partnership with the Central Institute of Brackishwater Aquaculture (CIBA) to advance research in marine aquaculture technologies.",
  },
  {
    id: 5,
    title: "Training Program Success: 500+ Farmers Certified",
    date: "February 8, 2025",
    description:
      "Our comprehensive training program has successfully certified over 500 farmers in advanced aquaculture techniques, contributing to the growth of the sector.",
  },
  {
    id: 6,
    title: "New Hatchery Facility Inaugurated",
    date: "January 20, 2025",
    description:
      "State-of-the-art hatchery facility with capacity to produce 10 million fingerlings annually has been inaugurated, marking a significant milestone in our expansion.",
  },
];

const latestUpdatesData: ReadonlyArray<LatestUpdateItem> = [
  {
    id: 1,
    image: latest1,
  },
  {
    id: 2,
    image: latest2,
  },
  {
    id: 3,
    image: latest3,
  },
  {
    id: 4,
    image: latest4,
  },
  {
    id: 5,
    image: latest5,
  },
  {
    id: 6,
    image: latest6,
  },
];

const readMoreNewsData: ReadonlyArray<ReadMoreNewsItem> = [
  {
    id: 1,
    image: newsImg1,
    date: "27 Jun 2025",
    title: "India's Inland Fisheries See Growth",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
  },
  {
    id: 2,
    image: newsImg2,
    date: "01 Jun 2025",
    title: "Boosting Fish Farming with Indian Tech",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
  },
  {
    id: 3,
    image: newsImg3,
    date: "15 Jun 2025",
    title: "Sustainable Farming Along India's Coasts",
    description:
      "Andhra Pradesh to Gujarat, India's coastline is becoming a hub for eco-friendly aquaculture Innovations.",
    author: "Shruti Nair",
  },
  {
    id: 4,
    image: newsImg1,
    date: "27 Jun 2025",
    title: "India's Inland Fisheries See Growth",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
  },
  {
    id: 5,
    image: newsImg2,
    date: "01 Jun 2025",
    title: "Boosting Fish Farming with Indian Tech",
    description:
      "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
  },
  {
    id: 6,
    image: newsImg3,
    date: "15 Jun 2025",
    title: "Sustainable Farming Along India's Coasts",
    description:
      "Andhra Pradesh to Gujarat, India's coastline is becoming a hub for eco-friendly aquaculture Innovations.",
    author: "Shruti Nair",
  },
];

const News = () => {
  const { classes } = useNewsEventsStyles();
  const location = useLocation();
  const { ref: readMoreSectionRef, scrollTo: scrollToReadMore } =
    useScrollWithOffset(200);
  const { ref: latestTopRef, scrollTo: scrollToLatestTop } =
    useScrollWithOffset(240);
  const { ref: detailTopRef, scrollTo: scrollToDetailTop } =
    useScrollWithOffset(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [detail, setDetail] = useState<DetailView>({
    active: false,
    image: "",
    title: "",
    date: "",
    description: "",
    author: "",
    body: [],
  });
  const [lastReadId, setLastReadId] = useState<number | null>(() => {
    try {
      const v = sessionStorage.getItem("news_last_id");
      return v ? parseInt(v, 10) : null;
    } catch {
      return null;
    }
  });
  const [lastReadSource, setLastReadSource] = useState<"latest" | "grid" | null>(() => {
    try {
      const v = sessionStorage.getItem("news_last_source");
      return v === "latest" || v === "grid" ? v : null;
    } catch {
      return null;
    }
  });
  // Clear last highlight after a short delay to avoid persistent focus effect
  useEffect(() => {
    if (lastReadId) {
      const t = setTimeout(() => setLastReadId(null), 2000);
      return () => clearTimeout(t);
    }
  }, [lastReadId]);
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    error: null,
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
  const ArrowToggleIcon = (props: any) => (
    <KeyboardArrowDownIcon
      {...props}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenSelect((prev) => !prev);
      }}
      style={{
        transform: openSelect ? "rotate(180deg)" : "none",
        transition: "transform 0.2s",
      }}
    />
  );

  const itemsPerPage = 4;
  const totalPages = Math.ceil(readMoreNewsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = readMoreNewsData.slice(startIndex, endIndex);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState({
        isLoading: false,
        error: null,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-open detail when navigated from Home with state
  useEffect(() => {
    const state = location.state as any;
    const openNews = state?.openNews;
    if (openNews) {
      setDetail({
        active: true,
        image: openNews.image,
        title: openNews.title,
        date: openNews.date,
        description: openNews.description,
        author: openNews.author,
        body: [
          "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
          "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
          "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
          "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
        ],
      });
      // Align to top immediately, then refine after mount
      try { window.scrollTo({ top: 0, behavior: "auto" }); } catch {}
      setTimeout(() => {
        scrollToDetailTop();
      }, 0);
    }
  }, [location.state]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    scrollToReadMore();
  };

  const handleReadMore = (news: ReadMoreNewsItem, source: "latest" | "grid" = "grid"): void => {
    setLastReadId(news.id);
    setLastReadSource(source);
    try { sessionStorage.setItem("news_last_id", String(news.id)); } catch {}
    try { sessionStorage.setItem("news_last_source", source); } catch {}
    setDetail({
      active: true,
      image: news.image,
      title: news.title,
      date: news.date,
      description: news.description,
      author: news.author,
      body: [
        "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
        "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
        "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
        "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates. His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
      ],
    });
    // Align to top immediately, then refine after mount
    try { window.scrollTo({ top: 0, behavior: "auto" }); } catch {}
    setTimeout(() => {
      scrollToDetailTop();
    }, 0);
  };

  // When closing detail (back), ensure list shows the correct section and top-aligns
  useEffect(() => {
    if (!detail.active) {
      if (lastReadSource === "latest") {
        setTimeout(() => {
          scrollToLatestTop();
        }, 0);
        return;
      }
      if (lastReadId) {
        const idx = readMoreNewsData.findIndex((n) => n.id === lastReadId);
        if (idx >= 0) {
          const page = Math.floor(idx / itemsPerPage) + 1;
          if (page !== currentPage) {
            setCurrentPage(page);
          }
        }
        setTimeout(() => {
          const el = document.getElementById(`news-card-${lastReadId}`);
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
    }
  }, [detail.active]);

  // Loading state
  if (loadingState.isLoading) {
    return (
      <Box className={classes.newsLoadingContainer}>
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Loading news and updates...
        </Typography>
      </Box>
    );
  }

  // Error state
  if (loadingState.error) {
    return (
      <Box className={classes.newsErrorContainer}>
        <Alert severity="error" className={classes.newsErrorAlert}>
          <Typography variant="h6" gutterBottom>
            Error Loading News
          </Typography>
          <Typography variant="body2">{loadingState.error}</Typography>
        </Alert>
      </Box>
    );
  }

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
      <Box className={classes.newsContainer}>
        <Box className={classes.newsHeader} ref={latestTopRef}>
          <Typography variant="h5" className={classes.newsHeaderTitle}>
            Latest News
          </Typography>
        </Box>

        <Box className={classes.scrollableContent}>
          {newsData.map((news: NewsItem) => (
            <Box key={news.id}>
              <Card
                className={classes.newsCard}
                onClick={() =>
                  handleReadMore(
                    {
                      id: news.id,
                      image: latest1, // fallback image
                      title: news.title,
                      date: news.date,
                      description: news.description,
                      author: "",
                      authorLink: "",
                    } as any,
                    "latest"
                  )
                }
              >
                <CardContent className={classes.newsCardContent}>
                  <Typography
                    variant="h6"
                    className={classes.newsTitle}
                  >
                    {news.title}
                  </Typography>
                  <Typography className={classes.newsDate}>
                    Date: {news.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.newsDescription}
                  >
                    {news.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={classes.latestUpdatesSection}>
        <Box className={classes.latestUpdatesScrollContainer}>
          {latestUpdatesData.map((update: LatestUpdateItem) => (
            <Box key={update.id} className={classes.latestUpdatesCard} sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={update.image}
                alt="Latest Update"
                className={classes.latestUpdatesImage}
              />
              <PdfMark 
                imageUrl={update.image}
                position="top-right"
                size="small"
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={classes.readMoreNewsSection}>
        <Box ref={readMoreSectionRef} />
        <Box className={classes.readMoreNewsHeader}>
          <Typography variant="h4" className={classes.readMoreNewsTitle}>
            Read More News & Updates
          </Typography>
          <Box className={classes.readMoreNewsHeaderRight}>
            <Box
              className={`${classes.readMoreNewsCalendarPill} ${classes.newsCalendarPillClickable}`}
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
                }}
                open={openSelect}
                onOpen={() => {
                  /* no-op to prevent field click from opening */
                }}
                onClose={(event) => {
                  /* ignore outside clicks/escape */ event.preventDefault?.();
                }}
                className={classes.readMoreNewsSelect}
                MenuProps={{
                  PaperProps: { className: classes.newsSelectMenuPaper },
                  MenuListProps: { className: classes.newsSelectMenuList },
                  disableScrollLock: true,
                }}
                renderValue={() => (
                  <Typography variant="body2">24-08-2025</Typography>
                )}
                IconComponent={ArrowToggleIcon as any}
              >
                {years.map((y) =>
                  months.map((_, mIdx) => (
                    <MenuItem key={`${mIdx}-${y}`} value={`${mIdx}-${y}`}>
                      {months[mIdx]} {y}
                    </MenuItem>
                  ))
                )}
              </Select>
            </Box>
          </Box>
        </Box>

        <Box className={classes.readMoreNewsGrid}>
          {currentNews.map((news: ReadMoreNewsItem) => (
            <Box
              key={news.id}
              id={`news-card-${news.id}`}
              onClick={() => handleReadMore(news)}
              className={
                news.id === lastReadId ? classes.newsCardHighlight : undefined
              }
            >
              <NewsCard autoWidth {...news} />
            </Box>
          ))}
        </Box>

        <Box className={classes.readMoreNewsPagination}>
          <IconButton
            onClick={() => handlePageChange(currentPage - 1)}
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
            onClick={() => handlePageChange(currentPage + 1)}
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

export default News;
