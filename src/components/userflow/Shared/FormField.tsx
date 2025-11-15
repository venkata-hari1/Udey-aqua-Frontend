// src/components/userflow/Shared/FormField.tsx
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
  inputProps?: object; 
  defaultvalue?:string
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
  inputProps,
  defaultvalue
}: FormFieldProps) => {
  const { classes } = usePlansStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };

  return (
    <Box className={classes.step3FormField}>
      <Typography className={classes.step3Label}>
        {required && <Typography component="span" className={classes.step3Asterisk}>*</Typography>}
        {label}
      </Typography>
      <TextField
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        className={classes.step3Field}
        error={!!error}
        helperText={error}
        fullWidth
        inputProps={inputProps}
        defaultValue={defaultvalue}
      />
    </Box>
  );
};

export default FormField;
