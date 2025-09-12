import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material'; // Only import Typography directly
import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';

import {
  StyledLoginRoot,
  StyledLoginLeft,
  StyledLoginRight,
  StyledLoginForm,
  StyledLoginLogo,
  StyledTitle,
  StyledSubtitle,
  StyledLoginButton,
  StyledOtpInputContainer,
  StyledOtpTextField,
  StyledResendLinkContainer,
  StyledResendLink,
} from '../styles/logins.styles'; // Correct path to your consolidated styles file

const OTP = () => {
  const navigate = useNavigate();
  // Using an array of refs, one for each input field
  const inputs = Array(4)
    .fill(null)
    .map(() => useRef<HTMLInputElement>(null));

  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    // Allow only single digit numbers or empty string
    if (!/^\d*$/.test(value) || value.length > 1) {
      return;
    }

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    // Move focus to next input if a digit is entered
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].current?.focus();
    }
    // Clear error if user starts typing
    if (otpError) {
      setOtpError('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move focus to previous input on Backspace if current is empty
    if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    const isComplete = otpValues.every((digit) => digit.trim() !== '');
    if (!isComplete) {
      setOtpError('Please enter all 4 digits');
      return;
    }

    const otp = otpValues.join('');
    console.log('Verifying OTP:', otp);
    // In a real application, you would send this OTP to your backend for verification
    // On successful verification, navigate:
    navigate('/admin/changepassword');
  };

  return (
    <StyledLoginRoot>
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />

      <StyledLoginRight>
        <StyledLoginForm>
          <StyledLoginLogo src={logo} alt="Logo" />

          {/* Reusing StyledTitle and StyledSubtitle */}
          <StyledTitle variant="h5" fontWeight="bold">
            Verification
          </StyledTitle>
          <StyledSubtitle variant="body2" textAlign="center">
            Please enter the 4-digit verification code that was sent to your email.
          </StyledSubtitle>

          <StyledOtpInputContainer>
            {inputs.map((ref, index) => (
              <StyledOtpTextField
                key={index}
                inputRef={ref}
                value={otpValues[index]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
                inputProps={{
                  maxLength: 1,
                  inputMode: 'numeric',
                }}
                error={!!otpError}
              />
            ))}
          </StyledOtpInputContainer>

          {/* Using Typography for error message, styled to align with form flow */}
          {otpError && (
            <Typography variant="caption" color="error" sx={{ mt: -2, alignSelf: 'center' }}>
              {otpError}
            </Typography>
          )}

          {/* Reusing Typography for the text, aligning it centrally */}
          <Typography variant="body2" color="text.secondary" alignSelf="center">
            Didn't receive the code?
          </Typography>

          {/* Reusing StyledResendLinkContainer and StyledResendLink */}
          <StyledResendLinkContainer>
            <StyledResendLink to="/changepassword">
              Resend code
            </StyledResendLink>
          </StyledResendLinkContainer>

          {/* Reusing StyledLoginButton */}
          <StyledLoginButton
            variant="contained"
            fullWidth
            onClick={handleVerify}
          >
            Verify
          </StyledLoginButton>
        </StyledLoginForm>
      </StyledLoginRight>
    </StyledLoginRoot>
  );
};

export default OTP;