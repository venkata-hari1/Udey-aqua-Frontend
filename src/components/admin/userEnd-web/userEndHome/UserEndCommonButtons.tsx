import { Box, Button, TextField, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import UserendDeletepopup from "../../utils/UserendDeletepop";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { addressContentValidation, validateImageDimensions, validateImageFile,validateVideo } from "../../utils/Validations";

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


//EDIT and DELETE BUTTONS
interface GenericSaveEdit {
  sliceEdit:() => void;
  value?:string;
  message: string;
  onDelete: () => void;
}
export const UserendEditandDeletebuttons=({message,onDelete,sliceEdit}:GenericSaveEdit)=>{
  
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

  return(
    <Box display="flex" gap={2}>
      <Button
        className={classes.heroSave}
        variant="contained"
        onClick={sliceEdit}
        >
        Edit
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
  )
}
//EDIT Button
interface GenericEdit {
  sliceEdit:() => void;
  value?:string;
}
export const EditButton=({sliceEdit}:GenericEdit)=>{
 
  const { classes } = useUserEndwebStyles();
 
  return(
      <Box display="flex" gap={2}>
      <Button
        className={classes.heroSave}
        variant="contained"
        onClick={sliceEdit}
        
      >
        Edit
      </Button>
      </Box>
    )
}


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
        disabled={disabled}
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


//Textfiled singlerow
interface GenericTextfieldsinglerows {
  onChange: (value: string,error:string) => void;
  validationFn:(value:string)=>string;
  value: string;
}

export const TextFieldSingleRow = ({ onChange,validationFn,value }: GenericTextfieldsinglerows) => {
  const { classes } = useUserEndwebStyles();

const handleChangeSinglerow = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const contenterror=validationFn(value);
    onChange(value,contenterror);    
  };

  return(
    <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"
         value={value}
         onChange={handleChangeSinglerow}/>
  ) 
}

//Textfiled multirows
interface GenericTextfieldmutlirows {
  onChange: (value: string,error:string) => void;
  value?:string;
  }
export const TextFieldManyRows = ({ onChange,value}: GenericTextfieldmutlirows) => {
  const { classes } = useUserEndwebStyles();

  const handleChangeManyrows = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const contenterror=addressContentValidation(value);
    onChange(value,contenterror);    
  };

  return (
    <TextField
      className={classes.heroTextfiled}
      fullWidth
      multiline
      minRows={5}
      onChange={handleChangeManyrows}
      value={value}
    />
  );
};

//Error message for Image uploading
interface ErrorMessageProps{
  message?:string;
}
export const ErrorMessages = ({message}:ErrorMessageProps) => {

  const { classes } = useUserEndwebStyles();
  if(!message)return null;
  return (
    <Typography className={classes.errorUpload}>
      {message}
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

interface ErrormsgContentProps{
  message?:string;
}
export const ErrormsgContent = ({message}:ErrormsgContentProps) => {
  const { classes } = useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      {message}
    </Typography>
  );
};

interface ErrorNameProps{
  message?:string;
}
export const ErrorName=({message}:ErrorNameProps)=>{
  const {classes}=useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      {message}
    </Typography>
  )
}


export const ErrormsgPrice = () => {
  const { classes } = useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      Max 12 characters required
    </Typography>
  );
};

//IMAGE/VIDEO UPLOAD ....

interface UploadButtonPropsBase {
  onError?: (msg: string,id?:string) => void;
  type?: "image" | "video";
}

interface UploadButtonSingle extends UploadButtonPropsBase {
  multiple?: false;
  onUpload: (file: File) => void;
}
interface UploadButtonMultiple extends UploadButtonPropsBase {
  multiple: true;
  onUpload: (files: File[]) => void;
}

type UploadButtonProps = UploadButtonSingle | UploadButtonMultiple;

export const Uploadbutton = ({
  onUpload,
  onError,
  type = "image",
  multiple = false,
}: UploadButtonProps) => {
  const { classes } = useUserEndwebStyles();

  const handleChangeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const files = Array.from(event.target.files);
    const validFiles: File[] = [];

    for (const file of files) {
      if (type === "image") {
        const fileError = validateImageFile(file);
        if (fileError) {
          onError?.(fileError);
          continue;
        }

        const dimError = await validateImageDimensions(file);
        if (dimError) {
          onError?.(dimError);
          continue;
        }
      } else if (type === "video") {
        const error = validateVideo(file);
        if (error) {
          onError?.(error);
          continue;
        }
      }
      validFiles.push(file);
      }

    if (validFiles.length > 0) {
      onError?.("")
      if (multiple) {
        (onUpload as (files: File[]) => void)(validFiles);
      } else {
        (onUpload as (file: File) => void)(validFiles[0]);
      }
    }

    event.target.value = ""; 
  };

  const accept = type === "image" ? "image/*" : "video/mp4,video/quicktime";

  return (
    <Button
      variant="outlined"
      className={classes.uploadHerobutton}
      component="label"
      endIcon={<FileUploadOutlinedIcon />}
    >
      <input
        type="file"
        accept={accept}
        hidden
        multiple={multiple}
        onChange={handleChangeUpload}
      />
      Upload
    </Button>
  );
};
