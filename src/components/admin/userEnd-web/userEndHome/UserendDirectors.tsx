import { Box, Button,Divider,FormControl,MenuItem,Select,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {UserendSaveDeleteButtons,UserEndSaveCancelButtons, Uploadbutton, ErrorMessages } from "./UserEndCommonButtons";
import { Fragment } from "react/jsx-runtime";

const UserendDirectors = () => {

    const{classes}=useUserEndwebStyles() 
    
    const rolesinfo=[
        {id:1,role:'Directors'},
        {id:2,role:'Advisors'},
    ]

  return (
   <Box>
       <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="end" mb={2}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}>Add Directors</Button>
      </Box>
      {
        rolesinfo.map((role,index)=>(
       <Fragment>  
       <Box className={classes.FormCurageBox} key={index}>
       <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px'} }}>
        <Select
         labelId="demo-simple-select-label"
        id="demo-simple-select"
        /* label="Curage Culture" */
        value={role.role}
        className={classes.dropDownSelect}>
       <MenuItem value="Directors">{role.role}</MenuItem>
        <MenuItem value="Advisors">{role.role}</MenuItem>
       
       </Select>
     </FormControl>
   
      <UserendSaveDeleteButtons message={`Are you sure want to delete ${role.role}`}/>
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
         <Typography className={classes.titleText} >Role</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Place</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
        </Stack> 
      </Box>
      </Stack> 
      {index!==rolesinfo.length-1&&<Divider sx={{border:'1px solid #0A4FA4',mt:2,mb:2}}/>}
      </Fragment> 
        ))
      }
     
       <UserEndSaveCancelButtons /> 
       
       </Box> 
       </Box>
  )
}

export default UserendDirectors
