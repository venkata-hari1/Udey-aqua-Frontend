import  { useState } from 'react';
import {
  InputAdornment,
  IconButton,
  
} from '@mui/material';
import {useNavigate } from 'react-router-dom';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
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
  StyledLoginButton,
} from '../styles/logins.styles';
import { validatePassword } from '../utils/Validations';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const[errorvalue,setErrorvalue]=useState<string[]>([])
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
      
   const pwdvalues={
    pwdValue:password,
    confirmpwdValue:confirmPassword
   }
  const validpwds=validatePassword(pwdvalues)
  
  if(!validpwds.isValid){
    setErrorvalue(validpwds.errors);
  }else{
    console.log(pwdvalues)
     navigate('/admin/login')
  }
  };

  return (
    <StyledLoginRoot >
      <StyledLoginLeft style={{ backgroundImage: `url(${bgimg})` }} />

      <StyledLoginRight>
        <StyledLoginForm sx={{ width: "100%", maxWidth: 400 }}>
          <StyledLoginLogo src={logo} alt="Logo" />

          <StyledTitle variant="h5" fontWeight="bold">
            Set new password
          </StyledTitle>
          <StyledSubtitle variant="body2">
            Enter a new password for your account
          </StyledSubtitle>

          <StyledTextField
            fullWidth
            placeholder="New Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errorvalue.some(err=>err.includes("Password must"))}
            helperText={errorvalue.find(err=>err.includes("Password must")||" ")}
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
                    <StyledCustomIcon src={eyeIconPng} alt={showPassword ? "Hide password" : "Show password"} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <StyledTextField
            fullWidth
            placeholder="Confirm New Password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errorvalue.some(err => err.includes("do not match"))}
            helperText={errorvalue.find(err => err.includes("do not match")) || " "}
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <StyledCustomIcon src={eyeIconPng} alt={showConfirmPassword ? "Hide password" : "Show password"} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

         <StyledLoginButton
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Reset Password
          </StyledLoginButton>
        </StyledLoginForm>
      </StyledLoginRight>
    </StyledLoginRoot>
  );
};

export default ChangePassword;