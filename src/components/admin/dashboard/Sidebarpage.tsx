import { Box, Typography } from "@mui/material"
import Logo from '../../../assets/admin/logo.png';
import useSidebarStyles from "../styles/SidebarStyles";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import GridViewIcon from '@mui/icons-material/GridView';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import PortraitIcon from '@mui/icons-material/Portrait';
import UnsubscribeOutlinedIcon from '@mui/icons-material/UnsubscribeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

const navigate=useNavigate()
const{classes,cx}=useSidebarStyles()

const navigationmenu=[
  {id:1,icon:GridViewIcon,menu:'Dashboard',link:'/admin/dashboard'},
  {id:2,icon:EditNoteIcon,menu:'User End Web', link:'/admin/userend-web'},
  {id:3,icon:PeopleOutlineIcon,menu:'User Management',link:'/admin/user-management',
    submenu:[
      {id:31,icon:ModelTrainingIcon,menu:'Training Registrations',link:'/admin/user-management/training-registrations'},
      {id:32,icon:PortraitIcon,menu:'Get In Touch Users',link:'/admin/user-management/getin-touch'},
      {id:33,icon:UnsubscribeOutlinedIcon,menu:'Subscribers',link:'/admin/user-management/subscriber'},
    ]
  },
  {id:4,icon:AccountCircleOutlinedIcon,menu:'Profile',link:'/admin/Profile'},
  {id:5,icon:LogoutIcon,menu:'Logout', link:'/admin/logout'}
 ]

 const logoutItem = navigationmenu.find(item => item.menu === 'Logout');

 //handlemenu
 const[activeMenu,setActivemenu]=useState<string |null>(null)

 const handleMenuClick=(menuitem:any)=>{
  console.log(menuitem.link)
  navigate(menuitem.link)
  setActivemenu(prev=>(prev===menuitem.menu?null:menuitem.menu))
 }
 
 return (
    <Box className={classes.SidebarMainstyle}>
     
     <Box className={classes.LogoAdmincontainer}>
     <img src={Logo} width="120px" height="120px"/>
     <Typography className={classes.AdminTitle}>Admin</Typography>
     </Box>

     <Box className={classes.navigationContainer}>
      {navigationmenu.filter(item=>item.menu!=='Logout').map(menuitem=>(
        <Box key={menuitem.id}>
          <Box className={cx(classes.menuItem,
          {[classes.menuItemActive]:activeMenu===menuitem.menu})}
           onClick={()=>handleMenuClick(menuitem)}
           >
          <Box display="flex" justifyContent="center" gap={2}>
           {menuitem.icon && <menuitem.icon />}
          {menuitem.menu}
          </Box>  
         
         </Box>
          {activeMenu==='User Management'&& menuitem.submenu&&(
            <Box sx={{pl:4,mt:1,display:'flex',flexDirection:'column',gap:1,justifyContent:'center'}}>
              {menuitem.submenu.map(sub=>(
                <Box key={sub.id} className={classes.subMenuItem} onClick={()=>navigate(sub.link)}>
                   {sub.icon && <sub.icon />}{sub.menu}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
     </Box>

     <Box className={classes.logoutContainer}
     onClick={()=>{
      if(logoutItem){
        navigate(logoutItem.link)
        setActivemenu(null)
      }
     }}>
      
      {logoutItem?.icon &&<logoutItem.icon />}  
      {logoutItem?.menu}
     </Box>

    </Box>
  )
}

export default Sidebar
