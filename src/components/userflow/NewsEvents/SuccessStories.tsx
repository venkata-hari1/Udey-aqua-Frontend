// src/components/userflow/NewsEvents/SuccessStories.tsx
import { Box, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import calendarIcon from "../../../assets/icons/calendar-color.svg";
import news1 from "../../../assets/news/past/past_news_1.png";
import news2 from "../../../assets/news/past/past_news_2.png";
import news3 from "../../../assets/news/success_story.png";
import { useCarousel, usePagination, useCalendarFilter, useScrollWithOffset } from "./hooks";
import { HeroCarousel, Pagination, CalendarFilter } from "./components";

interface CarouselItem {
  image: string;
  title: string;
  subtitle?: string;
  time?: string;
  images: string[];
}

const useStyles = useNewsEventsStyles;

const heroItems: ReadonlyArray<CarouselItem> = [
  {
    image: news1,
    title: "Empowering In Pearl Spot Cultivation – Srikakulam",
    images: [news1],
  },
  {
    image: news2,
    title: "Community-Driven Pond Revitalization – Vizianagaram",
    images: [news2],
  },
  {
    image: news3,
    title: "Scaling Sustainable RAS Units – Andhra Pradesh",
    images: [news3],
  },
];

const listItems: ReadonlyArray<CarouselItem> = [
  {
    image: news1,
    title: "Eco-Friendly Mud Crab Farming – Nizamabad",
    subtitle:
      "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from....",
    time: "01 Jun 2025 • 5 min read",
    images: [news1, news2, news3, news1],
  },
  {
    image: news2,
    title: "Transforming Lives With Sea Bass Farming – Arm oor",
    subtitle:
      "With guidance, farmers improved yields through optimized nutrition and water quality.",
    time: "01 Jun 2025",
    images: [news2, news1],
  },
  {
    image: news3,
    title: "Scaling Sustainable RAS Units – Andhra Pradesh",
    subtitle:
      "RAS adoption accelerated with training on biofilters and stocking densities.",
    time: "02 Jun 2025",
    images: [news3],
  },
  {
    image: news1,
    title: "Community-Driven Pond Revitalization – Vizianagaram",
    subtitle:
      "Local community partnered to desilt ponds and reintroduce native species.",
    time: "03 Jun 2025",
    images: [news1],
  },
  {
    image: news2,
    title: "Pearl Spot Cultivation – Srikakulam",
    subtitle:
      "Demonstration units showed faster growth cycles and improved feed conversion.",
    time: "04 Jun 2025",
    images: [news2],
  },
  {
    image: news1,
    title: "Community-Driven Pond Revitalization – Vizianagaram",
    subtitle:
      "Local community partnered to desilt ponds and reintroduce native species.",
    time: "03 Jun 2025",
    images: [news1],
  },
  {
    image: news2,
    title: "Pearl Spot Cultivation – Srikakulam",
    subtitle:
      "Demonstration units showed faster growth cycles and improved feed conversion.",
    time: "04 Jun 2025",
    images: [news2],
  },
  {
    image: news1,
    title: "Community-Driven Pond Revitalization – Vizianagaram",
    subtitle:
      "Local community partnered to desilt ponds and reintroduce native species.",
    time: "03 Jun 2025",
    images: [news1],
  },
  {
    image: news2,
    title: "Pearl Spot Cultivation – Srikakulam",
    subtitle:
      "Demonstration units showed faster growth cycles and improved feed conversion.",
    time: "04 Jun 2025",
    images: [news2],
  },
];

const SuccessStories = () => {
  const { classes } = useStyles();

  // Use custom hooks
  const carousel = useCarousel({ items: heroItems });
  const pagination = usePagination({ items: listItems, itemsPerPage: 2 });
  const calendarFilter = useCalendarFilter();
  const { ref: listTopRef, scrollTo: scrollToListTop } = useScrollWithOffset(200);
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    src: string;
    alt: string;
  }>({ open: false, src: "", alt: "" });
  const [detail, setDetail] = useState<{
    active: boolean;
    image: string;
    title: string;
    body: string[];
    author?: string;
    images?: string[];
  }>({ active: false, image: "", title: "", body: [] });

  // Ensure when the page changes (e.g., clicking page 5), we scroll to the list section top
  useEffect(() => {
    setTimeout(() => {
      scrollToListTop();
    }, 0);
  }, [pagination.currentPage]);

  return (
    <Box className={classes.successStoriesRoot}>
      {!detail.active && (
        <HeroCarousel
          title="Watch Our Latest Success Stories"
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
      )}

      {!detail.active && (
        <Box className={classes.successStoriesHeaderBar}>
          <Typography className={classes.successStoriesHeaderTitle}>
            Browse Past Successes
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
            className={classes.successStoriesHeaderRight}
            pillClassName={`${classes.successStoriesCalendarPill} ${classes.successStoriesCalendarPillClickable}`}
            selectClassName={classes.successStoriesSelect}
            menuPaperClassName={classes.successStoriesSelectMenuPaper}
            menuListClassName={classes.successStoriesSelectMenuList}
          />
        </Box>
      )}

      {/* Detail View */}
      {detail.active ? (
        <Box className={classes.successStoriesDetailContainer}>
          <Box className={classes.storyModalContent}>
            {detail.images && detail.images.length === 1 && (
              <Box className={classes.storyModalHero}>
                <img
                  src={detail.images[0]}
                  alt={detail.title}
                  className={classes.storyModalImage}
                />
                <Box className={classes.storyCalendarTopRight}>
                  <Box
                    component="img"
                    src={calendarIcon}
                    alt="Calendar"
                    width={16}
                    height={16}
                  />
                  <Typography variant="body2">{`27-06-2025`}</Typography>
                </Box>
              </Box>
            )}
            <Box className={classes.storyModalBody}>
              <Typography className={classes.storyModalTitle}>
                {`SUCCESS STORY: ${detail.title}`}
              </Typography>
              {detail.images && detail.images.length > 1 && (
                <Box className={classes.storyCalendarTopRight}>
                  <Box
                    component="img"
                    src={calendarIcon}
                    alt="Calendar"
                    width={16}
                    height={16}
                  />
                  <Typography variant="body2">{`27-06-2025`}</Typography>
                </Box>
              )}
              <Box className={classes.storyMetaList}>
                <Typography className={classes.storyMetaItem}>
                  <Typography component="span" className={classes.storyMetaLabel}>
                    Name:
                  </Typography>{" "}
                  Eluru Demo Unit
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <Typography component="span" className={classes.storyMetaLabel}>Business Type:</Typography>{" "}
                  Aquaculture
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <Typography component="span" className={classes.storyMetaLabel}>
                    Address:
                  </Typography>{" "}
                  2025
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <Typography component="span" className={classes.storyMetaLabel}>Activity:</Typography>{" "}
                  Circulatory Aquaculture System (CAS)
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <Typography component="span" className={classes.storyMetaLabel}>
                    Experience:
                  </Typography>{" "}
                  1 Ton
                </Typography>
              </Box>
              {detail.body.map((p, i) => (
                <Typography key={i} className={classes.storyModalParagraph}>
                  {p}
                </Typography>
              ))}
              {detail.images && detail.images.length > 1 && (
                <Box className={classes.storyImageGrid}>
                  {detail.images.map((img, idx) => (
                    <Box
                      key={idx}
                      className={classes.storyGridItem}
                      onClick={() =>
                        setLightbox({ open: true, src: img, alt: detail.title })
                      }
                    >
                      <img
                        src={img}
                        alt={`${detail.title}-${idx}`}
                        className={classes.storyGridImg}
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
            <Box
              className={classes.backButtonContainer}
              onClick={() => {
                setDetail({ active: false, image: "", title: "", body: [] });
                setTimeout(() => {
                  const el = listTopRef?.current;
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 200;
                    try { window.scrollTo(0, Math.max(0, y)); } catch {}
                  }
                }, 0);
              }}
            >
              <Box className={classes.backButton}>
                <ArrowBack />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={classes.cardsSection}>
          <Box ref={listTopRef} />
          <Box className={classes.cardsGrid}>
            {pagination.currentItems.map((it, i) => (
              <Box key={`${it.title}-${i}`} className={classes.storyCard}>
                <Box className={classes.storyCardTop}>
                  <img
                    src={it.image}
                    alt={it.title}
                    className={classes.storyCardImg}
                    onClick={() =>
                      setLightbox({ open: true, src: it.image, alt: it.title })
                    }
                  />
                  {(() => {
                    const parts = (it.time || "").split(" ");
                    const day = parts[0] || "01";
                    const mon = parts[1] || "Jan";
                    const year = parts[2] || "2025";
                    return (
                      <Box className={classes.storyDateBadge}>
                        <div className={classes.bigText}>{day}</div>
                        <div>{mon}</div>
                        <div>{year}</div>
                      </Box>
                    );
                  })()}
                </Box>
                <Box className={classes.storyCardContent}>
                  <Typography className={classes.storyTitle}>
                    {it.title}
                  </Typography>
                  {it.subtitle && (
                    <Typography className={classes.storyExcerpt}>
                      {it.subtitle}
                    </Typography>
                  )}
                  <Box
                    className={classes.storyButton}
                    onClick={() => {
                      setDetail({
                        active: true,
                        image: it.image,
                        title: it.title,
                        body: [
                          "Farmer Sunitha switched to mud crab farming using our sustainable pond design and feeding methods. With guidance from our CAS-based training, he achieved healthier crab sizes and reduced mortality rates.",
                          "His eco-conscious approach was featured in a regional agri‑magazine, inspiring others to adopt cleaner aquaculture practices.",
                          "With continued support, yields improved through optimized nutrition and water quality.",
                        ],
                        author: "Sunitha",
                        images: it.images,
                      });
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }, 100);
                    }}
                  >
                    Read More
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className={classes.testimonialPaginationWrapper}>
          <Box className={classes.testimonialPagination}>
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={pagination.goToPage}
                onPrevious={pagination.goToPreviousPage}
                onNext={pagination.goToNextPage}
                canGoPrevious={pagination.canGoPrevious}
                canGoNext={pagination.canGoNext}
                className={classes.testimonialPagination}
              />
            </Box>
          </Box>
        </Box>
      )}
      {lightbox.open && (
        <Box
          className={classes.lightboxOverlay}
          onClick={() => setLightbox({ open: false, src: "", alt: "" })}
        >
          <Box
            className={classes.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Box
              className={classes.lightboxClose}
              onClick={() => setLightbox({ open: false, src: "", alt: "" })}
            >
              ×
            </Box>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className={classes.lightboxImage}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SuccessStories;
