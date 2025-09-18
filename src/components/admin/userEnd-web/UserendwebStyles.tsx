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

UserEndMaincontainerbox:{
    marginLeft:'40px',
    [theme.breakpoints.down('md')]:{
      marginLeft:'0px',
    },
  },

userEndHomeTitle:{
  color:"#0A4FA4",
   marginBottom:"10px",
    marginLeft:"10px",
    fontWeight:500,
    fontSize:20,
  [theme.breakpoints.down('md')]:{
     marginLeft:"0px",
     paddingLeft:'0px',
  }
}, 

accardianTypoMenu:{
 fontSize:'16px',
 fontWeight:500,
},
userEndButton: {
    justifySelf: "center",
    width: "auto",
    minWidth: "300px",
    border:"1px solid #0A4FA4",
    color:'#0A4FA4',
    textTransform:'capitalize',
    fontSize:16,
    background:'white',
    [theme.breakpoints.down('sm')]:{
      minWidth:"230px",
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

titleHeading:{
  color:'black',
  marginBottom:"10px",
},
titleText:{
 color:'black',
},

homeBackarrowbox:{
 display:'flex',
 justifyContent:'start',
 alignItems:'center',
 gap:10,
 
},
UserendbackArrow:{
 cursor:'pointer',
 fontSize:'18px',
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
 color:'white',
 textTransform:'capitalize',
 padding:"7px 40px",
 borderRadius:'9px', 
},
headerCancelButton:{
 background:"#FF3326",
 color:'white',
 textTransform:'capitalize',
 padding:"7px 30px",
 borderRadius:'9px', 
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
addingButtonBox:{
 display:"flex",
justifyContent:"end"
},
AddingButton:{
 backgroundColor:"#0A4FA4",
 borderRadius:'7px',
 textTransform:'capitalize',
},
heroSave:{
  borderRadius:'7px',
  backgroundColor:"#0A4FA4",
 textTransform:'capitalize',
 height:'38px',
 padding:'0px 25px',
 color:'white',
},
heroDelete:{
border:'1px solid red',
color:'red',
height:'37px',
 padding:'0px 22px',
textTransform:'capitalize',
background:'#F7FAFC',
borderRadius:'7px',
},
slideAndButtons:{
  display:"flex",
  justifyContent:"space-between",
  flexDirection:"row"
},
Uploadandheadingbox:{
display:"flex",
justifyContent:"space-between",
gap:140,
flexDirection:'row',
marginTop:"20px",
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
 maxWidth:100,
 borderRadius:'8px',
 textTransform:'capitalize',
 borderColor:'#0A4FA4',
 color:'#0A4FA4',
},
herouploadImageBox:{
  position:'relative',
  width:150
},

herouploadImageBox1:{
  display:'flex',
  position:'relative',
  width:150
},
herouploadImage:{
width:"90px",
height:"60px",
borderRadius:'10px'
},
cancelImgIcon:{
 position:'absolute',
 top:-12,
 right:44,
 color:"red",
 
},
avtcancelImgIcon:{
  fontSize:15,
  position:'absolute',
  top:-6,
  left:40,
  color:"red"
},
errorUpload:{
 color:"red",
 fontSize:'13px'
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

userEnddelete:{
display:"flex",
justifyContent:"flex-end"
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
   right:10
},
corporatePlusbutton:{
  background:"#F7FAFC",
  color:'black'
},
corporatePlusbutton1:{
  display:'flex',
  background:"#F7FAFC",
  color:'black',
  width:'20px',
  height:'50px',
  marginTop:'6px',
  marginLeft:'20px',
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
justifyContent:"space-between",
gap:200,
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
  [theme.breakpoints.down('md')]:{
    marginBottom:'12px',
  }  
},
projectsUploadContentbox:{
display:"flex",
justifyContent:"space-between",
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
[theme.breakpoints.down('md')]:{
  flexDirection:'column',
}

},
headingDescbox:{
 display:'flex',
flexDirection:"column",
gap:13,
},

//UserendTestimonials
testimonialTextbox:{
  display:"flex",
   gap:40,
  marginTop:5,
  flexDirection:'row',
  [theme.breakpoints.down('md')]:{
    gap:10,
    flexDirection:'column',
    marginBottom:12,
  }
},
textfiledTestimonial:{
 width:280,

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
//userend News and Events
dropDownSelectBlog:{
  width:'120px',
  display:'flex',
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
    [theme.breakpoints.down('md')]:{
      width:'150px',
    }
   
},
textfiledTestimonialblog:{
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

dateTextfield:{
  paddingRight:'10px',
     "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
    "& input": {
      color: "black",
    },  
  [theme.breakpoints.down('md')]:{
   marginBottom:'10px',
 },

},

FormNewsblogBox:{
display:'flex',
width:'100%',
marginTop:'20px',
justifyContent:'space-between',
[theme.breakpoints.down('md')]:{
  flexDirection:'column',
  justifyContent:'flex-start',
  gap:5,
}
},

dateTextfieldbox:{
 display:"flex",
 justifyContent:'space-evenly',
 marginTop:"5px",
[theme.breakpoints.down('md')]:{
    marginTop:"10px",
    marginBottom:"10px",
    flexWrap:'wrap',
    justifyContent:'flex-start',
  }
},

//..............CULTURES PAGES:..................//

cultureHomebox:{
  display:'flex',
  justifyContent:'space-between',
  alignContents:'center',
  paddingRight:'12px',
  paddingBottom:"8px",
},
culturebackarrowbox:{
 display:"flex",
justifyContent:"center", 
alignItems:"center",
gap:'10px',
},
cultureTitle:{
 color:"#0A4FA4"
},
culturebackbutton:{
  color:"#0A4FA4",
  fontSize:'16px',
  cursor:'pointer',
},
addSubpagebutton:{
  background:'#0A4FA4',
  color:'white',
  textTransform:'capitalize',
  
  textAlign:'center',
  fontSize:'12px'
},
//culture Hero page

cultureheroBox2:{
  display:"flex",
  justifyContent:"space-between",
  flexDirection:'row',
  [theme.breakpoints.down('md')]:{
    flexDirection:'column',
  }
},

//CULUTURE SEABASS
SeaBassContainer:{
  display: "flex", 
  flexDirection: "column", 
  gap:"10px"
},

newsectionStack:{
display:"flex",
justifyContent:"space-between",
flexDirection:'row'
},

sectionSeabassBox:{
  display:"flex",
  justifyContent:"space-between",
  flexDirection:"row",
  [theme.breakpoints.down('md')]:{
    flexDirection:'column'
  }
},

leftsideSectionbox:{
  display: "flex", 
  flexDirection: "column", 
  gap: "15px" 
},

Seabassstack:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'end',
  gap:"6px"
},

pdfButtonbox:{
  display:'flex',
  background:"#e7edf6",
  color:'black',
  width:'20px',
  height:'50px',
  marginTop:'6px',
  marginLeft:'20px',
},

bannerStacktitle:{
  display:"flex", 
  justifyContent:"space-between",
   flexDirection:"row",
  [theme.breakpoints.down('md')]:{
    marginTop:'10px'
  }
},
bannerImagebox:{
  display:"flex",
   justifyContent:"space-between",
   flexDirection:"row",
   [theme.breakpoints.down('md')]:{
    flexDirection:'column'
   }
},
bannerImgboxleft:{
  display:"flex", 
  flexDirection: "column", 
  gap: 3 
},
bannerImageStack:{
  display: "flex", 
  flexDirection: "column", 
  gap: "16px"
},
bannerUploadbox:{
  display:"flex",
  justifyContent:"space-between",
  marginTop:14,
  flexDirection:'row',
  [theme.breakpoints.down('md')]:{
     flexDirection:'column'
  }
},
bannerLeftsidebox:{
  display: "flex", 
  flexDirection: "column", 
  gap: 1,
},
banerLeftsideStack:{
  display: "flex", 
  flexDirection: "column", 
  gap: 12,
},

bannerRightsidestack:{
  display:'flex',
  flexDirection:"column",
   gap:"10px"
},

}));

export default useUserEndwebStyles;