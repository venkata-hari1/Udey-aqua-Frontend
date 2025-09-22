import { Box, Button, TextField, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import UserendDeletepopup from "../../utils/UserendDeletepop";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

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

interface GenericSavedelete {
  message: string;
  onDelete: () => void;
}

export const UserendSaveDeleteButtons = ({
  message,
  onDelete,
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
      <Button className={classes.heroSave}>Save</Button>
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

export const DeleteButton = ({ message }: { message: string }) => {
  const { classes } = useUserEndwebStyles();

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const handleConfirmDelete = () => {
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

export const Uploadbutton = () => {
  const { classes } = useUserEndwebStyles();

  return (
    <Button
      variant="outlined"
      className={classes.uploadHerobutton}
      component="label"
      endIcon={<FileUploadOutlinedIcon />}
    >
      <input type="file" accept="image/*" hidden /> Upload
    </Button>
  );
};

export const TextFieldManyRows = () => {
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
