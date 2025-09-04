import { Box, DialogContent, DialogContentText, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import useProfileStyles from '../profile/ProfileStyles';

type Iprops={
    open:boolean;
    handleclickopen:()=>void;
}
const ProfileEmailpopup = ({open,handleclickopen}:Iprops) => {
  const{classes}=useProfileStyles()
  
  const handleBackprofile=()=>{
    handleclickopen()
  }
  
  return (
      <Dialog open={open} onClose={handleclickopen} 
      className={classes.dialogContainer}>
      <DialogContent>
       <Box className={classes.profileEmailBox}>
       <DialogContentText>   
       <Typography className={classes.updateEmailText}>Update Email</Typography>
       <Typography fontSize="14px" >Enter Your email and get 4 digit OTP</Typography>
       </DialogContentText>
       </Box>
       <FormControl fullWidth sx={{m:0}}>
       <TextField fullWidth
        placeholder="Email"
        size="small"
       sx={{p:0}}
       InputProps={{
        startAdornment:(
          <InputAdornment position="start">
         <MailOutlineIcon />
         </InputAdornment>
       )
       }}
       />
      </FormControl> 
      </DialogContent> 
      <DialogActions sx={{ p: 0 }}>
    <Box sx={{ p: 3, width: '100%' }}>
    <Button variant="contained" fullWidth className={classes.profileContinuebutton}>
      Continue
    </Button>
    <Box className={classes.backtoProfileBox}>
     <Typography>Back to <span className={classes.backProfiletext} onClick={handleBackprofile}>Profile</span></Typography>  
    </Box>
  </Box>
</DialogActions>
      </Dialog>   
  )
}

export default ProfileEmailpopup
