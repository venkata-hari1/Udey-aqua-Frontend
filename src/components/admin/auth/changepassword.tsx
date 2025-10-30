import { useState } from "react";
import {
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgimg from "../../../assets/admin/Group 39739.png";
import logo from "../../../assets/admin/logo.png";
import lockIconPng from "../../../assets/admin/lock.png";
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
  StyledLoginButton,
} from "../styles/logins.styles";
import { confirmValidatePassword, validatePassword } from "../utils/Validations";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const isDisabled= !password ||!confirmPassword ||!!errorPassword ||!!errorConfirm
const passwordChangeHandler=(event:any)=>{
      const value=event.target.value;
      setPassword(value)
      const passwordoutput= validatePassword(value)
      setErrorPassword(passwordoutput)
 }
const confirmPwdChangeHandler=(event:any)=>{
     const value=event.target.value;
     setConfirmPassword(value);
    const confirmpwdoutput= confirmValidatePassword(value,password)
     setErrorConfirm(confirmpwdoutput)
  }  

  const handleSubmit = () => {
     const passwordresult=validatePassword(password);
     const confirmpwdresult=confirmValidatePassword(confirmPassword,password);
     setErrorPassword(passwordresult);
     setErrorConfirm(confirmpwdresult)
     if(passwordresult==="" && confirmpwdresult===""){
      console.log(passwordresult,confirmpwdresult)
       navigate('/admin/login') 
     }

     
  };

  return (
    <StyledLoginRoot>
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
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={ passwordChangeHandler}
            
            error={errorPassword !== ""}
            helperText={errorPassword || " "}
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

          {/* Confirm Password */}
          <StyledTextField
            fullWidth
            placeholder="Confirm New Password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={confirmPwdChangeHandler}       
            error={errorConfirm !== ""}
            helperText={errorConfirm || " "}
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
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }>
                    {showConfirmPassword ? (
                      <VisibilityOutlinedIcon sx={{ fontSize: '18px', }} />
                    ) : (
                      <VisibilityOffOutlinedIcon sx={{ fontSize: '18px' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <StyledLoginButton
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Reset Password
          </StyledLoginButton>
        </StyledLoginForm>
      </StyledLoginRight>
    </StyledLoginRoot>
  );
};

export default ChangePassword;
