import { Box, DialogContent, DialogContentText, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
type Iprops={
    open:boolean;
    handleclickopen:()=>void;
}
const ProfileEmailpopup = ({open,handleclickopen}:Iprops) => {
  return (
      <Dialog open={open} onClose={handleclickopen}>
      <DialogContent>
       <Box sx={{ display:'flex',flexDirection:'column',
        gap:5,p:5,justifyContent:'center',
        borderRadius:"3px"}}>
       <DialogContentText>   
       <Typography color='#0A4FA4' fontSize="20px" fontWeight="600" textAlign="center">Update Email</Typography>
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
    <Button variant="contained" fullWidth>
      Continue
    </Button>
    <Box sx={{display:'flex', justifyContent:'center',mt:3}}>
     <Typography>Back to <span style={{textDecoration:'underline',color:'#0A4FA4'}}>Profile</span></Typography>  
    </Box>
  </Box>
</DialogActions>
      </Dialog>   
  )
}

export default ProfileEmailpopup
