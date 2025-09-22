import {useUserEndwebStyles} from './AboutusStyles';
import { Box, Stack, TextField, Typography, Button, Dialog, MenuItem,Select,DialogContent, DialogActions} from '@mui/material';
import { DeleteButton, SaveButton, UploadButton} from './AboutUsButtons';
import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {HelperTextValidate, NameandRoleValidate} from './validations';

type MilestoneSubpageProps={
    id:string;
    accordianId:string;
    onDelete?: () => void;
}
const MilestoneSubsection=({id,accordianId,onDelete}:MilestoneSubpageProps)=>{
    const {classes} = useUserEndwebStyles();
    const [file,setFile]= useState<File[]>([]);
    const [Images,setImage] = useState<string[]>([]);
    const [error,setError]= useState<string>('');
    const [openDialog, setOpenDialog] = useState(false);
    const [role, setRole] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [selected, setSelected] = useState("Directors");
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
    const SaveData = ()=>{
        const Data={
            role,
            name,
            content,
            image:Images
        }
        console.log(Data);
    localStorage.setItem("myData", JSON.stringify(Data));
    alert("Data saved!");
    };
    return(
        <>
      <Box className={classes.whoWeareHeaderbox}>
        <Typography className={classes.HeaderText}>{id}</Typography>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <SaveButton error={ file.length ===0  || isTextInvalid} onClick={SaveData}/>
          <DeleteButton onClick={handleDeleteClick}/>
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
                                id={`upload-file-${accordianId}-${id}`}
                                style={{display:'none'}}
                                onChange={HandleFileChange}
                                />
                        <UploadButton id={id} accordianId={accordianId}/> 
                        {file.length>0 && (
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
                                        component="span">
                                            +
                                            </Button>
                                        </label>
                                    </Box>
                                    <Box>
                                        <Typography className={classes.errorText}
                                            >
                                            *Please upload the sponsor logo in landscape format (Preferred size: 300px width × 100px height) Image Must be 5 MB
                                        </Typography>  
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
                            fullWidth
                            multiline
                            minRows={5}
                            className={classes.myTextFleid}
                            value={content}
                            onChange={(e)=>setContent(e.target.value)}
                            helperText={contentFlied.message}
                            FormHelperTextProps={{className:classes.helperText}}/>
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
            </Box>    
 
        </>
    )
}
export default MilestoneSubsection;