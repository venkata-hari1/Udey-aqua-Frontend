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
import { validateEmail, validatePassword } from '../utils/Validations';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  
 const emailChangehandler=(event:any)=>{
     const value=event.target.value;
     setEmail(value)
     const emailoutput= validateEmail(value)
     setEmailError(emailoutput)
}
    
const passwordChangehandler=(event:any)=>{
   const value=event.target.value;
   setPassword(value)
   const passwordoutput=validatePassword(value)
   setPasswordError(passwordoutput)
}

  const validateAndLogin = () => {
        
    const emailResult=validateEmail(email);
    const passwordResult=validatePassword(password);
   
    setEmailError(emailResult);
    setPasswordError(passwordResult);
   
    if(emailResult==='' && passwordResult===''){
      console.log("login success :", {email,password});
      navigate('/admin/dashboard')
    }else{
      console.log("validation failed")
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
            onChange={(event)=>emailChangehandler(event)}
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
            onChange={(event)=>passwordChangehandler(event)}
              
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
