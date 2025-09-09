import { Box,Button,Grid, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"

const UserendHeader = () => {

  const{classes}=useUserEndwebStyles()  
  return (
    <Box>
   {/*  <Typography color="#0A4FA4" mx="10px">Header</Typography> */}
    <Box>
    <Grid container spacing={2} alignItems="center" mx="10px">
       {/* email */}
       <Grid size={{xs:12, md:2}}>
         <Typography className={classes.titleText}>Email</Typography>   
        </Grid>
       <Grid size={{xs:12,md:10}}>
         <TextField 
          fullWidth
          variant="outlined"
          size="small"
          className={classes.useHeaderTextfiled}/>
        </Grid>

        {/* phone */}
        <Grid size={{xs:12, md:2}}>
         <Typography className={classes.titleText}>Phone</Typography>   
        </Grid>
        <Grid size={{xs:12,md:10}}>
         <TextField className={classes.useHeaderTextfiled}
          fullWidth
          variant="outlined"
          size="small"
          />
        </Grid>
        {/* Address */}
        <Grid size={{xs:12, md:2}}>
         <Typography className={classes.titleText}>Address</Typography>   
        </Grid>
        <Grid size={{xs:12,md:10}}>
         <TextField className={classes.useHeaderTextfiled}
          fullWidth
          variant="outlined"
          size="small"
          />
        </Grid>
    </Grid>
    <Box className={classes.buttonContainer}>
     <Button className={classes.headerSaveButton}>Save</Button>
     <Button className={classes.headerCancelButton}>Cancel</Button>  
    </Box>
    </Box>
    </Box>
  )
}

export default UserendHeader
