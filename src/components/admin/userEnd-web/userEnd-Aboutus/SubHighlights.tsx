import {useAboutusStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, Button, Dialog, DialogContent, DialogActions} from '@mui/material';
import { DeleteButton, EditButton, SaveButton,  UploadButtonTestimonials, CancelButton} from './AboutUsButtons';
import { useState,  } from 'react';
import { HandleFileChange, HelperTextValidate } from '../../utils/Validations';


interface SubHighlightsProps {
  accordianId:string
  id: string;
  subSection:string
  onDelete?: () => void; // callback to delete this subpage
}

const SubHighlights=({ accordianId, id,subSection, onDelete }: SubHighlightsProps)=>{
    const {classes} = useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false); 
    const [prevData, setPrevData] = useState<{ subtitle: string; Images: string[]; content:string } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200 ||  content.length < 3 || content.length > 200;

    const removeImage=(IndexToRemove:number)=>{
            setFile(prev=>prev.filter((_,index)=> index !== IndexToRemove));
            setImage(prev=>prev.filter((_,index)=>index !== IndexToRemove));
            setError('');
            setIsSaved(false);
    };
    const handleDeleteClick = () => {
        setOpenDialog(true);
    };

    const handleCancel = () => {
        setOpenDialog(false);
    };

    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (onDelete) onDelete(); 
    };
    const SaveData = ()=>{
        setPrevData({
        subtitle,
        Images,
        content
    });
    setIsSaved(true);
    setEdit(false);
    console.log(`subtitle:${subtitle}, Images:${Images}, content: ${content}`);
    };
    const CancelData = ()=>{
        if (prevData) {
        setSubtitle(prevData.subtitle);
        setImage(prevData.Images);
        setContent(prevData.content)
        setFile([]); // reset current file uploads
        setIsSaved(true);
    } else {
        setSubtitle('');
        setImage([]);
        setContent('');
        setFile([]);
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
                        {id!='Highlights-1' && <DeleteButton onClick={handleDeleteClick}/>}
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
                                    onChange={(e) =>HandleFileChange(e, setFile, setError, setIsSaved, setImage)}
                                    disabled={!Edit}
                                    />
                            <UploadButtonTestimonials id={id} accordianId={accordianId} subSection={subSection} disable={!Edit}/> 
                            {(Images.length>0 || prevData)&& (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {Images.map((prev,index)=>
                                            <Box key={index}  sx={{position:'relative',opacity: Edit ? 1 : 0.5,}} >
                                                <img 
                                                    src={prev}
                                                    alt={`preview ${index+1}`}
                                                    className={classes.TestmonialPic}
                                                />
                                                <Button className={classes.cancelImgIcon}
                                                        onClick={()=>{removeImage(index)}}
                                                        disabled={!Edit}
                                                                >
                                                    x
                                                </Button>
                                            </Box>
                                        )}
                                        
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
                     <SaveButton error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
                <Box className={classes.heroDivider}></Box>
            </Box>
            <Dialog open={openDialog} fullWidth onClose={handleCancel} className={classes.DialoagBox} PaperProps={{
                                    sx: {
                                    width: 500,       
                                    height: 250,      
                                    borderRadius: 3,   
                                    padding: 2,        
                                    },
                                }}>
                <DialogContent className={classes.DialogContent}>
                    <Typography sx={{fontSize:'24px',color:'red',fontWeight:500,wordWrap: 'break-word'}}>Are you sure you want to delete this {subSection}{id}?</Typography>
                </DialogContent>
                <DialogActions sx={{ 
                                display: 'flex', 
                                justifyContent: 'center'  
                            }}>
                    <Button onClick={handleCancel} className={classes.deleteButton}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} className={classes.CancelButton}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default SubHighlights;