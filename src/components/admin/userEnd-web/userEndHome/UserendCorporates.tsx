import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/ciba.png'
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import { DeleteButton, ErrorMessages, Uploadbutton, UserEndSaveCancelButtons } from "./UserEndCommonButtons";
const UserendCorporates = () => {

const{classes}=useUserEndwebStyles() 
const corporatedata=[
    {count:1,image:fishImg},
    {count:2,image:fishImg},
    {count:3,image:fishImg},
] 


 const handleSave=()=>{
   console.log("userend values")
 }   
return (
   <Box>
    <Stack className={classes.corporateStack1}>
    <Typography className={classes.titleText}>Logos</Typography>
    <DeleteButton message="Are you use you want to delete Logo?" onDelete={()=>console.log("deleted")}/>
    </Stack>
    <Box className={classes.corporateImageBox}>
    <Uploadbutton />  
     
     <Stack className={classes.CorporateuploadImageStack}>
      
      {corporatedata.map((data,index)=>
     <>
      <Box key={index} className={classes.corporateCountImgBox}>  
      <Typography className={classes.titleText}>{data.count}</Typography>
      <Box className={classes.herouploadImageBox}>
      <img src={data.image}  className={classes.herouploadImage}/>
      <CancelIcon className={classes.corporateImgCancelIcon}/>  
      </Box>
      
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
      <ErrorMessages /> 
     </Box>
     <UserEndSaveCancelButtons onSave={handleSave} />
 


    </Box>
   </Box>
  )
}

export default UserendCorporates
