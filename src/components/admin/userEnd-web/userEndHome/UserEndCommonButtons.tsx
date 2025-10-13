import { Box, Button, TextField, Typography } from "@mui/material";
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import UserendDeletepopup from "../../utils/UserendDeletepop";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { validateImageDimensions, validateImageFile,validatePdfFile,validateVideo } from "../../utils/Validations";


//ADD Section

interface SectionProps{
  onClick: () => void;
  disabled?: boolean;
}
export const UserendAddSection=({onClick}:SectionProps)=>{
  
  const { classes } = useUserEndwebStyles();
  <Button
          variant="contained"
          className={classes.addSubpagebutton}
          startIcon={<AddIcon />}
          onClick={onClick}
        >
          Add Banner
        </Button>
}


//ADD BANNER 
interface BannerProps{
  onClick: () => void;
  disabled?: boolean;
}
export const UserendAddBanner=({onClick}:BannerProps)=>{
  
  const { classes } = useUserEndwebStyles();
  <Button
          variant="contained"
          className={classes.addSubpagebutton}
          startIcon={<AddIcon />}
          onClick={onClick}
        >
          Add Banner
        </Button>
}


//SAVE
interface SaveProps{
  onSave: () => void;
  disabled?: boolean;
}
export const UserEndSaveButton=({onSave,
disabled = false}:SaveProps)=>{

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
      </Box>
  );
}

//CANCEL buttons
interface CancelProps {
  onCancel?: () => void;
  disabled?: boolean;
}

export const UserEndCancelButton = ({
  onCancel,
  disabled = false,
}:CancelProps) => {
  const { classes } = useUserEndwebStyles();

  return (
    <Box className={classes.buttonContainer}>
      <Button className={classes.headerCancelButton} 
      onClick={onCancel}
      disabled={disabled}>
        Cancel
      </Button>
    </Box>
  );
};


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

//UPDATE BUTTON

interface SaveProps{
  onSave: () => void;
  disabled?: boolean;
}
export const UserendUpdatedheader=({onSave,
disabled = false}:SaveProps)=>{

  const { classes } = useUserEndwebStyles();
  return (
    <Box className={classes.buttonContainer}>
      <Button
        className={classes.headerSaveButton}
        onClick={onSave}
        disabled={disabled}
        variant="contained"
      >
        Update Header
      </Button>
      </Box>
  );
}

//EDIT and DELETE BUTTONS
interface GenericSaveEdit {
  sliceEdit:() => void;
  value?:string;
  message: string;
  onDelete: () => void;
  disabled?:boolean;
}
export const UserendEditandDeletebuttons=({message,onDelete,sliceEdit,disabled=false}:GenericSaveEdit)=>{
  
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
        disabled={disabled}
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
  disabled?:boolean;
}
export const EditButton=({sliceEdit,disabled = false}:GenericEdit)=>{
 
  const { classes } = useUserEndwebStyles();
 
  return(
      <Box display="flex" gap={2}>
      <Button
        className={classes.heroSave}
        variant="contained"
        onClick={sliceEdit}
        disabled={disabled}
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
interface ValidationResult {
  error: string;
  isError: boolean;
}
interface GenericTextfieldsinglerows {
  onChange: (value: string,error:string) => void;
  value?: string;
  validationFn:(value:string)=>ValidationResult;
  disabled?:boolean;
 }

export const TextFieldSingleRow = ({ onChange,validationFn,value,disabled=false }: GenericTextfieldsinglerows) => {
  const { classes } = useUserEndwebStyles();

const handleChangeSinglerow = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const {error}=validationFn(value);
    onChange(value,error);    
  };

  return(
    <TextField className={classes.heroTextfiled}
         fullWidth
         size="small"
         value={value}
         onChange={handleChangeSinglerow}
         disabled={disabled}/>
  ) 
}

//Textfiled multirows
interface ValidationResult {
  error: string;
  isError: boolean;
}
interface GenericTextfieldmutlirows {
  onChange: (value: string,error:string) => void;
  value?:string;
  validationFn:(value:string)=>ValidationResult;
  disabled?:boolean;  
 }
export const TextFieldManyRows = ({ onChange,value,validationFn,disabled=false}: GenericTextfieldmutlirows) => {
  const { classes } = useUserEndwebStyles();

  const handleChangeManyrows = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const {error}=validationFn(value);
    onChange(value,error);    
  };

  return (
    <TextField
      className={classes.heroTextfiled}
      fullWidth
      multiline
      minRows={5}
      onChange={handleChangeManyrows}
      value={value}
      disabled={disabled}
       InputProps={{
        sx: disabled
          ? {
              color: "#9e9e9e", // gray text
               // light gray bg
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ddd", // light border
              },
            }
          : {},
      }}
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

interface ErrorHeadingProps{
  message?:string;
}

export const ErrormsgTitle = ({message}:ErrorHeadingProps) => {
  const { classes } = useUserEndwebStyles();
  return (
    <Typography className={classes.errorUpload}>
      {message}
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
  type?: "image" | "video" |"pdf";
  disabled?: boolean;
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
  disabled=false,
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
      disabled={disabled} 
    >
      <input
        type="file"
        accept={accept}
        hidden
        multiple={multiple}
        onChange={!disabled ?handleChangeUpload:undefined}
      />
      Upload
    </Button>
  );
};


//PDF upload button
interface UploadPdfButtonProps {
  onUpload: (file: File) => void;
  onError?: (msg: string) => void;
  disabled?: boolean;
  multiple?: boolean;
}

export const UploadPdfButton = ({
  onUpload,
  onError,
  disabled = false,
  multiple = false,
}: UploadPdfButtonProps) => {
  const { classes } = useUserEndwebStyles();

  const handleChangeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const files = Array.from(event.target.files);
    const validFiles: File[] = [];

    for (const file of files) {
      const error = validatePdfFile(file);
      if (error) {
        onError?.(error);
        continue;
      }
      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      onError?.("");
      if (multiple) {
        validFiles.forEach((file) => onUpload(file));
      } else {
        onUpload(validFiles[0]);
      }
    }

    event.target.value = ""; // reset input
  };
   return (
    <Button
      variant="outlined"
      className={classes.uploadHerobutton}
      component="label"
      endIcon={<FileUploadOutlinedIcon />}
      disabled={disabled}
    >
      <input
        type="file"
        accept="application/pdf"
        hidden
        multiple={multiple}
        onChange={!disabled ? handleChangeUpload : undefined}
      />
      Upload
    </Button>
  );
};