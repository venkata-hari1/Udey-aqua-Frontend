import { Box, Button, Divider,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
const UserendHero = () => {

   const{classes}=useUserEndwebStyles() 
    return (
   <Box>    
   <Box className={classes.useHerocontainer}>
   
   <Box display="flex" justifyContent="end">
    <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}>Add Slide</Button>
   </Box>
   {/* 2nd */}
   <Box mt={2}>
   <Stack className={classes.slideAndButtons}>
    <Typography className={classes.titleText}>Slide1</Typography>
    <Box display="flex" gap={2}>
    <Button variant="contained" className={classes.heroSave}>Save</Button>
    <Button variant="outlined" className={classes.heroDelete}>Delete</Button>
    </Box>
   </Stack>
   
   <Stack className={classes.Uploadandheadingbox}>
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
     <Stack>
     <Typography className={classes.titleText}>Heading Content</Typography>
     <TextField className={classes.heroTextfiled}
      fullWidth
     multiline
     minRows={5}/>   
     </Stack>
   </Stack>
   <Divider className={classes.heroDivider}/> 
   </Box>
  
  {/* test */}
    <Box mt={2}>
   <Stack className={classes.slideAndButtons}>
    <Typography className={classes.titleText}>Slide2</Typography>
    <Box display="flex" gap={2}>
    <Button variant="contained" className={classes.heroSave}>Save</Button>
    <Button variant="outlined" className={classes.heroDelete}>Delete</Button>
    </Box>
   </Stack>
   
   <Stack className={classes.Uploadandheadingbox}>
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
     <Stack>
     <Typography className={classes.titleText}>Heading Content</Typography>
     <TextField className={classes.heroTextfiled}
     
     fullWidth
     multiline
     minRows={5}/>   
     </Stack>
   </Stack>
   <Divider className={classes.heroDivider}/> 
   </Box>

  {/* testend */}
 </Box>
 </Box>
  )
}

export default UserendHero
