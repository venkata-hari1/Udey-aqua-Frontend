import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Stack, TextField, Typography, IconButton} from '@mui/material';
import { DeleteButton, SaveButton, UploadButton, CancelButton, EditButton, UploadPDFButton} from '../userEnd-Aboutus/AboutUsButtons';
import { useState, } from 'react';
import { HelperTextValidate, newHandleFileChange, newHandlePDFChange} from '../../utils/Validations';
import CloseIcon from "@mui/icons-material/Close";
import UserendDeletepopup from "../../utils/UserendDeletepop";

interface SubSectionprops {
  accordianId:string
  id: string;
  Section:string;
  onDelete?: () => void; // callback to delete this subpage
}

const SubSection=({ accordianId, id,Section, onDelete }: SubSectionprops)=>{
    const {classes} = useAboutusStyles();
    const [file,SetFile] = useState<File | null>(null);
    const [pdffile, Setpdffile] = useState<File |null>(null);
    const [pdferror,setPdfError]= useState<string>('');
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<{ subtitle: string; file:File | null;content:string;pdffile: File | null; } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [, setIsPdfSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)
    const [pdf,setpdf] = useState('')

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200 || content.length < 3 || content.length > 200;

    const SaveData = ()=>{
        setPrevData({
        subtitle,
        file,
        content,
        pdffile
    });
    setIsSaved(true);
    setEdit(false);
    setCancel(false)
    console.log(`subtitle:${subtitle}, Images:${file},content:${content},pdf:${pdffile}`);
};

    const CancelData = ()=>{
        if (prevData) {
        setSubtitle(prevData.subtitle);
        setContent(prevData.content)
        Setpdffile(prevData.pdffile)
        SetFile(prevData.file); 
        setIsSaved(true);
    } else {
        setSubtitle('');
        setContent('');
        Setpdffile(null)
        SetFile(null);
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    const removeImage=()=>{
            SetFile(null)
            setError('');
            setIsSaved(false);
    };
    const removePdf=()=>{
            Setpdffile(null)
            setPdfError('');
            setIsPdfSaved(false);
    };
    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (onDelete) onDelete(); 
    };
   
    return(
        <>
            <Box className={classes.subSectionBox}>
                {id != 'Sub Section-1'&& (<Box className={classes.heroDivider}></Box>)}
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>
                        {id}
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:3}}>
                        <EditButton error={ !prevData} onClick={()=>{ setCancel(true);
                        setEdit(true)
                    }}/>
                        {id != 'Sub Section-1'&& <DeleteButton onClick={()=>setOpenDialog(true)}/>}
                    </Box>
                </Box>
                <Box className={classes.myuploadandheadingbox}>
                    <Stack className={classes.myUploadStack}>
                        <Typography className={classes.mytext}>
                            image
                        </Typography>
                        <Box className={classes.myImageUploadBox}>
                            <input type='file'
                                    accept="image/*" 
                                    id={`upload-file-${Section}-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={(e) =>newHandleFileChange(e, SetFile, setError, setIsSaved, )}
                                    disabled={!Edit}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(file)  && (
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
                         <Typography className={classes.mytext}>
                            upload pdf
                        </Typography>
                        <Box className={classes.myImageUploadBox}>
                            <input type='file'
                                    accept="application/pdf" 
                                    id={`upload-pdf-${Section}-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={(e) =>newHandlePDFChange(e, Setpdffile, setPdfError, setIsPdfSaved,setpdf)}
                                    />
                            <UploadPDFButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(pdffile)  && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        
                                            <Box  sx={{position:'relative',opacity: Edit ? 1 : 0.5,}} >
                                                <Box sx={{
                                                        overflow: "hidden",   
                                                        position: "relative",
                                                    }}
>
                                                    <embed
                                                        src={pdf} 
                                                        type="application/pdf"
                                                        className={classes.ImagePic} 
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            display: "block",
                                                            }} 
                                                    />
                                                </Box>
                                                 <IconButton className={classes.cancelImgIcon} disabled={!Edit} onClick={()=>{removePdf()}}>
                                                    <CloseIcon sx={{ color: "white", fontSize: 18, stroke:'white',strokeWidth:2 }}/>
                                                </IconButton>
                                            </Box>
                                        
                                    </Box>
                                </Box>
                            )}
                            <Box>
                                {pdferror && (
                                        <Typography className={classes.errorText}>
                                            {pdferror}
                                        </Typography>
                                    )       
                                }
                            </Box>
                        </Box>
                </Stack>
                    <Box className={classes.TextFiledBox}>
                        <Typography  className={classes.mytext}>
                            subtitle
                        </Typography>
                        <TextField value={subtitle} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={SubtitleField.message}
                                   disabled={!Edit}
                                   FormHelperTextProps={{className: (subtitle.length >= 3 && subtitle.length < 200) ? classes.greyText : classes.helperText}}
                        />
                        <Typography className={classes.mytext}>
                            content
                        </Typography>
                        <TextField 
                            fullWidth
                            multiline
                            minRows={5}
                            value={content} 
                            className={classes.myTextFleid}
                            onChange={(e)=>{setContent(e.target.value);
                                            setIsSaved(false)}}
                            helperText={TextFieldError.message}
                            disabled={!Edit}
                            FormHelperTextProps={{className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                    <SaveButton error={isSaved || !file|| isTextInvalid}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
                
            </Box>
            <UserendDeletepopup open={openDialog} message={`Are you sure you want to delete this ${id}?`} onClose={()=> setOpenDialog(false)} onDelete={handleConfirmDelete}/>              
        </>
    )
}
export default SubSection;
