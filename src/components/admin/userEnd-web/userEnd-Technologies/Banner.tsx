import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Stack, TextField, Typography, Button, Dialog, DialogContent, DialogActions} from '@mui/material';
import { DeleteButton, UploadButton, CancelButton, EditButton, UpdateHeader} from '../userEnd-Aboutus/AboutUsButtons';
import { useState, useEffect } from 'react';
import { HelperTextValidate, PriceValidate } from '../userEnd-Aboutus/validations';



interface Bannerprops {
  accordianId:string
  id: string;
  title:string;
  onDelete?: () => void; // callback to delete this subpage
}

const Banner=({ accordianId, id,title, onDelete }: Bannerprops)=>{
    const {classes} = useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [pdf, setPdf] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<boolean>(false); 
    const [pdfPrice, setPdfPrice] = useState<string>("");
    const [pdfContent, setPdfcontent] = useState<string>("");
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const PriceField= PriceValidate(pdfPrice);
    const PriceContent = HelperTextValidate(pdfContent)
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
                    if (file.type.startsWith("image/")) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                            const imgs = new Image();
                            imgs.onload = () => {
                                if (imgs.width <= 300 || imgs.height <= 100) {
                                setError("File must be in landscape format (min 300x100)");
                                return;
                                }
                                setFile((prev) => [...prev, file]);
                                setImage((prev) => [...prev, e.target?.result as string]);
                            };
                            imgs.src = e.target?.result as string;
                            };
                            reader.readAsDataURL(file);
                    }
                    else if (file.type === 'application/pdf'){
                        const pdfUrl = URL.createObjectURL(file); 
                        setPdf((prev) => [...prev, pdfUrl]);
                        setFile((prev) => [...prev, file]);
                        return;
                    }    
                    else {
                        setError("Unsupported file type. Only images and PDFs are allowed.");
                    }
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
    const SaveData = (title:string,id:string)=>{
            const Data={
                title:subtitle,
                image:Images,
                content:content
            }
            console.log(Data);
        localStorage.setItem(`${title}_${id}`, JSON.stringify(Data));
        setIsSaved(true);
     setPrevData(true);
     setEdit(false)
     if (cancel){
        setCancel(false)
     }
        };
        const CancelData = (title:string,id:string)=>{
            const PrevData=localStorage.getItem(`${title}_${id}`);
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
            const saved = localStorage.getItem(`${title}_${id}`);
            if (saved) {
            setPrevData(true);
            setIsSaved(true);
            }
        }, []);
     
    return(
        <>
         {file&&<span></span>}
            <Box className={classes.subSectionBox}>
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>
                        {id}
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:3}}>
                        <EditButton error={ !prevData} onClick={()=>{ setCancel(true);
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
                                    id={`upload-file-${title}-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={HandleFileChange}
                                    disabled={!Edit}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={title} disable={!Edit}/> 
                            {(Images.length>0)  && (
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
                    <Box className={classes.TextFiledBox}>
                        <Typography  className={classes.mytext}>
                            subtitle
                        </Typography>
                        <TextField value={subtitle} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={SubtitleField.message}
                                   disabled={!Edit}
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
                            onChange={(e)=>{setContent(e.target.value);
                                            setIsSaved(false)}}
                            helperText={TextFieldError.message}
                            disabled={!Edit}
                            FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>
            </Box>
            {/* PDF Area */}
            <Box className={classes.subSectionBox} sx={{marginTop:'40px'}}>
                <Box className={classes.myuploadandheadingbox}>
                    <Stack className={classes.myUploadStack}>
                        <Typography className={classes.HeaderText}>
                            PDF Section
                        </Typography>
                        <Typography className={classes.mytext}>
                            Upload Pdf
                        </Typography>
                        <Box className={classes.myImageUploadBox}>
                            <input type='file'
                                    multiple
                                    accept="application/pdf" 
                                    id={`upload-file-${title}-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={HandleFileChange}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={title}/> 
                            {(pdf.length>0)  && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {pdf.map((prev,index)=>
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
                        </Box> 
                </Stack>
                    <Box className={classes.TextFiledBox}>
                        <Typography  className={classes.mytext}>
                            price
                        </Typography>
                        <TextField value={pdfPrice} 
                                   className={classes.myTextFleid}
                                   onChange={(e)=>{setPdfPrice(e.target.value);
                                            setIsSaved(false)}}
                                   helperText={PriceField.message}
                                   FormHelperTextProps={{className:classes.helperText}}
                        />
                        <Typography className={classes.mytext}>
                            content
                        </Typography>
                        <TextField 
                            fullWidth
                            multiline
                            minRows={5}
                            value={pdfContent} 
                            className={classes.myTextFleid}
                            onChange={(e)=>{setPdfcontent(e.target.value);
                                            setIsSaved(false)}}
                            helperText={PriceContent.message}
                            FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                    <UpdateHeader error={isSaved || Images.length === 0 || isTextInvalid}  onClick={()=>SaveData(title,id)}/>
                                           {cancel &&(<CancelButton onClick={()=>CancelData(title,id)}/>)}
                    
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
export default Banner;
