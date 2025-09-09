import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

const useUserEndwebStyles = makeStyles()((theme: Theme) => ({
  userEndButtonsContainer: {
   display:'grid',
   gridTemplateColumns:"repeat(3, 1fr)",
   justifyContent:'center',
   alignItems:'center',
   columnGap:2,
   rowGap:50,
   marginTop:40,
   [theme.breakpoints.down('md')]:{
     gridTemplateColumns:"repeat(1,1fr)",
     columnGap:4,
     rowGap:30,
  }
  },
userEndButton: {
    justifySelf: "center",
    width: "auto",
    minWidth: "220px",
    border:"1px solid #0A4FA4",
    color:'#0A4FA4',
    textTransform:'capitalize',
    fontSize:16,
    [theme.breakpoints.down('sm')]:{
      minWidth:"200px",
      gap:4,
    }
  },

Activebutton:{
    backgroundColor: "#0A4FA4",
    color: "#fff !important",
    border: "1px solid #0A4FA4",
},

//userend Home

userEndHeaderContainer:{
    borderBottom:'1px solid #0A4FA4',
    color:'#0A4FA4',
    fontWeight:800,
},
titleText:{
 color:'black',
},

homeBackarrowbox:{
 display:'flex',
 gap:"2px",
 justifyContent:'start',
 alignItems:'center'
},
UserendbackArrow:{
 cursor:'pointer',
 fontSize:'12px',
 paddingBottom:"18px",
 color:theme.palette.primary.dark,
 [theme.breakpoints.down('sm')]:{
  fontSize:'15px',
}
},
useHeaderTextfiled:{
     width:"400px",
     "& .MuiOutlinedInput-root":{
            "& fieldset":{
             borderColor:'#0A4FA4',
            },
            "&:hover fieldset":{
             borderColor:'#0A4FA4',
            },
            "&. Mui-focused fieldset":{
                borderColor:'#0A4FA4',
            }},
       [theme.breakpoints.down('md')]:{
         width:'100%'
       }     
},

buttonContainer:{
 display:'flex',
 marginTop:"20px",
 gap:20,
 justifyContent:'center',
 
},
headerSaveButton:{
 background:"#0A4FA4",
 px:10,
 color:'white',
 textTransform:'capitalize',
 padding:"0px 40px" 
},
headerCancelButton:{
 background:"#FF3326",
 px:10,
 color:'white',
 textTransform:'capitalize',
 padding:"6px 40px" 
},   

//userEnd Hero Section page
useHerocontainer:{
  display:"flex",
  flexDirection:"column",
   gap:3,
   paddingRight:"30px",
   [theme.breakpoints.down('md')]:{
     paddingRight:"0px",
    
   }
},
addSlidestack:{
 display:"flex",
justifyContent:"space-between",
 flexDirection:"row",
 alignItems:'center', 
},
heroSave:{
 backgroundColor:"#0A4FA4",
 textTransform:'capitalize',
 
},
heroDelete:{
border:'1px solid red',
color:'red',
textTransform:'capitalize',
background:'#F7FAFC',

},
slideAndButtons:{
  display:"flex",
  justifyContent:"space-between",
  flexDirection:"row"
},
Uploadandheadingbox:{
display:"flex",
justifyContent:"flex-start",
gap:140,
flexDirection:'row',
[theme.breakpoints.down('md')]:{
  flexDirection:'column',
  gap:5,
},
},
UploadImageStack:{
 display:"flex", 
 flexDirection:"column",
 gap:14,
},
uploadHerobutton:{
 maxWidth:120,
 borderRadius:'8px',
 textTransform:'capitalize',
 borderColor:'#0A4FA4',
 color:'#0A4FA4',
},
herouploadImageBox:{
  position:'relative',
  width:150
},
herouploadImage:{
width:"140px",
height:"80px",
borderRadius:'10px'
},
cancelImgIcon:{
 position:'absolute',
 top:-6,
 right:0,
 color:"red"
},
errorUpload:{
 color:"red",
 fontSize:'14px'
},
heroTextfiled:{
 width:'600px',

      "& .MuiOutlinedInput-root":{
            "& fieldset":{
             borderColor:'#0A4FA4',
            },
            "&:hover fieldset":{
             borderColor:'#0A4FA4',
            },
            "&. Mui-focused fieldset":{
                borderColor:'#0A4FA4',
            }},
        [theme.breakpoints.down('md')]:{
          width:'100%',
        } ,   
      },
heroDivider:{
 border:'1px solid #0A4FA4',
 marginTop:5,
},

//userCorporate page start
corporateStack1:{
  display:"flex",
  flexDirection:'row',
  justifyContent:"space-between" ,
  paddingRight:"20px",
},
corporateImageBox:{
 display:"flex",
 gap:12,
 flexDirection:"column",
},
CorporateuploadImageStack:{
 display:"flex",
 flexDirection:"row",
 gap:13,
 marginTop:'20px',
 [theme.breakpoints.down('md')]:{
  flexWrap:'wrap',
  gap:8,
}
},
corporateCountImgBox:{
 display:'flex',
 position:'relative',
 gap:10,
 width:'140px'
},
corporateImgCancelIcon:{
   position:'absolute',
   top:-12,
   color:'red',
   right:0
},
corporatePlusbutton:{
  background:"#F7FAFC",
  color:'black'
},
corporateSaveCancel:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  gap:15,
},
corporateSave:{
 background:theme.palette.primary.dark,
 color:'#ffff',
 textTransform:'capitalize'
},
corporateCancel:{
  background:'red',
  color:'#ffff',
  textTransform:'capitalize'
},


//userendMotto start

MottoBoxText:{
 textDecoration:'underline',
 color:'black'
},
//userend-About start

UploadandAboutbox:{
display:"flex",
justifyContent:"flex-start",
gap:440,
flexDirection:'row',
[theme.breakpoints.down('md')]:{
  flexDirection:'column',
  gap:5,
},
},

//userend Projects start
dropDownSelect:{
  
  "& .MuiInputBase-input": {
      color: "#0A4FA4",  
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0A4FA4",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0A4FA4",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0A4FA4",
      borderWidth: "2px",
    },
    borderRadius: "6px",
    
},
projectsUploadContentbox:{
display:"flex",
justifyContent:"flex-start",
gap:220,
flexDirection:'row',
[theme.breakpoints.down('md')]:{
  flexDirection:'column',
  gap:5,
},
},

FormCurageBox:{
display:'flex',
width:'100%',
justifyContent:'space-between',
[theme.breakpoints.down('sm')]:{
  flexDirection:'column',
}

},
headingDescbox:{
 display:'flex',
flexDirection:"column",
gap:13,
},

}));

export default useUserEndwebStyles;