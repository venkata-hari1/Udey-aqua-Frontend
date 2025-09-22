import { Box, Button,Divider,FormControl,MenuItem,Select,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {UserendSaveDeleteButtons,UserEndSaveCancelButtons, Uploadbutton, TextFieldManyRows, ErrorMessages, ErrormsgContent, ErrormsgTitle } from "./UserEndCommonButtons";

const UserEndProjects = () => {
 
    const{classes}=useUserEndwebStyles() 

 const handleSave=()=>{
   console.log("userend values")
 }       

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
  <UserendSaveDeleteButtons message="Are you want to delete the Project?"
  onDelete={()=>console.log("delete project")}/>
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
     <Stack gap={1}>
     <Typography className={classes.titleText} >Heading</Typography>
     <TextField className={classes.heroTextfiled}
      fullWidth
     size="small"/>   
     <ErrormsgTitle />
     </Stack>
     <Stack gap={1}>
     <Typography className={classes.titleText}>Description</Typography>
     <TextFieldManyRows />
     <ErrormsgContent />
     </Stack>
     </Box>
   </Stack> 
   <Divider sx={{border:'1px solid rgba(94, 190, 237, 0)'}}/>
    <UserEndSaveCancelButtons onSave={handleSave} /> 
    
    </Box> 
    </Box>
  )
}

export default UserEndProjects
