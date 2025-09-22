import {useUserEndwebStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, Button} from '@mui/material';
import { AddHighlights, AddTestimonials, DeleteButton, CancelButton, UpdateHeader, UploadButton, UploadButtonTestimonials} from './AboutUsButtons';
import { useState } from 'react';
import { HelperTextValidate } from './validations';
import SubHighlights from './SubHighlights';
import SubTestimonials from './subTestimonials';



interface TestimonialsProps {
  accordianId:string;
  id: string;
}

const Testimonials=({ accordianId, id }: TestimonialsProps)=>{
    const {classes} = useUserEndwebStyles();
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [sudHighlights, setSubHighlights] = useState<{ id:string}[]>([]);
    const [sudTestimonials, setSubTestimonials] = useState<{ id:string}[]>([]);
    const [Highlights, setHighlights] = useState<any>([]);
    const [Testimonials, setTestimonials] = useState<any>([]);

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const isTextInvalid = subtitle.length === 0 || subtitle.length < 3 || subtitle.length > 200 || content.length === 0 || content.length < 3 || content.length > 200;

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
    const handleDeleteAll = () => {
            setFile([]);
            setImage([]);
            setError("");
            setSubtitle('');
            setContent('');
    };

    const SaveData = ()=>{
        const Data={
            subtitle,
            content,
            image:Images
        }
        console.log(Data);
    localStorage.setItem("myData", JSON.stringify(Data));
    alert("Data saved!");
    };
    const handleAddSubHighlights = () => {
        const newId = `${Highlights.length+1}`; // unique id
        setSubHighlights((prev) => [...prev, { id: newId }]);
        setHighlights((prev:any) => [...prev, newId])
    }; 
    const handleDeleteSubHighlights = (subId: string) => {
        setSubHighlights((prev) => prev.filter((sub) => sub.id !== subId));
    }; 
    const handleAddSubTestimonial = () => {
        const newId = `${Testimonials.length+1}`; // unique id
        setSubTestimonials((prev) => [...prev, { id: newId }]);
        setTestimonials((prev:any) => [...prev, newId])
    }; 
    const handleDeleteSubTestimonial = (subId: string) => {
        setSubTestimonials((prev) => prev.filter((sub) => sub.id !== subId));
    }; 
    return(
        <>
            <Box className={classes.subSectionBox}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',gap:3}}>
                    <AddHighlights onClick={handleAddSubHighlights}/>
                    <AddTestimonials onClick={handleAddSubTestimonial}/>
                </Box>
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>
                        Highlight Section 1
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:3}}>
                        {/*<SaveButton error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>*/}
                        <DeleteButton />
                    </Box>
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
                                    id={`upload-file-${accordianId}-Highlights-${id}`}
                                    style={{display:'none'}}
                                    onChange={HandleFileChange}
                                    />
                            <UploadButtonTestimonials id={id} accordianId={accordianId} subSection='Highlights'/> 
                            {file.length>0 && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {Images.map((prev,index)=>
                                            <Box key={index} sx={{position:'relative'}} >
                                                <img 
                                                    src={prev}
                                                    alt={`preview ${index+1}`}
                                                    className={classes.TestmonialPic}
                                                />
                                                <Button className={classes.cancelImgIcon}
                                                        onClick={()=>{removeImage(index)}}
                                                                >
                                                    x
                                                </Button>
                                            </Box>
                                        )}
                                        <label htmlFor={`upload-file-${accordianId}-Highlights-${id}`}>
                                        <input
                                                accept="image/*"
                                                id={`upload-file-${accordianId}-Highlights-${id}`}
                                                type="file"
                                                multiple
                                                style={{ display: "none" }}
                                                onChange={HandleFileChange}
                                        />
                                            </label>
                                    </Box>
                                    <Box>
                                            <Typography className={classes.errorText}
                                                >
                                                *Please upload the sponsor logo in landscape format (Preferred size: 300px width x 100px height) Image Must be 5 MB
                                            </Typography>  
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
                                   onChange={(e)=>setSubtitle(e.target.value)}
                                   helperText={SubtitleField.message}
                                   FormHelperTextProps={{className:classes.helperText}}
                        />
                        <Typography className={classes.mytext}>
                            content
                        </Typography>
                        <TextField 
                            fullWidth
                            multiline
                            minRows={5}
                            value={content} 
                            className={classes.myTextFleid}
                            onChange={(e)=>setContent(e.target.value)}
                            helperText={TextFieldError.message}
                            FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                    <UpdateHeader error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>
                    <CancelButton onClick={handleDeleteAll}/>
                </Box>
                <Box className={classes.heroDivider}></Box>
                {sudHighlights.map((sub) => (
                    <SubHighlights key={sub.id} id={sub.id} accordianId={id} subSection='Highlights' onDelete={() => handleDeleteSubHighlights(sub.id)} />
                ))}
                <SubTestimonials id=' ' accordianId={id} subSection='Testimonials'/>
                {sudTestimonials.map((sub) => (
                    <SubHighlights key={sub.id} id={sub.id} accordianId={id} subSection='Testimonials' onDelete={() => handleDeleteSubTestimonial(sub.id)} />
                ))}
            </Box>
        </>
    )
}
export default Testimonials;
