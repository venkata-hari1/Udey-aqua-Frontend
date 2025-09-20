import { Box,Grid, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import {UserEndSaveCancelButtons} from "./UserEndCommonButtons"
import { addressContentValidation, phoneNumbervalidation, validateEmail } from "../../utils/Validations"
import { useState } from "react"

const UserendHeader = () => {

  const[email,setEmail]=useState('')
  const[emailerror,setEmailError]=useState("")

  const[phone,setPhone]=useState('')
  const[phoneError,setPhoneError]=useState('')
  const [address,setAddress]=useState('')
  const[addressError,setAddressError]=useState('')

  const{classes}=useUserEndwebStyles()  
  
  const emailChangeHandler=(event:any)=>{
    const value=event.target.value;
    const emailoutput= validateEmail(value)
    setEmail(value)
    setEmailError(emailoutput)  
  }
  const phoneChangeHandler=(event:any)=>{
     const value=event.target.value;
     setPhone(value)
    const phoneresult= phoneNumbervalidation(value)
    setPhoneError(phoneresult)
  }
  
 const addressChangeHandler=(event:any)=>{
    const value=event.target.value;
    setAddress(value)
    const addressresult=addressContentValidation(value)
    setAddressError(addressresult)
 }
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
          value={email}
          variant="outlined"
          size="small"
          error={!!emailerror}
          helperText={emailerror}
          onChange={emailChangeHandler}
          className={classes.useHeaderTextfiled}/>
        </Grid>

        {/* phone */}
        <Grid size={{xs:12, md:2}}>
         <Typography className={classes.titleText}>Phone</Typography>   
        </Grid>
        <Grid size={{xs:12,md:10}}>
         <TextField className={classes.useHeaderTextfiled}
          fullWidth
          type="tel"
          variant="outlined"
          size="small"
          value={phone}
          error={!!phoneError}
          helperText={phoneError}
          onChange={phoneChangeHandler}
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
          value={address}
          error={!!addressError}
          helperText={addressError}
          onChange={addressChangeHandler}
          />
        </Grid>
    </Grid>
    <UserEndSaveCancelButtons />
    </Box>
    </Box>
  )
}

export default UserendHeader
