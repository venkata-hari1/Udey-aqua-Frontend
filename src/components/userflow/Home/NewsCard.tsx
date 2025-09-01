import { Box, Typography, Button } from "@mui/material";
import useHomeStyles from "./homeStyles";

export interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  author: string;
  authorLink?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  date,
  title,
  description,
  author,
  authorLink,
}) => {
  const [day, month, year] = date.split(" ");
  const { classes } = useHomeStyles();
  return (
    <Box className={classes.newsCardRoot}>
      <Box className={classes.newsCardImgWrap}>
        <Box
          component="img"
          src={image}
          alt={title}
          className={classes.newsCardImg}
        />
        <Box className={classes.newsCardDateBox}>
          <Typography className={classes.newsCardDateDay}>{day}</Typography>
          <Typography className={classes.newsCardDateMonth}>{month}</Typography>
          <Typography className={classes.newsCardDateYear}>{year}</Typography>
        </Box>
      </Box>
      <Box className={classes.newsBody}>
        <Box className={classes.newsCardContent}>
          <Typography className={classes.newsCardTitle}>{title}</Typography>
          <Typography className={classes.newsCardDesc}>
            {description}
          </Typography>
          <Typography className={classes.newsCardAuthor}>
            {authorLink ? (
              <Typography className={classes.newsCardAuthorLink}>
                {author}
              </Typography>
            ) : (
              <Box component="span" className={classes.newsCardAuthorSpan}>
                {author}
              </Box>
            )}
          </Typography>
        </Box>
        <Box className={classes.newsCardFooter}>
          <Button variant="outlined" className={classes.newsCardButton}>
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
