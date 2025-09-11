import { Box, Button, Divider,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import { UserEndSaveCancelButtons, UserendSaveDeleteButtons,AddingButton } from "./UserEndButtons";
import { Fragment } from "react/jsx-runtime";
const UserendHero = () => {

const{classes}=useUserEndwebStyles() 
const heroslides=[
  {id:1,name:"Slide1"},
  {id:2,name:"Slide2"},
]


return (
   <Box>    
   <Box className={classes.useHerocontainer}>
   <AddingButton />
   
   {
    heroslides.map((slide,index)=>(

      <Fragment>
            <Box mt={2}>
   <Stack className={classes.slideAndButtons}>
    <Typography className={classes.titleText}>{slide.name}</Typography>
    <UserendSaveDeleteButtons message={`Are you sure want to delete ${slide.name} ?`}/>
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
     <img src={fishImg} className={classes.herouploadImage}/>
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
   {index!==heroslides.length-1&&<Divider className={classes.heroDivider}/>}
 
   </Box>
      </Fragment>
    ))
   }

   <UserEndSaveCancelButtons />
 </Box>
 </Box>
  )
}

export default UserendHero
