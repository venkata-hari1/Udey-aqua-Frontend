import {
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import useProfileStyles from "../profile/ProfileStyles";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import { confirmValidatePassword, validatePassword } from "./Validations";

type Iprops = {
  pwdopen: boolean;
  handlepsswordopen: () => void;
};

const Changepasswordpopup = ({ pwdopen, handlepsswordopen }: Iprops) => {
  const { classes } = useProfileStyles();

  // password visibility
  const [createPwdOpen, setCreatePwdOpen] = useState(false);
  const [createPwdType, setCreatePwdType] = useState("password");

  const [confirmPwdOpen, setConfirmPwdOpen] = useState(false);
  const [confirmPwdType, setConfirmPwdType] = useState("password");

  const toggleCreatePassword = () => {
     setCreatePwdOpen((prev) => !prev);
     setCreatePwdType((prev) => (prev === "password" ? "text" : "password"));
  };

  const toggleConfirmPassword = () => {
   setConfirmPwdOpen((prev) => !prev);
   setConfirmPwdType((prev) => (prev === "password" ? "text" : "password"));
  };

  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPwdValue, setConfirmPwdValue] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");


 const passwordOnChangehandler=(event:any)=>{
     const value=event.target.value;
     setPasswordValue(value)
    const passwordresult= validatePassword(value)
    setErrorPassword(passwordresult)
 }

const confirmChangeHandler=(event:any)=>{
    const value=event.target.value;
    setConfirmPwdValue(value);
    const confirmpwdresult= confirmValidatePassword(value,passwordValue);
    setErrorConfirm(confirmpwdresult)
 }
  const passwordSubmitHandler = () => {
    const passwordOk=validatePassword(passwordValue)
    const confirpwdOk=confirmValidatePassword(confirmPwdValue,passwordValue)
    setErrorPassword(passwordOk)
    setErrorConfirm(confirpwdOk) 
    
    if(passwordOk=="" && confirpwdOk===""){
      console.log(passwordValue,confirmPwdValue) 
    }

  };

  return (
    <Dialog
      open={pwdopen}
      onClose={handlepsswordopen}
      className={classes.dialogContainer}
      fullWidth
      maxWidth="xs"
    >
      <DialogContent>
        <Box className={classes.profilePasswordChangeBox}>
          <DialogContentText>
            <Typography className={classes.updateEmailText}>
              New Password
            </Typography>
            <Typography fontSize="13px" textAlign="center">
              Set the new password for your account to login.
            </Typography>
          </DialogContentText>
        </Box>

        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            {/* Create Password */}
            <FormControl fullWidth sx={{ m: 0 }}>
              <TextField
                fullWidth
                placeholder="Create Password"
                size="small"
                type={createPwdType}
                className={classes.profileTextfileds}
                value={passwordValue}
                onChange={passwordOnChangehandler}
                error={errorPassword !== ""}
                helperText={errorPassword || " "}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {createPwdOpen ? (
                        <LockOpenIcon
                          className={classes.textboxIcons}
                          onClick={toggleCreatePassword}
                        />
                      ) : (
                        <LockOutlineIcon
                          className={classes.textboxIcons}
                          onClick={toggleCreatePassword}
                        />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {createPwdOpen ? (
                        <VisibilityOutlinedIcon
                          onClick={toggleCreatePassword}
                          className={classes.textboxIcons}
                        />
                      ) : (
                        <VisibilityOffOutlinedIcon
                          onClick={toggleCreatePassword}
                          className={classes.textboxIcons}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            {/* Confirm Password */}
            <FormControl fullWidth sx={{ m: 0 }}>
              <TextField
                fullWidth
                placeholder="Confirm Password"
                size="small"
                type={confirmPwdType}
                className={classes.profileTextfileds}
                value={confirmPwdValue}
                onChange={confirmChangeHandler}
                error={errorConfirm !== ""}
                helperText={errorConfirm || " "}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {confirmPwdOpen ? (
                        <LockOpenIcon
                          className={classes.textboxIcons}
                          onClick={toggleConfirmPassword}
                        />
                      ) : (
                        <LockOutlineIcon
                          className={classes.textboxIcons}
                          onClick={toggleConfirmPassword}
                        />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {confirmPwdOpen ? (
                        <VisibilityOutlinedIcon
                          onClick={toggleConfirmPassword}
                          className={classes.textboxIcons}
                        />
                      ) : (
                        <VisibilityOffOutlinedIcon
                          onClick={toggleConfirmPassword}
                          className={classes.textboxIcons}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button
            variant="contained"
            className={classes.profileContinuebutton}
            fullWidth
            onClick={passwordSubmitHandler}
          >
            Update Password
          </Button>
        </DialogActions>

        <Box className={classes.backtoProfileBox}>
          <Typography fontSize="14px">
            Back to{" "}
            <span
              className={classes.backProfiletext}
              onClick={handlepsswordopen}
            >
              Profile
            </span>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Changepasswordpopup;
