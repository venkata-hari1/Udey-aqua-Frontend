import {useAboutusStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography,MenuItem,Select, IconButton} from '@mui/material';
import { CancelButton, EditButton, SaveButton, UploadButton, UpdateHeader, DeleteButton} from './AboutUsButtons';
import CloseIcon from "@mui/icons-material/Close";
import { useState,  } from 'react';
import { HelperTextValidate,newHandleFileChange } from '../../utils/Validations';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

type HeroProps={
    id?:string;
    accordianId?:string;
    Section?:string;
    title?:string;
    ondelete?:()=>void
}
 const Hero=({id,accordianId,Section,title}:HeroProps)=>{
    const {classes} =useAboutusStyles();
    const [file,setfile] = useState<File|null>(null)
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [prevData, setPrevData] = useState<{ subtitle: string; file:File |null } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false);
    const [selected, setSelected] = useState("Cage Culture");
    const options = ["Aqua Culture","Cage Culture"]; 
    
    const TextFieldError=HelperTextValidate(subtitle).message;
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200;  
    
    const removeImage=()=>{
        setError('');
        setfile(null)
        setIsSaved(false);
    };
    const SaveData = ()=>{
        setPrevData({
        subtitle,
        file,
    });
    setIsSaved(true);
    setEdit(false);
    console.log(`subtitle:${subtitle}, Images:${file}`);
    };
    const CancelData = ()=>{
        if (prevData) {
        setSubtitle(prevData.subtitle);
        setfile(prevData.file) 
        setIsSaved(true);
    } else {
        setSubtitle('');
        setfile(null)
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    
    return(
        <>
            <Box className={(accordianId == '1')? classes.WhoWeAreContainer : undefined}>
                {(accordianId !='1' && Section !="Why chhoose us" && Section !="About us" && id !== '1' )&& (                
                        <Box className={classes.whoWeareHeaderbox}>
                            <Typography className={classes.HeaderText}>
                               { title=='news&events'? 'Highlight Section 1' : title ==='Home'? 
                               Section ==='Our projects' ? 
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
                                </>            
                               : id :'Header Section'
                               }
                            </Typography>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:2}}>
                                 <EditButton error={!prevData} onClick={()=>{ setCancel(true);
                                    setEdit(true)
                                }}/>
                            </Box>
                        </Box>
                    )}
                {(Section ==='Our projects' && id ==='1') && <>
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
                </>}
                {(id === '1' || (Section =="Why chhoose us" || Section =="About us") ) && (
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
                                    accept="image/*" 
                                    id={`upload-file-${Section}-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    disabled={!Edit}
                                    onChange={(e) =>newHandleFileChange(e,setfile,setError,setIsSaved)}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(file) && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                            <Box  sx={{position:'relative',opacity: Edit ? 1 : 0.5,}}  >
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
                        {Section=='Our projects' && <>
                        <Typography> Heading</Typography>
                        <TextField className={classes.myTextFleid}/>
                        </>}
                        <Typography className={classes.mytext}>
                            {title ==='Home' && Number(accordianId)<5 && Section!='Our projects'  ?'Heading Content' : title =='Home'  && Number(accordianId)>=5? 'Content': Section=='Our projects'?'Description':'subtitle'}
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
                    (id ==='1')?<SaveButton error={isSaved || !file || isTextInvalid}  onClick={SaveData}/>:(title ==='Home')?<SaveButton error={isSaved || isTextInvalid}  onClick={SaveData}/>:<UpdateHeader error={isSaved  || isTextInvalid}  onClick={SaveData}/>}
                    {cancel &&(<CancelButton onClick={CancelData}/>)} 
                </Box>
            </Box>
        </>
    )
}
export default Hero;