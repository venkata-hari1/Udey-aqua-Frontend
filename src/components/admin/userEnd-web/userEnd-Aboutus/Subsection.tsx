import {useAboutusStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, Button, Dialog, DialogContent, DialogActions, MenuItem,Select, IconButton} from '@mui/material';
import { DeleteButton, SaveButton, UploadButton, CancelButton, EditButton, Calender} from './AboutUsButtons';
import { useState,  } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import { HelperTextValidate } from '../../utils/Validations';
import { HandleFileChange } from '../../utils/Validations';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

interface SubsectionProps {
  accordianId?:string
  id: string;
  Section:string;
  title:string;
  onDelete?: () => void; // callback to delete this subpage
}

const Subsection=({ accordianId, id,Section,title, onDelete,  }: SubsectionProps)=>{
    const {classes} = useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<{ subtitle: string; Images: string[];content:string } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false);
    const [selected, setSelected] = useState("Blog");
    const options = ["Blog","News"]; 

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)

    {/* for enabling save button */}
    const isSubtitleValid = subtitle.length >= 3 && subtitle.length <= 200;
    const isContentValid = content.length >= 3 && content.length <= 200;
    const hasImages = Images.length > 0;

    let canSave= false;
    if (title === 'News & Events' && accordianId === '4') {
        canSave = isSubtitleValid && isContentValid && !isSaved;
    } else if (title === 'News & Events' && accordianId === '5') {
        canSave = isSubtitleValid && hasImages && !isSaved;
    } else {
        canSave = isSubtitleValid && isContentValid && hasImages && !isSaved;
    }


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
    setCancel(false)
    console.log(`subtitle:${subtitle}, Images:${Images},content:${content}`);
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
                {(id != 'Sub Section-1'&& id !='1' && id !='Blog-1') && (<Box className={classes.heroDivider}></Box>)}
                <Box className={classes.whoWeareHeaderbox}>
                    {/* Home section News */}
                    { title ==='Home' && accordianId ==='10' ?(
                        <>
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
                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:3}}>
                        { 
                                <Calender text='MM/DD/YY' textColor='#0A4FA4'/>
                            
                        }
                        <EditButton error={!prevData} onClick={()=> {setCancel(true);
                            setEdit(true)
                        }}/>
                        {(id != 'Blog-1')&& <DeleteButton onClick={handleDeleteClick}/>}
                    </Box>
                    </>
                    )
                    :(
                    <>
                    <Typography className={classes.HeaderText}>
                        {id}
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:3}}>
                        { title ==='News & Events' &&(
                                <Calender text='MM/DD/YY' textColor='#0A4FA4'/>
                            ) 
                        }
                        <EditButton error={!prevData} onClick={()=> {setCancel(true);
                            setEdit(true)
                        }}/>
                        {(id != 'Sub Section-1'&& id !='1')&& <DeleteButton onClick={handleDeleteClick}/>}
                    </Box>
                    </>)
                    }
                </Box>
                <Box className={classes.myuploadandheadingbox}>
                    {/* for Videos Section */}
                    { (title ==='News & Events' && accordianId === '4')?
                    <Box className={classes.TextFiledBox}>
                        <Box sx={{display:'flex',flexDirection:'row',gap:1}}>
                            <InsertLinkIcon sx={{color:'#0A4FA4'}}/>
                            <Typography  className={classes.mytext}>
                              Insert Link
                            </Typography>
                        </Box>
                        {/* in videos section this is for Insert Link*/}
                        <TextField value={content} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setContent(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={TextFieldError.message}
                                   disabled={!Edit}
                                   sx={{maxWidth:'500px'}}
                                   FormHelperTextProps={{
                                className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                    </Box>
                    :(
                            <Stack className={classes.myUploadStack}>
                                <Typography className={classes.mytext}>
                                    {title != 'News & Events' && 'image' }
                                </Typography>
                                <Typography className={classes.mytext}>
                                    {(title === 'News & Events' && accordianId === '5') && 'image'}
                                    {(title === 'News & Events' && accordianId != '5') && 'Upload Image or Pdf'}
                                </Typography>
                                <Box className={classes.myImageUploadBox}>
                                    <input type='file'
                                            multiple
                                            accept="image/*" 
                                            id={`upload-file-${Section}-${accordianId}-${id}`}
                                            style={{display:'none'}}
                                            onChange={(e) =>HandleFileChange(e, setFile, setError, setIsSaved, setImage)}
                                            disabled={!Edit}
                                            />
                                    <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                                    {(Images.length>0|| prevData)  && (
                                        <Box className={classes.ImagesBox}>
                                            <Box className={classes.ImagespicBox}>
                                                {Images.map((prev,index)=>
                                                    <Box key={index} sx={{position:'relative',opacity: Edit ? 1 : 0.5,}}   >
                                                        <img 
                                                            src={prev}
                                                            alt={`preview ${index+1}`}
                                                            className={classes.ImagePic}
                                                        />
                                                        <IconButton className={classes.cancelImgIcon} disabled={!Edit} onClick={()=>{removeImage(index)}}>
                                                            <CloseIcon sx={{ color: "white", fontSize: 18, stroke:'white',strokeWidth:2 }}/>
                                                        </IconButton>
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
                    )}
                    {/*for Gallery Section */}
                    {((title ==='News & Events' && accordianId === '5')) ?
                    (
                        <Box className={classes.TextFiledBox}>
                        <Typography  className={classes.mytext}>
                            {title != 'News & Events'? 'subtitle': 'title'}
                        </Typography>
                        <TextField value={subtitle} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={SubtitleField.message}
                                   disabled={!Edit}
                                   multiline
                                   minRows={5}
                                   FormHelperTextProps={{
                                className: (subtitle.length >= 3 && subtitle.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                    </Box>
                    )
                    :(title ==='News & Events' && accordianId === '4') ?(
                        <Box className={classes.TextFiledBox}>
                        <Typography  className={classes.mytext}>
                            {title != 'News & Events'? 'subtitle': 'title'}
                        </Typography>
                        <TextField value={subtitle} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={SubtitleField.message}
                                   disabled={!Edit}
                                   sx={{maxWidth:'500px'}}
                                   FormHelperTextProps={{
                                className: (subtitle.length >= 3 && subtitle.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                    </Box>
                    ):(
                        <Box className={classes.TextFiledBox}>
                            <Typography  className={classes.mytext}>
                                {title != 'News & Events'? title =='Home' ? 'Heading':'subtitle' : 'title'}
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
                                {title ==='Home' ? 'Description': 'Content'}
                            </Typography>
                            <TextField 
                                fullWidth
                                multiline
                                minRows={5}
                                value={content} 
                                className={classes.myTextFleid}
                                onChange={(e)=>{setContent(e.target.value);
                                                setIsSaved(false)}}
                                disabled={!Edit}
                                helperText={TextFieldError.message}
                                FormHelperTextProps={{
                                    className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText
                                }}/>
                        </Box>
                        )
                        
                    }
                </Box>
                <Box className={classes.SeveandCancelBox}>
                    <SaveButton error={!canSave}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
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
                    <Typography sx={{fontSize:'24px',color:'red',fontWeight:500,wordWrap: 'break-word'}}>Are you sure you want to delete this {id}?</Typography>
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
export default Subsection;