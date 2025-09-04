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

  return (
    <Box className={className || classes.readMoreNewsPagination}>
      <IconButton
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={classes.readMoreNewsPaginationArrow}
      >
        <ChevronLeftIcon />
      </IconButton>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Box
          key={page}
          onClick={() => onPageChange(page)}
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
        onClick={onNext}
        disabled={!canGoNext}
        className={classes.readMoreNewsPaginationArrow}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default Pagination;
