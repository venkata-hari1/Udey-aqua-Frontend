import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledDashboardLayoutRoot = styled(Box)({
  display: 'flex',
});

export const StyledMainContentArea = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
}));