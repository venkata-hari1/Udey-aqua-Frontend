import { Box, Button,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {UserEndSaveCancelButtons, DeleteButton } from "./UserEndButtons";

const UserendFooter = () => {

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
        <Button variant="outlined" className={classes.uploadHerobutton}
         component="label" endIcon={<FileUploadOutlinedIcon />}>
         <input type="file"
         accept="image/*"
         hidden
         /> Upload</Button>   
        <Box className={classes.herouploadImageBox1}>
        <img src={fishImg} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}/>
        <Button variant="contained" className={classes.corporatePlusbutton1}>
      <AddIcon />
     </Button>
     </Box>
         
        <Typography className={classes.errorUpload}>
           *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)
        </Typography>
        <Typography className={classes.errorUpload}>Image Must be 5 MB</Typography>
        </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack>
        <Typography className={classes.titleText} >Name</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>   
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Email</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Address</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
        </Stack> 
      </Box>
      </Stack> 
    
     
       <UserEndSaveCancelButtons /> 
       
       </Box> 
       </Box>
  )
}

export default UserendFooter
