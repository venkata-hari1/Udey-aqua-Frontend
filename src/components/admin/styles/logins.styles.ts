import { Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

// Root wrapper – fills viewport
export const StyledLoginRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100vw',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // stack only right panel
  },
}));

export const StyledLoginLeft = styled(Box)(({ theme }) => ({
  flex: '0 0 50%',       // fixed 50% width
  maxWidth: '50%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('md')]: {
    display: 'none',     // hide left image on tablet/mobile
  },
}));

export const StyledLoginRight = styled(Box)(({ theme }) => ({
  flex: '0 0 50%',
  maxWidth: '50%',
  height: '100vh',
  display: 'flex',
  marginTop:'-50px',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent',
  [theme.breakpoints.down('md')]: {
    flex: '1 0 100%',         // full width
    maxWidth: '100%',
    height: '100vh',          // full viewport height
    padding: theme.spacing(2),
    justifyContent: 'center', // horizontal center
    alignItems: 'center',     // vertical center
  },
}));


// Form wrapper
export const StyledLoginForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 400,
  width: '100%',
  justifyContent: 'flex-start', // allow content to grow from top
  alignItems: 'center',
  borderRadius: '10px',
  marginTop:'0px',
  gap: theme.spacing(1), // reduced gap for OTP page
  padding: theme.spacing(3),
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
    gap: theme.spacing(1.5), // reduce further on small screens
    width: '100%',
    },
}));

// Logo
export const StyledLoginLogo = styled('img')(() => ({
  marginTop: '10px',
  height: '150px',
  objectFit: 'contain',
  marginBottom: '40px',
  alignSelf: 'center',
}));

// Titles
export const StyledTitle = styled(Typography)(() => ({
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: 0,
  alignSelf: 'center',
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
  marginBottom: '24px',
  alignSelf: 'center',
}));

// Text field
export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: 0,
  alignSelf: 'center',
  width: '100%',
  paddingRight: '12px',
  paddingLeft: '12px',
  '& .MuiInputBase-root': {
    height: '50px',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: '#F9F9F9',
    boxSizing: 'border-box',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E0E0E0',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#A0A0A0',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.error.main,
  },
  '& .MuiFormHelperText-root': {
    minHeight: '20px',  // reserve space to prevent jumping
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: theme.palette.error.main,
    alignSelf: 'flex-start',
    width: '100%',
    textAlign: 'left',
    marginLeft: '0px',
    marginRight: '0px',
    marginTop: '4px',
  },
}));

// Icons
export const StyledCustomIcon = styled('img')(() => ({
  width: '20px',
  height: '20px',
  objectFit: 'contain',
}));

export const StyledInputAdornmentIcon = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '8px',
}));

// Links & buttons
export const StyledForgotPasswordLink = styled(Box)(() => ({
  alignSelf: 'flex-end',
  marginTop: 0,
  marginBottom: '10px',
}));

export const StyledLink = styled(RouterLink)<RouterLinkProps>(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontFamily: 'Inter',
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'underline',
  },
}));




export const StyledLoginButton = styled(Button)(({ theme }) => ({
  height: '50px',
  borderRadius: '8px',
  boxShadow: 'none',
  backgroundColor: theme.palette.primary.dark,
  color: '#FFFFFF',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  width: '100%',
  alignSelf: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },
}));

// --- OTP Specific Styled Components ---

export const StyledOtpInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  width: '100%',
}));

export const StyledOtpTextField = styled(TextField)(({ theme }) => ({
  width: "60px",
  "& .MuiOutlinedInput-root": {
    height: "60px",
    borderRadius: "12px",
    fontSize: "24px",
    backgroundColor: "#F9F9F9",
    "& fieldset": {
      borderColor: "#c9c7c7ff", // default
    },
    "&:hover fieldset": {
      borderColor: "#A0A0A0",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-error fieldset": {
      borderColor: "#E62310", 
    },
  },
  "& input": {
    textAlign: "center",
    padding: 0,
    height: "100%",
    fontSize: "24px",
  },
}));

export const StyledResendLinkContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  alignSelf: 'center',
  cursor:'pointer',
  
}));

export const StyledResendLink = styled("button")(({ theme }) => ({
  fontSize: '15px',
  fontFamily: 'roboto',
  color: theme.palette.primary.dark,
  '&:hover': {
    textDecoration: 'underline',
  },
}));