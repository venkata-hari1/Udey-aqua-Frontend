import { Box, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/userendabout.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import { DeleteButton, ErrorMessages, ErrormsgContent, TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons } from "./UserEndCommonButtons";

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
        <ErrorMessages />
         </Stack>
        <Stack display="flex" justifyContent="flex-start" gap={1}>
        <Typography className={classes.titleText}>Content</Typography>
        <TextFieldManyRows />   
        <ErrormsgContent />
        </Stack>
      </Stack>
      <UserEndSaveCancelButtons />
  </Box>
  </Box>
    </Box>
  )
}

export default UserEndabout
