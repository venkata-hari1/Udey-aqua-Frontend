import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
import { CancelButton, EditButton, SaveButton, UploadButton, Calender, Addlatestnews, Addlatestpdf, AddSection} from '../userEnd-Aboutus/AboutUsButtons';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState,  } from 'react';
import { HandleFileChange, HelperTextValidate, } from '../../utils/Validations';
import Subsection from '../userEnd-Aboutus/Subsection';
import  Badge  from "@mui/material/Badge";

type HeroProps={
    id?:string;
    accordianId:string;
    Section:string;
    title?:string;
}
 const News=({id,accordianId,Section,}:HeroProps)=>{
    const {classes} =useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [prevData, setPrevData] = useState<{ subtitle: string; Images: string[] } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false);
    const [pdfImage, setpdfImage] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(1);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
     
    
    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200 || content.length<3 || content.length >200;
    const removeImage=(IndexToRemove:number)=>{
        setFile(prev=>prev.filter((_,index)=> index !== IndexToRemove));
        setImage(prev=>prev.filter((_,index)=>index !== IndexToRemove));
        setError('');
        setIsSaved(false);
    };
    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter+1)
    };

    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
    }; 
    const SaveData = ()=>{
        setPrevData({
        subtitle,
        Images,
    });
    setIsSaved(true);
    setEdit(false);
    console.log(`subtitle:${subtitle}, Images:${Images}`);
    if (Images.length >=0){
        setpdfImage(true)
    }
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
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',gap:2}}>
                    <Addlatestnews/>
                    <Addlatestpdf/>
                    <Badge
                                                        badgeContent={counter}
                                                            sx={{
                                                                "& .MuiBadge-badge": {
                                                                backgroundColor: "#0A4FA4",
                                                                color: "#fff", 
                                                                },
                                                            }}
                                    
                                                            anchorOrigin={{
                                                                vertical: "top",
                                                                horizontal: "right",
                                                            }}
                                                    >
                                                    <AddSection onClick={handleAddSubpage}/>
                                                    </Badge>
                     
                </Box>
                {(accordianId !='1'  )&& (                
                        <Box className={classes.whoWeareHeaderbox}>
                            <Box></Box>
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',gap:2}}>
                                <Calender text='MM/DD/YY' textColor='#0A4FA4'/>
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
                <Box //className={classes.myuploadandheadingbox}
                >
                    <Box //className={classes.TextFiledBox}
                    >
                            <Typography  className={classes.mytext}>
                                 title
                            </Typography>
                            <TextField value={subtitle} 
                                    fullWidth
                                    className={classes.newsTextfield} 
                                    
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
                                className={classes.newsTextfield}
                                onChange={(e)=>{setContent(e.target.value);
                                                setIsSaved(false)}}
                                disabled={!Edit}
                                helperText={TextFieldError.message}
                                FormHelperTextProps={{
                                    className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText
                                }}/>
                        </Box>
                </Box>
                <Box className={classes.SeveandCancelBox} >
                    <SaveButton error={isSaved || isTextInvalid}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
                <Box className={classes.heroDivider} sx={{marginBottom:4}}></Box>
                {/*PDF part */}
                                    <Stack className={classes.myUploadStack}>
                                        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <Typography className={classes.HeaderText}>
                                                Pdf Section
                                            </Typography>
                                            <EditButton error={!pdfImage } onClick={()=>{ setCancel(true);
                                                setEdit(true)
                                            }}/>
                                        </Box>
                                        <Typography className={classes.mytext}>
                                            Upload Image or Pdf
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
                                    <Box className={classes.SeveandCancelBox} >
                        <SaveButton error={Images.length === 0}  onClick={SaveData}/>
                        {cancel &&(<CancelButton onClick={CancelData}/>)}
                    </Box>
                    
                {subpages.map((sub) => (
                    <Subsection key={sub.id} id={sub.id} accordianId={accordianId} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} title='News & Events'/>
                ))}
            </Box>
        </>
    )
}
export default News;