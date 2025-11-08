import {useAboutusStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, IconButton} from '@mui/material';
import { CancelButton, EditButton, SaveButton, UploadButton, UpdateHeader, DeleteButton, DropDownButton} from './AboutUsButtons';
import CloseIcon from "@mui/icons-material/Close";
import { useState,  } from 'react';
import { HelperTextValidate,newHandleFileChange } from '../../utils/Validations';
import { useSelector,useDispatch} from 'react-redux';
import type { Rootstate } from '../../../../redux/store';
import { AddCulture } from '../../../../redux/reducers/Nav';
import UserendDeletepopup from '../../utils/UserendDeletepop';

type HeroProps={
    id:string;
    accordianId?:string;
    Section?:string;
    title?:string;
    ondelete?:()=>void
}
 const Hero=({id,accordianId,Section,title,ondelete}:HeroProps)=>{
    const {classes} =useAboutusStyles();
    const dispatch = useDispatch();
    const [file,setfile] = useState<File|null>(null)
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [heading,setheading]=useState<string>('');
    const [newsection,setnewsection]=useState<string>('');
    const [prevData, setPrevData] = useState<{ subtitle: string; file:File |null; heading:string } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selected, setSelected] = useState("Cage Culture");
    const OurprojectsItems = useSelector((state:Rootstate)=>state.accordian.CulturesData);
    const TextFieldError=HelperTextValidate(subtitle)
    const headingError=HelperTextValidate(heading)
    const newsectionerror=HelperTextValidate(newsection)
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
        heading
    });
    setIsSaved(true);
    setEdit(false);
    console.log(`subtitle:${subtitle}, Images:${file}`);
    };
    const CancelData = ()=>{
        if (prevData) {
        setheading(prevData.heading)
        setSubtitle(prevData.subtitle);
        setfile(prevData.file) 
        setIsSaved(true);
    } else {
        setSubtitle('');
        setheading('')
        setfile(null)
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (ondelete) ondelete(); 
    };
    return(
        <>
        
            <Box className={(accordianId == '1')? classes.WhoWeAreContainer : undefined}>
                {(accordianId !='1' && Section !="Why chhoose us" && Section !="About us" && id !== '1' )&& (                
                        <Box className={classes.whoWeareHeaderbox}>
                            <Box>
                                <Typography className={classes.HeaderText}>
                                { title=='news&events'? 'Highlight Section 1' : title ==='Home'? Section==='Our projects'? 
                                <>  
                                    {(/subsection[0-9]+/.test(id)) &&<DropDownButton setSelected={setSelected} Data={OurprojectsItems} value={selected}/>}
                                    {(/newsection[0-9]+/.test(id)) &&<TextField fullWidth value={newsection}
                                        onChange={(e)=>{setnewsection(e.target.value);
                                                        setIsSaved(false)}}
                                        helperText={newsectionerror.message}
                                        onBlur={()=>dispatch(AddCulture(newsection))}
                                        disabled={!Edit}
                                        sx={{"& .MuiOutlinedInput-root":{
                                                "& fieldset":{
                                                borderColor:'#0A4FA4',
                                                },
                                                "&:hover fieldset":{
                                                borderColor:'#0A4FA4',
                                                },
                                                "&.Mui-focused fieldset":{
                                                    borderColor:'#0A4FA4',
                                                }},}}
                                        FormHelperTextProps={{
                                            className: (heading.length >= 3 && heading.length < 200) ? classes.greyText : classes.helperText
                                        }}
                                    />}
                                
                                </>
                                : id :'Header Section'}
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:2}}>
                                <EditButton error={!prevData} onClick={()=>{ setCancel(true);setEdit(true)}}/>
                                <DeleteButton onClick={()=>setOpenDialog(true)}/>
                            </Box>
                        </Box>
                    )}
                {/* Herosections,why choos us and Aboutus section Edit button */}
                {((accordianId =='1' ) || id === '1' || (Section =="Why chhoose us" || Section =="About us") ) && (
                    <>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                        <Box>
                        {(Section ==='Our projects' ) && (
                            <><DropDownButton setSelected={setSelected} Data={OurprojectsItems} value={selected}/></>
                        )}
                        </Box>
                        <EditButton error={ !prevData} onClick={()=>{ setCancel(true);
                            setEdit(true)
                        }}/>
                    </Box>
                    </>
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
                    <Box>
                        {Section=='Our projects' && <>
                        <Typography className={classes.mytext}> Heading</Typography>
                        <TextField className={classes.myTextFleid} sx={{mb:2}}
                            fullWidth
                            value={heading}
                            onChange={(e)=>{setheading(e.target.value);
                                            setIsSaved(false)}}
                            helperText={headingError.message}
                           disabled={!Edit}
                            FormHelperTextProps={{
                                className: (heading.length >= 3 && heading.length < 200) ? classes.greyText : classes.helperText
                            }}/>
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
                            helperText={TextFieldError.message}
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
                <UserendDeletepopup open={openDialog} message={`Are you sure you want to delete this ${id}?`} onClose={()=> setOpenDialog(false)} onDelete={handleConfirmDelete}/>           
            </Box>
        </>
    )
}
export default Hero;