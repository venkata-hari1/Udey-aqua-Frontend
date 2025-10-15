// src/components/userflow/Contact/Contact.tsx
import { Box, Container, Grid, Card, Typography } from "@mui/material";
import { Phone, Email, Language } from "@mui/icons-material";
import Hero from "../../../components/userflow/common/Hero/Hero";
import ContactLayout from "./ContactLayout";
import useContactStyles from "./contactStyles";
import ContactForm from "../Home/Contact";
import headOfficeSvg from "../../../assets/contact/head_office.svg";
import regionalOfficeSvg from "../../../assets/contact/regional_office.svg";
import rdSvg from "../../../assets/contact/r&d.svg";
import fish123 from '../../../assets/home/fish123.gif'
import SunFishAnimation from "../../animations/SunFishAnimation";

// Opposite direction animation for contact fish


const Contact = () => {
  const { classes } = useContactStyles();

  const contactInfoData = [
    {
      icon: headOfficeSvg,
      title: "Head Office:",
      subtitle: "",
      isBigTitle: true,
      address:
        "PLOT NO 49, Mandal, Near Doyens, Doyens Township, Lingampally, Serilingampalle (M), Hyderabad, Telangana 500019",
      phone: "90638-29909",
      email: "info@udayaqua.com",
      website: "www.udayaquaconnects.com",
    },
    {
      icon: regionalOfficeSvg,
      title: "Regional Office: Andhra Pradesh",
      subtitle: "",
      isBigTitle: false,
      address:
        "NIFD Malapalam, Integrated Coastal Aquaculture Facility, Malapalam Village, Srikakulam, Andhra Pradesh 532263",
      phone: "08636-29000",
      email: "info@udayaqua.com",
      website: "www.udayaqua.com",
    },
  ];

  const contactInfoData2 = [
    {
      icon: rdSvg,
      title: "R&D Centres",
      subtitle: "(Research And Development)",
      isBigTitle: false,
      address:
        "NIFD Malapalam, Integrated Coastal Aquaculture Facility, Malapalam Village, Srikakulam, Andhra Pradesh 532263",
      phone: "08636-29000",
      email: "info@udayaqua.com",
      website: "www.udayaqua.com",
    },
    {
      icon: rdSvg,
      title: "R&D Centres 2",
      subtitle: "(Research And Development)",
      isBigTitle: false,
      address:
        "8-11-118/3 New Bank Colony, Karimnagar, Nizamabad, Telangana, India - 500001",
      phone: "08636-29000",
      email: "info@udayaqua.com",
      website: "www.udayaqua.com",
    },
  ];

  return (
    <ContactLayout>
      <Grid  size={{ xs: 12 }}>
              <Hero
                page="cultures" 
                // breadcrumb={`Cultures${currentLabel ? ` > ${currentLabel}` : ""}`}
                overlayColor="rgba(10,79,164,0.41)" 
                fishHeight={500}
              />
            </Grid>
      <Box className={classes.contactInfoSection}>
        <Container className={classes.contactInfoContainer}>
          <Grid container spacing={4}>
            {contactInfoData.map((info, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card className={classes.contactInfoCard}>
                  <Box className={classes.contactInfoContent}>
                    <Box className={classes.contactInfoIcon}>
                      <Box
                        component="img"
                        src={info.icon}
                        alt={info.title}
                        className={classes.contactInfoSvg}
                      />
                    </Box>
                    <Box className={classes.contactInfoTextContent}>
                      <Typography
                        className={`${classes.contactInfoTitle} ${
                          info.isBigTitle ? classes.contactInfoBigTitle : ""
                        }`}
                      >
                        {info.title}
                      </Typography>
                      {info.subtitle && (
                        <Typography className={classes.contactInfoTitle}>
                          {info.subtitle}
                        </Typography>
                      )}
                      <Typography className={classes.contactInfoText}>
                        <strong className={classes.boldText}>Address:</strong>{" "}
                        {info.address}
                      </Typography>
                      <Box className={classes.contactInfoRow}>
                        <Phone className={classes.contactInfoIconSmall} />
                        <a
                          href={`tel:${info.phone}`}
                          className={classes.contactInfoLink}
                        >
                          {info.phone}
                        </a>
                      </Box>
                      <Box className={classes.contactInfoRow}>
                        <Email className={classes.contactInfoIconSmall} />
                        <a
                          href={`mailto:${info.email}`}
                          className={classes.contactInfoLink}
                        >
                          {info.email}
                        </a>
                      </Box>
                      <Box className={classes.contactInfoRow}>
                        <Language className={classes.contactInfoIconSmall} />
                        <a
                          href={`https://${info.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.contactInfoLink}
                        >
                          {info.website}
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box className={classes.contactFishSection}>
        <Container className={classes.contactFishContainer}>
        <SunFishAnimation Fish={fish123} Zindex={100} Count={2}/>
        </Container>
      </Box>

      <Box className={classes.contactInfoSection}>
        <Container className={classes.contactInfoContainer}>
          <Grid container spacing={4}>
            {contactInfoData2.map((info, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card className={classes.contactInfoCard}>
                  <Box className={classes.contactInfoContent}>
                    <Box className={classes.contactInfoIcon}>
                      <Box
                        component="img"
                        src={info.icon}
                        alt={info.title}
                        className={classes.contactInfoSvg}
                      />
                    </Box>
                    <Box className={classes.contactInfoTextContent}>
                      <Typography
                        className={`${classes.contactInfoTitle} ${
                          info.isBigTitle ? classes.contactInfoBigTitle : ""
                        }`}
                      >
                        {info.title}
                      </Typography>
                      {info.subtitle && (
                        <Typography className={classes.contactInfoTitle}>
                          {info.subtitle}
                        </Typography>
                      )}
                      <Typography className={classes.contactInfoText}>
                        <strong className={classes.boldText}>Address:</strong>{" "}
                        {info.address}
                      </Typography>
                      <Box className={classes.contactInfoRow}>
                        <Phone className={classes.contactInfoIconSmall} />
                        <a
                          href={`tel:${info.phone}`}
                          className={classes.contactInfoLink}
                        >
                          {info.phone}
                        </a>
                      </Box>
                      <Box className={classes.contactInfoRow}>
                        <Email className={classes.contactInfoIconSmall} />
                        <a
                          href={`mailto:${info.email}`}
                          className={classes.contactInfoLink}
                        >
                          {info.email}
                        </a>
                      </Box>
                      <Box className={classes.contactInfoRow}>
                        <Language className={classes.contactInfoIconSmall} />
                        <a
                          href={`https://${info.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.contactInfoLink}
                        >
                          {info.website}
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box className={classes.contactFormSection}>
        <Container className={classes.contactFormContainer}>
          <ContactForm title={false} />
        </Container>
      </Box>
    </ContactLayout>
  );
};

export default Contact;
