import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Stack, TextField, Typography, Button, Dialog, DialogContent, DialogActions} from '@mui/material';
import { DeleteButton, UploadButton, CancelButton, EditButton, UpdateHeader,  UploadPDFButton} from '../userEnd-Aboutus/AboutUsButtons';
import { useState,  } from 'react';
import { HelperTextValidate, PriceValidate, HandlePDFChange, HandleFileChange } from '../../utils/Validations';

interface Bannerprops {
  accordianId:string
  id: string;
  Section:string;
  onDelete?: () => void; // callback to delete this subpage
}

const Banner=({ accordianId, id,Section, onDelete }: Bannerprops)=>{
    const {classes} = useAboutusStyles();
    const [,setFile]= useState<File[]>([]);
    const [pdffile,setPdfFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [pdf, setPdf] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [pdferror,setPdfError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<{ subtitle: string;Images: string[];content: string;pdf: string[];pdfPrice: string;pdfContent: string;} | null>(null);
    const [pdfPrice, setPdfPrice] = useState<string>("");
    const [pdfContent, setPdfcontent] = useState<string>("");
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [Ispdf, setIsPdfSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const PriceField= PriceValidate(pdfPrice);
    const PriceContent = HelperTextValidate(pdfContent)
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200 ||  content.length < 3 || content.length > 200 ||pdfPrice.length < 3 || pdfPrice.length > 200 || /[^0-9]/.test(pdfPrice)||  pdfContent.length < 3 || pdfContent.length > 200
    
    const SaveData = () => {
    setPrevData({
        subtitle,
        Images,
        content,
        pdf,
        //pdfFiles: pdffile,
        pdfPrice,
        pdfContent,
    });
    setIsSaved(true);
    setIsPdfSaved(true);
    setEdit(false);
    setCancel(false);
    console.log(`subtitle:${subtitle}, Images:${Images}, content:${content}, price:${pdfPrice}, pdfcontent:${pdfContent}, pdf:${pdf}`);
};

const CancelData = () => {
    if (prevData) {
        setSubtitle(prevData.subtitle);
        setImage(prevData.Images);
        setContent(prevData.content);
        setPdf(prevData.pdf);
        //setPdfFile(prevData.pdfFiles);
        setPdfPrice(prevData.pdfPrice);
        setPdfcontent(prevData.pdfContent);
        setIsSaved(true);
        setIsPdfSaved(true);
    } else {
        setSubtitle('');
        setImage([]);
        setContent('');
        setPdf([]);
        setPdfFile([]);
        setPdfPrice('');
        setPdfcontent('');
        setIsSaved(false);
        setIsPdfSaved(false);
    }
    setEdit(false);
    setCancel(false);
};
    const removeImage=(IndexToRemove:number)=>{
            setFile(prev=>prev.filter((_,index)=> index !== IndexToRemove));
            setImage(prev=>prev.filter((_,index)=>index !== IndexToRemove));
            setError('');
            setIsSaved(false);
    };
    const removePdf=(IndexToRemove:number)=>{
            setPdfFile(prev=>prev.filter((_,index)=> index !== IndexToRemove));
            setPdf(prev=>prev.filter((_,index)=>index !== IndexToRemove));
            setPdfError('');
            setIsPdfSaved(false);
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
    

     
    return(
        <>
 
            <Box className={classes.subSectionBox}>
                {id != 'Sub Section-1'&& (<Box className={classes.heroDivider}></Box>)}
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
                                    id={`upload-file-${Section}-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={(e) =>HandleFileChange(e, setFile, setError, setIsSaved, setImage)}
                                    disabled={!Edit}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(Images.length>0|| prevData)  && (
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
                                   FormHelperTextProps={{className: (subtitle.length >= 3 && subtitle.length < 200) ? classes.greyText : classes.helperText}}
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
                            FormHelperTextProps={{className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText}}/>
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
                                id={`upload-pdf-${Section}-${accordianId}-${id}`}
                                style={{display:'none'}}
                                onChange={(e) =>HandlePDFChange(e, setPdfFile, setPdfError, setIsPdfSaved, setPdf)}
                                                                />
                            <UploadPDFButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                            {(pdf.length>0)  && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {pdf.map((_,index)=>
                                            <Box key={index} sx={{position:'relative',opacity: Edit ? 1 : 0.5,}} >
                                                 <Box sx={{
                                                        overflow: "hidden",   
                                                        position: "relative",
                                                    }}
>
                                                    <embed
                                                        src={URL.createObjectURL(pdffile[index])} // string URL from createObjectURL
                                                        type="application/pdf"
                                                        className={classes.ImagePic} 
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            display: "block",
                                                            }} 
                                                    />
                                                </Box>
                                                <Button className={classes.cancelImgIcon}
                                                        onClick={()=>{removePdf(index)}}
                                                        disabled={!Edit}
                                                                >
                                                    x
                                                </Button>
                                            </Box>
                                        )}
                                       
                                    </Box>
                                </Box>
                            )}
                            <Box>
                                {pdferror && (
                                        <Typography className={classes.errorText}>
                                            {pdferror}
                                        </Typography>
                                    )       
                                }
                            </Box>
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
                                   disabled={!Edit}
                                   FormHelperTextProps={{className: (pdfPrice.length >= 3 && pdfPrice.length < 12 &&  /[^0-9]+$/.test(pdfPrice)) ? classes.greyText : classes.helperText}}
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
                            disabled={!Edit}
                            FormHelperTextProps={{className: (pdfContent.length >= 3 && pdfContent.length < 200) ? classes.greyText : classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                    <UpdateHeader error={isSaved || Ispdf || Images.length === 0 || isTextInvalid}  onClick={SaveData}
                    />
                    {cancel &&(<CancelButton onClick={CancelData}
                    />)}
                    
                </Box>
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
