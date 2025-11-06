import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box,  TextField, Typography, Dialog, DialogContent, DialogActions, Button, Stack, IconButton} from '@mui/material';
import {  EditButton,  UploadButton, SaveButton, CancelButton, DeleteButton} from '../userEnd-Aboutus/AboutUsButtons';
import { useState, useEffect } from 'react';
import {newHandleFileChange, TitleValidate} from '../../utils/Validations';
import CloseIcon from "@mui/icons-material/Close";
import UserendDeletepopup from "../../utils/UserendDeletepop";

type AquacultureTypeProps={
    id?:string;
    accordianId?:string;
    Section:string;
    onDelete?:()=>void
}
const SubAquacultureType=({id,accordianId,onDelete, Section}:AquacultureTypeProps)=>{
    const {classes} = useAboutusStyles();
    
    const [file,setFile]= useState<File|null>(null);
    const [error,setError]= useState<string>('');
    const [title,settitle]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<{ title: string; file:File | null; } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved,setIssaved] = useState<boolean>(false)
    const [cancel, setCancel] = useState<boolean>(false)
    const TitleError=TitleValidate(title);
    const isTextInvalid = title.length < 3 || title.length > 200;

    const SaveData = ()=>{
        setPrevData({
            title,
            file
        });
        setIssaved(true);
        setEdit(false);
        setCancel(false)
        console.log(`subtitle:${title}, Images:${file}`);
    };

    const CancelData = ()=>{
        if (prevData) {
        settitle(prevData.title);
        setFile(prevData.file); 
        setIssaved(true);
    } else {
        settitle('');
        setFile(null);
        setIssaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    const removeImage=()=>{
            setFile(null)
            setError('');
            setIssaved(false);
    };
    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (onDelete) onDelete(); 
    };

    return(
        <>
            <Box>
                <Box sx={{display:'flex',justifyContent:'flex-end',gap:'10px'}}>
                    <EditButton error={ !prevData} onClick={()=>{ setCancel(true);
                        setEdit(true)
                    }}/>
                    {id != 'Image 1' && <DeleteButton onClick={()=>setOpenDialog(true)}/>}
                </Box>
                <Box sx={{position:'relative', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Box className={classes.myuploadandheadingbox} sx={{minHeight:'200px'}}>
                        <Stack className={classes.myUploadStack}>
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
                                        onChange={(e)=>newHandleFileChange(e,setFile,setError,setIssaved)}
                                        />
                                <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                                {(file) && (
                                    <Box className={classes.ImagesBox} sx={{maxWidth:'200px'}}>
                                        <Box className={classes.ImagespicBox}>
                                            
                                                <Box  sx={{position:'relative',opacity: Edit ? 1 : 0.5,}} >
                                                    <img 
                                                        src={URL.createObjectURL(file)}
                                                        alt={`preview `}
                                                        className={classes.ImagePic}
                                                    />
                                                    <IconButton className={classes.cancelImgIcon}  disabled={!Edit} onClick={()=>{removeImage()}}>
                                                        <CloseIcon sx={{ color: "white", fontSize: 18, stroke:'white',strokeWidth:2 }}/>
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                    </Box>
                                )}
                                <Box>
                                    { error && (
                                        <Typography className={classes.errorText}>
                                            {error}
                                        </Typography>
                                        )
                                    }
                                </Box>
                            </Box>
                        </Stack>
                </Box>
                    <Box  sx={{
                                position: 'absolute',
                                top: '50px',
                                right: '0px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 5,
                            }}
>
                        <Typography>Title</Typography>
                        <TextField value={title} onChange={(e)=>{settitle(e.target.value);
                        setIssaved(false)}} disabled={!Edit}  className={classes.titleandpriceTextfield} helperText={TitleError.message} FormHelperTextProps={{className: (title.length >= 3 && title.length < 200) ? classes.greyText : classes.helperText}}/>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.SeveandCancelBox} >
                <SaveButton error={isSaved || !file|| isTextInvalid}  onClick={SaveData}/>
                {cancel &&(<CancelButton onClick={CancelData}/>)}
            </Box>
            <UserendDeletepopup open={openDialog} message={`Are you sure you want to delete this ${id}?`} onClose={()=> setOpenDialog(false)} onDelete={handleConfirmDelete}/>                        
        </>
    )
}
export default SubAquacultureType; 