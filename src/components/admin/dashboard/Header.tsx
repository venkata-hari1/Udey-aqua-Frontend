import { AppBar, Toolbar, Typography, TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useHeaderStyles from '../styles/HeaderStyles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";

type Iprops={
  open:boolean;
  toggleDrawer:()=>void;
}
const Header = ({toggleDrawer}:Iprops) => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));


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
            >
            <MenuIcon />
          </IconButton>    
          )}
            

        <Typography variant="h6" component="div" className={classes.AdminheaderTitle}>
          Admin Dashboard
        </Typography>
        <Box sx={{ minWidth:{md:400,xs:230},flexShrink:0 }}>
          <TextField
            size="small"
            type="search"
            fullWidth
            placeholder="Search with name and date"
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
