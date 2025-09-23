import { Box, Button, TextField, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import UserendDeletepopup from "../../utils/UserendDeletepop";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { addressContentValidation } from "../../utils/Validations";

//SAVE and CANCEL buttons
interface SaveCancelProps {
  onSave: () => void;
  onCancel?: () => void;
  disabled?: boolean;
}

export const UserEndSaveCancelButtons = ({
  onSave,
  onCancel,
  disabled = false,
}: SaveCancelProps) => {
  const { classes } = useUserEndwebStyles();

  return (
    <Box className={classes.buttonContainer}>
      <Button
        className={classes.headerSaveButton}
        onClick={onSave}
        disabled={disabled}
        variant="contained"
      >
        Save
      </Button>
      <Button className={classes.headerCancelButton} onClick={onCancel}>
        Cancel
      </Button>
    </Box>
  );
};

//SAVE and DELETE buttons
interface GenericSavedelete {
  message: string;
  onDelete: () => void;
  disabled?: boolean;
  sliceSave: () => void;
}

export const UserendSaveDeleteButtons = ({
  message,
  onDelete,
  sliceSave,
  disabled = false,
}: GenericSavedelete) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleConfirmDelete = () => {
    console.log("Deleted", message);
    onDelete();
    setOpen(false);
  };

  const { classes } = useUserEndwebStyles();

  return (
    <Box display="flex" gap={2}>
      <Button
        className={classes.heroSave}
        variant="contained"
        onClick={sliceSave}
      >
        Save
      </Button>
      <Button className={classes.heroDelete} onClick={handleToggle}>
        Delete
      </Button>
      {open && (
        <UserendDeletepopup
          open={open}
          message={message}
          onClose={handleToggle}
          onDelete={handleConfirmDelete}
        />
      )}
    </Box>
  );
};

//ADD NEW BOX/SLIDE
interface Genericadding {
  onClick?: () => void;
}
export const AddingButton = ({ onClick }: Genericadding) => {
  const { classes } = useUserEndwebStyles();

  return (
    <Box className={classes.addingButtonBox}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className={classes.AddingButton}
        onClick={onClick}
      >
        Add Slide
      </Button>
    </Box>
  );
};

//DELETE 
interface GenericDelete {
  message: string;
  onDelete: () => void;
}
export const DeleteButton = ({ message, onDelete }: GenericDelete) => {
  const { classes } = useUserEndwebStyles();

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleConfirmDelete = () => {
    onDelete();
    console.log("Delete", message);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        className={classes.heroDelete}
        onClick={handleToggle}
      >
        Delete
      </Button>
      <UserendDeletepopup
        open={open}
        message={message}
        onClose={handleToggle}
        onDelete={handleConfirmDelete}
      />
    </Box>
  );
};

export const Textfiledbox = () => {
  const { classes } = useUserEndwebStyles();

  return (
    <TextField
      className={classes.heroTextfiled}
      fullWidth
      multiline
      minRows={5}
    />
  );
};

//UPLOAD IMAGE
interface UploadbuttonProps {
  onUpload: (file: File) => void;
}
export const Uploadbutton = ({ onUpload }: UploadbuttonProps) => {
  const { classes } = useUserEndwebStyles();

  const handleChangeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    onUpload(event.target.files[0]);
    event.target.value = "";
  };

  return (
    <Button
      variant="outlined"
      className={classes.uploadHerobutton}
      component="label"
      endIcon={<FileUploadOutlinedIcon />}
    >
      <input
        type="file"
        accept="image/*"
        hidden
        onChange={handleChangeUpload}
      />{" "}
      Upload
    </Button>
  );
};

interface GenericTextfieldmutlirows {
  onChange: (value: string) => void;
}
export const TextFieldManyRows = ({ onChange }: GenericTextfieldmutlirows) => {
  const { classes } = useUserEndwebStyles();

  const handleChangeManyrows = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const contentoutput = addressContentValidation(value);
    console.log(contentoutput);
    onChange(value);
  };

  return (
    <TextField
      className={classes.heroTextfiled}
      fullWidth
      multiline
      minRows={5}
      onChange={handleChangeManyrows}
    />
  );
};

export const ErrorMessages = () => {
  const { classes } = useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      *Please upload the image in landscape format (Preferred size: 300px width
      × 100px height)
      <Typography className={classes.errorUpload}>
        Image Must be 5 MB
      </Typography>
    </Typography>
  );
};

export const ErrormsgTitle = () => {
  const { classes } = useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      Max 200 characters required
    </Typography>
  );
};

export const ErrormsgContent = () => {
  const { classes } = useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      Max 2000 characters required
    </Typography>
  );
};

export const ErrormsgPrice = () => {
  const { classes } = useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      Max 12 characters required
    </Typography>
  );
};
