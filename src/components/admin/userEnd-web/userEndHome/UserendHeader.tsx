import { Box,Grid, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import {UserEndSaveCancelButtons} from "./UserEndCommonButtons"
import { addressContentValidation, phoneNumbervalidation, validateEmail } from "../../utils/Validations"
import { useState } from "react"

const UserendHeader = () => {

  const[email,setEmail]=useState('')
  const [address,setAddress]=useState('')
  const[phone,setPhone]=useState('')
  const[emailError,setEmailError]=useState('')
  const[phoneError,setPhoneError]=useState('')
  const[addressError,setAddressError]=useState('')
  
  const isDisable=
   !email || !phone || !address || !!emailError || !!phoneError || !!addressError;
  
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

 const handleSave=()=>{
   const payload={email,phone,address}
   console.log(payload)
   setEmail('')
   setPhone('')
   setAddress('')
  
 }
 
  return (
    <Box>
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
          error={!!emailError}
          helperText={emailError}
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
    <UserEndSaveCancelButtons onSave={handleSave}
     disabled={isDisable} />
    </Box>
    </Box>
  )
}

export default UserendHeader
