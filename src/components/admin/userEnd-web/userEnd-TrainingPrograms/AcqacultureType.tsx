import {useUserEndwebStyles} from '../userEnd-Aboutus/AboutusStyles';
import { TrainingStyles } from './PricingStyles';
import { Box,  TextField, Typography} from '@mui/material';
import {  SaveButton,  UploadButton} from '../userEnd-Aboutus/AboutUsButtons';
import { useState } from 'react';
//import {planTitle} from '../../utils/Validations';
import { AddType } from './PricingButtons';


//type AcquacultureTypeProps={
  //  id?:string;
  //  accordianId?:string
//}
const AcquacultureType=()=>{
    const {classes:Aboutus} = useUserEndwebStyles();
    const {classes} = TrainingStyles();
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [title,settitle]=useState<string>('');
    const [counter, setCounter] = useState<any>([]);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);

    //const TitleError=planTitle(title);
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
    
    

    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter.length+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter((prev:any) => [...prev, newId])
    };

    
    return(
        <>
            <Box className={Aboutus.WhoWeAreContainer}>
                <Box className={Aboutus.AddSectionBox}>
                    <AddType onClick={handleAddSubpage}/>
                </Box>
                <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    <SaveButton/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:"10px"}}>
                        <Typography>Image 1</Typography>
                        <UploadButton/>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:5,marginTop:'20px'}}>
                        <Typography>Title</Typography>
                        <TextField  className={classes.titleandpriceTextfield}/>
                    </Box>
                </Box>
            </Box>
        </>
    )

}

export default AcquacultureType; 