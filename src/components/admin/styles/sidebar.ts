import { Box,  List, ListItemButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

export const StyledSidebarContainer = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(1.25),
  width: '250px',
  backgroundColor: 'rgba(219, 236, 249, 1)',
  height: '100vh',
  boxSizing: 'border-box',
  borderRight: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1.5),
  padding: `${theme.spacing(2)} 0`,
}));

export const StyledSidebarTopSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledSidebarLogo = styled('img')({
  width: '150px',
  height: 'auto',
  marginBottom: 0,
});

export const StyledSidebarTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.2rem",
  marginBottom: theme.spacing(2),
  color: "#144887",
}));

export const StyledSidebarNavList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '0 16px',
  alignItems:'center',
  justifyContent:'center'
});

interface StyledSidebarNavItemProps {
  active?: boolean;
  to?:string;
  component?:typeof RouterLink;
}

export const StyledSidebarNavItem = styled(ListItemButton)<StyledSidebarNavItemProps>(({ theme, active }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  borderRadius: '30px 10px 40px 10px',
  color: '#144887',
  width: '100%',
  '& .MuiListItemIcon-root': {
    color: '#144887',
  },
  '&:hover': {
    backgroundColor: '#d0e4f7',
    color: '#060606',
    '& .MuiListItemIcon-root': {
      color: '#060606',
    },
  },
  ...(active && {
    backgroundColor: '#0d47a1',
    color: theme.palette.common.white,
    '& .MuiListItemIcon-root': {
      color: 'rgba(255, 255, 255, 0.436)',
    },
    '&:hover': {
      backgroundColor: '#0d47a1',
      color: theme.palette.common.white,
      '& .MuiListItemIcon-root': {
        color: 'rgba(255, 255, 255, 0.436)',
      },
    },
  }),
}));

export const StyledSidebarLogoutItem = styled(ListItemButton)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  color: theme.palette.error.main,
  width: '100%',
  '& .MuiListItemIcon-root': {
    color: theme.palette.error.main,
  },
  '&:hover': {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.common.white,
    '& .MuiListItemIcon-root': {
        color: theme.palette.common.white,
    },
  }
}));