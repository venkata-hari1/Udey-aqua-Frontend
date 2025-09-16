import { Box, Button, Divider, FormControl, MenuItem, Select, Stack,  TextField,  Typography  } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons, UserendSaveDeleteButtons } from "./UserEndCommonButtons";
import CorpCard2 from './../../../../assets/admin/corp2.jpg'


const UserendNewsEvents = () => {

  const{classes}=useUserEndwebStyles()
    return (
     <Box>
      <Box className={classes.useHerocontainer}>
       <Box className={classes.addingButtonBox}>
       <Button variant="contained" startIcon={<AddIcon />} className={classes.AddingButton}>Add Blog</Button>
      </Box>
       
    <Box className={classes.FormNewsblogBox} >
    <FormControl size="small" sx={{minWidth:{md:'170px',xs:'120px',mt:2}}}>
     <Select
      labelId="demo-simple-select-label"
     id="demo-simple-select"
     /* label="Curage Culture" */
     value="Blog"
     className={classes.dropDownSelectBlog}>
    <MenuItem value="Blog">Blog</MenuItem>
    <MenuItem value="Blog2">Blog2</MenuItem>
    </Select>
  </FormControl>
   <Box className={classes.dateTextfieldbox} >   
    <TextField 
    type="date" 
    size="small" 
    className={classes.dateTextfield}/>
    <UserendSaveDeleteButtons message="Are you sure want to delete blog?"/>
    </Box>
  </Box>

   <Stack className={classes.Uploadandheadingbox}>
       <Stack className={classes.UploadImageStack}>
       <Typography className={classes.titleText} mt={1} ml={1}>Image</Typography>
       <Uploadbutton />   
       <Box className={classes.herouploadImageBox}>
        <img src={CorpCard2} className={classes.herouploadImage}/>
       <CancelIcon className={classes.cancelImgIcon}/>
       </Box>  
       <Typography className={classes.errorUpload}>
          *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)
       </Typography>
       <Typography className={classes.errorUpload}>Image Must be 5 MB</Typography>
       </Stack>
       <Stack>
       <Box className={classes.testimonialTextbox}>
       <Stack direction="column">
        <Typography className={classes.titleText}>Heading</Typography>
        <TextField size="small" className={classes.textfiledTestimonialblog} />
       </Stack>
      </Box>
       <Typography className={classes.titleText}>Description</Typography>
       <TextFieldManyRows />   
       </Stack>
    </Stack> 
    <Divider sx={{border:'1px solid rgba(97, 177, 218, 0)'}}/>
    <UserEndSaveCancelButtons />

     </Box>
    </Box>
  )
}

export default UserendNewsEvents
