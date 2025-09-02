import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useHeaderStyles = makeStyles()((theme: Theme) => ({
  
  headerSearch:{
    
    '& .MuiOutlinedInput-root':{
        borderRadius:'30px',
        fontSize:12,
        background:'#DBECF9',
       '& fieldset':{
        borderColor:"#0A4FA4",
       },
       '&:hover fieldset': {
          borderColor: '#0A4FA4', 
        }, 
        '&.Mui-focused fieldset': {
          borderColor: '#0463EE',
          borderWidth: '1px',
        },
        '& .MuiInputBase-input::placeholder': {
        color: '#0A4FA4',
        fontSize:"10px", 
        opacity: 1, 
      },
    }
},

headerAppbar:{
 backgroundColor:'white', 
 color: 'black', 
 boxShadow: '0 2px 4px rgba(0,0,0,0.08)' 
},
headerToolbar:{
  minHeight:80, 
  display:'flex', 
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]:{
    justifyContent:'space-between',
    gap:5,
  } 
},

AdmintitleBox:{
 display:"flex",
justifyContent:"center",
alignItems:"center",
gap:5, 
color:"#0A4FA4",
},
backArrow:{
 cursor:'pointer',
 fontSize:'18px',
 [theme.breakpoints.down('sm')]:{
  marginBottom:"14px",
 }
},
AdminheaderTitle:{
  color:theme.palette.primary.dark,
  fontFamily:"DM Serif Display",
  fontSize:25,
  [theme.breakpoints.down('md')]:{
    fontSize:15,

  }
}
    
}));

export default useHeaderStyles