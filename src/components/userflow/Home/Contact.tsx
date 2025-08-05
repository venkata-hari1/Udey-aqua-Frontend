import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import contactImg from "../../../assets/home/contact_us.png";
import useHomeStyles from "./homeStyles";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { classes } = useHomeStyles();

  const hasError = submitted && (!form.name || !form.phone || !form.message);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (form.name && form.phone && form.message) {
      console.log("Form Submitted:", form);
      setSubmitted(false);
      setForm({ name: "", phone: "", message: "" });
    }
  };

  return (
    <>
      <Grid size={12}>
        <SectionTitle title="Get In Touch" />
      </Grid>
      <Grid container spacing={2} className={classes.contactRoot}>
        <Grid container size={12} spacing={2} className={classes.contactMain}>
          <Grid size={{ xs: 12, md: 6 }} className={classes.contactImgWrap}>
            <Box
              component="img"
              src={contactImg}
              alt="Contact"
              className={classes.contactImg}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} className={classes.contactFormWrap}>
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid size={12} className={classes.contactFieldWrap}>
                  <Typography className={classes.contactLabel}>
                    <span style={{ color: "red" }}>*</span> First Name
                  </Typography>
                  <TextField
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    fullWidth
                    variant="outlined"
                    size="small"
                    className={classes.contactTextField}
                    error={submitted && !form.name}
                  />
                </Grid>
                <Grid size={12} className={classes.contactFieldWrap}>
                  <Typography className={classes.contactLabel}>
                    <span style={{ color: "red" }}>*</span> Phone
                  </Typography>
                  <TextField
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 800 123-34-45"
                    fullWidth
                    variant="outlined"
                    size="small"
                    className={classes.contactTextField}
                    error={submitted && !form.phone}
                  />
                </Grid>
                <Grid size={12} className={classes.contactFieldWrap}>
                  <Typography className={classes.contactLabel}>
                    <span style={{ color: "red" }}>*</span> Message
                  </Typography>
                  <TextField
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    minRows={4}
                    variant="outlined"
                    className={classes.contactTextField}
                    error={submitted && !form.message}
                  />
                </Grid>

                {hasError && (
                  <Grid size={12}>
                    <Typography color="white" textAlign="left">
                      All fields are required.
                    </Typography>
                  </Grid>
                )}

                <Grid size={12} className={classes.fullWidth}>
                  <Button type="submit" className={classes.contactButton}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
