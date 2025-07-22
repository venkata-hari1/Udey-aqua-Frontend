import { Box, Typography, Button, TextField } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import contactImg from "../../../assets/home/contact.jpg";
import useHomeStyles from "./homeStyles";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const { classes } = useHomeStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box className={classes.contactRoot}>
      <SectionTitle title="Get In Touch" />
      <Box className={classes.contactMain}>
        <Box className={classes.contactImgWrap}>
          <Box component="img" src={contactImg} alt="Contact" className={classes.contactImg} />
        </Box>
        <Box className={classes.contactFormWrap}>
          <Box className={classes.contactFieldWrap}>
            <Typography className={classes.contactLabel}>First Name</Typography>
            <TextField
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              fullWidth
              variant="outlined"
              size="small"
              className={classes.contactTextField}
            />
          </Box>
          <Box className={classes.contactFieldWrap}>
            <Typography className={classes.contactLabel}>Phone</Typography>
            <TextField
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91"
              fullWidth
              variant="outlined"
              size="small"
              className={classes.contactTextField}
            />
          </Box>
          <Box className={classes.contactFieldWrap}>
            <Typography className={classes.contactLabel}>Message</Typography>
            <TextField
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=""
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              className={classes.contactTextField}
            />
          </Box>
          <Button
            variant="contained"
            className={classes.contactButton}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact; 