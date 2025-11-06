import {useAboutusStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, Button, Dialog, MenuItem,Select,DialogContent, DialogActions, IconButton} from '@mui/material';
import { DeleteButton, SaveButton, UploadButton, CancelButton, EditButton} from './AboutUsButtons';
import { useState,  } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import UserendDeletepopup from "../../utils/UserendDeletepop";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {HelperTextValidate, NameandRoleValidate,validateEmail1,phoneNumberValidation, newHandleFileChange} from '../../utils/Validations';

type AdvisorProps={
    id:string;
    accordianId:string;
    Section:string;
    title:string;
    onDelete?: () => void;
}
const Advisors=({id,accordianId, Section, onDelete, title}:AdvisorProps)=>{
    const {classes} = useAboutusStyles();
    const [file,SetFile] = useState<File | null>(null);
    const [error,setError]= useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [role, setRole] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [prevData, setPrevData] = useState<{name: string;role:string;content:string; file:File | null } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false) 
    const [selected, setSelected] = useState("Directors");
    const options = ["Directors", "Advisors", "Managers"]; 

    const roleFlied = NameandRoleValidate(role);
    const nameFlied = NameandRoleValidate(name);
    const contentFlied = HelperTextValidate(content);
    const emailerror= validateEmail1(role);
    const phoneerror= phoneNumberValidation(role);
    const isTextInvalid = role.length < 3 || role.length > 80 || name.length < 3 || name.length > 80 ||content.length < 3 || content.length > 200;

    const removeImage=()=>{
        SetFile(null)
        setError('');
        setIsSaved(false);
    };
    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (onDelete) onDelete(); 
    };
    const SaveData = ()=>{
        setPrevData({
        name,
        role,
        content,
        file,
    });
    setIsSaved(true);
    setEdit(false);
    console.log(`name:${name}, role:${role},content:${content},Images:${file}`);
    };
    const CancelData = ()=>{
        if (prevData) {
        setRole(prevData.role);
        setName(prevData.name);
        setContent(prevData.content);
        SetFile(prevData.file); 
        setIsSaved(true);
    } else {
        setContent('');
        setRole('');
        setName('');
        SetFile(null);
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    return(
        <>
        {title =='Home' &&
        <Box sx={{display:"flex", flexDirection:'row', justifyContent:"flex-end",gap:2}} >
          <EditButton error={ Edit} onClick={()=> {setCancel(true);
            setEdit(true)
          }}/>
        </Box>}
      { title=='About us' &&<Box className={classes.whoWeareHeaderbox}>
         <Select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          IconComponent={KeyboardArrowDownRoundedIcon}
          sx={{
            width:'147px',
            height:'37px',
            color: "blue",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "blue" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "blue" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "blue" },
          }}>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                {option}
                </MenuItem>
            ))}
        </Select>
        <Box sx={{display:"flex", flexDirection:'row', justifyContent:"flex-end",gap:2}} >
          <EditButton error={ Edit} onClick={()=> {setCancel(true);
            setEdit(true)
          }}/>
          {id != 'Sub Section-1'&& <DeleteButton onClick={()=>setOpenDialog(true)}/>}
        </Box>
      </Box>}
      <Box className={classes.myuploadandheadingbox}>
        <Stack className={classes.OurDirectorsUploadStack}>
                    <Typography className={classes.mytext}>
                        image
                    </Typography>
                    <Box className={classes.myImageUploadBox}>
                        <input type='file'
                                multiple
                                accept="image/*" 
                                id={`upload-file-${Section}-${accordianId}-${id}`}
                                style={{display:'none'}}
                                disabled={!Edit}
                                onChange={(e) =>newHandleFileChange(e, SetFile, setError, setIsSaved, )}
                                />
                        <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                        {(file) && (
                            <Box className={classes.ImagesBox}>
                                <Box className={classes.ImagespicBox}>
                                    
                                        <Box  sx={{position:'relative',opacity: Edit ? 1 : 0.5,}} >
                                            <img 
                                                src={URL.createObjectURL(file)}
                                                alt={`preview `}
                                                className={classes.ImagePic}
                                            />
                                            <IconButton className={classes.cancelImgIcon} disabled={!Edit} onClick={()=>{removeImage()}}>
                                                <CloseIcon sx={{ color: "white", fontSize: 18, stroke:'white',strokeWidth:2 }}/>
                                            </IconButton>
                                        </Box>
                                    
                                    
                                    </Box>
                                   
                            </Box>
                        )}
                        <Box>
                             {error && (
                                    <Typography className={classes.errorText}>
                                        {error}
                                    </Typography>
                                )
                            }
                        </Box>
                    </Box>
                </Stack>
                <Box className={classes.TextFiledBox}>
                        <Typography className={classes.mytext}>
                            name
                        </Typography>
                        <TextField className={classes.myTextFleid}
                                    value={name}
                                    onChange={(e)=>{setName(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={nameFlied.message}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: (name.length >= 3 && name.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                        { title ==='About us' && (<><Typography className={classes.mytext}>role</Typography>
                    <TextField className={classes.myTextFleid}
                                    value={role}
                                    onChange={(e)=>{setRole(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={roleFlied.message}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: (role.length >= 3 && role.length < 200) ? classes.greyText : classes.helperText
                            }}/></>)}
                        { accordianId ==='14' && <> <Typography className={classes.mytext}>Email</Typography>
                                            <TextField className={classes.myTextFleid}
                                    value={role}
                                    onChange={(e)=>{setRole(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={emailerror.error}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: !emailerror.isError ? classes.greyText : classes.helperText
                            }}/></>}
                        {  ( accordianId ==='13') && <><Typography className={classes.mytext}>Phone</Typography>
                                            <TextField className={classes.myTextFleid}
                                    value={role}
                                    onChange={(e)=>{setRole(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={phoneerror.error}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className:! phoneerror.isError ? classes.greyText : classes.helperText
                            }}/></>}
                        
                        { title ==='About us' && <Typography className={classes.mytext}>Content</Typography>}
                        { (accordianId ==='13') && <Typography className={classes.mytext}>Message</Typography>}
                        { ( accordianId ==='14') && <Typography className={classes.mytext}>Address</Typography>}
                        <TextField 
                            fullWidth
                            multiline
                            minRows={5}
                            className={classes.myTextFleid}
                            value={content}
                            onChange={(e)=>{setContent(e.target.value);
                                            setIsSaved(false)}}
                            helperText={contentFlied.message}
                            disabled={!Edit}
                            FormHelperTextProps={{
                                className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                </Box>
               <UserendDeletepopup open={openDialog} message={`Are you sure you want to delete this ${id}?`} onClose={()=> setOpenDialog(false)} onDelete={handleConfirmDelete}/>    
            </Box>    
            <Box className={classes.SeveandCancelBox}>
                            <SaveButton error={isSaved || !file|| isTextInvalid}  onClick={SaveData}/>
                            {cancel &&(<CancelButton onClick={CancelData}/>)}
                        </Box>
        </>
    )
}
export default Advisors;