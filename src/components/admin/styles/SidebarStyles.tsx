import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useSidebarStyles = makeStyles()((theme: Theme) => ({
     
    SidebarMainstyle:{
     background:'#DBECF9',
     display:'flex',
     alignItems:'center',
     flexDirection:'column',
     marginLeft:'20px',
     marginTop:'10px',
     marginBottom:'10px',
     marginRight:'5px',
     height:'100%',
     borderRadius:"10px",
     border:'1px solid #0A4FA4',
     boxShadow:'0 0 10px rgba(10, 79, 164, 0.25)',
     gap:"25px",
     },
     LogoAdmincontainer:{
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
     },
     AdminTitle:{
        fontFamily:"DM Serif Display",
        color:'#0A4FA4FA',
        fontWeight:400,
        fontSize:23,
        textAlign:'center'
    },
    navigationContainer:{
        display:'flex',
        alignItems:'start',
        flexDirection:'column',
        flexGrow:1,
        gap:'12px',
},
    logoutContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:'20px',
      gap:10,
      marginRight:50,
      color:'red',
      textDecoration:'underline',
      fontFamily:'Inter'
    },
    menuItem:{
      display:'flex',
      alignItems:'center',
      justifyContent:'start',
      cursor:'pointer',
      color:'#0A4FA4', 
      fontFamily:'Inter',
      fontSize:'14px',
      padding:'4px 20px',
      
      '&:hover':{
        backgroundColor:'#0A4FA4',
        color:'white',
        borderColor:'#0A4FA4',
        borderTopLeftRadius:'30px',
        borderBottomRightRadius:'30px',
      },
    },
    subMenuItem:{
      display:'flex',
      justifyContent:'start',
      fontSize:"12px",
       cursor:'pointer',
       color:'#0A4FA4', 
       fontFamily:'Inter',
       padding:'4px 10px',
       gap:3,
       '&:hover': {
     backgroundColor: '#0A4FA4', 
     color: 'white',
     borderTopLeftRadius:'30px',
    borderBottomRightRadius:'30px',
  },
  },
  menuItemActive: {
    backgroundColor: '#0A4FA4',
    color: 'white',
    borderTopLeftRadius: '30px',
    borderBottomRightRadius:'30px',
  },

  }));

export default useSidebarStyles;