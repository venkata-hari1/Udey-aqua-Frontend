import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useLogoutStyles = makeStyles()((theme: Theme) => ({
  
 logOutMainContainer:{
    height:"100vh",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
   [theme.breakpoints.down('md')]:{
     justifyContent:'center',
     alignItems:'center',
     overflowX:'hidden',
    } 
  },
  logOutboxContainer:{
    background:'white',
    width:"450px",
    height:"280px",
    borderRadius:30,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    border:'1px solid #d1d0d0c4',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
    gap:"30px",
    [theme.breakpoints.down('md')]:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        maxWidth:"330px",
        padding:20, 
    }
  },

  logoutText:{
   color:'#F34646',
  },
  LogoutButtonsbox:{
    display:'flex',
    justifyContent:'center',
    flexDirection:"row",
    gap:"40px",
  },
  Logoutconfirm:{
    background:'#F34646',
    color:'white',
    padding:'2px 40px',
    textTransform:'capitalize',
},
LogoutCancel:{
   color:'#F34646',
   padding:'5px 45px',
    textTransform:'capitalize',
    borderColor:'#F34646',
},
loginBackStack:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
},
loginBack:{
    textDecoration:'underline',
    color:'blue',
}


}));

export default useLogoutStyles;