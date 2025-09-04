import { Box, Typography, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import { useCarousel, usePagination, useCalendarFilter } from "./hooks";
import { HeroCarousel, Pagination, CalendarFilter } from "./components";

interface VideoItem {
  id: string;
  youtubeIds: string[];
  title: string;
  date: string;
}

const heroVideos: ReadonlyArray<VideoItem> = [
  {
    id: "1",
    youtubeIds: ["4jflluI0TY4"],
    title: "Aquaculture Awards 2024 - Celebrating Excellence",
    date: "15 Jun 2025",
  },
  {
    id: "2",
    youtubeIds: ["4jflluI0TY4"],
    title: "Sustainable Farming Techniques in Action",
    date: "12 Jun 2025",
  },
  {
    id: "3",
    youtubeIds: ["4jflluI0TY4"],
    title: "Community-Driven Aquaculture Projects",
    date: "10 Jun 2025",
  },
];

const videoLibrary: ReadonlyArray<VideoItem> = [
  {
    id: "4",
    youtubeIds: ["4jflluI0TY4", "4jflluI0TY4"],
    title: "Title One",
    date: "12 Jun 2025",
  },
  {
    id: "5",
    youtubeIds: ["4jflluI0TY4", "4jflluI0TY4"],
    title: "Title Two",
    date: "12 Jun 2025",
  },
  {
    id: "6",
    youtubeIds: ["kJQP7kiw5Fk", "dQw4w9WgXcQ"],
    title: "Title Three",
    date: "10 Jun 2025",
  },
  {
    id: "7",
    youtubeIds: ["dQw4w9WgXcQ", "9bZkp7q19f0"],
    title: "Title Four",
    date: "08 Jun 2025",
  },
  {
    id: "8",
    youtubeIds: ["9bZkp7q19f0", "kJQP7kiw5Fk"],
    title: "Title Five",
    date: "05 Jun 2025",
  },
  {
    id: "9",
    youtubeIds: ["kJQP7kiw5Fk", "dQw4w9WgXcQ"],
    title: "Title Six",
    date: "03 Jun 2025",
  },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const { classes } = useNewsEventsStyles();

  // Use custom hooks
  const carousel = useCarousel({ items: heroVideos });
  const pagination = usePagination({ items: videoLibrary, itemsPerPage: 2 });
  const calendarFilter = useCalendarFilter();

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const extractYouTubeId = (urlOrId: string): string => {
    if (!urlOrId.includes("youtube.com") && !urlOrId.includes("youtu.be")) {
      return urlOrId;
    }

    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = urlOrId.match(pattern);
      if (match) {
        return match[1];
      }
    }

    return urlOrId; // fallback
  };

  // Function to get thumbnail from YouTube ID
  const getThumbnail = (youtubeId: string) => {
    const id = extractYouTubeId(youtubeId);
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  const groupVideosIntoRows = (videos: VideoItem[]) => {
    const rows = [];
    for (let i = 0; i < videos.length; i += 1) {
      const row = videos.slice(i, i + 1);
      rows.push(row);
    }
    return rows;
  };

  const videoRows = groupVideosIntoRows(pagination.currentItems);

  return (
    <Box className={classes.successStoriesRoot}>
      <HeroCarousel
        title="Watch Our Latest Moments In Motion"
        currentItem={carousel.currentItem}
        onPrevious={carousel.goToPrevious}
        onNext={carousel.goToNext}
        renderBackground={(item) => (
          <Box className={classes.successStoriesBg}>
            <Box
              component="img"
              src={getThumbnail(item.youtubeIds[0])}
              alt="Hero background"
              className={classes.successStoriesBgImg}
            />
          </Box>
        )}
        renderOverlay={(item) => (
          <Box
            onClick={() => handleVideoClick(item)}
            className={classes.successStoriesPlayOverlay}
          >
            <Box className={classes.successStoriesPlayCircle}>
              <PlayArrowIcon className={classes.videoPlayIcon} />
            </Box>
          </Box>
        )}
      />

      {/* Video Library Section - Same structure as News.tsx readMoreNewsSection */}
      <Box className={classes.readMoreNewsSection}>
        <Box className={classes.readMoreNewsHeader}>
          <Typography variant="h4" className={classes.readMoreNewsTitle}>
            Explore Our Video Library
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
          />
        </Box>

        {/* Video Grid - Restructured to show videos in rows with shared titles/dates */}
        <Box className={classes.readMoreVideosGrid}>
          {videoRows.map((row, rowIndex) => (
            <Box key={rowIndex} className={classes.videoRow}>
              {/* Multiple videos from youtubeIds array */}
              <Box className={classes.videoRowContent}>
                {row.map((video) => (
                  <Box key={video.id} className={classes.videoItem}>
                    {/* All videos from youtubeIds array */}
                    <Box className={classes.videoThumbnailsContainer}>
                      {video.youtubeIds.map((youtubeId, index) => (
                        <Box
                          key={`${video.id}-${index}`}
                          onClick={() =>
                            handleVideoClick({
                              ...video,
                              youtubeIds: [youtubeId],
                            })
                          }
                          className={classes.videoThumbnail}
                        >
                          <Box className={classes.videoThumbnailImage}>
                            <Box
                              component="img"
                              src={getThumbnail(youtubeId)}
                              alt={`${video.title} - Video ${index + 1}`}
                              className={classes.videoThumbnailImg}
                            />
                            <Box className={classes.videoPlayButton}>
                              <Box className={classes.videoPlayButtonCircle}>
                                <PlayArrowIcon
                                  className={classes.videoPlayIconWhite}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    {/* Title and date below all videos */}
                    <Box className={classes.videoInfo}>
                      <Typography variant="h6" className={classes.videoTitle}>
                        {video.title}
                      </Typography>
                      <Typography variant="body2" className={classes.videoDate}>
                        {video.date}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={pagination.goToPage}
          onPrevious={pagination.goToPreviousPage}
          onNext={pagination.goToNextPage}
          canGoPrevious={pagination.canGoPrevious}
          canGoNext={pagination.canGoNext}
        />
      </Box>

      {/* Video Modal */}
      {selectedVideo && (
        <Box className={classes.videoModal} onClick={closeVideo}>
          <Box
            className={classes.videoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton
              onClick={closeVideo}
              className={classes.videoModalClose}
            >
              ×
            </IconButton>
            <iframe
              src={`https://www.youtube.com/embed/${extractYouTubeId(
                selectedVideo.youtubeIds[0]
              )}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={classes.videoModalIframe}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Videos;
