// src/components/userflow/NewsEvents/components/Pagination.tsx
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useNewsEventsStyles from "../newsEventsStyles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  className,
}: PaginationProps) => {
  const { classes } = useNewsEventsStyles();

  // Ensure we always show all pages, even if totalPages is 0 or undefined
  const safeTotalPages = Math.max(totalPages || 0, 1);
  const pages = Array.from({ length: safeTotalPages }, (_, i) => i + 1);

  return (
    <Box className={className || classes.readMoreNewsPagination}>
      <IconButton
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={classes.readMoreNewsPaginationArrow}
        aria-label="Previous page"
      >
        <ChevronLeftIcon />
      </IconButton>

      {pages.map((page) => (
        <Box
          key={page}
          onClick={() => onPageChange(page)}
          className={`${classes.readMoreNewsPaginationButton} ${
            page === currentPage
              ? classes.readMoreNewsPaginationButtonActive
              : ""
          }`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onPageChange(page);
            }
          }}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Box>
      ))}

      <IconButton
        onClick={onNext}
        disabled={!canGoNext}
        className={classes.readMoreNewsPaginationArrow}
        aria-label="Next page"
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default Pagination;
