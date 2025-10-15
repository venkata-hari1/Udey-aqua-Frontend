import { useAboutusStyles } from "./AboutusStyles";
import { Button, IconButton, Box, Checkbox, Typography, TextField, Popper, Paper, ClickAwayListener} from "@mui/material";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from "../../../../assets/Delete.png";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "../../../../assets/Edit.png";
import { useState, useRef } from "react";
import {LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export const DeleteButton=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
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
    const {classes} =useAboutusStyles();
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

export const UploadPDFButton=({id,accordianId,Section,disable}:UploadProps)=>{
    return(
        <label htmlFor={`upload-pdf-${Section}-${accordianId}-${id}`}>
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
    const {classes} =useAboutusStyles();
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
    const {classes} =useAboutusStyles();
    return(
        <Button variant="contained" disabled={error}  className={classes.updateHeaderbutton} sx={{backgroundColor: error ? "grey" : "#0A4FA4",}} onClick={onClick}>
            update header
        </Button>
    )
}
export const UpdateHeaderCancelButton=()=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant="contained" disableElevation  className={classes.updateHeaderCancelButton}>
            cancel
        </Button>
    )
}
export const CancelButton=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant="contained" disableElevation className={classes.CancelButton} onClick={onClick}>
            cancel
        </Button>
    )
}
export const AddSection=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add section
        </Button>
    )
}
export const AddBanner=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
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
    const {classes} =useAboutusStyles();
    return(
        <Button variant='contained' disabled={error} disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick} sx={{backgroundColor: error ? "grey" : "#0A4FA4",}}>
            Add subpage
        </Button>
    )
}
export const ArrowBack=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
    return(
        <IconButton className={classes.ArrowBack} onClick={onClick}>
            <ArrowBackIcon/>
        </IconButton>
    )
}
export const AddTestimonials=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add Testimonials
        </Button>
    )
}
export const AddHighlights=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add Highlights
        </Button>
    )
}
export const AddButton=({onClick,}:{onClick?:()=>void,})=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant='outlined' disableElevation className={classes.AddButton} startIcon={<AddOutlinedIcon/>} onClick={onClick} >
            Add 
        </Button>
    )
}
type FormDataProps={
    id: number;
    text: string;
    checked: boolean;
    onTextChange: (id: number, value: string) => void;
    onCheckChange: (id: number) => void;
    onDelete: (id: number) => void;
}
export const FormData=({id,text,checked,onTextChange,onCheckChange,onDelete,}:FormDataProps)=>{
    return(
        <>
            <Box sx={{flexDirection:'row',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box sx={{flexDirection:'row',display:'flex',gap:1,alignItems:'center'}}>
                    <Checkbox sx={{color:'#0A4FA4'}} checked={checked} onChange={() => onCheckChange(id)}/>
                        <TextField
                            variant="standard"
                            size="small"
                            value={text}
                            onChange={(e) => onTextChange(id, e.target.value)}
                            InputProps={{
                                disableUnderline:  text.trim() !== "",
                                sx: {
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#000",
                                "&::placeholder": { color: "#999" },
                                border: "none", // no border or underline
                                outline: "none",
                                backgroundColor: "transparent",
                                },
                            }}
                            sx={{
                                width:'200px',
                                "& .MuiInputBase-input": { fontSize: "16px", fontWeight: 600, textTransform:'capitalize' },
                            }}
                        />
                </Box>
                <IconButton onClick={() => onDelete(id)}>
                    <Box component="img"
                        src={DeleteIcon} alt="Deleteicon" width='19px' height='19px'
                    />
                </IconButton>
            </Box>
            
            
        </>
    )
}
// R & D Inputs

type RDProps={
    id: number;
    text: string;
    checked: boolean;
    onTextChange: (id: number, value: string) => void;
    onCheckChange: (id: number) => void;
    onDelete: (id: number) => void;
}
export const RDdata=({id,text,checked,onTextChange,onCheckChange,}:RDProps)=>{
    return(
        <>
            
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px 200px 5px 5px',alignItems:'center'}}>
                    <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:'center'}} >
                        <Checkbox sx={{color:'#0A4FA4'}} checked={checked} onChange={() => onCheckChange(id)}/>
                        <TextField
                            variant="standard"
                            size="small"
                            value={text}
                            onChange={(e) => onTextChange(id, e.target.value)}
                            InputProps={{
                                disableUnderline:  text.trim() !== "",
                                sx: {
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#000",
                                "&::placeholder": { color: "#999" },
                                border: "none", // no border or underline
                                outline: "none",
                                backgroundColor: "transparent",
                                },
                            }}
                            sx={{
                                flex:1,
                                width:'300px',
                                "& .MuiInputBase-input": { fontSize: "16px", fontWeight: 600, textTransform:'capitalize' },
                            }}
                        />
                    </Box>
                    <IconButton >
                        <Box component="img"
                            src={EditIcon} alt="Editicon" width='19px' height='19px'
                        />
                    </IconButton>
                </Box>   
        </>
    )
}

type CalenderProps={
    text:string;
    textColor:string;
    
}
export const Calender=({text,textColor}:CalenderProps)=>{
    const {classes} =useAboutusStyles();
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box className={classes.CalenderBox} ref={anchorRef} sx={{ display: "flex", alignItems: "center", }}>
                <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <IconButton sx={{ color: "#0A4FA4" }}>
                    <CalendarTodayIcon />
                    </IconButton>
                    <Typography sx={{ color: textColor }}>{selectedDate ? selectedDate.format("DD/MM/YYYY") : text}</Typography>
                
                </Box>
                <IconButton sx={{ color: "#0A4FA4" ,}} onClick={handleToggle} >
                    <ExpandMoreIcon />
                </IconButton>
            
            <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
            <ClickAwayListener onClickAway={handleClose}>
                <Paper sx={{ p: 1 }} >
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    minDate={dayjs()} 
                />
                </Paper>
            </ClickAwayListener>
            </Popper>
        </Box>
    </LocalizationProvider>
    
    )
}
export const Addlatestnews=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add latest news
        </Button>
    )
}
export const Addlatestpdf=({onClick}:{onClick?:()=>void})=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant='contained' disableElevation className={classes.AddSection} startIcon={<AddOutlinedIcon/>} onClick={onClick}>
            Add Latest pdf
        </Button>
    )
}