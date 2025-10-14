import {useAboutusStyles} from './AboutusStyles';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
import { CancelButton, EditButton, SaveButton, UploadButton, UpdateHeader} from './AboutUsButtons';
import { useState,  } from 'react';
import { HandleFileChange, HelperTextValidate, } from '../../utils/Validations';
type HeroProps={
    id?:string;
    accordianId?:string;
    Section:string;
    title?:string;
}
 const Hero=({id,accordianId,Section,title}:HeroProps)=>{
    const {classes} =useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [prevData, setPrevData] = useState<{ subtitle: string; Images: string[] } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)
    const TextFieldError=HelperTextValidate(subtitle).message;
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200;   
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
                               { title=='news&events'? 'Highlight Section 1' : 'Header Section'}
                            </Typography>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',}}>
                                 <EditButton error={!prevData} onClick={()=>{ setCancel(true);
                                    setEdit(true)
                                }}/>
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
                                                <Button className={classes.cancelImgIcon}
                                                        onClick={()=>{removeImage(index)}}
                                                        disabled={!Edit}
                                                                >
                                                    x
                                                </Button>
                                            </Box>
                                        )}

                                        </Box>
                                        <Box> 
                                            
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
                            subtitle
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
                    {id ==='1'?<SaveButton error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>:<UpdateHeader error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>}
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
            </Box>
        </>
    )
}
export default Hero;