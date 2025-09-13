import React,{useEffect, useState } from 'react';
import { InputAdornment, IconButton} from '@mui/material';
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
import { validateEmail} from '../utils/Validations';

const Login:React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

 useEffect(()=>{
  
  isvalidateInputs()
  
 },[email,password])


const validatePassword=(password:any)=>{
  const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?])[A-Za-z\d@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?]{6,}$/;
 
  const passwordverify=passwordRegex.test(password)
   if(!passwordverify){
    return false
   }else{
    return true
   }
}
//isvalidateInputs
const isvalidateInputs=()=>{
  let isValid=true;

  if(email){
    const validemail=validateEmail(email);
    
    if(!validemail){
      setEmailError("Enter Valid Email ID");
      isValid=false;
    }else{
      setEmailError("")
    }
   }else{
     setEmailError("");
     isValid=true;
   }
 //password valid
  if(password){

  const validPassword=validatePassword(password)
    
   if(!validPassword){
    setPasswordError("Password must be at least 8 characters, include a number, a letter, and a special character.")
    isValid=false;
    }else{
    setPasswordError("")
   }
  }else{
     setPasswordError("")
     isValid=true;
  } 
  return isValid;
}

  const validateAndLogin = () => {
  
    const isValidInputs=isvalidateInputs()
    if(isValidInputs){
     const loginvalues={
      email:email,
      pwd:password
     } 
     console.log(loginvalues.email,loginvalues.pwd)
      navigate('/admin/dashboard')
    }
};

  return (
    <StyledLoginRoot>
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />
      <StyledLoginRight>
        <StyledLoginForm sx={{ width: "100%", maxWidth: 400 }}>
          <StyledLoginLogo src={logo} alt="Logo" />
          <StyledTitle variant="h6">Log In to Your Account!</StyledTitle>
          <StyledSubtitle variant="body2">Welcome back! please enter your detail</StyledSubtitle>
          
          <StyledTextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            error={!!emailError}
            helperText={emailError || null}
            
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
            FormHelperTextProps={{
            sx: {
              whiteSpace: "normal", // allow wrapping instead of expanding
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
           }}
             
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
            error={!!passwordError}
            helperText={passwordError || ""}
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
                  <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}
                    >
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