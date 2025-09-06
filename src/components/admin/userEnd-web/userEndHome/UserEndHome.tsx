import { Box } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useUserEndwebStyles from "../UserendwebStyles";
import UserendHeader from "./UserendHeader";



const UserEndHome = () => {

const{classes}=useUserEndwebStyles()

const homemenudata=[
   {id:1,menu:"Header",content:<UserendHeader />} ,
   {id:2,menu:"Header Section",content:"Header section content"} ,
   {id:3,menu:"Our Corporates",content:""} ,
   {id:4,menu:"Our Motto",content:""} ,
   {id:5,menu: "About Us",content:""} ,
   {id:6,menu:"Why Choose Us",content:""} ,
   {id:7,menu:"Add Video",content:""} ,
   {id:8,menu:"Our Projects",content:""} ,
   {id:9,menu:"Testimonials",content:""} , 
   {id:9,menu:"News & Events",content:""} , 
   {id:9,menu:"Pricing",content:""} , 
   {id:9,menu:"Our Directors & Advisors",content:""} ,
   {id:9,menu:"Get In Touch",content:""} ,  
   {id:9,menu:"Footer",content:""} , 
]

 return (
    <Box>
     <Typography color="#0A4FA4" mb={2}>Home</Typography> 
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
