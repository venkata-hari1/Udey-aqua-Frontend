// src/components/userflow/NewsEvents/Gallery.tsx
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import {
  useCarousel,
  usePagination,
  useCalendarFilter,
  useScrollWithOffset,
} from "./hooks";
import { HeroCarousel, Pagination, CalendarFilter } from "./components";

import gallery1 from "../../../assets/news/gallery/gallery1.png";
import gallery2 from "../../../assets/news/gallery/gallery2.png";
import gallery3 from "../../../assets/news/gallery/gallery3.png";
import gallery4 from "../../../assets/news/gallery/gallery4.png";
import gallery5 from "../../../assets/news/gallery/gallery5.png";

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
  const { classes } = useNewsEventsStyles();
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
      <Box ref={imageRef} className={classes.optimizedImageContainer}>
        <CircularProgress size={20} />
      </Box>
    );
  }

  return (
    <Box ref={imageRef} className={classes.optimizedImageContainer}>
      {!isLoaded && !hasError && (
        <Box className={classes.optimizedImageLoadingOverlay}>
          <CircularProgress size={30} />
        </Box>
      )}
      {hasError && (
        <Box className={classes.optimizedImageErrorOverlay}>
          <Typography variant="body2">Failed to load image</Typography>
        </Box>
      )}
      <Box
        component="img"
        src={src}
        alt={alt}
        className={`${className} ${classes.optimizedImage} ${
          isLoaded ? classes.optimizedImageLoaded : ""
        }`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </Box>
  );
};

const Gallery = () => {
  const { classes } = useNewsEventsStyles();
  const { ref: readMoreSectionRef, scrollTo: scrollToReadMore } =
    useScrollWithOffset(200);
  const { ref: detailTopRef, scrollTo: scrollToDetailTop } =
    useScrollWithOffset(200);
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

  // Use custom hooks
  const carousel = useCarousel({ items: heroGalleryItems });
  const pagination = usePagination({
    items: readMoreGalleryData,
    itemsPerPage: 4,
  });
  const calendarFilter = useCalendarFilter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingState({
        isLoading: false,
        error: null,
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Pagination logic for main gallery (4 per page) - handled by hook

  // Detail view pagination
  const detailItemsPerPage = 8;
  const detailTotalPages = detail.active
    ? Math.ceil(detail.moreImages.length / detailItemsPerPage)
    : 0;
  const detailStartIndex = (detailPage - 1) * detailItemsPerPage;
  const detailEndIndex = detailStartIndex + detailItemsPerPage;
  const currentDetailImages = detail.active
    ? detail.moreImages.slice(detailStartIndex, detailEndIndex)
    : [];

  // Main pagination handled by hook

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

  const [lastClickedId, setLastClickedId] = useState<number | null>(() => {
    try {
      const v = sessionStorage.getItem("gallery_last_id");
      return v ? parseInt(v, 10) : null;
    } catch {
      return null;
    }
  });

  const handleImageClick = useCallback((gallery: ReadMoreGalleryItem): void => {
    setLastClickedId(gallery.id);
    try { sessionStorage.setItem("gallery_last_id", String(gallery.id)); } catch {}
    setDetail({
      active: true,
      image: gallery.image,
      title: gallery.title,
      date: gallery.date,
      moreImages: gallery.moreImages,
    });
    setDetailPage(1);
    setTimeout(() => {
      scrollToDetailTop();
    }, 0);
  }, []);

  // Memoized grid items for the bottom section (old UI)
  const memoizedGalleryItems = useMemo(() => {
    return pagination.currentItems.map((gallery: ReadMoreGalleryItem) => (
      <Box
        key={gallery.id}
        id={`gallery-card-${gallery.id}`}
        onClick={() => handleImageClick(gallery)}
        className={`${classes.latestUpdatesCard} ${classes.galleryCardClickable} ${
          gallery.id === lastClickedId ? classes.galleryCardHighlight : ""
        }`}
      >
        <OptimizedImage
          src={gallery.image}
          alt={gallery.title}
          className={classes.latestUpdatesImage}
          lazy={true}
        />
      </Box>
    ));
  }, [
    pagination.currentItems,
    classes.latestUpdatesCard,
    classes.latestUpdatesImage,
    classes.galleryCardClickable,
    classes.galleryCardHighlight,
    lastClickedId,
    handleImageClick,
  ]);

  useEffect(() => {
    if (!detail.active && lastClickedId) {
      const idx = readMoreGalleryData.findIndex((g) => g.id === lastClickedId);
      if (idx >= 0) {
        const page = Math.floor(idx / pagination.itemsPerPage) + 1;
        if (page !== pagination.currentPage) {
          pagination.goToPage(page);
        }
      }
      setTimeout(() => {
        const el = document.getElementById(`gallery-card-${lastClickedId}`);
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

  if (loadingState.isLoading) {
    return (
      <Box className={classes.galleryLoadingContainer}>
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Loading gallery images...
        </Typography>
      </Box>
    );
  }

  if (loadingState.error) {
    return (
      <Box className={classes.galleryErrorContainer}>
        <Typography variant="h6" color="error">
          Error: {loadingState.error}
        </Typography>
      </Box>
    );
  }

  if (detail.active) {
    return (
      <Box className={classes.newsDetailView} ref={detailTopRef}>
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

          {/* Back above pagination */}
          <Box
            className={classes.backButtonContainer}
            onClick={() =>
              setDetail({
                active: false,
                image: "",
                title: "",
                date: "",
                moreImages: [],
              })
            }
          >
            <Box className={classes.backButton}>
              <ArrowBack />
            </Box>
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
      <HeroCarousel
        title="Explore the Highlights Through Our Gallery"
        currentItem={carousel.currentItem}
        onPrevious={carousel.goToPrevious}
        onNext={carousel.goToNext}
        renderBackground={(item) => (
          <Box className={classes.successStoriesBg}>
            <Box
              component="img"
              src={item.image}
              alt={`Gallery hero ${item.id}`}
              className={classes.successStoriesBgImg}
            />
          </Box>
        )}
      />

      {/* Bottom Section - restored to old UI with 4 per page */}
      <Box className={classes.readMoreNewsSection}>
        <Box ref={readMoreSectionRef} />
        <Box className={classes.readMoreNewsHeader}>
          <Typography
            variant="h4"
            className={classes.readMoreNewsTitle}
          ></Typography>
          <CalendarFilter
            selectedMonth={calendarFilter.selectedMonth}
            selectedYear={calendarFilter.selectedYear}
            openSelect={calendarFilter.openSelect}
            months={calendarFilter.months}
            years={calendarFilter.years}
            onMonthYearChange={calendarFilter.handleMonthYearChange}
            onOpenSelect={calendarFilter.setOpenSelect}
            getDisplayValue={calendarFilter.getDisplayValue}
            pillClassName={`${classes.readMoreNewsCalendarPill} ${classes.galleryCalendarPillClickable}`}
            menuPaperClassName={classes.gallerySelectMenuPaper}
            menuListClassName={classes.gallerySelectMenuList}
          />
        </Box>

        <Box className={classes.readMoreNewsGrid}>{memoizedGalleryItems}</Box>

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

export default Gallery;
