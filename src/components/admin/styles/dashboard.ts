import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Card, CardMedia, CardContent, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const PRIMARY_BLUE = '#144887';
const LIGHT_BLUE_BACKGROUND = 'rgba(219, 236, 249, 1)';
const ACCENT_BLUE = '#1a73e8';
const LIGHT_GREY = '#e0e0e0';
const DARK_GREY_TEXT = '#333';
const MEDIUM_GREY_TEXT = '#666';
const DM_SERIF_DISPLAY_FONT = '"DM Serif Display", serif';
const INTER_FONT = '"Inter", sans-serif';

export const StyledDashboardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  boxSizing: 'border-box',
  maxWidth: '100%',
  overflowX: 'hidden',
  backgroundColor: '#fdfdfd',
  fontFamily: INTER_FONT,
}));

export const StyledDashboardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const StyledDashboardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  fontWeight: 700,
  color: PRIMARY_BLUE,
  fontFamily: DM_SERIF_DISPLAY_FONT,
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}));

export const StyledSearchInput = styled(TextField)(({ theme }) => ({
  width: '500px',
  borderRadius: '50px',
  backgroundColor: theme.palette.common.white,
  flexShrink: 0,
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    backgroundColor: LIGHT_BLUE_BACKGROUND,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: LIGHT_GREY,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: PRIMARY_BLUE,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const StyledBannerAndStatsWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3),
  },
}));

export const StyledImageCard = styled(Card)({
  width: '100%',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  zIndex: 1,
});

export const StyledCardMedia = styled(CardMedia)({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

export const StyledStatsGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.5),
  position: 'absolute',
  width: 'auto',
  left: theme.spacing(3),
  bottom: 0,
  transform: 'translateY(50%)',
  padding: 0,
  zIndex: 2,
  flexWrap: 'nowrap',
  [theme.breakpoints.down('md')]: {
    position: 'static',
    transform: 'none',
    padding: 0,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    width: '100%',
    left: 'auto',
    bottom: 'auto',
    justifyContent: 'center',
    gap: theme.spacing(3),
  },
}));

export const StyledStatCard = styled(Card)({
  borderRadius: '8px',
  backgroundColor: LIGHT_BLUE_BACKGROUND,
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  flexBasis: '250px',
  flexGrow: 0,
  flexShrink: 0,
  height: 'fit-content',
  minHeight: '80px',
  display: 'flex',
  alignItems: 'center',
  width: '300px',
});

export const StyledStatCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: '16px 24px',
  flexWrap: 'nowrap',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1.5),
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

export const StyledStatIconBox = styled(Box)(() => ({
  fontSize: '24px',
  color: PRIMARY_BLUE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '40px',
  },
}));

export const StyledStatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  fontWeight: 'bold',
  color: PRIMARY_BLUE,
  fontFamily: DM_SERIF_DISPLAY_FONT,
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
}));

export const StyledStatLabel = styled(Typography)({
  fontSize: '12px',
  color: DARK_GREY_TEXT,
  whiteSpace: 'nowrap',
});

export const StyledChartsGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4),
  },
}));

export const StyledChartCard = styled(Card)({
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  backgroundColor: LIGHT_BLUE_BACKGROUND,
  height: '100%',
  width: '100%',
});

export const StyledChartTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  
  color: PRIMARY_BLUE,
  marginBottom: theme.spacing(1.25),
  fontFamily: DM_SERIF_DISPLAY_FONT,
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}));

export const StyledChartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '210px',
  alignItems: 'flex-end',
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25),
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
  width: '750px',
  overflowX: 'hidden',
  minWidth: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const StyledChartYAxis = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  paddingRight: theme.spacing(1.25),
  fontSize: '12px',
  color: MEDIUM_GREY_TEXT,
  textAlign: 'right',
  flexShrink: 0,
  width: '40px',
  '& span': {
    height: 'calc(100% / 6)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: '2px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledChartArea = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'flex-end',
  height: '100%',
  minWidth: 0,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 0,
  },
}));

export const StyledChartBars = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  gap: '8px',
  minWidth: 'max-content',
});

export const StyledChartBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'flex-end',
  flexShrink: 0,
  width: '25px',
  [theme.breakpoints.down('sm')]: {
    width: '20px',
  },
}));

export const StyledChartBar = styled(Box)({
  width: '20px',
  backgroundColor: ACCENT_BLUE,
  borderRadius: '4px 4px 0 0',
  transition: 'height 0.3s ease-out',
});

export const StyledChartBarLabel = styled(Typography)({
  fontSize: '12px',
  color: MEDIUM_GREY_TEXT,
  marginTop: '5px',
});

export const StyledRegisterCard = styled(Card)({
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  backgroundColor: LIGHT_BLUE_BACKGROUND,
  height: '100%',
  width: '100%',
});

export const StyledRegisterHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2.5),
  flexWrap: 'wrap',
  gap: theme.spacing(1.25),
}));

export const StyledRegisterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: PRIMARY_BLUE,
  fontFamily: DM_SERIF_DISPLAY_FONT,
  flexShrink: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}));

export const StyledRegisterToday = styled(Typography)({
  fontSize: '14px',
  color: MEDIUM_GREY_TEXT,
  fontWeight: 500,
  flexShrink: 0,
});

export const StyledRegisterStats = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const StyledRegisterStatItem = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: `1px solid blue}`,
  flexWrap: 'wrap',
  gap: '5px',
  '&:last-child': {
    borderBottom: 'none',
  },
});

export const StyledRegisterStatLeft = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexShrink: 0,
});

export const StyledRegisterStatIcon = styled(TrendingUpIcon)({
  color: ACCENT_BLUE,
  fontSize: '20px',
  flexShrink: 0,
});

export const StyledRegisterStatLabel = styled(Typography)({
  fontSize: '14px',
  color: DARK_GREY_TEXT,
  minWidth: 0,
});

export const StyledRegisterStatRight = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flexShrink: 0,
});

export const StyledRegisterStatNumber = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  color: ACCENT_BLUE,
  whiteSpace: 'nowrap',
});

export const StyledRegisterStatDate = styled(Typography)({
  fontSize: '12px',
  color: '#999',
  whiteSpace: 'nowrap',
});