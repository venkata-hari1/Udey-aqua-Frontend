import { Box, Button,Stack,Typography} from "@mui/material"
import { DeleteButton, TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons } from "../userEndHome/UserEndCommonButtons"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/fishImg.jpg';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

const CultureHero = () => {

const {classes}=useUserEndwebStyles()

    return (
    <Box p={2}>
     <Box sx={{display:'flex', justifyContent:'end'}}>
       <DeleteButton message=""/>
     </Box>
      <Box className={classes.cultureheroBox2}>  
      <Stack display="flex" gap={2} justifyContent="space-between">
          <Typography>Image</Typography>
          <Uploadbutton />
          <Box className={classes.herouploadImageBox1}>
            <img src={fishImg} className={classes.herouploadImage}/>
            <CancelIcon className={classes.cancelImgIcon}/>
            <Button variant="contained" className={classes.corporatePlusbutton1}>
            <AddIcon />
            </Button>
         </Box>
        <Typography className={classes.errorUpload}>
           *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height)
        <Typography className={classes.errorUpload}>Image Must be 5 MB</Typography>
        </Typography>
     </Stack>

     <Box>
      <Typography>SubTitle</Typography>
      <TextFieldManyRows />
     </Box>
     </Box>
     <UserEndSaveCancelButtons />
     </Box>

)
}

export default CultureHero