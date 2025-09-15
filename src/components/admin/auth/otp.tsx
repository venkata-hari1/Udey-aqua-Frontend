import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import bgimg from "../../../assets/admin/Group 39739.png";
import logo from "../../../assets/admin/logo.png";

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
} from "../styles/logins.styles";

const OTP = () => {
  const navigate = useNavigate();
  const inputs = Array(4).fill(null).map(() => useRef<HTMLInputElement>(null));

  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [otpError, setOtpError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Timer for resend
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value) || value.length > 1) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value && index < inputs.length - 1) {
      inputs[index + 1].current?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otpValues[index] === "" && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  // Verify OTP
  const handleVerify = () => {
    const otp = otpValues.join("");
    const CORRECT_OTP = "1234"; // mock correct OTP

    if (otp === CORRECT_OTP) {
      setOtpError(false);
      navigate("/admin/changepassword");
    } else {
      setOtpError(true);
    }
  };

  // Resend OTP
  const handleResend = () => {
    if (isResendDisabled) return;
    setOtpValues(["", "", "", ""]);
    setOtpError(false);
    setTimeLeft(30);
    setIsResendDisabled(true);
  };

  const isOtpComplete = otpValues.every((digit) => digit.trim() !== "");

  return (
    <StyledLoginRoot>
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />

      <StyledLoginRight>
        <StyledLoginForm sx={{ width: "100%", maxWidth: 400 }}>
          <StyledLoginLogo src={logo} alt="Logo" />

          <StyledTitle variant="h5" fontWeight="bold">
            Verification
          </StyledTitle>
          <StyledSubtitle variant="body2" textAlign="center" color="#64748B" >
            Please enter the 4-digit verification code sent to your email.
          </StyledSubtitle>

          {/* OTP Inputs */}
          <StyledOtpInputContainer>
            {inputs.map((ref, index) => (
              <StyledOtpTextField
                key={index}
                inputRef={ref}
                value={otpValues[index]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
                inputProps={{ maxLength: 1, inputMode: "numeric" }}
                error={otpError}
              />
            ))}
          </StyledOtpInputContainer>

          {/* Error Message */}
          {otpError && (
            <Typography variant="caption" color="error" sx={{ mt: -2, alignSelf: "center" }}>
              Invalid OTP, please try again
            </Typography>
          )}

          <Typography variant="body2" color="#64748B" alignSelf="center">
            Didn’t receive the code?
          </Typography>

          {/* Resend Link / Timer */}
          <StyledResendLinkContainer>
            {isResendDisabled ? (
              <Typography variant="body2" color="text.secondary">
                Resend in {timeLeft}s
              </Typography>
            ) : (
              <StyledResendLink as="button" onClick={handleResend}>
                Resend code
              </StyledResendLink>
            )}
          </StyledResendLinkContainer>

          {/* Verify Button */}
          <StyledLoginButton
            variant="contained"
            fullWidth
            onClick={handleVerify}
            disabled={!isOtpComplete}
          >
            Verify
          </StyledLoginButton>
        </StyledLoginForm>
      </StyledLoginRight>
    </StyledLoginRoot>
  );
};

export default OTP;
