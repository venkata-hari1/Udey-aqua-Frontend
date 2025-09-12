import React,{useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import {useNavigate} from 'react-router-dom';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
import emailIconPng from '../../../assets/admin/mail.png';
import lockIconPng from '../../../assets/admin/lock.png';
import eyeIconPng from '../../../assets/admin/eye-off.png'; 

import {
  StyledLoginRoot,
  StyledLoginLeft,
  StyledLoginRight,
  StyledLoginForm,
  StyledLoginLogo,
  StyledTitle,
  StyledSubtitle,
  StyledTextField,
  StyledCustomIcon,
  StyledInputAdornmentIcon,
  StyledForgotPasswordLink,
  StyledLink,
  StyledLoginButton,
} from '../styles/logins.styles'; 

const Login:React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateAndLogin = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Corrected regex: \S+@\S+\.\S+
      setEmailError('Enter a valid email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <StyledLoginRoot>
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />
      <StyledLoginRight>
        <StyledLoginForm>
          <StyledLoginLogo src={logo} alt="Logo" />
          <StyledTitle variant="h6">Log In to Your Account!</StyledTitle>
          <StyledSubtitle variant="body2">Welcome back! please enter your detail</StyledSubtitle>
          <StyledTextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email) setEmailError('Email is required');
              else if (!/\S+@\S+\.\S/.test(email)) setEmailError('Enter a valid email'); // Corrected regex
              else setEmailError('');
            }}
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StyledInputAdornmentIcon>
                    <StyledCustomIcon src={emailIconPng} alt="Email" />
                  </StyledInputAdornmentIcon>
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            fullWidth
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              if (!password) setPasswordError('Password is required');
              else setPasswordError('');
            }}
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StyledInputAdornmentIcon>
                    <StyledCustomIcon src={lockIconPng} alt="Lock" />
                  </StyledInputAdornmentIcon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    {/* Using your custom eye-off icon regardless of state */}
                    <StyledCustomIcon src={eyeIconPng} alt={showPassword ? "Hide password" : "Show password"} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledForgotPasswordLink>
            <StyledLink
              to="/admin/forgotpassword"
            >
              Forgot Password?
            </StyledLink>
          </StyledForgotPasswordLink>
          <StyledLoginButton
            variant="contained"
            fullWidth
            onClick={validateAndLogin}
          >
            Login
          </StyledLoginButton>
        </StyledLoginForm>
      </StyledLoginRight>
    </StyledLoginRoot>
  );
};

export default Login;