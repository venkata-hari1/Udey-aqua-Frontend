import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Stack, TextField, Typography,IconButton} from '@mui/material';
import { UploadButton, CancelButton, UpdateHeader,  UploadPDFButton} from '../userEnd-Aboutus/AboutUsButtons';
import {  useState,  } from 'react';
import { HelperTextValidate, PriceValidate, HandlePDFChange, HandleFileChange,newHandleFileChange,newHandlePDFChange } from '../../utils/Validations';
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from 'react-redux';
import type { Rootstate } from '../../../../redux/store';
import { SetEdit } from "../../../../redux/reducers/Nav";
interface Bannerprops {
  accordianId:string
  id: string;
  Section:string;
}

const Banner=({ accordianId, id,Section}: Bannerprops)=>{
    const {classes} = useAboutusStyles();
    const dispatch = useDispatch();
    const cancelEnable = useSelector((state:Rootstate)=>state.accordian.EditBanner);
    const [file,SetFile] = useState<File | null>(null);
    const [pdffile, Setpdffile] = useState<File |null>(null);
    const [pdferror,setPdfError]= useState<string>('');
    const [error,setError]= useState<string>('');
    const [Images,setImage] = useState<string[]>([]);
    const [subtitle,setSubtitle]=useState<string>('');
    const [content,setContent]=useState<string>('');
    const [prevData, setPrevData] = useState<{ subtitle: string;content: string;file:File | null;pdffile:File|null;pdfPrice: string;pdfContent: string;} | null>(null);
    const [pdfPrice, setPdfPrice] = useState<string>("");
    const [pdfContent, setPdfcontent] = useState<string>("");
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [, setIsPdfSaved] = useState<boolean>(false);
    const [pdf,setpdf] = useState('')
    const [cancel, setCancel] = useState<boolean>(cancelEnable.cancel);

    const TextFieldError=HelperTextValidate(content)
    const SubtitleField=HelperTextValidate(subtitle)
    const PriceField= PriceValidate(pdfPrice);
    const PriceContent = HelperTextValidate(pdfContent)
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200 ||  content.length < 3 || content.length > 200 ||pdfPrice.length < 3 || pdfPrice.length > 200 || /[^0-9]/.test(pdfPrice)||  pdfContent.length < 3 || pdfContent.length > 200
    
    var Enable= isSaved && !cancelEnable.edit

    const SaveData = () => {
    setPrevData({
        subtitle,
        file,
        content,
        pdffile,
        pdfPrice,
        pdfContent,
    });
    setIsSaved(true);
    setIsPdfSaved(true);
    //setEdit(false);
    //setCancel(false);
    dispatch(SetEdit({banner:true,edit:!cancelEnable.edit,cancel:false}))
    console.log(`subtitle:${subtitle}, Images:${Images}, content:${content}, price:${pdfPrice}, pdfcontent:${pdfContent}, pdf:${pdf}`);
};

const CancelData = () => {
    if (prevData) {
        setSubtitle(prevData.subtitle);
        SetFile(prevData.file);
        setContent(prevData.content);
        Setpdffile(prevData.pdffile);
        setPdfPrice(prevData.pdfPrice);
        setPdfcontent(prevData.pdfContent);
        setIsSaved(true);
        setIsPdfSaved(true);
    } else {
        setSubtitle('');
        SetFile(null);
        setContent('');
        Setpdffile(null);
        setPdfPrice('');
        setPdfcontent('');
        setIsSaved(false);
        setIsPdfSaved(false);
    }
    //setEdit(false);
    //setCancel(false);
    dispatch(SetEdit({cancel:false,edit:false}))
};
    const removeImage=()=>{
            SetFile(null)
            setError('');
            setIsSaved(false);
    };
    const removePdf=()=>{
            Setpdffile(null)
            setPdfError('');
            setIsPdfSaved(false);
    };
    
    

     
    return(
        <>
 
            <Box className={classes.subSectionBox}>
                <Box className={classes.heroDivider}></Box>
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>
                        Banner
                    </Typography>
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
                                    onChange={(e) =>newHandleFileChange(e, SetFile, setError, setIsSaved)}
                                    disabled={!cancelEnable.edit}
                                    />
                            <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!cancelEnable.edit}/> 
                            {(file)  && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        
                                            <Box  sx={{position:'relative',opacity: cancelEnable.cancel ? 1 : 0.5,}} >
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
                                   disabled={!cancelEnable.edit}
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
                            disabled={!cancelEnable.edit}
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
                                onChange={(e) =>newHandlePDFChange(e, Setpdffile, setPdfError, setIsPdfSaved,setpdf)}
                            />
                            <UploadPDFButton id={id} accordianId={accordianId} Section={Section} disable={!cancelEnable.edit}/> 
                            {(pdffile)  && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        <Box  sx={{position:'relative',opacity: cancelEnable.edit ? 1 : 0.5,}} >
                                            <Box sx={{
                                                overflow: "hidden",   
                                                position: "relative",
                                            }}>
                                                <embed
                                                    src={pdf} 
                                                    type="application/pdf"
                                                    className={classes.ImagePic} 
                                                    style={{
                                                        width: "100%",
                                                         height: "100%",
                                                        display: "block",
                                                    }} 
                                                />
                                            </Box>
                                            <IconButton className={classes.cancelImgIcon} disabled={!Edit} onClick={()=>{removePdf()}}>
                                                <CloseIcon sx={{ color: "white", fontSize: 18, stroke:'white',strokeWidth:2 }}/>
                                            </IconButton>
                                        </Box>
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
                                   disabled={!cancelEnable.edit}
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
                            disabled={!cancelEnable.edit}
                            FormHelperTextProps={{className: (pdfContent.length >= 3 && pdfContent.length < 200) ? classes.greyText : classes.helperText}}/>
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                    <UpdateHeader error={isSaved || !file|| isTextInvalid || !pdffile} 
                      onClick={SaveData}
                    />
                    {cancelEnable.cancel &&(<CancelButton onClick={CancelData}/>)}
                    
                </Box>
            </Box>
        </>
    )
}
export default Banner;
