import {useAboutusStyles} from './AboutusStyles';
import { Box, TextField, Typography, Stack, Button} from '@mui/material';
import { AddSection, UploadButton, SaveButton,CancelButton, EditButton } from './AboutUsButtons';
import { useState, useEffect } from "react";
import { HandleFileChange, HelperTextValidate, NameandRoleValidate } from '../../utils/Validations';
import Subsection from './Subsection';

type TitleProps={
    id:string;
    accordianId:string,
    Section:string;
}

const TitlePage=({id,accordianId, Section}:TitleProps)=>{
    const {classes}=useAboutusStyles();
    const [Title, setTitle]=useState<string>('');
    const [,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [counter, setCounter] = useState<any>([1]);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [prevData, setPrevData] = useState<boolean>(false);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false)

    const TextFieldError=HelperTextValidate(subtitle)
    const TitleField=NameandRoleValidate(Title)
    const isTextInvalid =  subtitle.length < 3 || subtitle.length > 200;
  
    const removeImage=(IndexToRemove:number)=>{
        setFile(prev=>prev.filter((_,index)=> index !== IndexToRemove));
        setImage(prev=>prev.filter((_,index)=>index !== IndexToRemove));
        setError('');
        setIsSaved(false);
    };

    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter.length+1}`; 
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
        localStorage.setItem(`${Section}_Custom_Header`, JSON.stringify(Data));
         setIsSaved(true);
         setPrevData(true)
     setEdit(false)
     if (cancel){
        setCancel(false)
     }
        };
        const CancelData = ()=>{
            const PrevData=localStorage.getItem(`${Section}_Custom_Header`);
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
        setPrevData(!!prevData)
        }
        useEffect(() => {
            const saved = localStorage.getItem(`${Section}_Custom_Header`);
            if (saved) {
            setPrevData(true);
            setIsSaved(true);
            }
        }, []);
    return(
        <>
            <Box className={classes.SubPageContainer}>
                <Box sx={{display:'flex',flexDirection:'row',gap:20, alignItems:'baseline'}}>
                    <Typography>Title</Typography>
                    <Box sx={{display:'flex',gap:2,alignItems:'flex-start'}}>
                        <TextField value={Title}
                                        onChange={(e)=>{setTitle(e.target.value)}}
                                        helperText={TitleField.message || " "}
                                        FormHelperTextProps={{
                                className: (Title.length >= 3 && Title.length < 200) ? classes.greyText : classes.helperText }}
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
                    </Box>
                </Box>
                <Box className={classes.heroDivider}/>
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>Header Section</Typography>
                    <Box className={classes.SeveandCancelBox}>
                        <EditButton error={!prevData} onClick={()=> {setCancel(true);
                            setEdit(true)
                        }}/>
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
                            {(Images.length>0 || prevData) && (
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
                             onChange={(e)=>{setSubtitle(e.target.value);
                                            setIsSaved(false)}}
                            helperText={TextFieldError.message}
                            disabled={!Edit}
                            FormHelperTextProps={{
                                className: (subtitle.length >= 3 && subtitle.length < 200) ? classes.greyText : classes.helperText
                            }}/>
                    </Box>
                </Box>
                 <Box className={classes.SeveandCancelBox} >
                                    <SaveButton error={isSaved || Images.length === 0 || isTextInvalid}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                                </Box>
                <Box className={classes.heroDivider}/>
                <Box sx={{marginTop:'20px'}}>
                    <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                        <AddSection onClick={handleAddSubpage}/>
                    </Box>
                    <Subsection id='Sub Section-1' accordianId='custom' Section={Section}/>
                </Box>
                {subpages.map((sub) => (
                    <Subsection key={sub.id} id={sub.id} accordianId={accordianId} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}

            </Box>
        </>
    )
}
export default TitlePage;
