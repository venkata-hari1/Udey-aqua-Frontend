import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputAdornment } from '@mui/material';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
import mail from '../../../assets/admin/mail.png'; 

import {
  StyledLoginRoot,
  StyledLoginLeft,
  StyledLoginRight,
  StyledLoginForm,
  StyledLoginLogo,
  StyledTitle,
  StyledSubtitle,
  StyledTextField,
  StyledLoginButton,
  StyledCustomIcon,       
  StyledInputAdornmentIcon, 
} from '../styles/logins.styles'; 
import { validateEmail } from '../utils/Validations';
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { forgetPassword } from '../../../redux/reducers/auth';


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isDisabled=!email || !!emailError 
  const emilchangeHandler=(e:any)=>{
  const value=e.target.value;
  setEmail(value)
  const emailoutput=validateEmail(value)
  setEmailError(emailoutput)
 
}  

// const validateAndContinue = () => {
//    const emailOk=validateEmail(email)
   
//    if(emailOk===''){
//     console.log("email",email);
//      navigate('/admin/otp')
//    }
const dispatch = useDispatch<AppDispatch>();

const validateAndContinue = async () => {
  const emailOk = validateEmail(email);
  if (emailOk === '') {
    try {
      const resultAction = await dispatch(forgetPassword({ email }));
      if (forgetPassword.fulfilled.match(resultAction)) {
      
        navigate('/admin/otp');
      }
    } catch (error) {
      console.error('Error during forgot password:', error);
    }
  } else {
    setEmailError(emailOk);
  }
};

  return (
    <StyledLoginRoot>
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />

      <StyledLoginRight>
        <StyledLoginForm>
          <StyledLoginLogo src={logo} alt="Logo" />

          <StyledTitle variant="h5" fontWeight="bold" sx={{ textAlign: { xs: 'center',fontSize:'25px' } }}>
            Forgot Password
          </StyledTitle>
          <StyledSubtitle variant="body2">
            Enter your email address to reset the password
          </StyledSubtitle>

          <StyledTextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e)=>emilchangeHandler(e)}
             
            
            error={!!emailError}
            helperText={emailError ||null}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* Using your custom image icon */}
                  <StyledInputAdornmentIcon>
                    <StyledCustomIcon src={mail} alt="Email" />
                  </StyledInputAdornmentIcon>
                </InputAdornment>
              ),
            }}
          />

          <StyledLoginButton
            variant="contained"
            fullWidth
            onClick={validateAndContinue}
            disabled={isDisabled}
          >
            Continue
          </StyledLoginButton>
        </StyledLoginForm>
      </StyledLoginRight>
    </StyledLoginRoot>
  );
};

export default ForgotPassword;