import {useAboutusStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, IconButton} from '@mui/material';
import { DeleteButton, EditButton, SaveButton,  UploadButtonTestimonials, CancelButton} from './AboutUsButtons';
import { useState,  } from 'react';
import { HelperTextValidate, newHandleFileChange } from '../../utils/Validations';
import CloseIcon from "@mui/icons-material/Close";
import UserendDeletepopup from "../../utils/UserendDeletepop";

interface SubHighlightsProps {
  accordianId:string
  id: string;
  subSection:string
  onDelete?: () => void;
}

const SubHighlights=({ accordianId, id,subSection, onDelete }: SubHighlightsProps)=>{
    const {classes} = useAboutusStyles();
    const [file,SetFile] = useState<File | null>(null);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false); 
    const [prevData, setPrevData] = useState<{ subtitle: string;file:File | null; content:string } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200 ||  content.length < 3 || content.length > 200;

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
        subtitle,
        file,
        content
    });
    setIsSaved(true);
    setEdit(false);
    console.log(`subtitle:${subtitle}, Images:${file}, content: ${content}`);
    };
    const CancelData = ()=>{
        if (prevData) {
        setSubtitle(prevData.subtitle);
        SetFile(prevData.file);
        setContent(prevData.content) 
        setIsSaved(true);
    } else {
        setSubtitle('');
        setContent('');
        SetFile(null);
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    
    return(
        <>
            <Box className={classes.subSectionBox}>
                <Box className={classes.whoWeareHeaderbox}>
                    {id=='Highlights-1' && 
                        <Typography className={classes.HeaderText}>
                            Highlight Section 1
                        </Typography>
                    }
                    {id=='Testimonials-1' && 
                        <Typography className={classes.HeaderText}>
                            Regular Testimonials
                        </Typography>
                    }
                    {id =='1' && 
                        <Typography className={classes.HeaderText}>
                            {subSection}
                        </Typography>
                    }
                    <Typography className={classes.HeaderText}>
                     </Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:3}}>
                       <EditButton error={ Edit} onClick={()=>{ setCancel(true);
                        setEdit(true)
                       }}/>
                        {id!='Highlights-1' && <DeleteButton onClick={()=>setOpenDialog(true)}/>}
                    </Box>
                </Box>
                <Box className={classes.myuploadandheadingbox}>
                    <Stack className={classes.myUploadStack}>
                        {(id !='Highlights-1' && id !='Testimonials-1' ) && 
                            <Typography >
                                {subSection} {id}
                            </Typography>
                        }
                        {(subSection=='Testimonials-1' ) && 
                            <Typography >
                                {subSection} {id}
                            </Typography>
                        }
                        
                        {(id =='Highlights-1' || id =='Testimonials-1' )&& 
                            <Typography className={classes.HeaderText}>
                                Image
                            </Typography>
                        }
                        <Box className={classes.myImageUploadBox}>
                            <input type='file'
                                    multiple
                                    accept="image/*" 
                                    id={`upload-file-${accordianId}-${subSection}-${id}`}
                                    style={{display:'none'}}
                                    onChange={(e) =>newHandleFileChange(e, SetFile, setError, setIsSaved, )}
                                    disabled={!Edit}
                                    />
                            <UploadButtonTestimonials id={id} accordianId={accordianId} subSection={subSection} disable={!Edit}/> 
                            {(file)&& (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        
                                            <Box   sx={{position:'relative',opacity: Edit ? 1 : 0.5,}} >
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
                        <Typography  className={classes.mytext}>
                            subtitle
                        </Typography>
                        <TextField value={subtitle} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={SubtitleField.message}
                                   disabled={!Edit}
                                   FormHelperTextProps={{
                                className: (subtitle.length >= 3 && subtitle.length < 200) ? classes.greyText : classes.helperText
                            }}/>
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
                           FormHelperTextProps={{
                                className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                     <SaveButton error={isSaved || !file|| isTextInvalid}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
                <Box className={classes.heroDivider}></Box>
            </Box>
            <UserendDeletepopup open={openDialog} message={`Are you sure you want to delete this ${id}?`} onClose={()=> setOpenDialog(false)} onDelete={handleConfirmDelete}/>    
        </>
    )
}
export default SubHighlights;