import React, { useState } from 'react'
import { Drawer,Box } from '@mui/material'
import Sidebar from './Sidebarpage'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
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

const location=useLocation()
const path=location.pathname.split('/').pop() ||""
console.log(path)

//show bg
const hasGrayBackground=(path:string)=>{
  switch(path){
    case "profile":
    case "userend-web":
    case "logout":  
      return "#F7FAFC";
    default:
      return "white"    
  }
}

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
        <Box component="main" 
         sx={{
          backgroundColor:hasGrayBackground(path),
          flexGrow:1,
          p:1,
          overflow:'auto'}}>
          <Outlet />
        </Box>
      </Box>
    </Box>

  )
}

export default MainLayout
