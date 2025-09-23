// src/components/userflow/NewsEvents/NewsEventsPage.tsx
import { Box } from "@mui/material";
import useNewsEventsStyles from "./newsEventsStyles.tsx";

interface NewsEventsPageProps {
  title: string;
  subtitle: string;
  headerImg: string;
}

const NewsEventsPage = ({
  title,
  subtitle,
  headerImg,
}: NewsEventsPageProps) => {
  const { classes } = useNewsEventsStyles();

  return (
    <Box>
      {/* Header Section */}
      <Box className={classes.newsEventsPageHeader}>
        <Box className={classes.newsEventsPageBanner}>
          <Box className={classes.newsEventsPageIcon}>
            <img
              src={headerImg}
              alt={title}
              className={classes.newsEventsPageIconImg}
            />
          </Box>
          <Box className={classes.newsEventsPageTextContent}>
            <h1 className={classes.newsEventsPageTitle}>{title}</h1>
            <p className={classes.newsEventsPageSubtitle}>{subtitle}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsEventsPage;
