import { AppBar, Toolbar, Typography, TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useHeaderStyles from '../styles/HeaderStyles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { hasGrayBackground, shouldShowbackArrow, showSearchbox } from '../utils/RouteUtils';

type Iprops={
  open:boolean;
  toggleDrawer:()=>void;
}

const Header = ({toggleDrawer}:Iprops) => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));

const location=useLocation()
const path=location.pathname.split('/').pop() ||""
console.log(path)

const navigate=useNavigate()
//header title

let title="";
switch(path){
  case "admin":
  case "dashboard":
    title="Admin Dashboard"
  break;
  case "user-management":
  case "user-info":  
  title="User Management";
  break;
  case "training-registrations":
  title="Training Registrations"
  break;
  case "getin-touch":
  title="Get In Touch Users"
  break;
  case "subscriber":
  title="Subscribers"
  break;
  case "profile":
  title="Profile"
  break;
  case "userend-web":
  case "userend-home":
  case 'userend-aboutus':
    title="User End Website"
    break;
  case "userend-culture":    
  title="User End Website"
  break;
  case "userend-technologies":
    title="User End Website"
    break;
  case "userend-trainingprograms":
    title="User End Website"
    break;
  case "userend-news&events":
    title="User End Website"
    break;
  case "subpage":
    title="User End Website"
    break;
  case "logout":
    title="Logout"
}
//backarrow handle
const backarrowHandle=()=>{
  switch(path){
   case "training-registrations":
   navigate('/admin/user-management')  
   break;
   case "user-info":
    navigate('/admin/user-management')
   break;
   case "getin-touch":
    navigate('/admin/user-management')
    break;
   case "subscriber":
    navigate('/admin/user-management')
    break; 
   navigate('/admin/userend-web')
   break;
   case "userend-aboutus":
   navigate('/admin/userend-web') 
   break;
   case "userend-home":
   navigate('/admin/userend-web') 
   break;
   case "userend-culture":
   navigate('/admin/userend-web') 
   break;
   case "userend-technologies":
    navigate('/admin/userend-web')
    break;
   case "userend-trainingprograms":
    navigate('/admin/userend-web')
    break;
   case "userend-news&events":
    navigate('/admin/userend-web')
   

 }
}


const{classes}=useHeaderStyles()
  return (
    <AppBar position="static" className={classes.headerAppbar} style={{background:hasGrayBackground(path)}}>
      <Toolbar className={classes.headerToolbar}>
          {isMobile&&(
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer} 
            edge="start"
            sx={{color:theme.palette.primary.dark}}>
            <MenuIcon />
          </IconButton>    
          )}
         <Box className={classes.headerandSearchContainer}> 
        <Box className={classes.AdmintitleBox}>
        {shouldShowbackArrow(path)&&
        <ArrowBackIosOutlinedIcon className={classes.backArrow}
        onClick={backarrowHandle}/>}
        
        <Typography variant="h6" component="div" className={classes.AdminheaderTitle}>
          {title}
        </Typography>
        </Box>    
        
        <Box className={classes.searchBox}>
          {showSearchbox(path)&&
           <TextField
            className={classes.headerSearch}
            size="small"
            type="search"
            
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#0A4FA4',fontSize:15 }} />
                </InputAdornment>
              ),
            }}
        />
          }
          
        </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
