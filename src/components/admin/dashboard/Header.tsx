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
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useMemo, useRef, useState } from 'react';

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
    case "userend-contactus":
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

// determine if page wants filtering instead of navigation
const fullPath = location.pathname;
const isTraining = fullPath.includes('/admin/user-management/training-registrations') || fullPath.includes('/admin/user-management');
const isGetInTouch = fullPath.includes('/admin/user-management/getin-touch');
const isSubscribers = fullPath.includes('/admin/user-management/subscriber');

// dynamic search mode
const [searchValue, setSearchValue] = useState<string>('');
const fieldsRef = useRef<string[]>([]);

useEffect(()=>{
  setSearchValue('');
  fieldsRef.current = [];
  if (isTraining || isGetInTouch || isSubscribers) {
    const evt = new CustomEvent('admin-search', { detail: { page: isTraining?'training':isGetInTouch?'getintouch':'subscribers', fields: [], query: '' } });
    window.dispatchEvent(evt);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [fullPath]);

const pageFieldOptions = useMemo(()=>{
  if (isTraining) return ['Name','Address','Availability'];
  if (isGetInTouch || isSubscribers) return ['Name','Date','Phone number'];
  return null;
}, [isTraining, isGetInTouch, isSubscribers]);

const routeOptions = useMemo(() => ([
  { label: 'Dashboard', path: '/admin/dashboard' },
  { label: 'User Management', path: '/admin/user-management' },
  { label: 'Training Registrations', path: '/admin/user-management/training-registrations' },
  { label: 'Get In Touch Users', path: '/admin/user-management/getin-touch' },
  { label: 'Subscribers', path: '/admin/user-management/subscriber' },
  { label: 'Profile', path: '/admin/profile' },
  { label: 'UserEnd Website', path: '/admin/userend-web' },
  { label: 'UserEnd Home', path: '/admin/userend-web/userend-home' },
  { label: 'UserEnd About Us', path: '/admin/userend-web/userend-aboutus' },
  { label: 'UserEnd Cultures', path: '/admin/userend-web/userend-culture' },
  { label: 'UserEnd Technologies', path: '/admin/userend-web/userend-technologies' },
  { label: 'UserEnd Training Programs', path: '/admin/userend-web/userend-trainingprograms' },
  { label: 'UserEnd News & Events', path: '/admin/userend-web/userend-news&events' },
]), []);

const placeholder = useMemo(()=>{
  if (!pageFieldOptions) return 'Search';
  const list = (fieldsRef.current.length? fieldsRef.current : [pageFieldOptions[0]]).join(' and ');
  return `Search for ${list}`;
},[pageFieldOptions]);

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
          {showSearchbox(path)&& (
           <Autocomplete
             multiple={!!pageFieldOptions}
             freeSolo
             options={pageFieldOptions || routeOptions}
             getOptionLabel={(option) => {
               if (typeof option === 'string') return option;
               return (option as any).label;
             }}
             onChange={(_, value) => {
               if (pageFieldOptions) {
                 // value is string[] in multiple mode
                 const vals = (value as unknown as string[]) || [];
                 fieldsRef.current = vals.length? vals : [];
                 const evt = new CustomEvent('admin-search', { detail: { page: isTraining?'training':isGetInTouch?'getintouch':'subscribers', fields: fieldsRef.current, query: searchValue } });
                 window.dispatchEvent(evt);
               } else {
                 const v = value as unknown as { label: string; path: string } | null;
                 if (v && v.path) navigate(v.path);
               }
             }}
             inputValue={searchValue}
             onInputChange={(_, value) => {
               setSearchValue(value);
               if (pageFieldOptions) {
                 const fields = fieldsRef.current.length? fieldsRef.current : [pageFieldOptions[0]];
                 const evt = new CustomEvent('admin-search', { detail: { page: isTraining?'training':isGetInTouch?'getintouch':'subscribers', fields, query: value } });
                 window.dispatchEvent(evt);
               }
             }}
             renderInput={(params) => (
               <TextField
                 {...params}
                 className={classes.headerSearch}
                 size="small"
                 type="search"
                 placeholder={placeholder}
                 InputProps={{
                   ...params.InputProps,
                   startAdornment: (
                     <InputAdornment position="start">
                       <SearchIcon sx={{ color: '#0A4FA4',fontSize:15 }} />
                     </InputAdornment>
                   ),
                 }}
               />
             )}
             renderOption={(props, option) => (
               <li {...props} key={typeof option === 'string' ? option : (option as any).path}>
                 {typeof option === 'string' ? option : (option as any).label}
               </li>
             )}
           />
          )}
        </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
