import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useAdmindbStyles = makeStyles()((theme: Theme) => ({
  
    cardOuterBox:{
        display:'flex', 
        gap:"30px",
        marginLeft:"30px",
        marginTop:"-60px",
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            margin:"auto",
            width:"70%",
            marginTop:'-20px'
        }
    },
    graphContainerBox:{
      display:'flex',
      marginTop:'60px',
      width:'100%',
      justifyContent:'center',
      alignItems:'stretch',
      gap:10,
      flexWrap:"wrap",
      
      [theme.breakpoints.down('md')]:{
        flexDirection:'column',
      }
    },
    topCardcontainer:{
      minWidth:300,
      backgroundColor:'#DBECF9'
    },
    topCardcontentBox:{
      display:"flex",
      gap:"30px",
      justifyContent:"center",
      alignItems:"center"
    },
    topCardcount:{
      color:'#0A4FA4', 
      fontFamily:'DM Serif Display'
    },
    topCardlabel:{
      fontSize:'14px',
      fontWeight:500,
    },
  graphCardContainer:{
    flex:3,
    backgroundColor:'#DBECF9',
    border:'1px groove #0A4FA4'
   },
   cardContentTitle:{
    marginBottom:4,
    fontFamily:'Dm Serif Display',
    color:"#0A4FA4",
    paddingLeft:'40px',
    [theme.breakpoints.down('sm')]:{
      paddingLeft:0,
    }
   },
   rightCardContainer:{
     flex:2,
     backgroundColor:'#DBECF9',
     border:'1px groove #0A4FA4'
   },
   rightCardtitle:{
    marginTop:"10px",
    marginLeft:"14px",
    fontWeight:500,
    fontSize:18,
    fontFamily:'Dm Serif Display',
    color:'#0A4FA4'
   },


}));

export default useAdmindbStyles    