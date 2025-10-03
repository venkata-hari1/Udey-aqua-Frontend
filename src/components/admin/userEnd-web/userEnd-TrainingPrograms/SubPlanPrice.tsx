import { TrainingStyles } from "./PricingStyles";
import  {useUserEndwebStyles}  from "../userEnd-Aboutus/AboutusStyles";
import { Box, Button, Typography, TextField,Dialog, DialogContent, DialogActions } from "@mui/material";
import { DeleteButton } from "./PricingButtons";
import { Checkbox } from "@mui/material";
import { useState } from "react";
//import { planPrice,planContent,planTitle } from "../../utils/Validations";
import EditIcon from "../../../../assets/icons/editicon.png";


type SubPriceplan={
    id:string;
    onDelete:()=>void
}
const SubPriceplan=({id,onDelete}:SubPriceplan)=>{
    const {classes} = TrainingStyles();
    const {classes:Aboutus}= useUserEndwebStyles();
    const [title,setTitle] = useState<string>("");
    const [price,setPrice] = useState<string>("");
    const [content,setContent] = useState<string>("");
    const [openDialog, setOpenDialog] = useState(false);

    //const TitleError= planTitle(title);
    //const PriceError = planPrice(price);
    //const ContentError = planContent(content)

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

    return(
        <>
            <Box className={classes.PricingMainContainer}>
                <Box className={classes.DeleteButtonBox}>
                    <DeleteButton onClick={handleDeleteClick}/>
                </Box>
                <Box className={classes.PlanBox}>
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Box sx={{display:'flex',flexDirection:'row',gap:1,alignItems:'center'}}>
                            <Checkbox sx={{color:'#0A4FA4'}}/>
                            <Typography className={classes.PlanText}> {id}</Typography>
                        </Box>
                        <Box component="img"
                             src={EditIcon} alt="Editicon" width='19px' height='19px'
                        />
                    </Box>
                    <Box className={classes.TitleandTextfieldBox}>
                        <Box sx={{width:'100px'}}>
                            <Typography className={classes.TitleandplanText}>Title</Typography>
                        </Box>
                        <TextField  className={classes.titleandpriceTextfield}
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                    //helperText={TitleError.message}
                                    FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                    <Box className={classes.TitleandTextfieldBox} >
                        <Box sx={{width:'100px'}}>
                            <Typography className={classes.TitleandplanText}>price</Typography>
                        </Box>
                        <TextField  className={classes.titleandpriceTextfield}
                                    value={price}
                                    onChange={(e)=>setPrice(e.target.value)}
                                   // helperText={PriceError.message}
                                    FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                    <Box className={classes.TitleandTextfieldBoxMulti} >
                        <Box sx={{width:'100px'}}>
                            <Typography className={classes.TitleandplanText}>content</Typography>
                        </Box>
                        <TextField multiline minRows={5} className={classes.titleandpriceTextfield}
                                    value={content}
                                    onChange={(e)=>setContent(e.target.value)}
                                    //helperText={ContentError.message}
                                    FormHelperTextProps={{className:classes.helperText}}/>
                    </Box>
                </Box>
                <Dialog open={openDialog} fullWidth onClose={handleCancel} className={Aboutus.DialoagBox} PaperProps={{
                                    sx: {
                                    width: 500,       
                                    height: 250,      
                                    borderRadius: 3,   
                                    padding: 2,        
                                    },
                                }}>
                    <DialogContent className={Aboutus.DialogContent}>
                        <Typography sx={{fontSize:'24px',color:'red',fontWeight:500,wordWrap: 'break-word'}}>Are you sure you want to delete this {id}?</Typography>
                    </DialogContent>
                    <DialogActions sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center'  
                                }}>
                        <Button onClick={handleCancel} className={Aboutus.deleteButton}>
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