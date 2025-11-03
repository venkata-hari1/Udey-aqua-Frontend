import { Box,Grid, TextField, Typography } from "@mui/material"
import useUserEndwebStyles from "../UserendwebStyles"
import { addressContentValidation, phoneNumberValidation, validateEmail,validateEmail1 } from "../../utils/Validations"
import { useState } from "react"
import { CancelButton,  SaveButton, EditButton } from '../userEnd-Aboutus/AboutUsButtons';
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';

const UserendHeader = () => {

  const[email,setEmail]=useState('')
  const [address,setAddress]=useState('')
  const[phone,setPhone]=useState('')
  const[emailError,setEmailError]=useState('')
  const[phoneError,setPhoneError]=useState('')
  const[addressError,setAddressError]=useState('')

  const [prevData, setPrevData] = useState<{ email: string; address: string; phone:string} | null>(null);
  const [Edit, setEdit] = useState<boolean>(true);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [cancel, setCancel] = useState<boolean>(false)
  
  const isTextInvalid =   validateEmail1(email).isError || phoneNumberValidation(phone).isError ||   address.length < 3 || address.length > 200 ; 
  
const{classes}=useUserEndwebStyles()  
const{classes:aboutus}=useAboutusStyles() 
  
  const emailChangeHandler=(event:any)=>{
    const value=event.target.value;
    const emailoutput= validateEmail(value)
    setEmail(value)
    setEmailError(emailoutput)  
  }
  const phoneChangeHandler=(event:any)=>{
     const value=event.target.value;
     setPhone(value)
    const phoneresult= phoneNumberValidation(value)
    setPhoneError(phoneresult.error)
  }
  
 const addressChangeHandler=(event:any)=>{
    const value=event.target.value;
    setAddress(value)
    const addressresult=addressContentValidation(value)
    setAddressError(addressresult.error)
 }

 const SaveData = ()=>{
        setPrevData({
        
        phone,
        email,
        address
    });
    setIsSaved(true);
    setEdit(false);
    setCancel(false)
    console.log(`titel:${email}, phone:${phone},website:${address}`);
};

    const CancelData = ()=>{
        if (prevData) {
        setEmail(prevData.email);
        setPhone(prevData.phone);
        setAddress(prevData.address)
        setIsSaved(true);
    } else {
        setEmail('');
        setPhone('');
        setAddress('');
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
 
  return (
    <Box>
    <Box>
      <Box sx={{display:'flex',justifyContent:'flex-end'}}>
        <EditButton error={!prevData} onClick={()=> {setCancel(true);
                            setEdit(true)
                        }} />
      </Box>
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
          //error={!!emailError}
          disabled={!Edit}
          helperText={emailError}
          onChange={(e)=>{setEmail(e.target.value);
                          setIsSaved(false);
                          emailChangeHandler(e)}}
          FormHelperTextProps={{
                                className: aboutus.helperText
                            }}
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
          disabled={!Edit}
          value={phone}
          //error={!!phoneError}
          helperText={phoneError}
          FormHelperTextProps={{
            className: (phone.length == 12 || phone.length == 13 ) ? aboutus.greyText : aboutus.helperText
           }}
          onChange={(e)=>{setPhone(e.target.value);
                          setIsSaved(false);
                          phoneChangeHandler(e)}}
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
          disabled={!Edit}
          //error={!!addressError}
          helperText={addressError}
          FormHelperTextProps={{
            className: (address.length >=3 && address.length < 200 ) ? aboutus.greyText : aboutus.helperText
          }}
          onChange={(e)=>{setAddress(e.target.value);
                          setIsSaved(false);
                          addressChangeHandler(e)}}
          />
        </Grid>
    </Grid>
    <Box className={aboutus.SeveandCancelBox} >
     <SaveButton error={!isTextInvalid || isSaved} onClick={SaveData} />
      {cancel &&(<CancelButton onClick={CancelData} />)}
    </Box>
    </Box>
    </Box>
  )
}

export default UserendHeader
