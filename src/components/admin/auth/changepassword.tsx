import { useState } from "react";
import {
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import bgimg from "../../../assets/admin/Group 39739.png";
import logo from "../../../assets/admin/logo.png";
import lockIconPng from "../../../assets/admin/lock.png";
import eyeIconPng from "../../../assets/admin/eye-off.png";

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

const ChangePassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const passwordRegex =
    
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validatePassword = (value: string): boolean => {
    if (!value) {
      setErrorPassword("Password can't be empty");
      return false;
    }
    if (!passwordRegex.test(value)) {
      setErrorPassword(
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character"
      );
      return false;
    }
    setErrorPassword("");
    return true;
  };

  const validateConfirmPassword = (value: string): boolean => {
    if (!value) {
      setErrorConfirm("Confirm password can't be empty");
      return false;
    }
    if (value !== password) {
      setErrorConfirm("Passwords do not match");
      return false;
    }
    setErrorConfirm("");
    return true;
  };

  const handleSubmit = () => {
    const pwdOk = validatePassword(password);
    const confirmOk = validateConfirmPassword(confirmPassword);

    if (pwdOk && confirmOk) {
      console.log({ password, confirmPassword });
      navigate("/admin/login");
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
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value); 
            }}
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
                    <StyledCustomIcon
                      src={eyeIconPng}
                      alt={showPassword ? "Hide password" : "Show password"}
                    />
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
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value); 
            }}
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
                    }
                  >
                    <StyledCustomIcon
                      src={eyeIconPng}
                      alt={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    />
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
