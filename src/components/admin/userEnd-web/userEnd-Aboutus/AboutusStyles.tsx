import { makeStyles } from "tss-react/mui"
import type { Theme } from "@mui/material/styles"

export const useAboutusStyles = makeStyles()((theme: Theme) => ({

myHeroContainer:{
  display:'flex',
  flexDirection:'column',
  gap:3,
  paddingRight:"30px",

},
deleteButtonBox:{
    display:'flex',
    justifyContent:'flex-end'
},
deleteButton:{
    border:'1px solid red',
    color:'red',
    height:'37px',
    padding:'0px 22px',
    textTransform:'capitalize',
    background:'#F7FAFC',
    borderRadius:'7px'
},
myuploadandheadingbox:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
},
myImagebox:{
    display:'flex',
    flexDirection:'column',
    gap:3
},
myHeadingtext:{
    color:'black',
    fontSize:'12px',
    position:'relative',
    fontFamily:'Poppins,sans-serif',
    fontWeight:500,
    textTransform:'capitalize'
},
myuploadFileButton:{
    positon:'relative', 
    borderRadius: "12px", 
    padding: "8px 20px",
    borderColor:'rgba(10,79,164,1)',
    textTransform:'capitalize'
},
mytext:{
  color:'black',
  textTransform:'capitalize'
},
myUploadStack:{
  display:'flex',
  flexDirection:'column',
  gap:10
},
myImageUploadBox:{
  display:'flex',
  flexDirection:'column',
  paddingRight:'30px',
  gap:20
},
TextFiledBox:{
  display:'flex',
  flexDirection:'column',
  gap:10
},
myTextFleid:{
  //maxWidth:'600px',
  "& .MuiOutlinedInput-root":{
            "& fieldset":{
             borderColor:'#0A4FA4',
            },
            "&:hover fieldset":{
             borderColor:'#0A4FA4',
            },
            "&.Mui-focused fieldset":{
                borderColor:'#0A4FA4',
            }},
  width:'600px'
},
SeveandCancelBox:{
  display:'flex',
  justifyContent:'center',
  gap:15,
  marginTop:'20px',
  position:'relative',
  marginBottom:'20px',
},
SaveButton:{
  background:'#0A4FA4',
  textTransform:'capitalize',
  color:'white',
  padding:"7px 40px",
  borderRadius:'9px',
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "0.875rem",
  boxShadow:'none'
},

CancelButton:{
  background:'#FF3326',
  textTransform:'capitalize',
  color:'white',
  padding:"7px 30px",
  borderRadius:'9px',
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "0.875rem",
  boxShadow:'none'
},
ImagesBox:{
  display:'flex',
  flexWrap:'wrap',
  gap:10,

},
ImagespicBox:{
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  gap:10,
  height:'auto'
},
ImagePic:{
  position:'relative',
  width:"90px",
 height:"60px",
  borderRadius:'10px'

},
cancelImgIcon:{
  position:'absolute',
  top:'-5px',
  right:'-5px',
  minWidth:'20px',
  width:'20px',
  height:'20px',
  borderRadius:'50%',
  backgroundColor:'rgba(255, 51, 38, 1)',
  color:'white',
  fontSize:'12px',
  padding:0,
                                              
},


//WhoWeAre

WhoWeAreContainer:{
  display:'flex',
  paddingRight:'30px',
  flexDirection:'column',
  gap:10,
},
AddSection:{
  backgroundColor:"#0A4FA4",
  borderRadius:'7px',
  textTransform:'capitalize',
  boxShadow:'none'
},
AddButton:{
  color:"#0A4FA4",
  borderRadius:'7px',
  textTransform:'capitalize',
  boxShadow:'none',
  fontSize:'16px',
  fontWeight:500
},
AddSectionBox:{
  display:'flex',
  justifyContent:'end',
  //marginBottom:'10px'
},
HeaderText:{
  color:'black',
  textDecoration:'underline'
},
whoWeareHeaderbox:{
  display:'flex',
  justifyContent:'space-between',
  marginTop:'20px',
  alignItems:'center',
  marginBottom:'10px'
},
updateHeaderbutton:{
  background:'#0A4FA4',
  textTransform:'capitalize',
  color:'white',
  padding:"7px 20px",
  borderRadius:'9px',
  fontWeight: 500,
  fontSize: "0.875rem",
  boxShadow:'none'  
},
updateHeaderCancelButton:{
  background:'#FF3326',
  textTransform:'capitalize',
  color:'white',
  padding:"7px 0px",
  borderRadius:'9px',
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "0.875rem",
  boxShadow:'none'
},
heroDivider:{
 border:'0.5px solid rgba(10, 79, 164, 1)',
 marginTop:20,
},
subSectionBox:{
  display:'flex',
  paddingRight:'30px',
  flexDirection:'column',
  gap:3,
  //marginTop:'20px',
  width:'100%'
},
AddMoreButton:{
  height: "60px",
  width: "90px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  background:'rgba(231, 237, 246, 1)',
  textTransform: "none",
  border:'none',
  color:'rgba(0, 0, 0, 0.57)'
},
errorText:{
  fontWeight: 400,              
  fontSize: "14px",              
  textTransform: "none", 
  color:'rgba(243, 70, 70, 1)'
},

//About us

AboutUscontainer:{
  display:'flex',
  flexDirection:'column',
  gap:5,
  color:'#fff',
  padding:'15px 15px 15px 30px',
},
AboutUsHeaderbox:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  width:'100%',
  marginBottom:'20px'
},
AboutUsArrowAndHeaderBox:{
  display:'flex',
  flexDirection:'row',
  gap:5,
  alignItems:'center'
},
ArrowBack:{
  color:`${theme.palette.primary.dark}`,
  fontSize:'18px'
},
AboutUsHeader:{
  color:`${theme.palette.primary.dark}`,
  fontWeight:'600',
  fontSize:'20px',
  lineHeight:'1.5',

},
AboutUsHeaderButtonBox:{
  display:'flex',
  justifyContent:'flex-end'
},
AccordianBox:{
  display:'flex',
  flexDirection:'column',
  paddingLeft:'35px',
  boxShadow:'none'
},
AccordiaStack:{
  display:'flex',
  flexDirection:'column',
  gap:3,
  //backgroundColor: '#fefefe',   
  //boxShadow: '0px 1px 3px rgba(0,0,0,0.15)',
  boxShadow:'none',
  boxSizing:'border-box',
  borderBottom:`0.5px solid rgba(10, 79, 164, 1)  `,
  "&:before": { display: "none" },
  minHeight:'48px',
  position:'relative',
  justifyContent:'center',
  "& .MuiAccordionSummary-root": {
    paddingLeft: "0px", 
  },
  

},
AccordianText:{
  color:`${theme.palette.primary.dark}`,
  fontWeight:550,
  fontSize:'16px'
},
DialoagBox:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
},
DialogContent:{
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center',
  textAlign: 'center'
},
// OurDirectors

OurDirectorsUploadStack:{
  display:'flex',
  flexDirection:'column',
  gap:10,
  marginTop:'20px'
},
helperText:{
  color:'red'
},
greyText:{
  colour:'grey'
},

SubPageContainer:{
  display:'flex',
  flexDirection:'column',
  gap:5,
  paddingLeft:'30px'

},
TestmonialPic:{
position:'relative',
  width:"60px",
 height:"60px",
  borderRadius:'50%'
},
PricingMainContainer:{
        display:'flex',
        flexDirection:'column',
        paddingX:'20px',
        gap:20
    },
    PricingAddPriceButtonBox:{
        display:'flex',
        justifyContent:'flex-end'
    },
    AddplanButton:{
        backgroundColor:'#0A4FA4',
        color:'white',
        borderRadius:'9px',
        boxShadow:'none',
        fontWeight:500,
        fontSize:'14px',
        textTransform:'capitalize'

    },
    DeleteButtonBox:{
        display:'flex',
        justifyContent:'flex-end'
    },
    DeleteButton:{
        backgroundColor:'#F7FAFC',
        border:'1px solid red',
        color:'red',
        borderRadius:'7px',
        textTransform:'capitalize',
        padding:'0px 22px',
        height:'37px'
    },
    PlanBox:{
        display:'flex',
        flexDirection:'column',
        //gap:20,
        maxWidth:'787px'
    },
    PlanText:{
        textDecoration:'underline',
        fontWeight:500,
        fontSize:'18px'
    },
    TitleandplanText:{
        fontWeight:500,
        fontSize:"20px",
        textTransform:'capitalize'
    },
    titleandpriceTextfield:{
        width:'600px',
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "1px solid #0A4FA4",
            },
            "&:hover fieldset": {
                border: "1px solid #0A4FA4",
            },
            "&.Mui-focused fieldset": {
                border: "1px solid #0A4FA4", 
            },
        }

    },
    TitleandTextfieldBox:{
        paddingLeft:'48px',
        display:'flex',
        flexDirection:'row',
        gap:100,
        height:'100px',
        alignItems:'baseline'
    },
    TitleandTextfieldBoxMulti:{
        paddingLeft:'48px',
        display:'flex',
        flexDirection:'row',
        gap:100,
        alignItems:'flext-start',
        height:'170px'
    },
    
    UpdateandCancelButtonBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:20
    },
    quillEditor: {
        "& .ql-editor": {
        minHeight: "250px",
        maxHeight: "500px",
        overflowY: "auto",
        //color:'#0A4FA4'
        },
    },
    updatebutton:{
        background:'#0A4FA4',
        textTransform:'capitalize',
        color:'#FFFFFF',
        padding:"7px 40px",
        borderRadius:'9px',
        fontWeight: 500,
        fontSize: "14px",
        boxShadow:'none'  
    },
    
    //Training Program
    Trainingprogramcontainer:{
        display:'flex',
        flexDirection:'column',
        gap:5,
        color:'#fff',
        padding:'15px',
    },
    TrainingProgramHeaderBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
    },
}))