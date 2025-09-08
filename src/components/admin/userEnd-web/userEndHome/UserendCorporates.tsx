import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import fishImg from './../../../../assets/admin/ciba.png'
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
const UserendCorporates = () => {

const{classes}=useUserEndwebStyles() 
const corporatedata=[
    {count:1,image:fishImg},
    {count:2,image:fishImg},
    {count:3,image:fishImg},
] 

return (
   <Box>
    <Stack className={classes.corporateStack1}>
    <Typography>Logos</Typography>
    <Button variant="outlined" className={classes.heroDelete}>Delete</Button>
    </Stack>
    <Box className={classes.corporateImageBox}>

     <Button variant="outlined" className={classes.uploadHerobutton}
      component="label" endIcon={<FileUploadOutlinedIcon />}>
      <input type="file"
      accept="image/*"
      hidden
      /> Upload</Button>  
     
     <Stack className={classes.CorporateuploadImageStack}>
      
      {corporatedata.map((data,index)=>
     <>
      <Box key={index} className={classes.corporateCountImgBox}>  
      <Typography>{data.count}</Typography>
      <img src={data.image} width="100px" height="40px"/>
      <CancelIcon className={classes.corporateImgCancelIcon}/>
      </Box>
     {index!==corporatedata.length-1 &&
     <Divider sx={{border:'1px solid blue'}} />}
     
     </>
      )
    }
     <Button variant="contained" className={classes.corporatePlusbutton}>
      <AddIcon />
     </Button>
     </Stack>
     <Box>
     <Typography className={classes.errorUpload}>*Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)</Typography>
     <Typography className={classes.errorUpload}>Image Must be 5MB</Typography> 
     </Box>
    <Stack className={classes.corporateSaveCancel}>
      <Button variant="contained" className={classes.corporateSave}>Save</Button>
      <Button variant="contained" className={classes.corporateCancel}>Cancel</Button>  
    </Stack>
 


    </Box>
   </Box>
  )
}

export default UserendCorporates
