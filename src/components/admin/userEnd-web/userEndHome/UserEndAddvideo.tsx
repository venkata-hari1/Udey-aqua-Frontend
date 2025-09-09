import { Box, Button, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import fishImg from './../../../../assets/admin/userendabout.jpg'
import CancelIcon from '@mui/icons-material/Cancel';

const UserEndAddvideo = () => {
     const{classes}=useUserEndwebStyles() 
  return (
   <Box>    
   <Box className={classes.useHerocontainer}> 
   <Box mt={2}>
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
       <Button variant="outlined" className={classes.heroDelete}>Delete</Button>
   </Box>
  <Stack className={classes.UploadandAboutbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText}>Video</Typography>
        <Button variant="outlined" className={classes.uploadHerobutton}
         component="label" endIcon={<FileUploadOutlinedIcon />}>
         <input type="file"
         accept="image/*"
         hidden
         /> Upload</Button>   
        <Box className={classes.herouploadImageBox}>
        <img src={fishImg} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}/>
        </Box>  
        <Typography className={classes.errorUpload}>
          *Recommended formats: MP4, MOV 
        </Typography>
        <Typography className={classes.errorUpload}>Image Must be 5 MB</Typography>
        </Stack>
      </Stack>
      <Stack className={classes.corporateSaveCancel} style={{marginTop:5}}>
            <Button variant="contained" className={classes.corporateSave}>Save</Button>
            <Button variant="contained" className={classes.corporateCancel}>Cancel</Button>  
          </Stack>
  </Box>
  </Box>
    </Box>
  )
}

export default UserEndAddvideo
