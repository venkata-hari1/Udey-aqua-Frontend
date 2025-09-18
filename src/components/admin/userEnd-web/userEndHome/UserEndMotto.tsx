import { Box, Button, Divider,Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import fishImg from './../../../../assets/admin/fishImg.jpg'

import CancelIcon from '@mui/icons-material/Cancel';

import { ErrorMessages, TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons, UserendSaveDeleteButtons } from "./UserEndCommonButtons";
const UserEndMotto = () => {
  
const{classes}=useUserEndwebStyles() 

 const mottodata=[
  {id:1,boxname:"Box1"},
  {id:2,boxname:"Box2"},
  {id:3,boxname:"Box3"},
 ]

  return (
   
   <Box>    
   <Box className={classes.useHerocontainer}>
    <Box className={classes.addingButtonBox}>
    <Button variant="contained" startIcon={<AddIcon />} className={classes.AddingButton}>Add Motto</Button>
   </Box>

  {mottodata.map((moto,index)=>(
     <Box mt={2} key={index}>
   <Stack className={classes.slideAndButtons}>
    <Typography className={classes.MottoBoxText}>{moto.boxname}</Typography>
   <UserendSaveDeleteButtons message={`Are you sure you want to delete ${moto.boxname} in Motto? `}/>
   </Stack>
   
   <Stack className={classes.Uploadandheadingbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText}>Image</Typography>
     <Uploadbutton />   
     <Box className={classes.herouploadImageBox}>
     <Box className={classes.herouploadImageBox}>
      <img src={fishImg} className={classes.herouploadImage}/>
      <CancelIcon className={classes.cancelImgIcon}/>
     </Box>
     </Box>  
     <ErrorMessages />
     
     </Stack>
     <Stack gap={1}>
     <Typography className={classes.titleText}>Heading Content</Typography>
     <TextFieldManyRows />   
     </Stack>
   </Stack>
   {index!==mottodata.length-1&& <Divider className={classes.heroDivider}/>}
    
   </Box>
  ))}
  <UserEndSaveCancelButtons />
  
</Box>
 </Box>
  )
}

export default UserEndMotto
