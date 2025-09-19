import { Box, Button,Stack,Typography} from "@mui/material"
import { DeleteButton, ErrorMessages, TextFieldManyRows, Uploadbutton, UserEndSaveCancelButtons } from "../userEndHome/UserEndCommonButtons"
import useUserEndwebStyles from "../UserendwebStyles"
import fishImg from './../../../../assets/admin/fishImg.jpg';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

const CultureHero = () => {

const {classes}=useUserEndwebStyles()

    return (
    <Box>
     <Box sx={{display:'flex', justifyContent:'end'}}>
       <DeleteButton message=""/>
     </Box>
      <Box className={classes.cultureheroBox2}>  
      <Stack display="flex" gap={2} justifyContent="space-between">
          <Typography className={classes.titleText}>Image</Typography>
          <Uploadbutton />
          <Box className={classes.herouploadImageBox1}>
            <img src={fishImg} className={classes.herouploadImage} alt="fish image"/>
            <CancelIcon className={classes.cancelImgIcon}/>
            <Button variant="contained" className={classes.corporatePlusbutton1}>
            <AddIcon />
            </Button>
         </Box>
        <ErrorMessages />
     </Stack>

     <Box>
      <Typography className={classes.titleText}>SubTitle</Typography>
      <TextFieldManyRows />
     </Box>
     </Box>
     <UserEndSaveCancelButtons />
     </Box>

)
}

export default CultureHero