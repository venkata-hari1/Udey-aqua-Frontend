import { Box, Typography } from "@mui/material"
import useUserEndwebStyles from "./UserendwebStyles"


const UserEndweb = () => {
  const{classes}=useUserEndwebStyles()
    return (
    <Box>
     <Typography className={classes.userEndwebTitle}>User End Website</Typography> 
     <Box></Box>
    </Box>
  )
}

export default UserEndweb