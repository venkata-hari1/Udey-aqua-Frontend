import { Box, IconButton, Typography, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import useNewsEventsStyles from "./newsEventsStyles";
import calendarIcon2 from "../../../assets/icons/calendar.svg";

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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { classes, cx } = useNewsEventsStyles();

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

  const prev = () =>
    setCurrentIndex((p) => (p - 1 + heroVideos.length) % heroVideos.length);
  const next = () => setCurrentIndex((p) => (p + 1) % heroVideos.length);

  const currentVideo = heroVideos[currentIndex];
  const pageSize = 2;
  const totalPages = Math.ceil(videoLibrary.length / pageSize);
  const pagedVideos = videoLibrary.slice(
    (currentPage - 1) * pageSize,
    (currentPage - 1) * pageSize + pageSize
  );

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

  const videoRows = groupVideosIntoRows(pagedVideos);

  return (
    <Box className={classes.successStoriesRoot}>
      {/* Header */}
      <Typography variant="h4" className={classes.successStoriesHeading}>
        Watch Our Latest Moments In Motion
      </Typography>

      {/* Hero Video Carousel - Same as SuccessStories */}
      <Box className={classes.successStoriesCarousel}>
        <Box
          className={classes.successStoriesBg}
          style={{
            backgroundImage: `url(${getThumbnail(currentVideo.youtubeIds[0])})`,
          }}
        />

        {/* Navigation Arrows - Same styling as SuccessStories */}
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

        {/* Play Button Overlay */}
        <Box
          onClick={() => handleVideoClick(currentVideo)}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              backgroundColor: "#FF0000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <PlayArrowIcon sx={{ color: "white", fontSize: 40 }} />
          </Box>
        </Box>

        {/* Title Overlay - Same as SuccessStories */}
        <Box className={classes.successStoriesOverlay}>
          <Typography className={classes.successStoriesTitle}>
            {currentVideo.title}
          </Typography>
        </Box>
      </Box>

      {/* Video Library Section - Same structure as News.tsx readMoreNewsSection */}
      <Box className={classes.readMoreNewsSection}>
        <Box className={classes.readMoreNewsHeader}>
          <Typography variant="h4" className={classes.readMoreNewsTitle}>
            Explore Our Video Library
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
                  <Typography variant="body2">
                    {`${months[selMonth]} ${selYear}`}
                  </Typography>
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

        {/* Video Grid - Restructured to show videos in rows with shared titles/dates */}
        <Box className={classes.readMoreNewsGrid}>
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
                                  sx={{ color: "white", fontSize: 24 }}
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

        <Box className={classes.readMoreNewsPagination}>
          <IconButton
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={classes.readMoreNewsPaginationArrow}
          >
            <ChevronLeftIcon />
          </IconButton>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Box
              key={page}
              onClick={() => setCurrentPage(page)}
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
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className={classes.readMoreNewsPaginationArrow}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
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
