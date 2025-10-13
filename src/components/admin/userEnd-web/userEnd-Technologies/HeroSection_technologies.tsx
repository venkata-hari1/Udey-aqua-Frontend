import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
import { CancelButton, EditButton, SaveButton, UploadButton} from '../userEnd-Aboutus/AboutUsButtons';
import { useState, useEffect, Fragment } from 'react';
import { HelperTextValidate } from '../userEnd-Aboutus/validations';



type HeroProps={
    id?:string;
    accordianId?:string;
    Accordiantitle?:string;
    Section?:string;
}

 const HeroSection=({id,accordianId,Section='Technologies'}:HeroProps)=>{
    const {classes} =useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [prevData, setPrevData] = useState<boolean>(false);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const TextFieldError=HelperTextValidate(subtitle);
    const isTextInvalid = subtitle.length === 0 || subtitle.length < 3 || subtitle.length > 200;

    


    const validate = (file:File):string | null=>{
        const maxSize=5 *1024*1024;
        const types=['image/jpg','image/png','image/jpeg'];
        if (file.size > maxSize){
            return ('File Must be Less Than 5MB');

        };
        if (!types.includes(file.type)){
            return ("File must be jpg,png,jpeg format");
        };
       return null;
    };
   const HandleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        setError('');
        setIsSaved(false);
    
        if (files && files.length > 0) {
            const selectedFiles: File[] = Array.from(files);
    
            selectedFiles.forEach(file => {
                const errorMsg = validate(file);
                if (errorMsg) {
                    setError(errorMsg);
                    return;
                }
    
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imgs = new Image();
                    imgs.onload = () => {
                        if (imgs.width <= 300 || imgs.height <= 100) {
                            setError('File must be in landscape format (min 300x100)');
                            return; 
                        }
                        setFile(prev => [...prev, file]);
                        setImage(prev => [...prev, e.target?.result as string]);
                    };
                    imgs.src = e.target?.result as string;
                };
                reader.readAsDataURL(file);
            });
        }
    
        event.target.value = '';
    };
    const removeImage=(IndexToRemove:number)=>{
        setFile(prev=>prev.filter((_,index)=> index !== IndexToRemove));
        setImage(prev=>prev.filter((_,index)=>index !== IndexToRemove));
        setError('');
        setIsSaved(false);
    };
    const SaveData = ()=>{
        const Data={
            subtitle,
            image:Images
        }
    localStorage.setItem("Tech_hero", JSON.stringify(Data));
    setIsSaved(true);
     setPrevData(true);
     setEdit(false)
     if (cancel){
        setCancel(false)
     }
    };
    const CancelData = ()=>{
        const PrevData=localStorage.getItem('Tech_hero');
       if (PrevData) {
            const parsedData = JSON.parse(PrevData);
            setSubtitle(parsedData.subtitle || "");
            setImage(parsedData.image || []);
            setFile([]);
            setIsSaved(true);
            setError("");

            
        } else {
            alert("No previous data found!");
        }
         if (cancel){
        setCancel(false)
     }
        setEdit(false)
        setPrevData(!!PrevData);
    }
    useEffect(() => {
        const saved = localStorage.getItem("Tech_hero");
        if (saved) {
        setPrevData(true);
        setIsSaved(true);
        }
    }, []);
    return(
        <>
       
            <Box className={classes.myHeroContainer}>
                <Box className={classes.deleteButtonBox}>
                     <EditButton error={ !prevData} onClick={()=>{ setCancel(true);
                        setEdit(true)
                    }}/>
                </Box>
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
                                    onChange={HandleFileChange}
                                    disabled={!Edit}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(Images.length>0 ) && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {Images.map((prev,index)=>
                                            <Box key={index} sx={{position:'relative',opacity: Edit ? 1 : 0.5,}} >
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
                                        <label htmlFor={`upload-${Section}-file-${accordianId}-${id}`}>
                                        <input
                                                accept="image/*"
                                                id={`upload-file-${Section}-${accordianId}-${id}`}
                                                type="file"
                                                multiple
                                                style={{ display: "none" }}
                                                onChange={HandleFileChange}
                                        />
                                            </label>
                                        </Box>
                                        <Box>
                                             {(Images.length>0 ) &&(
                                               
                                                <Typography   className={Edit ? classes.errorText : undefined}
                                                                sx={
                                                                    Edit
                                                                    ? {}
                                                                    : {
                                                                        color: 'grey',
                                                                        fontWeight: 400,
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        }
                                                                } >
                                                *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height) Image Must be 5 MB
                                                </Typography>
                                            )} 
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
                            disabled={!Edit}
                            helperText={TextFieldError.message}
                            FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox} >
                    <SaveButton error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
            </Box>
        </>
    )
}
export default HeroSection;