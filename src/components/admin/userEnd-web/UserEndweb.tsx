import {Box, Button} from "@mui/material"
import useUserEndwebStyles from "./UserendwebStyles"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserEndweb = () => {

const navigate=useNavigate()

const navigation=[
{id:1,menu:"Home",path:'/admin/userend-web/userend-home'},
{id:2,menu:"About Us",path:'/admin/userend-web/userend-aboutus'},
{id:3,menu:"Cultures",path:'/admin/userend-web/userend-culture'},
{id:4,menu:"Training Programs",path:'/userend-training-program'},
{id:5,menu:"Technologies",path:'/userend-technologies'},
{id:6,menu:"News & Events",path:'/userend-news-events'},
{id:7,menu:"Contact Us",path:'/userend-contact-us'}
]
  const{classes,cx}=useUserEndwebStyles();
  const[activeIndex,setActiveIndex]=useState<number | null>(1)
  
  const setNavigation=(menu:any)=>{
    setActiveIndex(menu.id)
     navigate(menu.path)
  }
  
  return (
    <Box>
      <Box className={classes.userEndButtonsContainer}>
       {navigation.map((menu)=>(
        <Button key={menu.id} 
        className={cx(classes.userEndButton,
          activeIndex===menu.id && classes.Activebutton
        )}
        onClick={()=>setNavigation(menu)}>{menu.menu}</Button>
       ))}
    </Box>
      
    </Box>
  )
}

export default UserEndweb