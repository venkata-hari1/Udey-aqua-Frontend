import { Box, Typography, Select, MenuItem, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import NewsCard from "../Home/NewsCard";

import awards1 from "../../../assets/news/awards/img1.png";
import awards2 from "../../../assets/news/awards/img2.png";
import awards3 from "../../../assets/news/awards/img3.png";
import awards4 from "../../../assets/news/awards/img4.png";

import calendarIcon from "../../../assets/icons/calendar.svg";
import calendarIcon2 from "../../../assets/icons/calendar-color.svg";

interface AwardItem {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

interface DetailView {
  active: boolean;
  award: AwardItem | null;
}

const awardsData: ReadonlyArray<AwardItem> = [
  {
    id: 1,
    image: awards1,
    title: "Excellence In Sustainable Aquaculture",
    description:
      "Recognized for our eco-conscious practices and commitment to sustainability, Uday Aqua Connect received the Green Aquaculture Award for outstanding environmental stewardship in aquaculture operations.",
    date: "15 Jun 2025",
    author: "Uday Aqua Team",
  },
  {
    id: 2,
    image: awards2,
    title: "Innovation in Aquaculture Technology",
    description:
      "Recognized for our eco-conscious practices and commitment to sustainability, Uday Aqua Connect received the Green Aquaculture Award for outstanding environmental stewardship in aquaculture operations.",
    date: "12 Jun 2025",
    author: "Uday Aqua Team",
  },
  {
    id: 3,
    image: awards3,
    title: "Community Development & Empowerment",
    description:
      "Recognized for our eco-conscious practices and commitment to sustainability, Uday Aqua Connect received the Green Aquaculture Award for outstanding environmental stewardship in aquaculture operations.",
    date: "10 Jun 2025",
    author: "Uday Aqua Team",
  },
  {
    id: 4,
    image: awards4,
    title: "Excellence In Sustainable Aquaculture",
    description:
      "Recognized for our eco-conscious practices and commitment to sustainability, Uday Aqua Connect received the Green Aquaculture Award for outstanding environmental stewardship in aquaculture operations.",
    date: "08 Jun 2025",
    author: "Uday Aqua Team",
  },
  {
    id: 5,
    image: awards3,
    title: "Community Development & Empowerment",
    description:
      "Recognized for our eco-conscious practices and commitment to sustainability, Uday Aqua Connect received the Green Aquaculture Award for outstanding environmental stewardship in aquaculture operations.",
    date: "05 Jun 2025",
    author: "Uday Aqua Team",
  },
  {
    id: 6,
    image: awards4,
    title: "Excellence In Sustainable Aquaculture",
    description:
      "Recognized for our eco-conscious practices and commitment to sustainability, Uday Aqua Connect received the Green Aquaculture Award for outstanding environmental stewardship in aquaculture operations.",
    date: "03 Jun 2025",
    author: "Uday Aqua Team",
  },
];

const Awards = () => {
  const { classes } = useNewsEventsStyles();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [detail, setDetail] = useState<DetailView>({
    active: false,
    award: null,
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

  const handlePrevious = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? awardsData.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === awardsData.length - 1 ? 0 : prev + 1));
  };

  const currentAward = awardsData[currentIndex];

  // Pagination logic
  const itemsPerPage = 4;
  const totalPages = Math.ceil(awardsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAwards = awardsData.slice(startIndex, endIndex);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handlePreviousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleReadMore = (award: AwardItem): void => {
    setDetail({
      active: true,
      award,
    });
  };

  if (detail.active && detail.award) {
    return (
      <Box className={classes.awardsRoot}>
        <Box className={classes.awardsDetailView}>
          <Box className={classes.awardsDetailHeader}>
            <Box className={classes.awardsDetailCalendarTopRight}>
              <Box
                component="img"
                src={calendarIcon2}
                alt="Calendar"
                width={16}
                height={16}
              />
              <Typography variant="body2">{detail.award.date}</Typography>
            </Box>
            <Box
              component="img"
              src={detail.award.image}
              alt={detail.award.title}
              className={classes.awardsDetailImage}
            />
          </Box>

          <Box className={classes.awardsDetailContent}>
            <Typography className={classes.awardsDetailTitle}>
              {detail.award.title}
            </Typography>
            <Typography className={classes.awardsDetailDescription}>
              {detail.award.description}
            </Typography>
            <Typography className={classes.awardsDetailParagraph}>
              This prestigious recognition highlights our commitment to
              advancing sustainable aquaculture practices and fostering
              innovation in the industry. Our team's dedication to environmental
              stewardship and community development has set new standards for
              excellence in aquaculture operations.
            </Typography>
            <Typography className={classes.awardsDetailParagraph}>
              The award ceremony was attended by industry leaders, government
              officials, and representatives from various aquaculture
              organizations. This recognition not only validates our current
              achievements but also motivates us to continue pushing boundaries
              in sustainable aquaculture development.
            </Typography>
            <Typography className={classes.awardsDetailParagraph}>
              We remain committed to our mission of promoting eco-friendly
              aquaculture practices while ensuring economic viability for
              farmers and contributing to food security in our region.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.awardsRoot}>
      <Typography variant="h4" className={classes.awardsHeading}>
        Watch Our Latest Awards & Events
      </Typography>

      <Box className={classes.awardsCarousel}>
        <Box
          className={classes.awardsBg}
          style={{ backgroundImage: `url(${currentAward.image})` }}
        />

        <Box
          className={`${classes.awardsArrow} ${classes.awardsArrowLeft}`}
          onClick={handlePrevious}
        >
          <ChevronLeftIcon />
        </Box>

        <Box
          className={`${classes.awardsArrow} ${classes.awardsArrowRight}`}
          onClick={handleNext}
        >
          <ChevronRightIcon />
        </Box>

        <Box className={classes.awardsOverlay}>
          <Typography variant="h3" className={classes.awardsTitle}>
            {currentAward.title}
          </Typography>
        </Box>
      </Box>

      <Box className={classes.awardsHeaderBar}>
        <Typography variant="h4" className={classes.awardsHeaderTitle}>
          See All Our Awards & Recognitions
        </Typography>
        <Box className={classes.awardsHeaderRight}>
          <Box className={classes.awardsCalendarPill}>
            <Box
              component="img"
              src={calendarIcon}
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
              className={classes.awardsSelect}
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
                <Typography variant="body2">{`${months[selMonth]} ${selYear}`}</Typography>
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

      {/* Using NewsCard layout for Awards */}
      <Box className={classes.readMoreNewsGrid}>
        {currentAwards.map((award: AwardItem) => (
          <Box key={award.id} onClick={() => handleReadMore(award)}>
            <NewsCard
              image={award.image}
              date={award.date}
              title={award.title}
              description={award.description}
              author={award.author}
            />
          </Box>
        ))}
      </Box>

      <Box className={classes.awardsPagination}>
        <IconButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={classes.awardsPaginationArrow}
        >
          <ChevronLeftIcon />
        </IconButton>

        {Array.from({ length: totalPages }, (_, index) => (
          <Box
            key={index + 1}
            className={`${classes.awardsPaginationButton} ${
              currentPage === index + 1
                ? classes.awardsPaginationButtonActive
                : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Box>
        ))}

        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={classes.awardsPaginationArrow}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Awards;
