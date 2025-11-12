import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, TextField, Typography,} from '@mui/material';
import { SaveButton,  CancelButton, EditButton, AddSection} from '../userEnd-Aboutus/AboutUsButtons';
import { useState,  } from 'react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import {YoutubeValidation} from '../../utils/Validations';

const UserEndAddvideo=()=>{
    const {classes} = useAboutusStyles();
    const [links, setLinks] = useState<string>('');
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false) 
    const [prevData, setPrevData] = useState<string>('');
   
    const linkerror= YoutubeValidation(links);
    

    
    const SaveData = ()=>{
        setPrevData(links);
        setIsSaved(true);
        setEdit(false);
        console.log();
        };
    const CancelData = ()=>{
        if (prevData) {
        setLinks(prevData)
        setIsSaved(true);
    } else {
        
        setLinks('')
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)
    }
    
    
    return(
        <>
          <Box sx={{display:"flex", flexDirection:'row', justifyContent:"flex-end",gap:2}} >
            <EditButton error={ Edit} onClick={()=> {setCancel(true);
              setEdit(true)
            }}/>
          </Box>
          <Box className={classes.myuploadandheadingbox} sx={{gap:10}}>
                <Box>
                    <Box sx={{display:'flex',flexDirection:'row',gap:2}}>
                      <InsertLinkIcon sx={{color:'#0A4FA4'}}/>
                      <Typography className={classes.mytext}>Insert link</Typography>
                    </Box>
                    <TextField className={classes.Linkfield}
                        value={links}
                        onChange={(e)=>{setLinks(e.target.value);
                                    setIsSaved(false)}}
                        helperText={linkerror.error}
                        disabled={!Edit}
                        FormHelperTextProps={{
                          className: !linkerror.isError ? classes.greyText : classes.helperText
                        }}/>



                </Box>              
          </Box>    
          <Box className={classes.SeveandCancelBox}>
            <SaveButton error={isSaved || linkerror.isError} onClick={SaveData} />
            {cancel &&(<CancelButton onClick={CancelData} />)}
          </Box>
        </>
    )
}
export default UserEndAddvideo;