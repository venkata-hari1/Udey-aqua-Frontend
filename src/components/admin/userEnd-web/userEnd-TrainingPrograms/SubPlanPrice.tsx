
import  {useAboutusStyles}  from "../userEnd-Aboutus/AboutusStyles";
import { Box, Button, Typography, TextField,Dialog, DialogContent, DialogActions, IconButton } from "@mui/material";
import { DeleteButton } from "./PricingButtons";
import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { TitleValidate, PriceValidate } from "../../utils/Validations";
import EditIcon from "../../../../assets/Edit.png";
import { EditButton, CancelButton, SaveButton } from "../userEnd-Aboutus/AboutUsButtons";
import ReactQuill from 'react-quill-new';





type SubPriceplan={
    id:string;
    Section:string;
    onDelete?:()=>void
}
const SubPriceplan=({id,onDelete,Section}:SubPriceplan)=>{
    const {classes} = useAboutusStyles();
    const [title,setTitle] = useState<string>("");
    const [price,setPrice] = useState<string>("");
    const [content,setContent] = useState<string>("");
    const [openDialog, setOpenDialog] = useState(false);
    const [prevData, setPrevData] = useState<boolean>(false);

    const TitleError= TitleValidate(title);
    const PriceError = PriceValidate(price);


    const isValid =title.length === 0 || title.length < 3 || title.length > 100 || price.length === 0 || price.length <2 || price.length > 12 ||content.length === 0 || content.length <3 || content.length > 2000;

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
                title:title,
                price:price,
                content:content
            }
            console.log(Data);
        localStorage.setItem(`${Section}_${id}`, JSON.stringify(Data));
        setPrevData(true)
        };
        const CancelData = ()=>{
            const PrevData=localStorage.getItem(`${Section}_${id}`);
            if (PrevData) {
                const parsedData = JSON.parse(PrevData);
                setTitle(parsedData.title || "");
                setPrice(parsedData.price || '');
                setContent(parsedData.content || "");
            } else {
                alert("No previous data found!");
            }
        
        }
        useEffect(() => {
            const saved = localStorage.getItem(`${Section}}_${id}`);
            if (saved) {
            setPrevData(true);
            }
        }, []);

    return(
        <>
            <Box className={classes.PricingMainContainer}>
                <Box className={classes.DeleteButtonBox} sx={{gap:'20px'}}>
                    {id ==='Plan 1' && <EditButton/>}
                    {id != 'Plan 1' && <DeleteButton onClick={handleDeleteClick}/>}
                </Box>
                <Box className={classes.PlanBox}>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Box sx={{display:'flex',flexDirection:'row',gap:1,alignItems:'center'}}>
                            <Checkbox sx={{color:'#0A4FA4'}}/>
                            <Typography className={classes.PlanText}>{id}</Typography>
                        </Box>
                        <IconButton>
                            <Box component="img"
                             src={EditIcon} alt="Editicon" width='19px' height='19px'
                        />
                        </IconButton>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'row',paddingLeft:'48px',}}>
                        <Box sx={{display:'flex',flexDirection:'column', gap:10, marginTop:'10px'}}>
                            <Box sx={{width:'100px'}}>
                                <Typography className={classes.TitleandplanText}>Title</Typography>
                            </Box>
                            <Box sx={{width:'100px'}}>
                                <Typography className={classes.TitleandplanText}>price</Typography>
                            </Box>
                            <Box sx={{width:'100px'}}>
                                <Typography className={classes.TitleandplanText}>content</Typography>
                            </Box>
                            {/*<TextField  className={classes.titleandpriceTextfield}
                                        value={title}
                                        onChange={(e)=>setTitle(e.target.value)}
                                        helperText={TitleError.message}
                                        FormHelperTextProps={{className:classes.helperText}}/>*/}
                        </Box>
                        <Box sx={{display:'flex',flexDirection:'column', gap:5, paddingLeft:'30px'}} >
                            <TextField  className={classes.titleandpriceTextfield}
                                        value={title}
                                        onChange={(e)=>setTitle(e.target.value)}
                                        helperText={TitleError.message}
                                        FormHelperTextProps={{className:classes.helperText}}/>
                            <TextField  className={classes.titleandpriceTextfield}
                                        value={price}
                                        onChange={(e)=>setPrice(e.target.value)}
                                        helperText={PriceError.message}
                                        FormHelperTextProps={{className:classes.helperText}}/>
                            <Box sx={{minHeight: '200px',overflow: 'visible'}}>
                                    <ReactQuill
                                    theme="snow"
                                    className={classes.quillEditor}
                                    value={content}
                                    onChange={setContent}
                                    modules={{
                                        toolbar: [
                                        [{ 'font': [] }, { 'size': [] }],
                                        ['bold', 'italic', 'underline', 'strike'],
                                        [{ 'script': 'sub' }, { 'script': 'super' }],
                                        [{ 'header': [1, 2, 3, false] }],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        ['link', 'image'],
                                        ['clean']
                                        ]
                                    }}
                                    style={{border:'1px solid #0A4FA4', borderRadius:'4px' }}
                                    />
                                   {/* {ContentError.message && (
                                    <Typography className={classes.helperText}>
                                        {ContentError.message}
                                    </Typography>
                                    )}*/}
                                </Box>
                        </Box>
                    </Box>
                   {/* <Box className= {classes.TitleandTextfieldBox}>
                         <Box sx={{width:'100px'}}>
                            <Typography className={classes.TitleandplanText}>content</Typography>
                        </Box>
                            <Box sx={{minHeight: '200px',overflow: 'visible'}}>
                                <ReactQuill
                                theme="snow"
                                className={classes.titleandpriceTextfield}
                                value={content}
                                onChange={setContent}
                                modules={{
                                    toolbar: [
                                    [{ 'font': [] }, { 'size': [] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'script': 'sub' }, { 'script': 'super' }],
                                    [{ 'header': [1, 2, 3, false] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['link', 'image'],
                                    ['clean']
                                    ]
                                }}
                                style={{ minHeight: '150px' }}
                                />
                                {ContentError.message && (
                                <Typography className={classes.helperText}>
                                    {ContentError.message}
                                </Typography>
                                )}
                            </Box>
                        </Box>*/}
            </Box>
                <Box className={classes.SeveandCancelBox}>
                    <SaveButton error={  isValid}  onClick={SaveData}/>
                    {prevData &&(<CancelButton onClick={CancelData}/>)}
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
export default SubPriceplan;