import {useUserEndwebStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, Button, Dialog, DialogContent, DialogActions} from '@mui/material';
import { CancelButton,  EditButton, SaveButton, UploadButton, DeleteButton} from './AboutUsButtons';
import { useState, useEffect } from 'react';
import { HelperTextValidate } from './validations';


interface SubsectionProps {
  accordianId:string
  id: string;
  Section:string;
  onDelete?: () => void; // callback to delete this subpage
}

const TitleSubpage=({ accordianId, id, onDelete, Section }: SubsectionProps)=>{
    const {classes} = useUserEndwebStyles();
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false); 
    const [prevData, setPrevData] = useState<boolean>(false);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const ContentFiled=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    file
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
    const SaveData = (id:string)=>{
            const Data={
                title:subtitle,
                image:Images,
                content:content
            }
            console.log(Data);
        localStorage.setItem(`${Section}_Custom_Subsection_${id}`, JSON.stringify(Data));
         setIsSaved(true);
         setPrevData(true)
     setEdit(false)
     if (cancel){
        setCancel(false)
     }
        };
        const CancelData = (id:string)=>{
            const PrevData=localStorage.getItem(`${Section}_Custom_Subsection_${id}`);
            if (PrevData) {
                const parsedData = JSON.parse(PrevData);
                setSubtitle(parsedData.title || "");
                setImage(parsedData.image || []);
                setContent(parsedData.content)
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
        setPrevData(!!prevData)
        }
        useEffect(() => {
            const saved = localStorage.getItem(`${Section}_Custom_Subsection_${id}`);
            if (saved) {
            setPrevData(true);
            setIsSaved(true);
            }
        }, []);
    return(
        <>
            <Box className={classes.subSectionBox}>
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>
                        {id}
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:3}}>
                        <EditButton error={!prevData} onClick={()=> {setCancel(true);
                            setEdit(true)
                        }}/>
                        {id != 'Sub Section-1'&& <DeleteButton onClick={handleDeleteClick}/>}
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
                                    id={`upload-file-${Section}-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={HandleFileChange}
                                    disabled={!Edit}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(Images.length>0 || prevData)&& (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {Images.map((prev,index)=>
                                            <Box key={index} sx={{position:'relative',opacity: Edit ? 1 : 0.5,}}   >
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
                                {error && (
                                        <Typography className={classes.errorText}>
                                            {error}
                                        </Typography>
                                    )       
                                }
                            </Box>
                        </Box>
                    </Stack>
                    <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
                            <Typography sx={{display:'inline-block',width:'100px',whiteSpace:'normal'}}>
                                Subtitle
                            </Typography>
                            <TextField value={subtitle} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={SubtitleField.message}
                                   disabled={!Edit}
                                   FormHelperTextProps={{className:classes.helperText}}
                        />    
                            <Typography sx={{display:'inline-block',width:'100px',whiteSpace:'normal'}}>
                                    Content
                                </Typography>                 
                            <TextField 
                                fullWidth
                                multiline
                                minRows={5}
                                value={content} 
                                className={classes.myTextFleid}
                                onChange={(e)=>{setContent(e.target.value);
                                            setIsSaved(false)}}
                                disabled={!Edit}
                                helperText={ContentFiled.message}
                                FormHelperTextProps={{className:classes.helperText}}/>

                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                     <SaveButton error={isSaved || Images.length === 0 || isTextInvalid}  onClick={()=>SaveData(id)}/>
                    {cancel &&(<CancelButton onClick={()=>CancelData(id)}/>)}
                </Box>
                <Box className={classes.heroDivider}></Box>
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
export default TitleSubpage;
