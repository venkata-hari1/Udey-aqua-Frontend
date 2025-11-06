import {useAboutusStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, IconButton} from '@mui/material';
import { DeleteButton, SaveButton, UploadButton, EditButton, CancelButton} from './AboutUsButtons';
import { useState } from 'react';
import { HelperTextValidate, NameandRoleValidate, YearValidate, newHandleFileChange } from '../../utils/Validations';
import CloseIcon from "@mui/icons-material/Close";
import UserendDeletepopup from "../../utils/UserendDeletepop";

type MilestoneSubpageProps={
    id:string;
    accordianId:string;
    Section:string
    onDelete?: () => void;
}
const MilestoneSubsection=({id,accordianId,Section,onDelete}:MilestoneSubpageProps)=>{
    const {classes} = useAboutusStyles();
    const [file,SetFile] = useState<File | null>(null);
    const [error,setError]= useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [Title, setTitle] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [prevData, setPrevData] = useState<{ Title: string; file: File |null; content:string ; year:string } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const TitleFlied = NameandRoleValidate(Title);
    const YearFlied = YearValidate(year);
    const contentFlied = HelperTextValidate(content);
    const isTextInvalid =  Title.length < 3 || Title.length > 80 ||  year.length < 2 || year.length > 4 || content.length < 3 || content.length > 200;

    const removeImage=()=>{   
        SetFile(null)
        setError('');
        setIsSaved(false);
    };
    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (onDelete) onDelete(); 
    };
    const SaveData = ()=>{
        setPrevData({
            Title,
            file,
            year,
            content
        });
        setIsSaved(true);
        setEdit(false);
        console.log(`subtitle:${Title}, Images:${file}, content: ${content}`);
    };
    const CancelData = ()=>{
        if (prevData) {
        setTitle(prevData.Title);
        setContent(prevData.content);
        SetFile(prevData.file);
        setYear(prevData.year)
        setIsSaved(true);
        } else {
            setTitle('');
            setContent('');
            setYear('');
            setContent('');
            SetFile(null);
            setIsSaved(false);
        }
        setEdit(false); 
        setCancel(false)
    }
    return(
        <>
      <Box className={classes.whoWeareHeaderbox}>
        <Typography className={classes.HeaderText}>{id}</Typography>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <EditButton error={! prevData} onClick={()=> {setCancel(true);
            setEdit(true)
          }}/>
          {id != 'Milestone-1'&& <DeleteButton onClick={()=>setOpenDialog(true)}/>}
        </Box>
      </Box>
      <Box className={classes.myuploadandheadingbox}>
        <Stack className={classes.OurDirectorsUploadStack}>
                    <Typography className={classes.mytext}>
                        image
                    </Typography>
                    <Box className={classes.myImageUploadBox}>
                        <input type='file'
                                accept="image/*" 
                                id={`upload-file-${Section}-${accordianId}-${id}`}
                                style={{display:'none'}}
                                onChange={(e) =>newHandleFileChange(e, SetFile, setError, setIsSaved)}
                                disabled={!Edit}
                                />
                        <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                        {(file) && (
                            <Box className={classes.ImagesBox}>
                                <Box className={classes.ImagespicBox}>
                                    
                                        <Box  sx={{position:'relative',opacity: Edit ? 1 : 0.5,}}   >
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
                        <Typography className={classes.mytext}>
                            Year
                        </Typography>
                        <TextField className={classes.myTextFleid}
                                    value={year}
                                    onChange={(e)=>{setYear(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={YearFlied.message}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: (year.length >= 3 && year.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                        <Typography className={classes.mytext}>
                            title
                        </Typography>
                        <TextField className={classes.myTextFleid}
                                    value={Title}
                                    onChange={(e)=>{setTitle(e.target.value);
                                            setIsSaved(false)}}
                                    helperText={TitleFlied.message}
                                    disabled={!Edit}
                                    FormHelperTextProps={{
                                className: (Title.length >= 3 && Title.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                        <Typography className={classes.mytext}>
                            content
                        </Typography>
                        <TextField 
                            fullWidth
                            multiline
                            minRows={5}
                            className={classes.myTextFleid}
                            value={content}
                            onChange={(e)=>{setContent(e.target.value);
                                            setIsSaved(false)}}
                            helperText={contentFlied.message}
                            disabled={!Edit}
                            FormHelperTextProps={{
                                className: (content.length >= 3 && content.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                </Box>
            <UserendDeletepopup open={openDialog} message={`Are you sure you want to delete this ${id}?`} onClose={()=> setOpenDialog(false)} onDelete={handleConfirmDelete}/>    
            </Box>    
            <Box className={classes.SeveandCancelBox}>
                <SaveButton error={ isSaved|| !file || isTextInvalid} onClick={()=>SaveData()}/>
                {cancel&&(<CancelButton onClick={()=>CancelData()}/>)}
            </Box>
        </>
    )
}
export default MilestoneSubsection;