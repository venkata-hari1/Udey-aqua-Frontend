import {Box, Button} from "@mui/material"
import useUserEndwebStyles from "./UserendwebStyles"
import { useState } from "react";


const UserEndweb = () => {

 const navigation=["Home","About Us","Culture","Training Programs","Technologies","News & Events","Contact Us"]

  const{classes,cx}=useUserEndwebStyles();
  const[activeIndex,setActiveIndex]=useState<number | null>(0)
  
  const setNavigation=(index:number)=>{
    console.log(activeIndex)
     setActiveIndex(index)
  }
  
  return (
    <Box>
      <Box className={classes.userEndButtonsContainer}>
       {navigation.map((nav,index)=>(
        <Button key={index} 
        className={cx(classes.userEndButton,
          activeIndex===index && classes.Activebutton
        )}
        onClick={()=>setNavigation(index)}>{nav}</Button>
       ))}
    </Box>
      
    </Box>
  )
}

export default UserEndweb