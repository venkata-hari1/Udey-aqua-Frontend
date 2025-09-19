import { Box, Button, Divider, Stack,  TextField,  Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import {UserendSaveDeleteButtons,UserEndSaveCancelButtons, Uploadbutton, TextFieldManyRows, ErrorMessages, ErrormsgTitle, ErrormsgContent } from "./UserEndCommonButtons";
import CorpCard2 from './../../../../assets/admin/corp2.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import Avatar from '@mui/material/Avatar';
import { Fragment } from "react/jsx-runtime";

const UserendTestimonials = () => {
  
 const testimonialdata=[
  {id:1,test:"Testimonial 1"},
  {id:2,test:"Testimonial 2"}
 ] 
const{classes}=useUserEndwebStyles()
return (
 <Box>
 <Box className={classes.useHerocontainer}>
  <Box className={classes.addingButtonBox}>
    <Button variant="contained" startIcon={<AddIcon />} className={classes.AddingButton}>Add Testimonial</Button>
   </Box>

{ testimonialdata.map((test,index)=>(
  <Fragment>
  <Box sx={{display:'flex',justifyContent:'end',mt:2}}>
  <UserendSaveDeleteButtons message={`Are you sure wnant to delete ${test.test}`}/>
  </Box>

  <Stack className={classes.Uploadandheadingbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText}>{test.test}</Typography>
     <Uploadbutton />   
     <Box className={classes.herouploadImageBox}>
     <Avatar src={CorpCard2} />
     <CancelIcon className={classes.avtcancelImgIcon}/>
     </Box>  
     <ErrorMessages />
     
     </Stack>
     <Stack>
     <Box className={classes.testimonialTextbox}>
     <Stack direction="column" gap={1}>
      <Typography className={classes.titleText}> Name</Typography>
      <TextField size="small" className={classes.textfiledTestimonial} />
      <ErrormsgTitle />
     </Stack>
     <Stack direction="column" gap={1}>
       <Typography className={classes.titleText}> Occupation</Typography>
      <TextField size="small" className={classes.textfiledTestimonial}/> 
      <ErrormsgTitle />
     </Stack>
      </Box>
     <Typography className={classes.titleText}>Content</Typography>
     <TextFieldManyRows />  
     <ErrormsgContent />
     </Stack>
    </Stack> 
     {index!==testimonialdata.length-1&& <Divider sx={{border:'1px solid #0A4FA4',mt:2}}/>}
   </Fragment> 
))
  
}
   
      <UserEndSaveCancelButtons />
 </Box>
 </Box>
 )
}

export default UserendTestimonials
