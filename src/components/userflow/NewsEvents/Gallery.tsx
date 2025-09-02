import {
  Box,
  Typography,
  Select,
  MenuItem,
  IconButton,
  CircularProgress,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState, useEffect, useCallback, useRef } from "react";
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

interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

interface FlatListConfig {
  itemHeight: number;
  itemWidth: number;
  containerHeight: number;
  overscan: number;
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

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  lazy?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  onLoad,
  onError,
  lazy = true,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy || !imageRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [lazy]);

  const handleLoad = useCallback((): void => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((): void => {
    setHasError(true);
    onError?.();
  }, [onError]);

  if (lazy && !isInView) {
    return (
      <Box
        ref={imageRef}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={20} />
      </Box>
    );
  }

  return (
    <Box
      ref={imageRef}
      sx={{ position: "relative", width: "100%", height: "100%" }}
    >
      {!isLoaded && !hasError && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <CircularProgress size={30} />
        </Box>
      )}
      {hasError && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            color: "#666",
          }}
        >
          <Typography variant="body2">Failed to load image</Typography>
        </Box>
      )}
      <Box
        component="img"
        src={src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        sx={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

interface VirtualizedGridProps {
  items: ReadonlyArray<ReadMoreGalleryItem>;
  itemHeight: number;
  itemWidth: number;
  containerHeight: number;
  onItemClick: (item: ReadMoreGalleryItem) => void;
  className?: string;
}

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  itemHeight,
  itemWidth,
  containerHeight,
  onItemClick,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const { classes } = useNewsEventsStyles();

  const itemsPerRow =
    Math.floor(containerRef.current?.clientWidth || 1200) / itemWidth;
  const rowHeight = itemHeight;
  const totalRows = Math.ceil(items.length / itemsPerRow);

  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - 1);
  const endRow = Math.min(
    totalRows - 1,
    Math.floor((scrollTop + containerHeight) / rowHeight) + 1
  );

  const visibleItems = items.slice(
    startRow * itemsPerRow,
    (endRow + 1) * itemsPerRow
  );

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const totalHeight = totalRows * rowHeight;

  return (
    <Box
      ref={containerRef}
      className={className}
      sx={{
        height: containerHeight,
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <Box sx={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map((item, index) => {
          const globalIndex = startRow * itemsPerRow + index;
          const row = Math.floor(globalIndex / itemsPerRow);
          const col = globalIndex % itemsPerRow;

          return (
            <Box
              key={item.id}
              className={classes.latestUpdatesCard}
              onClick={() => onItemClick(item)}
              sx={{
                cursor: "pointer",
                position: "absolute",
                top: row * rowHeight,
                left: col * itemWidth,
                width: itemWidth - 16,
                height: itemHeight - 16,
              }}
            >
              <OptimizedImage
                src={item.image}
                alt={item.title}
                className={classes.latestUpdatesImage}
                lazy={true}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const Gallery = () => {
  const { classes } = useNewsEventsStyles();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [detailPage, setDetailPage] = useState<number>(1);
  const [detail, setDetail] = useState<DetailView>({
    active: false,
    image: "",
    title: "",
    date: "",
    moreImages: [],
  });

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

  const flatListConfig: FlatListConfig = {
    itemHeight: 250,
    itemWidth: 300,
    containerHeight: 600,
    overscan: 2,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState({
        isLoading: false,
        error: null,
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = useCallback((): void => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroGalleryItems.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback((): void => {
    setCurrentIndex((prev) => (prev === 0 ? heroGalleryItems.length - 1 : 0));
  }, []);

  const currentGallery = heroGalleryItems[currentIndex];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(readMoreGalleryData.length / itemsPerPage);

  const detailItemsPerPage = 8;
  const detailTotalPages = detail.active
    ? Math.ceil(detail.moreImages.length / detailItemsPerPage)
    : 0;
  const detailStartIndex = (detailPage - 1) * detailItemsPerPage;
  const detailEndIndex = detailStartIndex + detailItemsPerPage;
  const currentDetailImages = detail.active
    ? detail.moreImages.slice(detailStartIndex, detailEndIndex)
    : [];

  const handlePageChange = useCallback((page: number): void => {
    setCurrentPage(page);
  }, []);

  const handlePreviousPage = useCallback((): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const handleNextPage = useCallback((): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const handleDetailPageChange = useCallback((page: number): void => {
    setDetailPage(page);
  }, []);

  const handleDetailPreviousPage = useCallback((): void => {
    if (detailPage > 1) {
      setDetailPage(detailPage - 1);
    }
  }, [detailPage]);

  const handleDetailNextPage = useCallback((): void => {
    if (detailPage < detailTotalPages) {
      setDetailPage(detailPage + 1);
    }
  }, [detailPage, detailTotalPages]);

  const handleImageClick = useCallback((gallery: ReadMoreGalleryItem): void => {
    setDetail({
      active: true,
      image: gallery.image,
      title: gallery.title,
      date: gallery.date,
      moreImages: gallery.moreImages,
    });
    setDetailPage(1);
  }, []);

  if (loadingState.isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Loading gallery images...
        </Typography>
      </Box>
    );
  }

  if (loadingState.error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          padding: 3,
        }}
      >
        <Typography variant="h6" color="error">
          Error: {loadingState.error}
        </Typography>
      </Box>
    );
  }

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
                <OptimizedImage
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className={classes.storyGridImg}
                  lazy={true}
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

      {/* Bottom Section - from News.tsx with Virtualized Grid */}
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

        {/* Virtualized Grid for better performance */}
        <VirtualizedGrid
          items={readMoreGalleryData}
          itemHeight={flatListConfig.itemHeight}
          itemWidth={flatListConfig.itemWidth}
          containerHeight={flatListConfig.containerHeight}
          onItemClick={handleImageClick}
          className={classes.readMoreNewsGrid}
        />

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
