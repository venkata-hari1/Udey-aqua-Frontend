import { Box,Button, TextField,} from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import Deletepopup from "../../utils/DeleteMottopop";

export const UserEndSaveCancelButtons = () => {

    const{classes}=useUserEndwebStyles()  
  
    return (
    
    <Box className={classes.buttonContainer}>
         <Button className={classes.headerSaveButton}>Save</Button>
         <Button className={classes.headerCancelButton}>Cancel</Button>  
    </Box>
  )
}

export const UserendSaveDeleteButtons=()=>{


const[open,setOpen]=useState(false)

  const handleDeleteMotto=()=>{
   setOpen((prev)=>!prev)
}


    const{classes}=useUserEndwebStyles() 
    
    return(
    <Box display="flex" gap={2}>
     <Button  className={classes.heroSave} >Save</Button>
     <Button  className={classes.heroDelete} onClick={handleDeleteMotto}>Delete</Button>
    {open&& <Deletepopup open={open} handleclickopen={handleDeleteMotto}/>} 
   </Box>
  )

}

export const AddingButton=()=>{

    const{classes}=useUserEndwebStyles() 
    
    return(
       <Box className={classes.addingButtonBox}>
    <Button variant="contained" startIcon={<AddIcon />} className={classes.AddingButton} >
     Add Slide
     </Button>
   </Box> 
    ) 
}

export const DeleteButton=()=>{

  const{classes}=useUserEndwebStyles() 
  return (
    <Box>
     <Button variant="outlined" className={classes.heroDelete}>Delete</Button>
    </Box>
  )
}

export const Textfiledbox=()=>{
  
  const{classes}=useUserEndwebStyles() 
 
  return(
  
    <TextField className={classes.heroTextfiled}
            fullWidth
            multiline
            minRows={5}/>
  )
}