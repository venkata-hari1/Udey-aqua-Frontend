import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import useProfileStyles from "./ProfileStyles"
import { useState } from "react";
import ProfileEmailpopup from "../utils/ProfileEmailpopup";
import Changepasswordpopup from "../utils/Changepasswordpopup";
import { CancelButton, SaveButton} from '../../admin/userEnd-web/userEnd-Aboutus/AboutUsButtons';
import {useAboutusStyles} from '../../admin/userEnd-web/userEnd-Aboutus/AboutusStyles';

const Profile = () => {
  
const profildata=[
    {id:1,key:'Phone Number',value:'+91-99394933'},
    {id:2,key:'Email',value:'info@Uday.com'},
    {id:3,key:'Password',value:'*******'},
]  
const{classes}=useProfileStyles();
const{classes:aboutus}=useAboutusStyles();  
//profile email open
const [open,setOpen]=useState(false)

const handleClickOpen=()=>{
   setOpen(prev=>!prev)
}

//change pwd
const [pwdOpen,setpwdOpen]=useState(false)
const handlePsswordOpen=()=>{
  setpwdOpen(prev=>!prev)
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
      <Box className={aboutus.SeveandCancelBox} >
        <SaveButton />
        <CancelButton />
      </Box>
    </CardContent>
    
    </Card>    
    </Box>
  )
}

export default Profile
