import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import useNewsEventsStyles from "./newsEventsStyles";
import {
  useCarousel,
  usePagination,
  useCalendarFilter,
  useScrollWithOffset,
} from "./hooks";
import { HeroCarousel, Pagination, CalendarFilter } from "./components";

import awards1 from "../../../assets/news/awards/img1.png";
import awards2 from "../../../assets/news/awards/img2.png";
import awards3 from "../../../assets/news/awards/img3.png";
import awards4 from "../../../assets/news/awards/img4.png";

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
  const { ref: readMoreSectionRef, scrollTo: scrollToReadMore } =
    useScrollWithOffset(200);
  const { ref: detailTopRef, scrollTo: scrollToDetailTop } =
    useScrollWithOffset(200);
  const [detail, setDetail] = useState<DetailView>({
    active: false,
    award: null,
  });

  // Use custom hooks
  const carousel = useCarousel({ items: awardsData });
  const pagination = usePagination({ items: awardsData, itemsPerPage: 4 });
  const calendarFilter = useCalendarFilter();

  const handleReadMore = (award: AwardItem): void => {
    setDetail({
      active: true,
      award,
    });
    setTimeout(() => {
      scrollToDetailTop();
    }, 0);
  };

  if (detail.active && detail.award) {
    return (
      <Box className={classes.awardsRoot} ref={detailTopRef}>
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
            <Box
              className={classes.backButtonContainer}
              onClick={() => setDetail({ active: false, award: null })}
            >
              <Box className={classes.backButton}>
                <ArrowBack />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={classes.awardsRoot}>
      <HeroCarousel
        title="Watch Our Latest Awards & Events"
        currentItem={carousel.currentItem}
        onPrevious={carousel.goToPrevious}
        onNext={carousel.goToNext}
        renderBackground={(item) => (
          <Box className={classes.awardsBg}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              className={classes.awardsBgImg}
            />
          </Box>
        )}
        renderTitle={(item) => (
          <Typography variant="h3" className={classes.awardsTitle}>
            {item.title}
          </Typography>
        )}
        className={classes.awardsRoot}
      />

      <Box className={classes.awardsHeaderBar}>
        <Typography variant="h4" className={classes.awardsHeaderTitle}>
          See All Our Awards & Recognitions
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
          className={classes.awardsHeaderRight}
          pillClassName={classes.awardsCalendarPill}
          selectClassName={classes.awardsSelect}
        />
      </Box>

      {/* Custom awards cards (no NewsCard) */}
      <Box className={classes.awardsCardsGrid}>
        {pagination.currentItems.map((award: AwardItem) => (
          <Box
            key={award.id}
            className={classes.awardsCard}
            onClick={() => handleReadMore(award)}
          >
            <Box
              component="img"
              src={award.image}
              alt={award.title}
              className={classes.awardsCardImage}
            />
            <Box className={classes.awardsCardContent}>
              <Typography className={classes.awardsCardTitle}>
                {award.title}
              </Typography>
              <Typography className={classes.awardsCardDescription}>
                {award.description}
              </Typography>
              <Box className={classes.awardsCardButton}>Read More</Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={classes.awardsPagination} ref={readMoreSectionRef}>
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
          className={classes.awardsPagination}
        />
      </Box>
    </Box>
  );
};

export default Awards;
