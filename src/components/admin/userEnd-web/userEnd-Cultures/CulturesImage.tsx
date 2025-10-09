import { Box, Button,Stack,Typography} from "@mui/material"
import { DeleteButton, ErrorMessages, TextFieldManyRows, Uploadbutton, } from "../userEndHome/UserEndCommonButtons"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/fishImg.jpg';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { nameValidation } from "../../utils/Validations";

const CulturesImage = () => {

 const {classes}=useUserEndwebStyles()

  return (
    <Box>
     <Box sx={{display:'flex', justifyContent:'space-between'}}>
      <Typography className={classes.MottoBoxText}>Header Section</Typography>
       <DeleteButton message="Are you sure want delete Image in Cultures Image?"
       onDelete={()=>console.log("deleting")}/>
     </Box>
      <Box className={classes.cultureheroBox2}>  
      <Stack display="flex" gap={2} justifyContent="space-between">
          <Typography className={classes.titleText}>Image</Typography>
          <Uploadbutton onUpload={() =>console.log("")}/>
          <Box className={classes.herouploadImageBox1}>
            <img src={fishImg} className={classes.herouploadImage}/>
            <CancelIcon className={classes.cancelImgIcon}/>
            <Button variant="contained" className={classes.corporatePlusbutton1}>
            <AddIcon />
            </Button>
         </Box>
        <ErrorMessages />
     </Stack>

     <Box>
      <Typography className={classes.titleText}>SubTitle</Typography>
      <TextFieldManyRows onChange={() =>
                        console.log("")}
                        validationFn={nameValidation}/>
     </Box>
     </Box>
     <Box className={classes.buttonContainer}>
         <Button className={classes.headerSaveButton}>Update Header</Button>
         <Button className={classes.headerCancelButton}>Cancel</Button>  
     </Box>
     </Box>
  )
}

export default CulturesImage
