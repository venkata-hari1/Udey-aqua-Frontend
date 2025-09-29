import {useUserEndwebStyles} from './AboutusStyles';
import { Box, TextField, Typography, Stack, Button} from '@mui/material';
import { DeleteButton, AddSection, UploadButton, SaveButton, AddSubpage } from './AboutUsButtons';
import { useState } from "react";
import { HelperTextValidate, NameandRoleValidate } from './validations';
import TitleSubpage from './TitleSubpage';

type TitleProps={
    id:string;
    accordianId:string
}

const TitlePage=({id,accordianId}:TitleProps)=>{
    const {classes}=useUserEndwebStyles();
    const [Title, setTitle]=useState<string>('');
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [counter, setCounter] = useState<any>([]);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);

    const TextFieldError=HelperTextValidate(subtitle)
    const TitleField=NameandRoleValidate(Title)
    const isTextInvalid = subtitle.length === 0 || subtitle.length < 3 || subtitle.length > 200;
    const isTitleInvalid = Title.length === 0 || Title.length < 3 || Title.length > 200;
 

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

    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter.length+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter((prev:any) => [...prev, newId])
    };
    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
    }; 
    const SaveData = ()=>{
        const Data={
            subtitle,
            image:Images
        }
        console.log(Data);
    localStorage.setItem("myData", JSON.stringify(Data));
    alert("Data saved!");
    };
    return(
        <>
            <Box className={classes.SubPageContainer}>
                <Box sx={{display:'flex',flexDirection:'row',gap:20, alignItems:'baseline'}}>
                    <Typography>Title</Typography>
                    <Box sx={{display:'flex',gap:2,alignItems:'flex-start'}}>
                        <TextField value={Title}
                                        onChange={(e)=>{setTitle(e.target.value)}}
                                        helperText={TitleField.message || " "}
                                        FormHelperTextProps={{className:classes.helperText}}
                                        sx={{
                                        width:'350px',
                                        borderRadius:'10px',
                                        backgroundColor: 'transparent',
                                        '& .MuiOutlinedInput-root': {
                                            height:'40px',
                                            '& fieldset': {
                                                borderColor:'#0A4FA4', 
                                            }
                                        }
                                    }}/>
                        <AddSubpage error={isTitleInvalid}/>
                    </Box>
                </Box>
                <Box className={classes.heroDivider}/>
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>Header Section</Typography>
                    <Box className={classes.SeveandCancelBox}>
                        <SaveButton error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>
                        <DeleteButton/>
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
                                    id={`upload-file-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={HandleFileChange}
                                    />
                            <UploadButton id={id} accordianId={accordianId}/> 
                            {file.length>0 && (
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
                                        <label htmlFor={`upload-file-${accordianId}-${id}`}>
                                        <input
                                                accept="image/*"
                                                id={`upload-file-${accordianId}-${id}`}
                                                type="file"
                                                multiple
                                                style={{ display: "none" }}
                                                onChange={HandleFileChange}
                                        />
                                        <Button className={classes.AddMoreButton}
                                            variant="outlined"
                                            component="span"
                                            >
                                                +
                                                </Button>
                                            </label>
                                        </Box>
                                        <Box>
                                            <Typography className={classes.errorText}>
                                                *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height) Image Must be 5 MB
                                            </Typography>  
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
                            onChange={(e)=>setSubtitle(e.target.value)}
                            helperText={TextFieldError.message}
                            FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.heroDivider}/>
                <Box sx={{marginTop:'20px'}}>
                    <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                        <AddSection onClick={handleAddSubpage}/>
                    </Box>
                    <TitleSubpage id='Sub Section' accordianId='1'/>
                </Box>
                {subpages.map((sub) => (
                    <TitleSubpage key={sub.id} id={sub.id} accordianId={id} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}

            </Box>
        </>
    )
}
export default TitlePage;