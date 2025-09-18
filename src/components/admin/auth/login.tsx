import React, { useState } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
import emailIconPng from '../../../assets/admin/mail.png';
import lockIconPng from '../../../assets/admin/lock.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
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
import { validateEmail } from '../utils/Validations';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  
  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?])[A-Za-z\d@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateAndLogin = () => {
    
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password cannot be empty');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Login values:', { email, password });
      navigate('/admin/dashboard');
    }
  };

  return (
    <StyledLoginRoot>
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />
      <StyledLoginRight>
        <StyledLoginForm sx={{ width: '100%', maxWidth: 400 }}>
          <StyledLoginLogo src={logo} alt="Logo" />
          <StyledTitle variant="h6" sx={{ textAlign: { xs: 'center' } }}>
            Log In to Your Account!
          </StyledTitle>
          <StyledSubtitle
            variant="body2"
            sx={{ textAlign: { xs: 'center' }, fontSize: { xs: '15px' } }}
          >
            Welcome back! please enter your details
          </StyledSubtitle>

          {/* Email Field */}
          <StyledTextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);

              if (!value) {
                setEmailError('Email is required');
              } else if (!validateEmail(value)) {
                setEmailError('Enter a valid email address');
              } else {
                setEmailError('');
              }
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

          {/* Password Field */}
          <StyledTextField
            fullWidth
            FormHelperTextProps={{
              sx: {
                whiteSpace: 'normal',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);

              if (!value) {
                setPasswordError('Password cannot be empty');
              } else if (!validatePassword(value)) {
                setPasswordError(
                  "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
                );
              } else {
                setPasswordError('');
              }
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
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon sx={{ fontSize: '18px' }} />
                    ) : (
                      <VisibilityOffOutlinedIcon sx={{ fontSize: '18px' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <StyledForgotPasswordLink>
            <StyledLink to="/admin/forgotpassword">
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
