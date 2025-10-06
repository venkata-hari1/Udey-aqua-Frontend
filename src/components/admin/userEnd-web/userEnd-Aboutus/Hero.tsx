import {useUserEndwebStyles} from './AboutusStyles';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
import { CancelButton, EditButton, SaveButton, UploadButton} from './AboutUsButtons';
import { useState, useEffect } from 'react';
import { HelperTextValidate } from './validations';



type HeroProps={
    id?:string;
    accordianId?:string;
    Section:string
}

 const Hero=({id,accordianId,Section}:HeroProps)=>{
    const {classes} =useUserEndwebStyles();
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [prevData, setPrevData] = useState<boolean>(false);

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
    };
    const SaveData = ()=>{
        const Data={
            subtitle,
            image:Images
        }
    localStorage.setItem("AUHero", JSON.stringify(Data));
    setPrevData(true)
    };
    const CancelData = ()=>{
        const PrevData=localStorage.getItem('AUHero');
        if (PrevData) {
            const parsedData = JSON.parse(PrevData);
            setSubtitle(parsedData.subtitle || "");
            setImage(parsedData.image || []);
            setFile([]);
            setError("");
        } else {
            alert("No previous data found!");
        }
    }
    useEffect(() => {
        const saved = localStorage.getItem("AUHero");
        if (saved) {
        setPrevData(true);
        }
    }, []);
    return(
        <>
            <Box className={classes.myHeroContainer}>
                <Box className={classes.deleteButtonBox}>
                    <EditButton/>
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
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section}/> 
                            {(file.length>0 ||prevData) && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {Images.map((prev,index)=>
                                            <Box key={index} sx={{position:'relative'}} >
                                                <img 
                                                    src={prev}
                                                    alt={`preview ${index+1}`}
                                                    className={classes.ImagePic}
                                                />
                                                <Button className={classes.cancelImgIcon}
                                                        onClick={()=>{removeImage(index)}}
                                                                >
                                                    x
                                                </Button>
                                            </Box>
                                        )}
                                        <label htmlFor={`upload-file-${Section}-${accordianId}-${id}`}>
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
                                                <Typography className={classes.errorText}>
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
                            onChange={(e)=>setSubtitle(e.target.value)}
                            helperText={TextFieldError.message}
                            FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox} >
                    <SaveButton error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>
                    {prevData &&(<CancelButton onClick={CancelData}/>)}
                </Box>
            </Box>
        </>
    )
}
export default Hero;