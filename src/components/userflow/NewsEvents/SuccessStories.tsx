import { Box, IconButton, Typography, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import calendarIcon from "../../../assets/icons/calendar-color.svg";
import calendarIcon2 from "../../../assets/icons/calendar.svg";
import news1 from "../../../assets/news/past/past_news_1.png";
import news2 from "../../../assets/news/past/past_news_2.png";
import news3 from "../../../assets/news/success_story.png";

interface CarouselItem {
  image: string;
  title: string;
  subtitle?: string;
  time?: string;
  images?: string[];
}

const useStyles = useNewsEventsStyles;

const heroItems: ReadonlyArray<CarouselItem> = [
  {
    image: news1,
    title: "Empowering In Pearl Spot Cultivation – Srikakulam",
  },
  {
    image: news2,
    title: "Community-Driven Pond Revitalization – Vizianagaram",
  },
  {
    image: news3,
    title: "Scaling Sustainable RAS Units – Andhra Pradesh",
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
  },
  {
    image: news2,
    title: "Pearl Spot Cultivation – Srikakulam",
    subtitle:
      "Demonstration units showed faster growth cycles and improved feed conversion.",
    time: "04 Jun 2025",
  },
  {
    image: news1,
    title: "Community-Driven Pond Revitalization – Vizianagaram",
    subtitle:
      "Local community partnered to desilt ponds and reintroduce native species.",
    time: "03 Jun 2025",
  },
  {
    image: news2,
    title: "Pearl Spot Cultivation – Srikakulam",
    subtitle:
      "Demonstration units showed faster growth cycles and improved feed conversion.",
    time: "04 Jun 2025",
  },
  {
    image: news1,
    title: "Community-Driven Pond Revitalization – Vizianagaram",
    subtitle:
      "Local community partnered to desilt ponds and reintroduce native species.",
    time: "03 Jun 2025",
  },
  {
    image: news2,
    title: "Pearl Spot Cultivation – Srikakulam",
    subtitle:
      "Demonstration units showed faster growth cycles and improved feed conversion.",
    time: "04 Jun 2025",
  },
];

const SuccessStories = () => {
  const [index, setIndex] = useState<number>(0);
  const { classes, cx } = useStyles();
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

  const prev: () => void = () =>
    setIndex((p) => (p - 1 + heroItems.length) % heroItems.length);
  const next: () => void = () => setIndex((p) => (p + 1) % heroItems.length);

  const current: CarouselItem = heroItems[index];
  const pageSize = 2;
  const totalPages = Math.ceil(listItems.length / pageSize);
  const [page, setPage] = useState<number>(1);
  const paged = listItems.slice(
    (page - 1) * pageSize,
    (page - 1) * pageSize + pageSize
  );
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

  return (
    <Box className={classes.successStoriesRoot}>
      {!detail.active && (
        <Typography variant="h4" className={classes.successStoriesHeading}>
          Watch Our Latest Success Stories
        </Typography>
      )}

      {!detail.active && (
        <Box className={classes.successStoriesCarousel}>
          <Box
            className={classes.successStoriesBg}
            style={{ backgroundImage: `url(${current.image})` }}
          />

          <IconButton
            onClick={prev}
            className={cx(
              classes.successStoriesArrow,
              classes.successStoriesArrowLeft
            )}
            aria-label="Previous"
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={next}
            className={cx(
              classes.successStoriesArrow,
              classes.successStoriesArrowRight
            )}
            aria-label="Next"
          >
            <ChevronRightIcon />
          </IconButton>

          <Box className={classes.successStoriesOverlay}>
            <Typography className={classes.successStoriesTitle}>
              {current.title}
            </Typography>
          </Box>
        </Box>
      )}

      {!detail.active && (
        <Box className={classes.successStoriesHeaderBar}>
          <Typography className={classes.successStoriesHeaderTitle}>
            Browse Past Successes
          </Typography>
          <Box className={classes.successStoriesHeaderRight}>
            <Box
              className={classes.successStoriesCalendarPill}
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
                className={classes.successStoriesSelect}
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
      )}

      {/* Detail View */}
      {detail.active ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box className={classes.storyModalContent}>
            {(!detail.images || detail.images.length <= 1) && (
              <Box className={classes.storyModalHero}>
                <img
                  src={detail.image}
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
                  <span className={classes.storyMetaLabel}>
                    Entrepreneur Name:
                  </span>{" "}
                  Eluru Demo Unit
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <span className={classes.storyMetaLabel}>Business Type:</span>{" "}
                  Aquaculture
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <span className={classes.storyMetaLabel}>
                    Year of Establishment:
                  </span>{" "}
                  2025
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <span className={classes.storyMetaLabel}>Activity:</span>{" "}
                  Circulatory Aquaculture System (CAS)
                </Typography>
                <Typography className={classes.storyMetaItem}>
                  <span className={classes.storyMetaLabel}>
                    Total Fish Production per Crop:
                  </span>{" "}
                  1 Ton
                </Typography>
              </Box>
              {detail.body.map((p, i) => (
                <Typography key={i} className={classes.storyModalParagraph}>
                  {p}
                </Typography>
              ))}
              {detail.images && detail.images.length > 0 && (
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
          </Box>
        </Box>
      ) : (
        <Box className={classes.cardsSection}>
          <Box className={classes.cardsGrid}>
            {paged.map((it, i) => (
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
                    onClick={() =>
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
                      })
                    }
                  >
                    Read More
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className={classes.testimonialPaginationWrapper}>
            <Box className={classes.testimonialPagination}>
              <Box
                onClick={() => setPage(Math.max(1, page - 1))}
                className={classes.testimonialBackButton}
              >
                <ChevronLeftIcon fontSize="small" />
              </Box>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Box
                  key={p}
                  onClick={() => setPage(p)}
                  className={`${classes.testimonialPageButton} ${
                    p === page ? classes.testimonialActivePageButton : ""
                  }`}
                >
                  {p}
                </Box>
              ))}
              <Box
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                className={classes.testimonialNextButton}
              >
                <ChevronRightIcon fontSize="small" />
              </Box>
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
