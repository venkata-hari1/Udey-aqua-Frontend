import { Box, Typography, TextField } from "@mui/material";
import { usePlansStyles } from "./sharedStyles";

interface FormFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

const FormField = ({
  label,
  placeholder,
  required = false,
  multiline = false,
  rows = 1,
  value = "",
  onChange,
  error,
}: FormFieldProps) => {
  const { classes } = usePlansStyles();

  return (
    <Box className={classes.step3FormField}>
      <Typography className={classes.step3Label}>
        {required && <span className={classes.step3Asterisk}>*</span>}
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        className={classes.step3Field}
        error={!!error}
        helperText={error}
        fullWidth
      />
    </Box>
  );
};

export default FormField;
