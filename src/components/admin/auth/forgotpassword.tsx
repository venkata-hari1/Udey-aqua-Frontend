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
  StyledCustomIcon,       // <-- IMPORT THIS
  StyledInputAdornmentIcon, // <-- IMPORT THIS
} from '../styles/logins.styles'; // Ensure this path is correct
import { validateEmail } from '../utils/Validations';

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

const validateAndContinue = () => {
   const emailOk=validateEmail(email)
   
   if(emailOk===''){
    console.log("email",email);
     navigate('/admin/otp')
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