import {useAboutusStyles} from './AboutusStyles';
import { Box, TextField, Typography, Stack, Button} from '@mui/material';
import { AddSection, UploadButton, SaveButton,CancelButton, EditButton } from './AboutUsButtons';
import { useState, useEffect } from "react";
import { HandleFileChange, HelperTextValidate, NameandRoleValidate } from '../../utils/Validations';
import Subsection from './Subsection';
import Hero from './Hero';

type TitleProps={
    id:string ;
    accordianId:string ,
    Section:string;
    setTitlehandle:(value:string)=>void;
}

const TitlePage=({id,accordianId, Section, setTitlehandle}:TitleProps)=>{
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
            <Box className={classes.WhoWeAreContainer}>
                <Box sx={{display:'flex',flexDirection:'row',gap:20, alignItems:'baseline'}}>
                    <Typography>Title</Typography>
                    <Box sx={{display:'flex',gap:2,alignItems:'flex-start'}}>
                        <TextField value={Title}
                                        onChange={(e)=>{setTitle(e.target.value);
                                                        setTitlehandle(e.target.value)
                                        }}
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
                <Hero id=''/>
                <Box className={classes.heroDivider}/>
                <Box sx={{marginTop:'20px'}}>
                    <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                        <AddSection label='Add Section'onClick={handleAddSubpage}/>
                    </Box>
                    <Subsection id='Sub Section-1' accordianId='custom' Section={Section} title={Section}/>
                </Box>
                {subpages.map((sub) => (
                    <Subsection key={sub.id} id={sub.id} accordianId={accordianId} Section={Section} title={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}

            </Box>
        </>
    )
}
export default TitlePage;
