import { Box, Button,Divider,FormControl,MenuItem,Select,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {UserendSaveDeleteButtons,UserEndSaveCancelButtons, Uploadbutton, ErrorMessages, ErrormsgTitle } from "./UserEndCommonButtons";

const UserendDirectors = () => {

    const{classes}=useUserEndwebStyles() 
    
 
 const handleSave=()=>{
   console.log("userend values")
 }      

  return (
   <Box>
       <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="end" mb={2}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}>Add Directors</Button>
      </Box>
      <Box className={classes.FormCurageBox} >
       <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px'} }}>
        <Select
         labelId="demo-simple-select-label"
        id="demo-simple-select"
        /* label="Curage Culture" */
        
        className={classes.dropDownSelect}>
       <MenuItem value="Director1">Director1</MenuItem>
        <MenuItem value="Director2">Director2</MenuItem>
       
       </Select>
     </FormControl>
   
      <UserendSaveDeleteButtons message={`Are you sure want to delete Director?`}
      onDelete={()=>console.log("deleted")}/>
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
         <ErrormsgTitle />
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Role</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
         <ErrormsgTitle />
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Place</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
         <ErrormsgTitle />
        </Stack> 
      </Box>
      </Stack> 
      <Divider sx={{border:'1px solid #0A4FA4',mt:2,mb:2}}/>
      </Box> 

     {/* for advisors */}
      <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="end" mb={2}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}>Add Advisors</Button>
      </Box>
      <Box className={classes.FormCurageBox} >
       <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px'} }}>
        <Select
         labelId="demo-simple-select-label"
        id="demo-simple-select"
        /* label="Curage Culture" */
        
        className={classes.dropDownSelect}>
       <MenuItem value="Advisor1">Advisor1</MenuItem>
        <MenuItem value="Advisor2">Advisor2</MenuItem>
       
       </Select>
     </FormControl>
   
      <UserendSaveDeleteButtons message={`Are you sure want to delete Advisor?`}
      onDelete={()=>console.log("delted directors")}/>
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
         <ErrormsgTitle />
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Role</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
         <ErrormsgTitle />
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Place</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
         <ErrormsgTitle />
        </Stack> 
      </Box>
      </Stack> 
      <Divider sx={{border:'1px solid #0A4FA4',mt:2,mb:2}}/>
      
     
       <UserEndSaveCancelButtons onSave={handleSave} /> 
       
       </Box>

       </Box>
  )
}

export default UserendDirectors
