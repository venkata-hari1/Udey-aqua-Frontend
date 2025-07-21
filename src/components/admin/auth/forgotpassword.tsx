import React, { useState } from 'react';
// import EmailIcon from '@mui/icons-material/Email'; // REMOVE this import as we're using a custom image
import { useNavigate } from 'react-router-dom';
import { InputAdornment } from '@mui/material';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
import mail from '../../../assets/admin/mail.png'; // Import your custom image icon

// Import ALL necessary styled components, including the ones for custom icons
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

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Enter a valid email';
    return '';
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const validateAndContinue = () => {
    const error = validateEmail(email);
    setEmailError(error);

    if (!error) navigate('/admin/OTP');
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
            onBlur={handleEmailBlur}
            error={!!emailError}
            helperText={emailError}
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