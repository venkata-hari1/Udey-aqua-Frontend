import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
  Button
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useProfileStyles from "../profile/ProfileStyles";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { validateEmail } from "./Validations";

type Iprops = {
  open: boolean;
  handleclickopen: () => void;
};

const ProfileEmailpopup = ({ open, handleclickopen }: Iprops) => {
  const { classes } = useProfileStyles();
  const [otpEmail, setOtpemail] = useState(false);
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(600);


  // Reset when closed
  useEffect(() => {
    if (!open) {
      setOtpemail(false);
      setOtp("");
      setError(null);
      setTimeLeft(600);
    }
  }, [open]);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0 || !otpEmail) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, otpEmail]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (otp.length !== 4) {
      setError("Please enter a 4-digit OTP");
      return;
    }
    if (otp !== "1234") {
      console.log("Invalid Otp")
      setError("Invalid OTP");
    } else {
      console.log("otp verified",otp)
      setError(null);
      alert("OTP Verified!");
      handleclickopen();
    }
  };

  //email value
  const[emailvalue,setEmailvalue]=useState("")
  const[emailError,setEmailError]=useState("")
  const emailChangeHandler=(event:any)=>{
     const value=event.target.value;
     setEmailvalue(value);
     const emailoutput=validateEmail(value)
     setEmailError(emailoutput)
}

const handleEmailSubmit=()=>{
    const emailOk=validateEmail(emailvalue);
    console.log("Emailvalue",emailvalue)
    setEmailError(emailOk)
     setOtpemail(true)    
 
}
  return (
    <Dialog
      open={open}
      onClose={handleclickopen}
      className={classes.dialogContainer}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent
        sx={{
          minHeight: 280, // fixed height for consistency
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Box className={classes.profileEmailBox}>
          <Typography className={classes.updateEmailText}>
            {otpEmail ? "Enter OTP" : "Update Email"}
          </Typography>
          <Typography fontSize="14px" textAlign="center" sx={{ mb: 2 }}>
            {!otpEmail ? "Enter your email and get a 4-digit OTP" : ""}
          </Typography>

          {!otpEmail ? (
              <Box>
              <FormControl fullWidth>
                <TextField
                  onChange={emailChangeHandler}
                  fullWidth
                  placeholder="Email"
                  size="small"
                  value={emailvalue}
                  error={!!emailError}
                  helperText={emailError}
                  className={classes.profileTextfileds}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon className={classes.textboxIcons} />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <Button
                variant="contained"
                fullWidth
                className={classes.profileContinuebutton}
                onClick={handleEmailSubmit /* setOtpemail(true) */}
                sx={{ mt: 2 }}
              >
                Continue
              </Button>

              <Box className={classes.backtoProfileBox}>
                <Typography fontSize="14px">
                  Back to{" "}
                  <span
                    className={classes.backProfiletext}
                    onClick={handleclickopen}
                  >
                    Profile
                  </span>
                </Typography>
              </Box>
            </Box>
          ) : (
            
            <Box>
              <form onSubmit={handleSubmit}>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderInput={(
                    props: React.InputHTMLAttributes<HTMLInputElement>
                  ) => (
                    <input
                      {...props}
                      style={{
                        ...props.style,
                        border: `1px solid ${
                          error ? "#d32f2f" : "#0A4FA4"
                        }`,
                        background: "#d8d8d83d"
                      }}
                    />
                  )}
                  inputStyle={{
                    width: "50px",
                    height: "50px",
                    margin: "5px",
                    borderRadius: "5px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    border: "none"
                  }}
                  containerStyle={{ justifyContent: "center" }}
                  inputType="tel"
                />

                <Typography
                  color={timeLeft <= 10 ? "error" : "text.secondary"}
                  fontSize="14px"
                  sx={{ mt: 1, textAlign: "center" }}
                >
                  {timeLeft > 0
                    ? `${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
                        .toString()
                        .padStart(2, "0")}`
                    : "Time expired!"}
                </Typography>

                {error && (
                  <Typography
                    color="error"
                    fontSize="12px"
                    sx={{ mt: 1, textAlign: "center" }}
                  >
                    {error}
                  </Typography>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  
                  fullWidth
                  disabled={otp.length !== 4 || timeLeft <= 0}
                  sx={{ mt: 2,backgroundColor:'#0A4FA4',textTransform:'capitalize' }}
                >
                  Continue
                </Button>
              </form>
            </Box>
          )}
        </Box>
      </DialogContent>

       {otpEmail && (
        <DialogActions sx={{ justifyContent: "center" }}>
          <Typography fontSize="14px" textAlign="center">
            If you didn&apos;t receive a code,{" "}
            <Typography
              component="a"
              color="#0A4FA4"
              sx={{ cursor: "pointer",textDecoration:'underline' }}
            >
              Resend
            </Typography>
          </Typography>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ProfileEmailpopup;
