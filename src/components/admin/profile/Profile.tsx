import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import useProfileStyles from "./ProfileStyles"
import { useState } from "react";
import ProfileEmailpopup from "../utils/ProfileEmailpopup";

const Profile = () => {
  
const profildata=[
    {id:1,key:'Phone Number',value:'+91-99394933'},
    {id:2,key:'Email',value:'info@gmail.com'},
    {id:3,key:'Password',value:'*******'},
]  
const{classes}=useProfileStyles();  
//profile email open
const [open,setOpen]=useState(false)

const handleClickOpen=()=>{
   setOpen(prev=>!prev)
}
return (
    <Box>
    <Card className={classes.cardProfileBox} elevation={0}>
    <CardContent>
      <Typography variant="h6" className={classes.cardAdminHeading}>ADMIN</Typography>
      {profildata.map((profile,index)=>(
        <Box key={index} sx={{display:'flex', gap:3}}>
          <Typography sx={{minWidth:120,mb:1,fontSize:13}}>{profile.key}</Typography>
          <Box display="flex">
          <Typography sx={{mb:4,fontSize:13}}>{profile.value}</Typography>
           {index===1&&<Typography className={classes.keyTextlabel}
           onClick={handleClickOpen}>Update</Typography>}
           {index===2&&<Button className={classes.valueButtonlabel}variant="outlined" size="small">Change password</Button>}
          </Box>
          {open&&<ProfileEmailpopup open={open} handleclickopen={handleClickOpen}/>}
        </Box>
      ))}
      <Box className={classes.buttonsBox}>
            <Button className={classes.saveButton}variant="contained">Save</Button>
            <Button className={classes.cancelButton}variant="contained">Cancel</Button>
     </Box>
    </CardContent>
    
    </Card>    
    </Box>
  )
}

export default Profile
