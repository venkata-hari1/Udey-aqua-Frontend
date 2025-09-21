import { Outlet } from 'react-router-dom';
import DashboardSidebar from './sidebar';

import {
  StyledDashboardLayoutRoot,
  StyledMainContentArea,
} from '../styles/dashboardlayout'; 

const DashboardLayout = () => {
  return (
    <StyledDashboardLayoutRoot>
      <DashboardSidebar />
      <StyledMainContentArea>
        <Outlet />
      </StyledMainContentArea>
    </StyledDashboardLayoutRoot>
  );
};

export default DashboardLayout;