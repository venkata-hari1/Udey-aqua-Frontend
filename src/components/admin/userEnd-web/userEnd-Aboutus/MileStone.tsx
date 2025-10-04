import {useUserEndwebStyles} from './AboutusStyles';
import { Box, Stack, Button, TextField, Typography} from '@mui/material';
import { AddSection, CancelButton, DeleteButton, UpdateHeader, UploadButton} from './AboutUsButtons';
import { useState } from 'react';
import { HelperTextValidate } from './validations';
import MilestoneSubsection from './MileStoneSubsection';


type MileStoneProps={
    id:string;
    accordianId:string;
    Accordiantitle:string
}
const MileStone=({id,accordianId,Accordiantitle}:MileStoneProps)=>{
    const {classes} = useUserEndwebStyles();
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subtitle,setSubtitle]=useState<string>('');
    const [counter, setCounter] = useState<any>([1]);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [prevData, setPrevData] = useState<boolean>(false);

    const TextFieldError=HelperTextValidate(subtitle);
    const isTextInvalid = subtitle.length === 0 || subtitle.length < 3 || subtitle.length > 200;

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
    };

    const handleAddSubpage = () => {
        const newId = `Milestone-${counter.length+1}`; // unique id
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
        console.log(Data);
    localStorage.setItem("Milestones", JSON.stringify(Data));
    setPrevData(true)
    };
    const CancelData = ()=>{
        const PrevData=localStorage.getItem('Milestones');
        if (PrevData) {
            const parsedData = JSON.parse(PrevData);
            setSubtitle(parsedData.subtitle || "");
            setImage(parsedData.image || []);
            setFile([]); 
            setError(""); 
        } else {
            alert("No previous data found!");
        }
    
    }
    useEffect(() => {
        const saved = localStorage.getItem("Milestones");
        if (saved) {
        setPrevData(true);
        }
    }, []);
    return(
        <>
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AddSectionBox}>
                    <AddSection onClick={handleAddSubpage}/>
                </Box>
                <Box className={classes.whoWeareHeaderbox}>
                    <Typography className={classes.HeaderText}>Header Section</Typography>
                    <EditButton/>
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
                                    id={`upload-file-${accordianId}-${id}`}
                                    style={{display:'none'}}
                                    onChange={HandleFileChange}
                                    />
                            <UploadButton id={id} accordianId={accordianId}/> 
                            {(file.length>0 || prevData) && (
                                <Box className={classes.ImagesBox}>
                                    <Box className={classes.ImagespicBox}>
                                        {Images.map((prev,index)=>
                                            <Box key={index} sx={{position:'relative'}} >
                                                <img 
                                                    src={prev}
                                                    alt={`preview ${index+1}`}
                                                    className={classes.ImagePic}
                                                />
                                                <Button className={classes.cancelImgIcon}
                                                        onClick={()=>{removeImage(index)}}
                                                                >
                                                    x
                                                </Button>
                                            </Box>
                                        )}
                                        <label htmlFor={`upload-file-${accordianId}-${id}`}>
                                        <input
                                                accept="image/*"
                                                id={`upload-file-${accordianId}-${id}`}
                                                type="file"
                                                multiple
                                                style={{ display: "none" }}
                                                onChange={HandleFileChange}
                                        />
                                        <Button className={classes.AddMoreButton}
                                            variant="outlined"
                                            component="span"
                                            >
                                                +
                                                </Button>
                                            </label>
                                        </Box>
                                        <Box>
                                            {(Images.length>0 ) &&(
                                                <Typography className={classes.errorText}>
                                                *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height) Image Must be 5 MB
                                            </Typography> 
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
                            onChange={(e)=>setSubtitle(e.target.value)}
                            helperText={TextFieldError.message}
                            FormHelperTextProps={{className:classes.helperText}}
                            />
                    </Box>
                </Box>
                <Box className={classes.SeveandCancelBox}>
                        <UpdateHeader error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>
                        {prevData &&(<CancelButton onClick={CancelData}/>)}
                </Box>
                <MilestoneSubsection  id='Milestone-1' accordianId="7" title={Accordiantitle} />
                {subpages.map((sub) => (
                    <MilestoneSubsection key={sub.id} id={sub.id} accordianId={id} title={Accordiantitle} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}

            </Box>
        </>
    )

}

export default MileStone;