// src/components/userflow/Home/TestimonialCard.tsx
import { Box, Typography, Avatar } from "@mui/material";
import testimonialCloud from "../../../assets/home/testimonials_cloud.svg";
import useHomeStyles from "./homeStyles";

export interface Testimonial {
  name: string;
  role: string;
  img: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { classes } = useHomeStyles();
  return (
    <Box className={classes.testimonialCardRoot}>
      <Box className={classes.testimonialCardCloudWrap}>
        <Box
          component="img"
          src={testimonialCloud}
          alt="testimonial cloud"
          className={classes.testimonialCardCloudImg}
        />
        <Typography className={classes.testimonialCardQuote}>
          {testimonial.quote}
        </Typography>
        <Avatar src={testimonial.img} className={classes.testimonialCardAvatar} />
      </Box>
      <Box className={classes.testimonialCardInfo}>
        <Typography className={classes.testimonialCardName}>{testimonial.name}</Typography>
        <Typography className={classes.testimonialCardRole}>{testimonial.role}</Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard; 