import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

export const StyledLoginRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100vw',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
}));

export const StyledLoginLeft = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledLoginRight = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
}));

export const StyledLoginForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  height: '100%',
  justifyContent: 'flex-start',
  borderRadius: '10px',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    padding: '25px',
    width: '100%',
    boxShadow: 'none',
    borderRadius: '0px',
    height: 'auto',
    minHeight: 'auto',
    justifyContent: 'flex-start',
  },
}));

export const StyledLoginLogo = styled('img')(({ theme }) => ({
  marginTop: '60px',
  height: '170px',
  objectFit: 'contain',
  marginBottom: '20px',
  alignSelf: 'center',
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 600,
  marginBottom: '0',
  alignSelf: 'center',
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '24px',
  alignSelf: 'center',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '0',
  alignSelf: 'center',
  width: '100%',
  '& .MuiInputBase-root': {
    height: '50px',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: '#F9F9F9',
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

export const StyledCustomIcon = styled('img')(({ theme }) => ({
  width: '20px',
  height: '20px',
  objectFit: 'contain',
}));

export const StyledInputAdornmentIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '8px',
}));

export const StyledForgotPasswordLink = styled(Box)(({ theme }) => ({
  alignSelf: 'flex-end',
  marginTop: '0px',
  marginBottom: '10px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '0.875rem',
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const StyledLoginButton = styled(Button)(({ theme }) => ({
  height: '50px',
  borderRadius: '8px',
  boxShadow: 'none',
  backgroundColor: theme.palette.primary.main,
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
  width: '60px',
  '& .MuiInputBase-root': {
    height: '60px',
    borderRadius: '8px',
    fontSize: '24px',
    textAlign: 'center',
    backgroundColor: '#F9F9F9',
    border: '1px solid #E0E0E0',
    '&.Mui-error': {
      borderColor: theme.palette.error.main,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '& input': {
    textAlign: 'center',
    padding: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const StyledResendLinkContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  alignSelf: 'center',
}));

export const StyledResendLink = styled(Link)(({ theme }) => ({
  textDecoration: 'underline', // Added underline by default
  fontSize: '15px',
  fontFamily: 'roboto',
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'underline', // Keep on hover, although it's already underlined
  },
}));