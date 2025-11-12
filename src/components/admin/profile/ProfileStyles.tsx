import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useProfileStyles = makeStyles()((theme: Theme) => ({
  cardProfileBox:{
   background:'#FFFF',
   border:'1px solid #0A4FA4'
  },
  cardAdminHeading:{
    fontWeight:950,
    fontSize:18,
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
   fontSize:'12px',
   marginLeft:'80px',
   border:'1px solid #0A4FA4',
   color:'black',
   textTransform:'capitalize',
   height:'40px',
   cursor:'pointer',
   [theme.breakpoints.down('sm')]:{
     padding:'2px 9px',
     marginLeft:'9px',
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
  gap:15,
  padding:"30px",
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
 borderWidth:'2px',
 textDecoration:"",
 textTransform:'capitalize'
 
},
backtoProfileBox:{
display:'flex', 
justifyContent:'center',
marginTop:"15px",

},
backProfiletext:{
 textDecoration:'underline',
 color:'#0A4FA4',
 cursor:'pointer',
 fontSize:'14px',  
},
profileTextfileds:{
  
  "& .MuiOutlinedInput-root": {
    background: "#F9FAFB",
    borderRadius: "8px", 
    "& fieldset": {
      borderColor: "#9ab8ddff", 
    },
    "&:hover fieldset": {
      borderColor: "#9ab8ddff", 
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9ab8ddff", 
      borderWidth: "2px", 
    },
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: "13px", 
    color: "#8A8A8A", 
    opacity: 1, 
  },
  },
  textboxIcons:{
    fontSize:20,
  },

//changepassword
profilePasswordChangeBox:{
  display:'flex',
  flexDirection:'column',
  gap:5,
  padding:"6px",
  paddingLeft:"0px",
  paddingRight:"0px",
  justifyContent:'center',
  borderRadius:"10px"
},
}));

export default useProfileStyles    