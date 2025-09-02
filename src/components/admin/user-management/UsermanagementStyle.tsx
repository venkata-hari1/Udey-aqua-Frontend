import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useUsermanagementStyles = makeStyles()((theme: Theme) => ({
  waterButtonsContainer: {
    display:"flex",
    justifyContent:'space-between',
    padding:5,
    [theme.breakpoints.down('sm')]:{
      gap:theme.spacing(1)
    }
  },
  leftbuttonscontainer:{
    display:'flex',
    gap:theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      width:'100%',
      flexWrap:'nowrap'
    }
  },
  Freshwaterbutton:{
    backgroundColor:theme.palette.primary.dark,
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.contrastText,
    textTransform:'capitalize',
  },
  BrackMarinebutton:{
    textTransform:'capitalize',
    color:theme.palette.primary.dark,
    borderColor:theme.palette.primary.dark
  },

 rightbuttonscontainer:{
    display:'flex',
    gap:theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      width:'100%',
      flexWrap:'wrap'
    }    
  }, 

  trainingCheckbox:{
         
  "& .MuiSvgIcon-root": {
      fill: "#b3c2d6ff",          
      strokeWidth: 0.1,
      
    },
      "&.Mui-checked": {
      color: "#0463EE",
      fill:"#0A4FA4"
    },
},
//userInformtion page
downLoadreport:{
  color:theme.palette.primary.dark,
  textTransform:'capitalize',
  border:"1px solid #0A4FA4",
  marginRight:'10px',
  marginBottom:"10px",
},
userInfoCardcontainer:{
  display:'flex',
  flexWrap:'wrap',
  background:theme.palette.primary.light,
  marginLeft:"10px",
  marginRight:"10px",
  [theme.breakpoints.down('md')]:{
     marginLeft:"2px",
     marginRight:"2px",
     flexWrap:'wrap'
  }
},

userTitle:{
 fontWeight:600,
 marginBottom:"17px",
 fontSize:16,
 paddingLeft:"20px",
},
userInfodata:{
  display:"flex",
  flexDirection:"row",
  gap:5,
  [theme.breakpoints.down('sm')]:{
    flexDirection:'row',
    flexWrap:'nowrap',
    gap:"-2px"
  }
},
keyInfo:{
minWidth:'200px',
marginBottom:"14px",
fontSize:"14px",
paddingLeft:'20px',
[theme.breakpoints.down('sm')]:{
  minWidth:'150px',
 marginBottom:"14px",

}
},
valueInfo:{
  minWidth:'350px',
  maringBottom:"14px",
  fontSize:"14px",
  [theme.breakpoints.down('sm')]:{
   minWidth:'180px',
   marginBottom:"14px",
}
},
//getinuser component

rightbuttonsGetinUser:{
    display:'flex',
    gap:theme.spacing(1),
    justifyContent:'end',
    marginBottom:"10px",
    [theme.breakpoints.down('sm')]:{
      flexDirection:'row',
      justifyContent:'space-around',
      width:'100%',
      flexWrap:'wrap'
    }    
  },
GetinuserExport:{
    backgroundColor:theme.palette.primary.dark,
    fontFamily:theme.typography.fontFamily,
    color:theme.palette.primary.contrastText,
    textTransform:'capitalize',
    [theme.breakpoints.down('sm')]:{
      display:'flex',
      width:'50%',
    }
  },
  GetinuserFilter:{
    textTransform:'capitalize',
    color:theme.palette.primary.dark,
    borderColor:theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]:{
      display:'flex',
      flex:1,
    }
  },

}));

export default useUsermanagementStyles;