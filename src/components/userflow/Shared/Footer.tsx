// src/components/userflow/Shared/Footer.tsx
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  InputAdornment,
  useTheme,
  useMediaQuery,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MailOutlineIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import CopyIcon from "../../../assets/icons/copy.svg";
import logo from "../../../assets/footer_logo.png";
import footerBg from "../../../assets/home/footer.png";
import footerBg1 from "../../../assets/home/footer1.png";
import footerBg2 from "../../../assets/home/footer2.png";
import footerBg3 from "../../../assets/home/footer3.png";
import footerMap from "../../../assets/home/footer_map.png";
import useSharedStyles from "./sharedStyles";
import {
  FOOTER_BG1_INITIAL,
  FOOTER_BG1_ANIMATE,
  FOOTER_BG1_TRANSITION,
  FOOTER_BG2_INITIAL,
  FOOTER_BG2_ANIMATE,
  FOOTER_BG2_TRANSITION,
  FOOTER_BG3_INITIAL,
  FOOTER_BG3_ANIMATE,
  FOOTER_BG3_TRANSITION,
} from "./animations";
/* import { getValue } from "@mui/system"; */
import { validateEmail } from "../../admin/utils/Validations";

const navLinks1 = ["Home", "About Us", "News & Events", "Contact Us"];
const navLinks2 = ["Cultures", "Training Programs", "Technologies"];

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useSharedStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const[error,setError]=useState("") 

  const handleEmailChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       const value=e.target.value;
       setEmail(value);
       if(value===''){
         setError("")
       }else{
        setError(validateEmail(value))
       }
       
 }

const isEmailValid=error==="" &&email.length>0

 const handleNavigation = (link: string) => {
    switch (link) {
      case "Home":
        navigate("/");
        break;
      case "About Us":
        navigate("/about");
        break;
      case "News & Events":
        navigate("/news-events");
        break;
      case "Contact Us":
        navigate("/contact");
        break;
      case "Cultures":
        navigate("/cultures");
        break;
      case "Training Programs":
        navigate("/training-programs");
        break;
      case "Technologies":
        navigate("/technologies");
        break;
      default:
        break;
    }
  };
  return (
    <Box className={classes.footerRoot}>
      <Box
        component="img"
        src={footerBg}
        alt="Footer Waves"
        className={classes.footerBg}
      />
      <motion.img
        src={footerBg1}
        alt="Footer Waves"
        className={classes.footerBg1}
        initial={FOOTER_BG1_INITIAL}
        animate={FOOTER_BG1_ANIMATE}
        transition={FOOTER_BG1_TRANSITION}
      />
      <motion.img
        src={footerBg2}
        alt="Footer Waves"
        className={classes.footerBg2}
        initial={FOOTER_BG2_INITIAL}
        animate={FOOTER_BG2_ANIMATE}
        transition={FOOTER_BG2_TRANSITION}
      />
      <motion.img
        src={footerBg3}
        alt="Footer Waves"
        className={classes.footerBg3}
        initial={FOOTER_BG3_INITIAL}
        animate={FOOTER_BG3_ANIMATE}
        transition={FOOTER_BG3_TRANSITION}
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
                <TextField 
                size="small"
                fullWidth
                variant="outlined"
                placeholder="enter email"
                value={email}
                
                onChange={handleEmailChange}
                error={!!error}
                helperText={error}
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      <Button
                      variant="contained"
                      className={classes.subscribeButton} 
                      disabled={!isEmailValid}
                      onClick={()=>console.log(email)}
                      >
                      Subscribe
                      </Button>
                    </InputAdornment>
                  )
                }}
                className={classes.subscribeInput2}
                />
         
              </Box>
            </Box>
            <Box className={classes.flexRoot}>
              <Box className={classes.navLinksBoxMobile} sx={{padding:'0px 15px 0px 15px'}}>
                {navLinks1.map((link) => (
                  <Typography
                    key={link}
                    className={`${classes.navLink} ${classes.navLinkMobile} ${classes.cursorPointer}`}
                    onClick={() => handleNavigation(link)}
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
                    className={`${classes.navLinkBold} ${classes.navLink} ${classes.navLinkBoldMobile} ${classes.cursorPointer}`}
                    onClick={() => handleNavigation(link)}
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
                <Box
                  className={`${classes.contactRow} ${classes.contactRowInline}`}
                >
                  <MailOutlineIcon fontSize="small" />
                  <Box
                    component="a"
                    href="mailto:info@udayaqua.com"
                    className={`${classes.contactText} ${classes.contactTextMobile}`}
                  >
                    info@udayaqua.com
                  </Box>
                </Box>
                <Box
                  className={`${classes.contactRow} ${classes.contactRowInline}`}
                >
                  <PhoneIcon fontSize="small" />
                  <Box
                    component="a"
                    href="tel:+919791199909"
                    className={`${classes.contactText} ${classes.contactTextMobile}`}
                  >
                    +91 97911 99909
                  </Box>
                </Box>
                <Box
                  className={`${classes.contactRow} ${classes.contactRowInline}`}
                >
                  <LocationOnIcon fontSize="small" />
                  <Box
                    component="a"
                    href="https://www.google.com/maps/search/?api=1&query=Mulapolam%2C%20Srikakulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${classes.contactText} ${classes.contactTextMobile}`}
                  >
                    Mulapolam, Srikakulam
                  </Box>
                </Box>
                <Box className={classes.socialIconsMobile}>
                  <Box
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.cursorPointer}
                  >
                    <Box
                      component="img"
                      src={TwitterIcon}
                      alt="Twitter"
                      className={classes.footerSocialIconWhite}
                    />
                  </Box>
                  <Box
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.cursorPointer}
                  >
                    <Box
                      component="img"
                      src={FacebookIcon}
                      alt="Facebook"
                      className={classes.footerSocialIconWhite}
                    />
                  </Box>
                  <Box
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.cursorPointer}
                  >
                    <Box
                      component="img"
                      src={InstagramIcon}
                      alt="Instagram"
                      className={classes.footerSocialIconWhite}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={classes.mapBoxMobile}>
                <Box
                  component="a"
                  href="https://www.google.com/maps/search/?api=1&query=Mulapolam%2C%20Srikakulam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    component="img"
                    src={footerMap}
                    alt="Map"
                    className={`${classes.mapImg} ${classes.mapImgMobile}`}
                  />
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <Box className={classes.footerDesktopRow}>
            <Box className={classes.logoBoxDesktop}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                className={classes.footerLogoDesktop}
              />
            </Box>
            <Box>
              <Box /* className={classes.subscribeBox} */>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleEmailChange}
                  error={!!error}
                  helperText={error}
                  
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          className={classes.subscribeButton} 
                          disabled={!isEmailValid}
                          onClick={()=>console.log(email)}
                       >
                          Subscribe
                        </Button>
                      </InputAdornment>
                    ),
                  }}

                className={classes.subscribeInput2} 
                />
                {/* Error message removed: button stays disabled on invalid email */}
              </Box>
              <Box className={classes.linksFlex}>
                <Box
                  className={`${classes.navLinks1} ${classes.navLinksBoxDesktop}`}
                >
                  {navLinks1.map((link) => (
                    <Typography
                      key={link}
                      className={`${classes.navLink} ${classes.navLinkDesktop} ${classes.cursorPointer}`}
                      onClick={() => handleNavigation(link)}
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
                      className={`${classes.navLinkBold} ${classes.navLink} ${classes.navLinkBoldDesktop} ${classes.cursorPointer}`}
                      onClick={() => handleNavigation(link)}
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
              <Box className={`${classes.contactRow} ${classes.contactRowInline}`}>
                <MailOutlineIcon fontSize="small" />
                <Box
                  component="a"
                  href="mailto:info@udayaqua.com"
                  className={`${classes.contactText} ${classes.contactTextDesktop}`}
                >
                  info@udayaqua.com
                </Box>
              </Box>
              <Box className={`${classes.contactRow} ${classes.contactRowInline}`}>
                <PhoneIcon fontSize="small" />
                <Box
                  component="a"
                  href="tel:+919791199909"
                  className={`${classes.contactText} ${classes.contactTextDesktop}`}
                >
                  +91 97911 99909
                </Box>
              </Box>
              <Box className={`${classes.contactRow} ${classes.contactRowInline}`}>
                <LocationOnIcon fontSize="small" />
                <Box
                  component="a"
                  href="https://www.google.com/maps/search/?api=1&query=Mulapolam%2C%20Srikakulam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${classes.contactText} ${classes.contactTextDesktop}`}
                >
                  Mulapolam, Srikakulam
                </Box>
              </Box>
              <Box className={classes.socialIconsDesktop}>
                <Box
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.cursorPointer}
                >
                  <Box
                    component="img"
                    src={TwitterIcon}
                    alt="Twitter"
                    className={classes.twitterIconWhite}
                  />
                </Box>
                <Box
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.cursorPointer}
                >
                  <Box
                    component="img"
                    src={FacebookIcon}
                    alt="Facebook"
                    className={classes.footerSocialIconWhite}
                  />
                </Box>
                <Box
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.cursorPointer}
                >
                  <Box
                    component="img"
                    src={InstagramIcon}
                    alt="Instagram"
                    className={classes.footerSocialIconWhite}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={classes.mapBoxDesktop}>
              <Box
                component="img"
                src={footerMap}
                alt="Map"
                className={`${classes.mapImg} ${classes.mapImgDesktop} ${classes.cursorPointer}`}
                onClick={() => navigate('/maps')}
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
        <Typography component="span">Copyright</Typography>
        <Box
          component="img"
          src={CopyIcon}
          alt="Copyright"
          className={classes.copyrightIcon}
        />
        <Typography component="span">Uday Aqua all rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
