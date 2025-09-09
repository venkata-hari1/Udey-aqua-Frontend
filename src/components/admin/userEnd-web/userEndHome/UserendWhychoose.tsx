import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import fishImg from './../../../../assets/admin/userendabout.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
const UserendWhychoose = () => {
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
           <Typography className={classes.titleText}>Image</Typography>
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
              *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)
           </Typography>
           <Typography className={classes.errorUpload}>Image Must be 5 MB</Typography>
           </Stack>
           <Stack display="flex" justifyContent="flex-start">
           <Typography className={classes.titleText}>Content</Typography>
           <TextField className={classes.useHeaderTextfiled}
           
           fullWidth
           multiline
           minRows={5}/>   
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

export default UserendWhychoose
