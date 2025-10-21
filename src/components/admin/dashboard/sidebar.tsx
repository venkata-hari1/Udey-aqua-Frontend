import { ListItemIcon, ListItemText, Grid} from '@mui/material';
// Import image paths
import Logo from '../../../assets/Logo (2).png';
import LogoutIcon from '../../../assets/admin/ri_logout-circle-r-line.png';
import DashboardImg from '../../../assets/admin/mage_dashboard.png'; // Renamed to avoid conflict with component naming convention
import WebImg from '../../../assets/admin/icon-park-outline_editor (1).png'; // Renamed
import PersonImg from '../../../assets/admin/heroicons-solid_users.png'; // Renamed
import { Link as RouterLink } from 'react-router-dom';


import {
  StyledSidebarContainer,
  StyledSidebarTopSection,
  StyledSidebarLogo,
  StyledSidebarTitle,
  StyledSidebarNavList,
  StyledSidebarNavItem,
  StyledSidebarLogoutItem,
} from '../styles/sidebar';

import { useLocation } from 'react-router-dom';

const DashboardSidebar = () => {

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <StyledSidebarContainer container direction="column" justifyContent="space-between">
      <Grid>
        <StyledSidebarTopSection>
          <StyledSidebarLogo src={Logo} alt="Uday Aqua Logo" />
          <StyledSidebarTitle component="div" >Admin</StyledSidebarTitle>

          <StyledSidebarNavList>
            <StyledSidebarNavItem
              component={RouterLink} 
              to="/admin/dashboard"
              active={isActive('/admin/dashboard')}
            >
              <ListItemIcon>
                <img src={DashboardImg} alt="Dashboard Icon" style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </StyledSidebarNavItem>

            <StyledSidebarNavItem
               component={RouterLink} 
              to="/admin/user-end-web"
              active={isActive('/admin/user-end-web')}
            >
              <ListItemIcon>
                <img src={WebImg} alt="User End Web Icon" style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary="User End Web" />
            </StyledSidebarNavItem>

            <StyledSidebarNavItem
              to="/admin/profile"
              active={isActive('/admin/profile')}
            >
              <ListItemIcon>
                <img src={PersonImg} alt="Profile Icon" style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </StyledSidebarNavItem>
          </StyledSidebarNavList>
        </StyledSidebarTopSection>
      </Grid>

      <Grid >
        <StyledSidebarNavList>
          <StyledSidebarLogoutItem onClick={() => window.location.href = '/admin/login'}>
            <ListItemIcon>
              <img src={LogoutIcon} alt="Logout Icon" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </StyledSidebarLogoutItem>
        </StyledSidebarNavList>
      </Grid>
    </StyledSidebarContainer>
  );
};

export default DashboardSidebar;