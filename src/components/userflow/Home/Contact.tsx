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

  // Validation functions
  const isValidPhone = (value: string) => {
    const digitsOnly = value.replace(/[^0-9]/g, "");
    return digitsOnly.length === 10;
  };

  const containsOnlyNumbers = (value: string) => {
    return /^\d+$/.test(value);
  };

  const isValidName = (value: string) => {
    return value.trim().length > 0 && !containsOnlyNumbers(value);
  };

  const isValidMessage = (value: string) => {
    return value.trim().length > 0 && !containsOnlyNumbers(value);
  };

  const nameError = submitted 
    ? !form.name 
      ? "First name is required" 
      : !isValidName(form.name)
      ? "Name cannot contain only numbers"
      : ""
    : "";
  const phoneError = submitted
    ? !form.phone
      ? "Enter a valid phone number"
      : !isValidPhone(form.phone)
      ? "Phone number must be exactly 10 digits"
      : ""
    : "";
  const messageError = submitted 
    ? !form.message 
      ? "Message is required" 
      : !isValidMessage(form.message)
      ? "Message cannot contain only numbers"
      : ""
    : "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === "message") {
      const limited = value.slice(0, maxMessageLength);
      setForm({ ...form, message: limited });
      return;
    }
    
    if (name === "phone") {
      // Keep +91 visible; store only the 10 local digits in state
      const digitsOnly = value.replace(/\D/g, "");
      const withoutCountry = digitsOnly.startsWith("91") ? digitsOnly.slice(2) : digitsOnly;
      const tenDigits = withoutCountry.slice(0, 10);
      setForm({ ...form, phone: tenDigits });
      return;
    }
    
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (isValidName(form.name) && isValidPhone(form.phone) && isValidMessage(form.message)) {
      console.log({
        name: form.name.trim(),
        phone: `+91${form.phone}`,
        message: form.message.trim(),
      });
      setSubmitted(false);
      setForm({ name: "", phone: "", message: "" });
    } else {
      console.warn({
        errors: { nameError, phoneError, messageError },
        data: form,
      });
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
                    value={`+91 ${form.phone}`}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    fullWidth
                    variant="outlined"
                    size="small"
                    className={classes.contactTextField}
                    error={Boolean(phoneError)}
                    inputProps={{ maxLength: 15 }}
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
                    placeholder={"Message can't be more than 500 characters"}
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
