import { Box, Button, Stack, Typography } from "@mui/material"
import useLogoutStyles from "../styles/LogoutStyle"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
const Logout = () => {

  const {classes}=useLogoutStyles()

 const navigate= useNavigate()
  return (
    <Box className={classes.logOutMainContainer}>
      <Box className={classes.logOutboxContainer}>
        <Typography className={classes.logoutText}>Are you sure want to Log Out?</Typography>
       <Stack className={classes.LogoutButtonsbox}> 
           <Button variant="outlined" className={classes.LogoutCancel}>Cancel</Button>
           <Button variant="contained" className={classes.Logoutconfirm}
           onClick={()=>navigate('/admin/login')}>Log Out</Button>
       </Stack>
       {/* back */}
       <Stack className={classes.loginBackStack}>
        <ArrowBackIcon />
        <Typography>Back to <span className={classes.loginBack}
        onClick={()=>navigate('/admin/login')}>Log In</span></Typography>
       </Stack>
      </Box> 
    </Box>
  )
}

export default Logout
