//import type { Theme } from "@mui/material/styles"
import { makeStyles } from "tss-react/mui";

export const TrainingStyles=makeStyles()(()=>({
    PricingMainContainer:{
        display:'flex',
        flexDirection:'column',
        paddingX:'20px',
        gap:20
    },
    PricingAddPriceButtonBox:{
        display:'flex',
        justifyContent:'flex-end'
    },
    AddplanButton:{
        backgroundColor:'#0A4FA4',
        color:'white',
        borderRadius:'9px',
        boxShadow:'none',
        fontWeight:500,
        fontSize:'14px',
        textTransform:'capitalize'

    },
    DeleteButtonBox:{
        display:'flex',
        justifyContent:'flex-end'
    },
    DeleteButton:{
        backgroundColor:'#F7FAFC',
        border:'1px solid red',
        color:'red',
        borderRadius:'7px',
        textTransform:'capitalize',
        padding:'0px 22px',
        height:'37px'
    },
    PlanBox:{
        display:'flex',
        flexDirection:'column',
        //gap:20,
        maxWidth:'787px'
    },
    PlanText:{
        textDecoration:'underline',
        fontWeight:500,
        fontSize:'18px'
    },
    TitleandplanText:{
        fontWeight:500,
        fontSize:"20px",
        textTransform:'capitalize'
    },
    titleandpriceTextfield:{
        width:'600px',
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "1px solid #0A4FA4",
            },
            "&:hover fieldset": {
                border: "1px solid #0A4FA4",
            },
            "&.Mui-focused fieldset": {
                border: "1px solid #0A4FA4", 
            },
        }

    },
    TitleandTextfieldBox:{
        paddingLeft:'48px',
        display:'flex',
        flexDirection:'row',
        gap:100,
        height:'100px',
        alignItems:'baseline'
    },
    TitleandTextfieldBoxMulti:{
        paddingLeft:'48px',
        display:'flex',
        flexDirection:'row',
        gap:100,
        alignItems:'flext-start',
        height:'170px'
    },
    
    UpdateandCancelButtonBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:20
    },
    quillEditor: {
        "& .ql-editor": {
        minHeight: "250px",
        maxHeight: "500px",
        overflowY: "auto",
        //color:'#0A4FA4'
        },
    },
    updatebutton:{
        background:'#0A4FA4',
        textTransform:'capitalize',
        color:'#FFFFFF',
        padding:"7px 40px",
        borderRadius:'9px',
        fontWeight: 500,
        fontSize: "14px",
        boxShadow:'none'  
    },
    CancelButton:{
        background:'#FF3326',
        textTransform:'capitalize',
        color:'#FFFFFF',
        padding:"7px 40px",
        borderRadius:'9px',
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
        fontSize: "14px",
        boxShadow:'none'
    },
    helperText:{
        color:'red'
    },
    //Training Program
    Trainingprogramcontainer:{
        display:'flex',
        flexDirection:'column',
        gap:5,
        color:'#fff',
        padding:'15px',
    },
    TrainingProgramHeaderBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
    },
}))