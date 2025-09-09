import { Box } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useUserEndwebStyles from "../UserendwebStyles";
import UserendHeader from "./UserendHeader";
import UserendHero from "./UserendHero";
import UserendCorporates from "./UserendCorporates";
import UserEndMotto from "./UserEndMotto";
import UserEndabout from "./UserEndabout";
import UserendWhychoose from "./UserendWhychoose";
import UserEndAddvideo from "./UserEndAddvideo";
import UserEndProjects from "./UserEndProjects";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useNavigate } from "react-router-dom";


const UserEndHome = () => {

const{classes}=useUserEndwebStyles()
const navigate=useNavigate()
const homemenudata=[
   {id:1,menu:"Header",content:<UserendHeader />} ,
   {id:2,menu:"Hero Section",content:<UserendHero />} ,
   {id:3,menu:"Our Corporates",content:<UserendCorporates />} ,
   {id:4,menu:"Our Motto",content:<UserEndMotto />} ,
   {id:5,menu: "About Us",content:<UserEndabout />} ,
   {id:6,menu:"Why Choose Us",content:<UserendWhychoose />} ,
   {id:7,menu:"Add Video",content:<UserEndAddvideo />} ,
   {id:8,menu:"Our Projects",content:<UserEndProjects />} ,
   {id:9,menu:"Testimonials",content:""} , 
   {id:9,menu:"News & Events",content:""} , 
   {id:9,menu:"Pricing",content:""} , 
   {id:9,menu:"Our Directors & Advisors",content:""} ,
   {id:9,menu:"Get In Touch",content:""} ,  
   {id:9,menu:"Footer",content:""} , 
]

const handleBackarrow=()=>{
 navigate('/admin/userend-web')
}
 return (
    <Box>
      <Box className={classes.homeBackarrowbox}>
      <ArrowBackIosOutlinedIcon className={classes.UserendbackArrow}
      onClick={handleBackarrow}/>
      <Typography color="#0A4FA4" mb={2}>Home</Typography>
      </Box>
      
     
     {homemenudata.map((menu,index)=>(
        <Accordion key={index} className={classes.userEndHeaderContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
         <Typography component="span">{menu.menu}</Typography>
         </AccordionSummary>
         <AccordionDetails>
           {menu.content}
         </AccordionDetails>
         </Accordion>
        ))}
     </Box>
  )
}

export default UserEndHome
