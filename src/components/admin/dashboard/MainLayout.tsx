import React, { useState } from 'react'
import { Drawer,Box } from '@mui/material'
import Sidebar from './Sidebarpage'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";


const drawerWidth=240

const MainLayout:React.FC = () => {

 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
//drawer
const[open,setOpen]=useState(false);

 const toggleDrawer = () =>{
    setOpen((prev)=>!prev);
  };

return (
    <Box sx={{ display:'flex'}}>

      {!isMobile&& 
       <Drawer variant='permanent' 
       sx={{
        width:drawerWidth,
        flexShrink:0,
        '& .MuiDrawer-paper':{width:drawerWidth}}}>
      <Sidebar />
      </Drawer>}

      {/*mobile */}
      {isMobile&& 
      <Drawer variant='temporary' 
      anchor='left'
      open={open}
      onClose={toggleDrawer} 
      sx={{
        width:drawerWidth,
        flexShrink:0,
        '& .MuiDrawer-paper':{width:drawerWidth}}}>
      <Sidebar />
      </Drawer>}
      
      <Box sx={{flexGrow:1,display:'flex',flexDirection:'column',height:'100vh',overflowX:{xs:'hidden'}}}>
          <Header open={open} toggleDrawer={toggleDrawer}/>
        <Box component="main" sx={{backgroundColor:'white',flexGrow:1,p:2,overflow:'auto'}}>
          <Outlet />
        </Box>
      </Box>
    </Box>

  )
}

export default MainLayout
