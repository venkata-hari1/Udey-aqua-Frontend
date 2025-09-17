import { Box,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {UserEndSaveCancelButtons, DeleteButton, Uploadbutton, ErrorMessages } from "./UserEndCommonButtons";

const UserendGetintouch = () => {
      const{classes}=useUserEndwebStyles() 

  return (
    <Box>
       <Box className={classes.useHerocontainer}>
       
       
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        <DeleteButton message="Are you sure want to delete?"/>
       </Box>
       <Stack className={classes.projectsUploadContentbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={2}>Image</Typography>
        <Uploadbutton />   
        <Box className={classes.herouploadImageBox}>
        <img src={fishImg} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}/>
        </Box>  
        <ErrorMessages />
        
        </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack>
        <Typography className={classes.titleText} >Name</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>   
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Phone</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Message</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small" 
         multiline
         minRows={3}/>
        </Stack> 
      </Box>
      </Stack> 
    
     
       <UserEndSaveCancelButtons /> 
       
       </Box> 
       </Box>
  )
}

export default UserendGetintouch
