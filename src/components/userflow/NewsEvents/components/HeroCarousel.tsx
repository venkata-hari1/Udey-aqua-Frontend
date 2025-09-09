import { Box, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { type ReactNode } from "react";
import useNewsEventsStyles from "../newsEventsStyles";

interface HeroCarouselProps {
  title?: string;
  currentItem: any;
  onPrevious: () => void;
  onNext: () => void;
  renderBackground: (item: any) => ReactNode;
  renderOverlay?: (item: any) => ReactNode;
  renderTitle?: (item: any) => ReactNode;
  className?: string;
}

const HeroCarousel = ({
  title,
  currentItem,
  onPrevious,
  onNext,
  renderBackground,
  renderOverlay,
  renderTitle,
  className,
}: HeroCarouselProps) => {
  const { classes, cx } = useNewsEventsStyles();

  return (
    <Box className={className || classes.successStoriesRoot}>
      <Typography variant="h4" className={classes.successStoriesHeading}>
        {title}
      </Typography>

      <Box className={classes.successStoriesCarousel}>
        {renderBackground(currentItem)}

        <IconButton
          onClick={onPrevious}
          className={cx(
            classes.successStoriesArrow,
            classes.successStoriesArrowLeft
          )}
          aria-label="Previous"
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={onNext}
          className={cx(
            classes.successStoriesArrow,
            classes.successStoriesArrowRight
          )}
          aria-label="Next"
        >
          <ChevronRightIcon />
        </IconButton>

        {renderOverlay && renderOverlay(currentItem)}

        {renderTitle && (
          <>
            <Box className={classes.successStoriesOverlay}>
              {renderTitle ? (
                renderTitle(currentItem)
              ) : (
                <Typography className={classes.successStoriesTitle}>
                  {currentItem.title}
                </Typography>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default HeroCarousel;
