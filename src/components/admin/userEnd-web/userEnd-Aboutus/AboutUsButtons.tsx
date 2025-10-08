import { useUserEndwebStyles } from "./AboutusStyles";
import { Button, IconButton} from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export const DeleteButton=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant='contained' className={classes.deleteButton} onClick={onClick}>
            delete
        </Button>
    )
}
type Editprops={
    onClick?:()=>void;
    error?:boolean
}
export const EditButton=({onClick, error}:Editprops)=>{
    const {classes} =useUserEndwebStyles();
    return(
         <Button variant="contained" disabled={error}  className={classes.SaveButton} sx={{backgroundColor: error ? "grey" : "#0A4FA4",}} onClick={onClick}>
        
            edit
        </Button>
    )
}

type UploadProps={
    id?:string;
    accordianId?:string;
    Section?:string;
    disable?:boolean
}
export const UploadButton=({id,accordianId,Section,disable}:UploadProps)=>{
    return(
        <label htmlFor={`upload-file-${Section}-${accordianId}-${id}`}>
                        <Button
                        variant="outlined"
                        component="span"
                        disabled={disable}
                        endIcon={<FileUploadOutlinedIcon sx={{color: disable ? "grey" : "#0A4FA4",}}/>}
                        >
                        Upload
                        </Button>
                    </label>
    )
}
type TestimonialProps={
    id?:string;
    accordianId?:string
    subSection?:string
    disable?:boolean
}
export const UploadButtonTestimonials=({id,accordianId, subSection, disable}:TestimonialProps)=>{
    return(
        <label htmlFor={`upload-file-${accordianId}-${subSection}-${id}`}>
                        <Button
                        variant="outlined"
                        component="span"
                        disabled={disable}
                        endIcon={<FileUploadOutlinedIcon sx={{color: disable ? "grey" : "#0A4FA4",}}/>}
                        >
                        Upload
                        </Button>
                    </label>
    )
}
type SaveButtonProps={
    error?:boolean
    onClick ?: ()=> void;
}
export const SaveButton=({error, onClick}:SaveButtonProps)=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant="contained" disabled={error}  className={classes.SaveButton} sx={{backgroundColor: error ? "grey" : "#0A4FA4",}} onClick={onClick}>
            save
        </Button>
    )
}

type UpdateHeaderProps={
    error?:boolean
    onClick ?: ()=> void;
}
export const UpdateHeader=({error,onClick}:UpdateHeaderProps)=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant="contained" disabled={error}  className={classes.updateHeaderbutton} sx={{backgroundColor: error ? "grey" : "#0A4FA4",}} onClick={onClick}>
            update header
        </Button>
    )
}
export const UpdateHeaderCancelButton=()=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant="contained" disableElevation  className={classes.updateHeaderCancelButton}>
            cancel
        </Button>
    )
}
export const CancelButton=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant="contained" disableElevation className={classes.CancelButton} onClick={onClick}>
            cancel
        </Button>
    )
}
export const AddSection=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add section
        </Button>
    )
}
export const AddBanner=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add Banner
        </Button>
    )
}
type AddSubpageProps={
    error?:boolean;
    onClick?:()=>void
}
export const AddSubpage=({error,onClick}:AddSubpageProps)=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant='contained' disabled={error} disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick} sx={{backgroundColor: error ? "grey" : "#0A4FA4",}}>
            Add subpage
        </Button>
    )
}
export const ArrowBack=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useUserEndwebStyles();
    return(
        <IconButton className={classes.ArrowBack} onClick={onClick}>
            <ArrowBackIcon/>
        </IconButton>
    )
}
export const AddTestimonials=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add Testimonials
        </Button>
    )
}
export const AddHighlights=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useUserEndwebStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add Highlights
        </Button>
    )
}
