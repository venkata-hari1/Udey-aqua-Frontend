import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import NewsCard from "../Home/NewsCard";

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

  const itemsPerPage = 4;
  const totalPages = Math.ceil(readMoreNewsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = readMoreNewsData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleReadMore = (news: ReadMoreNewsItem) => {
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
      <Box className={classes.newsContainer}>
        <Box className={classes.newsHeader}>
          <Typography variant="h5" className={classes.newsHeaderTitle}>
            Latest News
          </Typography>
        </Box>

        <Box className={classes.scrollableContent}>
          {newsData.map((news: NewsItem) => (
            <Box key={news.id}>
              <Card className={classes.newsCard}>
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="h6" className={classes.newsTitle}>
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
            <Box key={update.id} className={classes.latestUpdatesCard}>
              <Box
                component="img"
                src={update.image}
                alt="Latest Update"
                className={classes.latestUpdatesImage}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={classes.readMoreNewsSection}>
        <Box className={classes.readMoreNewsHeader}>
          <Typography variant="h4" className={classes.readMoreNewsTitle}>
            Read More News & Updates
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
          {currentNews.map((news: ReadMoreNewsItem) => (
            <Box key={news.id} onClick={() => handleReadMore(news)}>
              <NewsCard {...news} />
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
