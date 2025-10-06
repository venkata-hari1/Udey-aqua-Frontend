import {useUserEndwebStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, Button, MenuItem, Select} from '@mui/material';
import { AddSection, EditButton,  UploadButton, UpdateHeader, CancelButton} from './AboutUsButtons';
import { useState, useEffect } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Advisors from './Advisors';
import {HelperTextValidate, NameandRoleValidate} from './validations';

type HeroProps={
    id:string;
    accordianId:string;
    Section:string,
}
const OurDirectors=({id,accordianId,Section}:HeroProps)=>{
    const {classes} = useUserEndwebStyles();
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [counter, setCounter] = useState<any>([]);
    const [selected, setSelected] = useState("Directors");
    const [role, setRole] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [prevData, setPrevData] = useState<boolean>(false);
    const options = ["Directors", "Advisors", "Managers"];

    const roleFlied = NameandRoleValidate(role);
    const nameFlied = NameandRoleValidate(name);
    const contentFlied = HelperTextValidate(content);
    const isTextInvalid = role.length === 0 || role.length < 3 || role.length > 80 || name.length === 0 || name.length < 3 || name.length > 80 || content.length === 0 || content.length < 3 || content.length > 200;

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
    {/*const handleDeleteAll = () => {
        setFile([]);
        setImage([]);
        setError("");
        setSubtitle('');
    };*/}
    const handleAddSubpage = () => {
        const newId = `subpage-${counter.length+1}`; 
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter((prev:any) => [...prev, newId])
    };
    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
    }; 
    const SaveData = ()=>{
            const Data={
                name:name,
                role:role,
                content:content,
                image:Images
            }
            console.log(Data);
        localStorage.setItem("OurDirectors", JSON.stringify(Data));
        setPrevData(true)
        };
        const CancelData = ()=>{
            const PrevData=localStorage.getItem('OurDirectors');
            if (PrevData) {
                const parsedData = JSON.parse(PrevData);
                setName(parsedData.name || "");
                setRole(parsedData.role || []);
                setContent(parsedData.content || []);
                setImage(parsedData.image || []);
                setFile([]); 
                setError(""); 
            } else {
                alert("No previous data found!");
            }
        
        }
        useEffect(() => {
            const saved = localStorage.getItem("OurDirectors");
            if (saved) {
            setPrevData(true);
            }
        }, []);
    return (
    <Box className={classes.WhoWeAreContainer}>
      <Box className={classes.AddSectionBox}>
        <AddSection onClick={handleAddSubpage}/>
      </Box>
      <Box className={classes.whoWeareHeaderbox}>
        <Select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          IconComponent={KeyboardArrowDownRoundedIcon}
          sx={{
            width:'147px',
            height:'37px',
            color: "blue",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "blue" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "blue" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "blue" },
          }}>
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                {option}
                </MenuItem>
            ))}

        </Select>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          {/*<SaveButton error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>*/}
          <EditButton/>
        </Box>
      </Box>
      <Box className={classes.myuploadandheadingbox}>
        <Stack className={classes.OurDirectorsUploadStack}>
                    <Typography className={classes.mytext}>
                        image
                    </Typography>
                    <Box className={classes.myImageUploadBox}>
                        <input type='file'
                                multiple
                                accept="image/*" 
                                id={`upload-file-${Section}-${accordianId}-${id}`}
                                style={{display:'none'}}
                                onChange={HandleFileChange}
                                />
                        <UploadButton id={id} accordianId={accordianId} Section={Section}/> 
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
                                    <label htmlFor={`upload-file-${Section}-${accordianId}-${id}`}>
                                    <input
                                            accept="image/*"
                                            id={`upload-file-${Section}-${accordianId}-${id}`}
                                            type="file"
                                            multiple
                                            style={{ display: "none" }}
                                            onChange={HandleFileChange}
                                    />
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
                            name
                        </Typography>
                        <TextField className={classes.myTextFleid}
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    helperText={nameFlied.message}
                                    FormHelperTextProps={{className:classes.helperText}}/>
                        <Typography className={classes.mytext}>
                            role
                        </Typography>
                        <TextField className={classes.myTextFleid}
                                    value={role}
                                    onChange={(e)=>setRole(e.target.value)}
                                    helperText={roleFlied.message}
                                    FormHelperTextProps={{className:classes.helperText}}/>
                        <Typography className={classes.mytext}>
                            content
                        </Typography>
                        <TextField 
                            value={content}
                            fullWidth
                            multiline
                            minRows={5}
                            className={classes.myTextFleid}
                            onChange={(e)=>setContent(e.target.value)}
                            helperText={contentFlied.message}
                            FormHelperTextProps={{className:classes.helperText}}/>
                </Box>
            </Box> 
            <Box className={classes.SeveandCancelBox}>
                            <UpdateHeader error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>
                            {prevData &&(<CancelButton onClick={CancelData}/>)}
                        </Box>
            {subpages.map((sub) => (
                    <Advisors key={sub.id} id={sub.id} accordianId={id} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))} 
 
    </Box>
  );

}
export default OurDirectors;