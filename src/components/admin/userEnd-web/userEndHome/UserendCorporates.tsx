import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, Typography, Stack, IconButton} from '@mui/material';
import {  EditButton,  UploadButton, SaveButton, CancelButton} from '../userEnd-Aboutus/AboutUsButtons';
import { useState } from 'react';
import {HandleFileChange} from '../../utils/Validations';
import CloseIcon from "@mui/icons-material/Close";

type AquacultureTypeProps={
    id?:string;
    accordianId?:string;
    Section:string;
    onDelete?:()=>void
}
const UserendCorporates=({id,accordianId, Section}:AquacultureTypeProps)=>{
    const {classes} = useAboutusStyles();   
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [prevData, setPrevData] = useState<{  Images:string[]; } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved,setIssaved] = useState<boolean>(false)
    const [cancel, setCancel] = useState<boolean>(false)

    const SaveData = ()=>{
        setPrevData({
            Images
        });
        setIssaved(true);

        setEdit(false);
        setCancel(false)
        console.log(` Images:${file}`);
    };

    const CancelData = ()=>{
        if (prevData) {
        setImage(prevData.Images || []);
        setFile([]);
        setIssaved(true);
    } else {
        setFile([]);
        setIssaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    const removeImage=()=>{
            setFile([])
            setError('');
            setIssaved(false);
    };

    return(
        <>
            <Box>
                <Box sx={{display:'flex',justifyContent:'flex-end',gap:'10px'}}>
                    <EditButton error={ !prevData} onClick={()=>{ setCancel(true);
                        setEdit(true)
                    }}/>
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
                                        disabled={!Edit}
                                        onChange={(e)=>HandleFileChange(e,setFile,setError,setIssaved,setImage)}
                                        />
                                <UploadButton id={id} accordianId={accordianId} Section={Section} disable={!Edit}/> 
                                {(file) && (
                                    <Box>
                                        <Box sx={{display:'flex',flexDirection:'row',gap:2}}>
                                                {Images.map((prev,index)=>
                                                <Box key={index} sx={{position:'relative',opacity: Edit ? 1 : 0.5, pr: 2,borderRight: index !== Images.length - 1 ? "2px solid #0A4FA4" : "none"}} >
                                                    <img 
                                                        src={prev}
                                                        alt={`preview ${index+1}`}
                                                        className={classes.ImagePic}
                                                    />
                                                    <IconButton sx={{ backgroundColor: 'red',borderRadius: '50%',width: '25px',height: '25px',padding: 0,
                                                                      position: 'absolute',
                                                                      top: '-8px',
                                                                      right: '5px',
                                                                      cursor: 'pointer',
                                                                      "&:hover": {
                                                                        backgroundColor:'red', 
                                                                      },}}  
                                                                  disabled={!Edit} onClick={()=>{removeImage()}}
                                                    >
                                                        <CloseIcon sx={{ color: "white", fontSize: 18, stroke:'white',strokeWidth:2 }}/>
                                                    </IconButton>
                                                </Box>

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
                </Box>
            </Box>
            <Box className={classes.SeveandCancelBox} >
                <SaveButton error={isSaved || !file}  onClick={SaveData}/>
                {cancel &&(<CancelButton onClick={CancelData}/>)}
            </Box>                       
        </>
    )
}
export default UserendCorporates; 