import {useAboutusStyles} from './AboutusStyles';
import { Box, Button, Stack, TextField, Typography, DialogContent, DialogActions,Dialog} from '@mui/material';
import { CancelButton, EditButton, SaveButton, UploadButton, UpdateHeader, DeleteButton} from './AboutUsButtons';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState,  } from 'react';
import { HandleFileChange, HelperTextValidate, } from '../../utils/Validations';
type HeroProps={
    id?:string;
    accordianId?:string;
    Section?:string;
    title?:string;
    ondelete?:()=> void
}
 const Hero=({id,accordianId,Section,title,ondelete}:HeroProps)=>{
    const {classes} =useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [prevData, setPrevData] = useState<{ subtitle: string; Images: string[] } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false);
    const [openDialog, setOpenDialog] = useState(false);
    
    const TextFieldError=HelperTextValidate(subtitle).message;
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200;  
    
    const handleDeleteClick = () => {
        setOpenDialog(true);
    };

    const handleCancel = () => {
        setOpenDialog(false);
    };

    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (ondelete) ondelete(); 
    };

    const removeImage=(IndexToRemove:number)=>{
        setFile(prev=>prev.filter((_,index)=> index !== IndexToRemove));
        setImage(prev=>prev.filter((_,index)=>index !== IndexToRemove));
        setError('');
        setIsSaved(false);
    };
    const SaveData = ()=>{
        setPrevData({
        subtitle,
        Images,
    });
    setIsSaved(true);
    setEdit(false);
    console.log(`subtitle:${subtitle}, Images:${Images}`);
    };
    const CancelData = ()=>{
        if (prevData) {
        setSubtitle(prevData.subtitle);
        setImage(prevData.Images);
        setFile([]); // reset current file uploads
        setIsSaved(true);
    } else {
        setSubtitle('');
        setImage([]);
        setFile([]);
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    
    return(
        <>
            <Box className={(accordianId == '1')? classes.WhoWeAreContainer : undefined}>
                {(accordianId !='1'  )&& (                
                        <Box className={classes.whoWeareHeaderbox}>
                            <Typography className={classes.HeaderText}>
                               { title=='news&events'? 'Highlight Section 1' : title ==='Home'?id: 'Header Section'}
                            </Typography>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:2}}>
                                 <EditButton error={!prevData} onClick={()=>{ setCancel(true);
                                    setEdit(true)
                                }}/>
                                {(title ==="Home" && id != 'Slide 1') && <DeleteButton  onClick={handleDeleteClick}/>}
                            </Box>
                        </Box>
                    )}
                {(id === '1') && (
                    <Box className={classes.deleteButtonBox}>
                        <EditButton error={ !prevData} onClick={()=>{ setCancel(true);
                            setEdit(true)
                        }}/>
                    </Box>
                )}
                <Box className={classes.myuploadandheadingbox}>
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
                                    onChange={(e) =>HandleFileChange(e, setFile, setError, setIsSaved, setImage)}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(Images.length>0) && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {Images.map((prev,index)=>
                                            <Box key={index} sx={{position:'relative',opacity: Edit ? 1 : 0.5,}}  >
                                                <img 
                                                    src={prev}
                                                    alt={`preview ${index+1}`}
                                                    className={classes.ImagePic}
                                                />
                                                <Button className={classes.cancelImgIcon} disabled={!Edit} onClick={()=>{removeImage(index)}}>
                                                    <CancelIcon   />
                                                </Button>
                                            </Box>
                                        )}

                                        </Box>
                                        
                                </Box>
                            )}
                            <Box>
                                {  error && (
                                    <Typography className={classes.errorText}>
                                        {error}
                                    </Typography>
                                    )
                                }
                            </Box>
                        </Box>
                    </Stack>
                    <Box sx={{gap:10}}>
                        <Typography className={classes.mytext}>
                            {title ==='Home'?'Heading Content' : 'subtitle'}
                        </Typography>
                        <TextField 
                            fullWidth
                            multiline
                            minRows={5}
                            className={classes.myTextFleid}
                            value={subtitle}
                            onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                            helperText={TextFieldError}
                           disabled={!Edit}
                            FormHelperTextProps={{
                                className: (subtitle.length >= 3 && subtitle.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox} >
                   {
                    (id ==='1')?<SaveButton error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>:(title ==='Home')?<SaveButton error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>:<UpdateHeader error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>}
                    {cancel &&(<CancelButton onClick={CancelData}/>)} 
                </Box>
            </Box>

            {/* Dialog Box*/}
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
export default Hero;