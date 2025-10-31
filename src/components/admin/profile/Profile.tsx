import { Box, Button, Card, CardContent, Typography,CircularProgress } from "@mui/material"
import useProfileStyles from "./ProfileStyles"
import React, { useState, useEffect } from "react";
import ProfileEmailpopup from "../utils/ProfileEmailpopup";
import Changepasswordpopup from "../utils/Changepasswordpopup";
import { CancelButton, SaveButton} from '../../admin/userEnd-web/userEnd-Aboutus/AboutUsButtons';
import {useAboutusStyles} from '../../admin/userEnd-web/userEnd-Aboutus/AboutusStyles';
import { showToast } from "../../admin/utils/Toast";


const Profile = () => {
  
const profildata=[
    {id:1,key:'Phone Number',value:'+91 9791199909'},
    {id:2,key:'Email',value:'info@Uday.com'},
    {id:3,key:'Password',value:'*******'},
]  
const{classes}=useProfileStyles();
const{classes:aboutus}=useAboutusStyles();  
//profile email open
const [open,setOpen]=useState(false)
const [loading, setLoading] = useState(false)

const handleClickOpen=()=>{
   setOpen(prev=>!prev)
}

//change pwd
const [pwdOpen,setpwdOpen]=useState(false)
const handlePsswordOpen=()=>{
  setpwdOpen(prev=>!prev)
}
const handleSave = () => {
    setLoading(true);
    // simulate API save delay
    setTimeout(() => {
      setLoading(false);
      showToast(true, "Updated successfully!");
    }, 2000);
  };
const handleCancel=()=>{
  showToast(true, "Canceled Successfully");
}
return (
    <Box sx={{paddingLeft:'24px', paddingRight:'24px'}}>
    <Card className={classes.cardProfileBox} elevation={0}>
    <CardContent>
      <Typography variant="h6" className={classes.cardAdminHeading}>ADMIN</Typography>
      {profildata.map((profile,index)=>(
        <Box key={index} sx={{display:'flex', gap:3}}>
          <Typography sx={{minWidth:120,mb:1,fontSize:15}}>{profile.key}</Typography>
          <Box display="flex">
          <Typography sx={{mb:4,fontSize:15}}>{profile.value}</Typography>
           {index===1&&<Typography className={classes.keyTextlabel}
           onClick={handleClickOpen}>Update</Typography>}
           {index===2&&<Button className={classes.valueButtonlabel}variant="outlined"
           
           onClick={handlePsswordOpen}>Change password</Button>}
          </Box>
          {open&&<ProfileEmailpopup open={open} handleclickopen={handleClickOpen}/>}
          {pwdOpen&&<Changepasswordpopup pwdopen={pwdOpen} handlepsswordopen={handlePsswordOpen} />}
        </Box>
      ))}
      
        {loading ? 
        <Box className={aboutus.SeveandCancelBox} >
          <CircularProgress/>
        </Box>:
        <Box className={aboutus.SeveandCancelBox} >
          <SaveButton onClick={handleSave} />
        <CancelButton onClick={handleCancel}/>
        </Box>}
       
                 
                  
      
    </CardContent>
    
    </Card>    
    </Box>
  )
}

export default Profile
