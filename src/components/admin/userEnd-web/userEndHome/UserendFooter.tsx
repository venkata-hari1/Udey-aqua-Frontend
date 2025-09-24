import { Box, Button,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {UserEndSaveCancelButtons, DeleteButton, Uploadbutton, ErrorMessages, ErrormsgTitle, TextFieldManyRows, ErrormsgContent } from "./UserEndCommonButtons";

const UserendFooter = () => {

  const{classes}=useUserEndwebStyles() 


 const handleSave=()=>{
   console.log("userend values")
 }     
  return (
    <Box>
       <Box className={classes.useHerocontainer}>
       
       
       <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
        <DeleteButton message="Are you sure want to delete?" 
        onDelete={()=>console.log("deleted")}/>
       </Box>
       <Stack className={classes.projectsUploadContentbox}>
        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={2}>Image</Typography>
        <Uploadbutton onUpload={() => console.log()}/>   
        <Box className={classes.herouploadImageBox1}>
        <img src={fishImg} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}/>
        <Button variant="contained" className={classes.corporatePlusbutton1}>
        <AddIcon />
        </Button>
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
         <Typography className={classes.titleText} >Email</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"/>
         <ErrormsgTitle />
        </Stack>
        <Stack>
         <Typography className={classes.titleText} >Address</Typography>
        <TextFieldManyRows 
        onChange={() =>
                        console.log()
                    }/>
         <ErrormsgContent />
        </Stack> 
      </Box>
      </Stack> 
    
     
       <UserEndSaveCancelButtons onSave={handleSave} /> 
       
       </Box> 
       </Box>
  )
}

export default UserendFooter
