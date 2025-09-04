import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useProfileStyles = makeStyles()((theme: Theme) => ({
  cardProfileBox:{
   background:'#FFFF',
   border:'1px solid #0A4FA4'
  },
  cardAdminHeading:{
    fontWeight:800,
    fontSize:16,
    marginBottom:"20px",
  },
  keyTextlabel:{
    marginLeft:"14px",
    fontSize:13,
    textDecoration:'underline',
    color:theme.palette.primary.main,
    cursor:'pointer',
  },
  valueButtonlabel:{
   fontSize:'10px',
   marginLeft:'17px',
   border:'1px solid #0A4FA4',
   color:'black',
   textTransform:'capitalize',
   height:'30px',
   cursor:'pointer',
   [theme.breakpoints.down('sm')]:{
     padding:'2px 9px',
     marginLeft:'5px',
    }
  },
  buttonsBox:{
    display:"flex",
     gap:6,
    maxWidth:"400px",
     justifyContent:"end"
  },
  saveButton:{
   background:'#0A4FA4FA',
   color:'white',
   textTransform:'capitalize',
  },
 cancelButton:{
   background:'#FF3326',
   color:'white',
   textTransform:'capitalize',
 },   
    
//profileEmailpopup

dialogContainer:{
  "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0,0,0,0.2)", 
  }, 
},
profileEmailBox:{
  display:'flex',
  flexDirection:'column',
  gap:5,
  padding:28,
  justifyContent:'center',
  borderRadius:"3px"
},
updateEmailText:{
 color:'#0A4FA4',
 fontSize:"20px",
 fontWeight:"600",
textAlign:"center",
},
profileContinuebutton:{
 background:theme.palette.primary.dark,
 padding:7,
 borderRadius:10,
},
backtoProfileBox:{
display:'flex', 
justifyContent:'center',
marginTop:"10px",
},
backProfiletext:{
 textDecoration:'underline',
 color:'#0A4FA4',
 cursor:'pointer' 
},

}));

export default useProfileStyles    