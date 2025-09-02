import { AppBar, Toolbar, Typography, TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useHeaderStyles from '../styles/HeaderStyles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

type Iprops={
  open:boolean;
  toggleDrawer:()=>void;
}
const Header = ({toggleDrawer}:Iprops) => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));

const location=useLocation()
const path=location.pathname.split('/').pop()
console.log(path)

const navigate=useNavigate()

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
}

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
 }
}

const{classes}=useHeaderStyles()
  return (
    <AppBar position="static" className={classes.headerAppbar}>
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
        <Box className={classes.AdmintitleBox}>
        {path!=="admin" && 
        path!=="dashboard" && 
        path!=="user-management" &&
        <ArrowBackIosOutlinedIcon className={classes.backArrow}
        onClick={backarrowHandle}/>}
            
        <Typography variant="h6" component="div" className={classes.AdminheaderTitle}>
        {title}
        </Typography>
        </Box>    
        
        <Box sx={{ minWidth:{md:400,xs:230},flexShrink:0 }}>
          <TextField
            size="small"
            type="search"
            fullWidth
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#0A4FA4',fontSize:15 }} />
                </InputAdornment>
              ),
            }}
            className={classes.headerSearch}
            />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
