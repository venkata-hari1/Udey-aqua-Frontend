import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box,  TextField, Typography, Dialog, DialogContent, DialogActions, Button, Stack} from '@mui/material';
import {  EditButton,  UploadButton, SaveButton, CancelButton, DeleteButton} from '../userEnd-Aboutus/AboutUsButtons';
import { useState, useEffect } from 'react';
import {TitleValidate} from '../../utils/Validations';



type AquacultureTypeProps={
    id?:string;
    accordianId?:string;
    Section:string;
    onDelete?:()=>void
}
const SubAquacultureType=({id,accordianId,onDelete, Section}:AquacultureTypeProps)=>{
    const {classes} = useAboutusStyles();
    
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [title,settitle]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<boolean>(false);

    const TitleError=TitleValidate(title);
    const isTextInvalid = title.length === 0 || title.length < 3 || title.length > 200;

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
        const Data={
            title:title,
            image:Images
        }
    localStorage.setItem(`${Section}_${id}`, JSON.stringify(Data));
    setPrevData(true)
    };
    const CancelData = ()=>{
        const PrevData=localStorage.getItem(`${Section}_${id}`);
        if (PrevData) {
            const parsedData = JSON.parse(PrevData);
            settitle(parsedData.title || "");
            setImage(parsedData.image || []);
            setFile([]);
            setError("");
        } else {
            alert("No previous data found!");
        }
    }
    useEffect(() => {
        const saved = localStorage.getItem(`${Section}_${id}`);
        if (saved) {
        setPrevData(true);
        }
    }, []);
    
    return(
        <>
            <Box>
                <Box sx={{display:'flex',justifyContent:'flex-end',gap:'10px'}}>
                    <EditButton/>
                    {id != 'Image 1' && <DeleteButton onClick={handleDeleteClick}/>}
                </Box>
                <Box sx={{position:'relative', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Box className={classes.myuploadandheadingbox} sx={{minHeight:'200px'}}>
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
                                    <Box className={classes.ImagesBox} sx={{maxWidth:'200px'}}>
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
                </Box>
                    <Box  sx={{
                                position: 'absolute',
                                top: '50px',
                                right: '0px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 5,
                            }}
>
                        <Typography>Title</Typography>
                        <TextField value={title} onChange={(e)=>settitle(e.target.value)}  className={classes.titleandpriceTextfield} helperText={TitleError.message} FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>

            </Box>
                            <Box className={classes.SeveandCancelBox} >
                    <SaveButton error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>
                    {prevData &&(<CancelButton onClick={CancelData}/>)}
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

export default SubAquacultureType; 