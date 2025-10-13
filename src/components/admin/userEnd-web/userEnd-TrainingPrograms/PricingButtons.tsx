import { useAboutusStyles } from '../userEnd-Aboutus/AboutusStyles';
import { Button } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


type AddPricePlanProps={
    onClick:()=>void;
}

export const AddPricePlan =({onClick}:AddPricePlanProps)=>{
    const {classes}=useAboutusStyles()
    return(
        <Button variant="contained" disableElevation startIcon={<AddOutlinedIcon/>} className={classes.AddplanButton} onClick={onClick}>
            Add Price Plan
        </Button>
    )
}
export const DeleteButton =({onClick}:{onClick?:()=>void})=>{
    const {classes}=useAboutusStyles()
    return(
        <Button variant="contained" className={classes.DeleteButton} onClick={onClick}>
            delete
        </Button>
    )
}
export const UpdateButton=()=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant="contained"   className={classes.updatebutton}>
            update
        </Button>
    )
}
export const CancelButton=()=>{
    const {classes} =useAboutusStyles();
    return(
        <Button variant="contained" disableElevation className={classes.CancelButton}>
            cancel
        </Button>
    )
}
type AddTypeProps={
    onClick?:()=>void;
}

export const AddType =({onClick}:AddTypeProps)=>{
    const {classes}=useAboutusStyles()
    return(
        <Button variant="contained" disableElevation startIcon={<AddOutlinedIcon/>} className={classes.AddplanButton} onClick={onClick}>
            Add Type
        </Button>
    )
}