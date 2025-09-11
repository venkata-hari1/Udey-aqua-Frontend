import { Box, Button, Divider,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CorpCard from './../../../../assets/admin/Corpcard.png'
import CancelIcon from '@mui/icons-material/Cancel';

import { UserEndSaveCancelButtons, UserendSaveDeleteButtons } from "./UserEndButtons";
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
   <UserendSaveDeleteButtons message={`Are you sure you want to delete ${moto.boxname} ? `}/>
   </Stack>
   
   <Stack className={classes.Uploadandheadingbox}>
     <Stack className={classes.UploadImageStack}>
     <Typography className={classes.titleText}>Image</Typography>
     <Button variant="outlined" className={classes.uploadHerobutton}
      component="label" endIcon={<FileUploadOutlinedIcon />}>
      <input type="file"
      accept="image/*"
      hidden
      /> Upload</Button>   
     <Box className={classes.herouploadImageBox}>
     <img src={CorpCard} className={classes.herouploadImage}/>
     <CancelIcon className={classes.cancelImgIcon}/>
     </Box>  
     <Typography className={classes.errorUpload}>
        *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)
     </Typography>
     <Typography className={classes.errorUpload}>Image Must be 5 MB</Typography>
     </Stack>
     <Stack>
     <Typography className={classes.titleText}>Heading Content</Typography>
     <TextField className={classes.heroTextfiled}
     
     fullWidth
     multiline
     minRows={5}/>   
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
