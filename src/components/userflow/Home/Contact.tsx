import { Box, Typography, Button, TextField, Grid } from "@mui/material";
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
    <Grid container spacing={2} className={classes.contactRoot}>
      <Grid size={{ xs: 12 }}>
        <SectionTitle title="Get In Touch" />
      </Grid>
      <Grid container spacing={2} className={classes.contactMain}>
        <Grid size={{ xs: 12 }} className={classes.contactImgWrap}>
          <Box component="img" src={contactImg} alt="Contact" className={classes.contactImg} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={classes.contactFormWrap}>
          <Grid size={{ xs: 12 }} className={classes.contactFieldWrap}>
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
          </Grid>
          <Grid size={{ xs: 12 }} className={classes.contactFieldWrap}>
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
          </Grid>
          <Grid size={{ xs: 12 }} className={classes.contactFieldWrap}>
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
          </Grid>
          <Button
            variant="contained"
            className={classes.contactButton}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;