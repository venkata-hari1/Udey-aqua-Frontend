import { Box, DialogActions, DialogContent, DialogContentText, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useProfileStyles from '../profile/ProfileStyles';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from 'react';
import { validatePassword } from './Validations';


type Iprops={
    pwdopen:boolean;
    handlepsswordopen:()=>void;
}

const Changepasswordpopup = ({pwdopen,handlepsswordopen}:Iprops) => {
const{classes}=useProfileStyles()

//create password
const[createPwdopen,setCreatePwdopen]=useState(false)
const[creatPwdtype,setcreatePwdType]=useState("password")

const[confirmPwdopen,setConfirmPwdopen]=useState(false)
const[confirmPwdtype,setConfirmPwdtype]=useState("password")

const handleCreatepassword=()=>{
  if(createPwdopen===false){
    setCreatePwdopen(true)
    setcreatePwdType("text")
  }
  else{
    setCreatePwdopen(false)
    setcreatePwdType("password")
  }  
}
const handleConfirmpassword=()=>{
  if(confirmPwdopen===false){
    setConfirmPwdopen(true)
    setConfirmPwdtype("text")
  }else{
    setConfirmPwdopen(false)
    setConfirmPwdtype("password")
  }
}

//pwdvalue
const[passwordValue,setPasswordValue]=useState("")
const[confirmPwdvalue,setConfirmpwdValue]=useState("")
const changePasswordHandler=(event:any)=>{
   setPasswordValue(event.target.value)
}
const confirmPasswordHandler=(event:any)=>{
   setConfirmpwdValue(event.target.value)
}


//error 
const[errorvalue,setErrorvalue]=useState<string[]>([])
const passwordSubmitHandler=()=>{

  const pwdobj={
    pwdValue:passwordValue,
    confirmpwdValue:confirmPwdvalue
  }
const resultPassword=validatePassword(pwdobj)
 setErrorvalue(resultPassword.errors)
}

return (
   <Dialog open={pwdopen} onClose={handlepsswordopen} 
    className={classes.dialogContainer} 
    fullWidth
    maxWidth="xs">
       <DialogContent>
       <Box className={classes.profilePasswordChangeBox}>
       <DialogContentText>   
       <Typography className={classes.updateEmailText}>New Password</Typography>
       <Typography fontSize="13px">Set the new password or your account to you login.</Typography>
       </DialogContentText>
       </Box>
       <DialogContent>
       <Box display="flex" flexDirection="column" gap={2}>
       <FormControl fullWidth sx={{m:0}}>
       <TextField fullWidth
        placeholder="Create Password"
        size="small"
        type={creatPwdtype}
        className={classes.profileTextfileds}
        onChange={changePasswordHandler}
        error={errorvalue.some(err=>err.includes("Password must"))}
        helperText={errorvalue.find(err=>err.includes("Password must")||" ")}
        InputProps={{
        startAdornment:(
          <InputAdornment position="start">
            {createPwdopen?<LockOpenIcon className={classes.textboxIcons} onClick={handleCreatepassword}/> :<LockOutlineIcon className={classes.textboxIcons}
            onClick={handleCreatepassword}/>}
          </InputAdornment>
       ),
       endAdornment:(
        <InputAdornment position="end">
          {createPwdopen?<VisibilityOutlinedIcon 
          onClick={handleCreatepassword} className={classes.textboxIcons}/>:<VisibilityOffOutlinedIcon className={classes.textboxIcons}
          onClick={handleCreatepassword}/>}
             
         </InputAdornment>
       )
       }}
       />
      </FormControl>

      <FormControl fullWidth sx={{m:0}}>
       <TextField fullWidth
        placeholder="Confirm Password"
        size="small"
        type={confirmPwdtype}
        className={classes.profileTextfileds}
        onChange={confirmPasswordHandler}
         error={errorvalue.some(err => err.includes("do not match"))}
         helperText={errorvalue.find(err => err.includes("do not match")) || " "}
        InputProps={{
        startAdornment:(
          <InputAdornment position="start">
            {confirmPwdopen?<LockOpenIcon className={classes.textboxIcons}
            onClick={handleConfirmpassword}/>
            :<LockOutlineIcon className={classes.textboxIcons}
            onClick={handleConfirmpassword}/>}
             
         </InputAdornment>
       ),
       endAdornment:(
        <InputAdornment position="end">
          {confirmPwdopen?<VisibilityOutlinedIcon className={classes.textboxIcons} 
          onClick={handleConfirmpassword}/>:<VisibilityOffOutlinedIcon className={classes.textboxIcons}
          onClick={handleConfirmpassword}/>} 
         </InputAdornment>
       )
       }}
       />
      </FormControl> 
      </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
      <Button variant="contained" className={classes.profileContinuebutton} 
      fullWidth onClick={passwordSubmitHandler}>
       Update Password
      </Button>
      </DialogActions>
       <Box className={classes.backtoProfileBox}>
           <Typography fontSize="14px">Back to <span className={classes.backProfiletext} onClick={handlepsswordopen}>Profile</span></Typography>  
       </Box>
      </DialogContent> 
    </Dialog>
  )
}

export default Changepasswordpopup
