import { Box, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/userendabout.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import { DeleteButton, TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons } from "./UserEndCommonButtons";

const UserEndabout = () => {

      const{classes}=useUserEndwebStyles() 
  return (
   <Box>    
   <Box className={classes.useHerocontainer}> 
   <Box mt={2}>
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
       <DeleteButton message="Are you sure want to delte the image?"/>
   </Box>
  <Stack className={classes.UploadandAboutbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText}>Image</Typography>
        <Uploadbutton />   
        <Box className={classes.herouploadImageBox}>
        <img src={fishImg} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}/>
        </Box>  
        <Typography className={classes.errorUpload}>
           *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)
        <Typography className={classes.errorUpload}>Image Must be 5 MB</Typography>
        </Typography>
        
        </Stack>
        <Stack display="flex" justifyContent="flex-start">
        <Typography className={classes.titleText}>Content</Typography>
        <TextFieldManyRows />   
        </Stack>
      </Stack>
      <UserEndSaveCancelButtons />
  </Box>
  </Box>
    </Box>
  )
}

export default UserEndabout
