import {
  Box,
  Typography,
  Button,
  InputBase,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import CopyIcon from "../../../assets/icons/copy.svg";
import logo from "../../../assets/logo.png";
import footerBg from "../../../assets/home/footer.png";
import footerMap from "../../../assets/home/footer_map.png";
import useSharedStyles from "./sharedStyles";

const navLinks1 = ["Home", "About US", "News & Events", "Contact Us"];
const navLinks2 = ["Cultures", "Training Program", "Technologies"];

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { classes } = useSharedStyles();
  return (
    <Box className={classes.footerRoot}>
      <Box
        component="img"
        src={footerBg}
        alt="Footer Waves"
        className={classes.footerBg}
      />
      <Box className={classes.footerContent}>
        {isMobile ? (
          <>
            <Box className={classes.flexSide}>
              <Box className={classes.footerLogoBoxMobile}>
                <Box
                  component="img"
                  src={logo}
                  alt="Logo"
                  className={classes.footerLogo}
                />
              </Box>
              <Box className={classes.subscribeBox}>
                <InputBase
                  placeholder="Enter Email"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        className={`${classes.subscribeButton}`}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  }
                  className={`${classes.subscribeInput}  ${classes.hideInBig}`}
                />
              </Box>
            </Box>
            <Box className={classes.flexRoot}>
              <Box className={classes.navLinksBoxMobile}>
                {navLinks1.map((link) => (
                  <Typography
                    key={link}
                    className={`${classes.navLink} ${classes.navLinkMobile}`}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
              <Box
                className={`${classes.navLinksBoxMobile} ${classes.navLinksBoxMobile2}`}
              >
                {navLinks2.map((link) => (
                  <Typography
                    key={link}
                    className={`${classes.navLinkBold} ${classes.navLink} ${classes.navLinkBoldMobile}`}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
              <Box className={classes.contactBoxMobile}>
                <Typography
                  className={`${classes.contactTitle} ${classes.contactTitleMobile}`}
                >
                  Contact Us
                </Typography>
                <Box className={classes.contactRow}>
                  <MailOutlineIcon fontSize="small" />
                  <Typography
                    className={`${classes.contactText} ${classes.contactTextMobile}`}
                  >
                    info@Uday.com
                  </Typography>
                </Box>
                <Box className={classes.contactRow}>
                  <PhoneIcon fontSize="small" />
                  <Typography
                    className={`${classes.contactText} ${classes.contactTextMobile}`}
                  >
                    +91 97911-99909
                  </Typography>
                </Box>
                <Box className={classes.contactRow}>
                  <LocationOnIcon fontSize="small" />
                  <Typography
                    className={`${classes.contactText} ${classes.contactTextMobile}`}
                  >
                    Mulapolam, Srikakulam
                  </Typography>
                </Box>
                <Box className={classes.socialIconsMobile}>
                  <Box
                    component="img"
                    src={TwitterIcon}
                    alt="Twitter"
                    className={classes.footerSocialIconWhite}
                  />
                  <Box
                    component="img"
                    src={FacebookIcon}
                    alt="Facebook"
                    className={classes.footerSocialIconWhite}
                  />
                  <Box
                    component="img"
                    src={InstagramIcon}
                    alt="Instagram"
                    className={classes.footerSocialIconWhite}
                  />
                </Box>
              </Box>
              <Box className={classes.mapBoxMobile}>
                <Box
                  component="img"
                  src={footerMap}
                  alt="Map"
                  className={`${classes.mapImg} ${classes.mapImgMobile}`}
                />
              </Box>
            </Box>
          </>
        ) : (
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginTop: 16,
              gap: 32,
              marginBottom: 16,
            }}
          >
            <Box className={classes.logoBoxDesktop}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                className={classes.footerLogoDesktop}
              />
            </Box>
            <Box>
              <Box className={classes.subscribeBox}>
                <InputBase
                  placeholder="Enter Email"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        className={`${classes.subscribeButton}`}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  }
                  className={`${classes.subscribeInput}`}
                />
              </Box>
              <Box className={classes.linksFlex}>
                <Box
                  className={`${classes.navLinks1} ${classes.navLinksBoxDesktop}`}
                >
                  {navLinks1.map((link) => (
                    <Typography
                      key={link}
                      className={`${classes.navLink} ${classes.navLinkDesktop}`}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
                <Box
                  className={`${classes.navLinks2} ${classes.navLinksBoxDesktop}`}
                >
                  {navLinks2.map((link) => (
                    <Typography
                      key={link}
                      className={`${classes.navLinkBold} ${classes.navLink} ${classes.navLinkBoldDesktop}`}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box
              className={`${classes.contactBox} ${classes.contactBoxDesktop} ${classes.topInBig}`}
            >
              <Typography
                className={`${classes.contactTitle} ${classes.contactTitleDesktop}`}
              >
                Contact Us
              </Typography>
              <Box className={classes.contactRow}>
                <MailOutlineIcon fontSize="small" />
                <Typography
                  className={`${classes.contactText} ${classes.contactTextDesktop}`}
                >
                  info@Uday.com
                </Typography>
              </Box>
              <Box className={classes.contactRow}>
                <PhoneIcon fontSize="small" />
                <Typography
                  className={`${classes.contactText} ${classes.contactTextDesktop}`}
                >
                  +91 97911-99909
                </Typography>
              </Box>
              <Box className={classes.contactRow}>
                <LocationOnIcon fontSize="small" />
                <Typography
                  className={`${classes.contactText} ${classes.contactTextDesktop}`}
                >
                  Mulapolam, Srikakulam
                </Typography>
              </Box>
              <Box className={classes.socialIconsDesktop}>
                <Box
                  component="img"
                  src={TwitterIcon}
                  alt="Twitter"
                  className={classes.footerSocialIconWhite}
                />
                <Box
                  component="img"
                  src={FacebookIcon}
                  alt="Facebook"
                  className={classes.footerSocialIconWhite}
                />
                <Box
                  component="img"
                  src={InstagramIcon}
                  alt="Instagram"
                  className={classes.footerSocialIconWhite}
                />
              </Box>
            </Box>
            <Box className={classes.mapBoxDesktop}>
              <Box
                component="img"
                src={footerMap}
                alt="Map"
                className={`${classes.mapImg} ${classes.mapImgDesktop}`}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box
        className={
          isMobile
            ? `${classes.copyright} ${classes.copyrightMobile}`
            : `${classes.copyright} ${classes.copyrightDesktop}`
        }
      >
        <span>Copyright</span>
        <Box
          component="img"
          src={CopyIcon}
          alt="Copyright"
          className={classes.copyrightIcon}
        />
        <span>Uday Aqua all rights reserved.</span>
      </Box>
    </Box>
  );
};

export default Footer;
