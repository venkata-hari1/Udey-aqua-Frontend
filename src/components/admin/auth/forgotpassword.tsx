import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputAdornment } from '@mui/material';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
import mail from '../../../assets/admin/mail.png'; // Import your custom image icon

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
  StyledCustomIcon,       // <-- IMPORT THIS
  StyledInputAdornmentIcon, // <-- IMPORT THIS
} from '../styles/logins.styles'; // Ensure this path is correct
import { validateEmail } from '../utils/Validations';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(()=>{
    inputsValidation()
  },[email])

  const inputsValidation=()=>{
    let isValid=true;
    if(!email){
        setEmailError("Email is Required");
        isValid=false;
    }else if(!validateEmail(email)){
      setEmailError("Enter a valid email address")
    }else{
      setEmailError("")
    }
    return isValid;
  }

  const validateAndContinue = () => {
    const validateInputs=inputsValidation()
    if(validateInputs){
      navigate('/admin/otp')
    }
  
  };

  return (
    <StyledLoginRoot>
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />

      <StyledLoginRight>
        <StyledLoginForm>
          <StyledLoginLogo src={logo} alt="Logo" />

          <StyledTitle variant="h5" fontWeight="bold">
            Forgot Password
          </StyledTitle>
          <StyledSubtitle variant="body2">
            Enter your email address to reset the password
          </StyledSubtitle>

          <StyledTextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
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
          >
            Continue
          </StyledLoginButton>
        </StyledLoginForm>
      </StyledLoginRight>
    </StyledLoginRoot>
  );
};

export default ForgotPassword;