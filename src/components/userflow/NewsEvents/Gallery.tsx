import { Box, Typography, Select, MenuItem, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";

import gallery1 from "../../../assets/news/gallery/gallery1.png";
import gallery2 from "../../../assets/news/gallery/gallery2.png";
import gallery3 from "../../../assets/news/gallery/gallery3.png";
import gallery4 from "../../../assets/news/gallery/gallery4.png";
import gallery5 from "../../../assets/news/gallery/gallery5.png";

import calendarIcon2 from "../../../assets/icons/calendar.svg";

interface GalleryItem {
  id: number;
  image: string;
}

interface ReadMoreGalleryItem {
  id: number;
  image: string;
  title: string;
  date: string;
  month: string;
  year: number;
  moreImages: string[];
}

interface DetailView {
  active: boolean;
  image: string;
  title: string;
  date: string;
  moreImages: string[];
}

const heroGalleryItems: ReadonlyArray<GalleryItem> = [
  {
    id: 1,
    image: gallery1,
  },
  {
    id: 2,
    image: gallery2,
  },
  {
    id: 3,
    image: gallery3,
  },
];

const readMoreGalleryData: ReadonlyArray<ReadMoreGalleryItem> = [
  {
    id: 1,
    image: gallery1,
    title: "School of Silver Fish",
    date: "12 Jan 2025",
    month: "Jan",
    year: 2025,
    moreImages: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery1,
      gallery2,
      gallery3,
      gallery3,
      gallery4,
      gallery5,
      gallery1,
      gallery2,
      gallery3,
    ],
  },
  {
    id: 2,
    image: gallery2,
    title: "Fishes",
    date: "15 Jan 2025",
    month: "Jan",
    year: 2025,
    moreImages: [
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery1,
      gallery2,
      gallery3,
      gallery4,
    ],
  },
  {
    id: 3,
    image: gallery3,
    title: "Striped Fish Formation",
    date: "18 Jan 2025",
    month: "Jan",
    year: 2025,
    moreImages: [
      gallery3,
      gallery4,
      gallery5,
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
    ],
  },
  {
    id: 4,
    image: gallery4,
    title: "Koi Pond Collection",
    date: "20 Jan 2025",
    month: "Jan",
    year: 2025,
    moreImages: [
      gallery4,
      gallery5,
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery1,
    ],
  },
  {
    id: 5,
    image: gallery5,
    title: "Clownfish Close-up",
    date: "22 Jan 2025",
    month: "Jan",
    year: 2025,
    moreImages: [
      gallery5,
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery1,
      gallery2,
    ],
  },
  {
    id: 6,
    image: gallery1,
    title: "Betta Fish Display",
    date: "25 Jan 2025",
    month: "Jan",
    year: 2025,
    moreImages: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery5,
      gallery1,
      gallery2,
      gallery3,
    ],
  },
];

const Gallery = () => {
  const { classes } = useNewsEventsStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [detailPage, setDetailPage] = useState(1);
  const [detail, setDetail] = useState<DetailView>({
    active: false,
    image: "",
    title: "",
    date: "",
    moreImages: [],
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
      prev === 0 ? heroGalleryItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === heroGalleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const currentGallery = heroGalleryItems[currentIndex];

  // Pagination logic for main gallery
  const itemsPerPage = 4;
  const totalPages = Math.ceil(readMoreGalleryData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGalleries = readMoreGalleryData.slice(startIndex, endIndex);

  // Pagination logic for detail view
  const detailItemsPerPage = 8;
  const detailTotalPages = detail.active
    ? Math.ceil(detail.moreImages.length / detailItemsPerPage)
    : 0;
  const detailStartIndex = (detailPage - 1) * detailItemsPerPage;
  const detailEndIndex = detailStartIndex + detailItemsPerPage;
  const currentDetailImages = detail.active
    ? detail.moreImages.slice(detailStartIndex, detailEndIndex)
    : [];

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

  const handleDetailPageChange = (page: number) => {
    setDetailPage(page);
  };

  const handleDetailPreviousPage = () => {
    if (detailPage > 1) {
      setDetailPage(detailPage - 1);
    }
  };

  const handleDetailNextPage = () => {
    if (detailPage < detailTotalPages) {
      setDetailPage(detailPage + 1);
    }
  };

  const handleImageClick = (gallery: ReadMoreGalleryItem) => {
    setDetail({
      active: true,
      image: gallery.image,
      title: gallery.title,
      date: gallery.date,
      moreImages: gallery.moreImages,
    });
    setDetailPage(1); // Reset to first page when opening detail view
  };

  if (detail.active) {
    return (
      <Box className={classes.newsDetailView}>
        <Box className={classes.newsDetailContent}>
          <Typography variant="h4" className={classes.newsDetailTitle}>
            {detail.title}
          </Typography>

          <Typography className={classes.newsDetailDescription}>
            {detail.date}
          </Typography>

          <Box className={classes.storyImageGrid}>
            {currentDetailImages.map((image, index) => (
              <Box key={index} className={classes.storyGridItem}>
                <Box
                  component="img"
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className={classes.storyGridImg}
                />
              </Box>
            ))}
          </Box>

          {/* Detail View Pagination */}
          <Box className={classes.readMoreNewsPagination}>
            <IconButton
              onClick={handleDetailPreviousPage}
              disabled={detailPage === 1}
              className={classes.readMoreNewsPaginationArrow}
            >
              <ChevronLeftIcon />
            </IconButton>
            {Array.from({ length: detailTotalPages }, (_, i) => i + 1).map(
              (page) => (
                <Box
                  key={page}
                  onClick={() => handleDetailPageChange(page)}
                  className={`${classes.readMoreNewsPaginationButton} ${
                    page === detailPage
                      ? classes.readMoreNewsPaginationButtonActive
                      : ""
                  }`}
                >
                  {page}
                </Box>
              )
            )}
            <IconButton
              onClick={handleDetailNextPage}
              disabled={detailPage === detailTotalPages}
              className={classes.readMoreNewsPaginationArrow}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      {/* Top Carousel Section - from SuccessStories (without description below) */}
      <Box className={classes.successStoriesRoot}>
        <Typography variant="h4" className={classes.successStoriesHeading}>
          Explore the Highlights Through Our Gallery
        </Typography>

        <Box className={classes.successStoriesCarousel}>
          <Box
            className={classes.successStoriesBg}
            style={{ backgroundImage: `url(${currentGallery.image})` }}
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
        </Box>
      </Box>

      {/* Bottom Section - from News.tsx */}
      <Box className={classes.readMoreNewsSection}>
        <Box className={classes.readMoreNewsHeader}>
          <Typography variant="h4" className={classes.readMoreNewsTitle}>
            View More Gallery Images
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

        <Box className={classes.readMoreNewsGrid}>
          {currentGalleries.map((gallery: ReadMoreGalleryItem) => (
            <Box
              key={gallery.id}
              className={classes.latestUpdatesCard}
              onClick={() => handleImageClick(gallery)}
              sx={{ cursor: "pointer" }}
            >
              <Box
                component="img"
                src={gallery.image}
                alt={gallery.title}
                className={classes.latestUpdatesImage}
              />
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

export default Gallery;
