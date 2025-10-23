import  {useAboutusStyles}  from "../userEnd-Aboutus/AboutusStyles";
import { Box, Typography, TextField,Dialog, DialogContent, DialogActions, IconButton } from "@mui/material";
import { DeleteButton } from "./PricingButtons";
import { Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { TitleValidate, PriceValidate,PlanContentValidation } from "../../utils/Validations";
import EditIcon from "../../../../assets/Edit.png";
import { EditButton, CancelButton, SaveButton } from "../userEnd-Aboutus/AboutUsButtons";
import ReactQuill from 'react-quill-new';
import UserendDeletepopup from "../../utils/UserendDeletepop";

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
    const [prevData, setPrevData] = useState<{ title: string; price: string; content: string } | null>(null);
    const [Edit, setEdit] = useState<boolean>(true);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [cancel, setCancel] = useState<boolean>(false);

    const TitleError= TitleValidate(title);
    const PriceError = PriceValidate(price);
    const ContentError = PlanContentValidation(content);
    const Text = content.replace(/<[^>]*>/g, '')
    const isValid = title.length < 3 || title.length > 100 || PriceError.isError  || Text.length <3 || Text.length > 2000;
    const handleConfirmDelete = () => {
        setOpenDialog(false);
        if (onDelete) onDelete(); 
    };
    const SaveData = ()=>{
           setPrevData({
            title,
            price,
            content
           })
           setIsSaved(true)
           setEdit(false)
    };
    const CancelData = ()=>{
         if (prevData) {
        setTitle(prevData.title);
        setPrice(prevData.price);
        setContent(prevData.content);
        setIsSaved(true);
    } else {
        setTitle('');
        setPrice('');
        setContent('');
        setIsSaved(false);
    }
    setEdit(false); 
    setCancel(false)   
    }
    return(
        <>
            <Box className={classes.PricingMainContainer}>
                <Box className={classes.DeleteButtonBox} sx={{gap:'20px'}}>
                    {id ==='Plan 1' && <EditButton error={!prevData} onClick={()=>{setCancel(true);setEdit(true)}}/>}
                    {id != 'Plan 1' && <DeleteButton onClick={()=>setOpenDialog(!openDialog)}/>}
                </Box>
                <Box className={classes.PlanBox}>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Box sx={{display:'flex',flexDirection:'row',gap:1,alignItems:'center'}}>
                            <Checkbox sx={{color:'#0A4FA4'}}/>
                            <Typography className={classes.PlanText}>{id}</Typography>
                        </Box>
                        {id != 'Plan 1' &&
                        (<IconButton>
                            <Box component="img"
                             src={EditIcon} alt="Editicon" width='19px' height='19px'
                        />
                        </IconButton>)}
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
                        </Box>
                        <Box sx={{display:'flex',flexDirection:'column', gap:5, paddingLeft:'30px'}} >
                            <TextField  className={classes.titleandpriceTextfield}
                                        value={title}
                                        onChange={(e)=>{setTitle(e.target.value);setIsSaved(false)}}
                                        helperText={TitleError.message}
                                        disabled={!Edit}
                                         FormHelperTextProps={{className: (title.length >= 3 && title.length < 200) ? classes.greyText : classes.helperText}}/>
                            <TextField  className={classes.titleandpriceTextfield}
                                        value={price}
                                        onChange={(e)=>{setPrice(e.target.value);setIsSaved(false)}}
                                        helperText={PriceError.message}
                                        disabled={!Edit}
                                        FormHelperTextProps={{className: !PriceError.isError ? classes.greyText : classes.helperText}}/>
                            <Box sx={{minHeight: '200px',overflow: 'visible'}}>
                                    <ReactQuill
                                    theme="snow"
                                    className={classes.quillEditor}
                                    value={content}
                                    readOnly={!Edit}
                                    onChange={(value)=>{setContent(value);setIsSaved(false)}}
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
                                    style={{border:!Edit ? '1px solid grey' :'1px solid #0A4FA4', borderRadius:'4px' }}
                                    />
                                    {ContentError.message && (
                                    <Typography className={(Text.length >= 3 && Text.length < 200)?classes.greyText:  classes.helperText} sx={{fontSize:'12px',fontWeight:300,paddingLeft:'15px'
                                    }}>
                                        {ContentError.message}
                                    </Typography>
                                    )}
                                </Box>
                        </Box>
                    </Box>
            </Box>
                <Box className={classes.SeveandCancelBox}>
                    <SaveButton error={isValid || isSaved}  onClick={SaveData}/>
                    {cancel &&(<CancelButton onClick={CancelData}/>)}
                </Box>
            <UserendDeletepopup open={openDialog} message={`Are you sure you want to delete this ${id}?`} onClose={()=> !openDialog} onDelete={handleConfirmDelete}/>
            </Box>
        </>
    )
}
export default SubPriceplan;