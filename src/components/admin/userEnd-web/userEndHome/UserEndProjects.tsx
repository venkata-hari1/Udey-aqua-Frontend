import { Box, Button,Divider,FormControl,MenuItem,Select,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import { Textfiledbox, UserendSaveDeleteButtons,UserEndSaveCancelButtons } from "./UserEndButtons";

const UserEndProjects = () => {
 
    const{classes}=useUserEndwebStyles() 

  return (
    <Box>
    <Box className={classes.useHerocontainer}>
    <Box display="flex" justifyContent="end" mb={2}>
    <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}>Add Project</Button>
   </Box>
   <Box className={classes.FormCurageBox}>
    <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px'} }}>
     <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      /* label="Curage Culture" */
      value="Cage Culture"
     
     className={classes.dropDownSelect}>
    <MenuItem value="Cage Culture">Cage Culture</MenuItem>
    <MenuItem value="Acqua Culture">Acqua Culture</MenuItem>
    </Select>
  </FormControl>
  <UserendSaveDeleteButtons message="Are you want to delete the Project?"/>
   </Box>
    
   <Stack className={classes.projectsUploadContentbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText} mt={2}>Image</Typography>
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
    <Box className={classes.headingDescbox}> 
     <Stack>
     <Typography className={classes.titleText} >Heading</Typography>
     <TextField className={classes.heroTextfiled}
      fullWidth
     size="small"/>   
     </Stack>
     <Stack>
     <Typography className={classes.titleText}>Description</Typography>
     <Textfiledbox />
     </Stack>
     </Box>
   </Stack> 
   <Divider sx={{border:'1px solid rgba(94, 190, 237, 0)'}}/>
    <UserEndSaveCancelButtons /> 
    
    </Box> 
    </Box>
  )
}

export default UserEndProjects
