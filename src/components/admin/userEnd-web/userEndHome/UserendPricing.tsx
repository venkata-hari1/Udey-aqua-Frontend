import { Box, Button,Divider,Stack, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import fishImg from './../../../../assets/admin/fishImg.jpg'
import CancelIcon from '@mui/icons-material/Cancel';
import {UserendSaveDeleteButtons,UserEndSaveCancelButtons, Uploadbutton, TextFieldManyRows, ErrorMessages, ErrormsgTitle, ErrormsgContent } from "./UserEndCommonButtons";
import { Fragment } from "react/jsx-runtime";

const UserendPricing = () => {
  
  const{classes}=useUserEndwebStyles() 

  const pricedata=[
    {id:1,price:1},
    {id:2,price:2},
    {id:3,price:3}
  ]

return (
   <Box>
       <Box className={classes.useHerocontainer}>
       <Box display="flex" justifyContent="end" mb={2}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.heroSave}>Add Pricing</Button>
      </Box>

      {pricedata.map((price,index)=>(
          <Fragment>
      <Box className={classes.userEnddelete} >
       <UserendSaveDeleteButtons message={`Are you want to delete ${price.price}?`}/>
      </Box>
       <Typography className={classes.titleText}>{price.price}</Typography>      
       <Stack className={classes.projectsUploadContentbox}>

        <Stack className={classes.UploadImageStack}>
        <Typography className={classes.titleText} mt={2}>Image</Typography>
        <Uploadbutton />   
        <Box className={classes.herouploadImageBox}>
        <img src={fishImg} className={classes.herouploadImage}/>
        <CancelIcon className={classes.cancelImgIcon}/>
        </Box>  
        <ErrorMessages />
        </Stack>
       <Box className={classes.headingDescbox}> 
        <Stack gap={1}>
        <Typography className={classes.titleText} >Heading</Typography>
        <TextField className={classes.heroTextfiled}
         fullWidth
        size="small"/>   
        <ErrormsgTitle />
        </Stack>
        <Stack gap={1}>
        <Typography className={classes.titleText}>Description</Typography>
        <TextFieldManyRows />
        <ErrormsgContent />
        </Stack>
        </Box>
      </Stack> 
       {index!==pricedata.length-1&& <Divider sx={{border:'1px groove #6a8fbdff',mb:1,mt:2}}/>}      
       </Fragment>
      ))}

     <UserEndSaveCancelButtons />  
       </Box> 
       </Box>
  
  )
}

export default UserendPricing
