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
    
}));

export default useProfileStyles    