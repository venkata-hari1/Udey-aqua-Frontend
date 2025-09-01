import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import contactImg from "../../../assets/home/contact_us.png";
import useHomeStyles from "./homeStyles";

const Contact = ({ title = true }: { title?: boolean }) => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { classes } = useHomeStyles();

  const maxMessageLength = 500;

  const isValidPhone = (value: string) => {
    const digitsOnly = value.replace(/[^0-9]/g, "");
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const nameError = submitted && !form.name ? "First name is required" : "";
  const phoneError = submitted
    ? !form.phone
      ? "Enter a valid phone number"
      : !isValidPhone(form.phone)
      ? "Enter a valid phone number"
      : ""
    : "";
  const messageError = submitted && !form.message ? "Message is required" : "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "message") {
      const limited = value.slice(0, maxMessageLength);
      setForm({ ...form, message: limited });
      return;
    }
    setForm({ ...form, [name]: value });
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
      {title && (
        <Grid size={12}>
          <SectionTitle title="Get In Touch" />
        </Grid>
      )}
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
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography className={classes.contactLabel}>
                      <span style={{ color: "red" }}>*</span> First Name
                    </Typography>
                    {nameError && (
                      <Typography color="error" fontSize={16}>
                        {nameError}
                      </Typography>
                    )}
                  </Box>
                  <TextField
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    fullWidth
                    variant="outlined"
                    size="small"
                    className={classes.contactTextField}
                    error={Boolean(nameError)}
                  />
                </Grid>
                <Grid size={12} className={classes.contactFieldWrap}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography className={classes.contactLabel}>
                      <span style={{ color: "red" }}>*</span> Phone
                    </Typography>
                    {phoneError && (
                      <Typography color="error" fontSize={16}>
                        {phoneError}
                      </Typography>
                    )}
                  </Box>
                  <TextField
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 800 123-34-45"
                    fullWidth
                    variant="outlined"
                    size="small"
                    className={classes.contactTextField}
                    error={Boolean(phoneError)}
                  />
                </Grid>
                <Grid size={12} className={classes.contactFieldWrap}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography className={classes.contactLabel}>
                      <span style={{ color: "red" }}>*</span> Message
                    </Typography>
                    {messageError && (
                      <Typography color="error" fontSize={16}>
                        {messageError}
                      </Typography>
                    )}
                  </Box>
                  <TextField
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    minRows={4}
                    variant="outlined"
                    className={classes.contactTextField}
                    error={Boolean(messageError)}
                    placeholder={"Message can’t be more than 500 characters"}
                    inputProps={{ maxLength: maxMessageLength }}
                  />
                </Grid>

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
