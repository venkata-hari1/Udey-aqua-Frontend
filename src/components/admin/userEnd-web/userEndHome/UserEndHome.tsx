import { Box } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserendHeader from "./UserendHeader";
import UserendHero from "./UserendHero";
import UserendCorporates from "./UserendCorporates";
import UserEndMotto from "./UserEndMotto";
import UserEndabout from "./UserEndabout";
import UserendWhychoose from "./UserendWhychoose";
import UserEndAddvideo from "./UserEndAddvideo";
import UserEndProjects from "./UserEndProjects";
import { useNavigate } from "react-router-dom";
import UserendTestimonials from "./UserendTestimonials";
import UserendNewsEvents from "./UserendNewsEvents";
import UserendPricing from "./UserendPricing";
import UserendDirectors from "./UserendDirectors";
import UserendGetintouch from "./UserendGetintouch";
import UserendFooter from "./UserendFooter";
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import {  ArrowBack} from '../userEnd-Aboutus/AboutUsButtons';
const UserEndHome = () => {

const{classes:aboutus}=useAboutusStyles()
const navigate=useNavigate()

const AccordianData=[
   {id:1,menu:"Header",content:UserendHeader} ,
   {id:2,menu:"Hero Section",content:UserendHero } ,
   {id:3,menu:"Our Corporates",content:UserendCorporates} ,
   {id:4,menu:"Our Motto",content:UserEndMotto } ,
   {id:5,menu: "About Us",content:UserEndabout } ,
   {id:6,menu:"Why Choose Us",content:UserendWhychoose } ,
   {id:7,menu:"Add Video",content:UserEndAddvideo} ,
   {id:8,menu:"Our Projects",content:UserEndProjects } ,
   {id:9,menu:"Testimonials",content:UserendTestimonials } , 
   {id:10,menu:"News & Events",content:UserendNewsEvents } , 
   {id:11,menu:"Pricing",content:UserendPricing } , 
   {id:12,menu:"Our Directors & Advisors",content:UserendDirectors } ,
   {id:13,menu:"Get In Touch",content:UserendGetintouch } ,  
   {id:14,menu:"Footer",content:UserendFooter }, 
]

const handleBackarrow=()=>{
 navigate('/admin/userend-web')
}
 return (
    <Box className={aboutus.AboutUscontainer}>
      <Box className={aboutus.AboutUsArrowAndHeaderBox}>
        <ArrowBack onClick={handleBackarrow}/>
        <Typography className={aboutus.AboutUsHeader}>Home</Typography>
      </Box>
      <Box className={aboutus.AccordianBox}>
      {AccordianData.map((item)=>{
        const Component=item.content
        return(
        <Accordion key={item.id} className={aboutus.AccordiaStack}>
           <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography className={aboutus.AccordianText}>{item.menu}</Typography>
           </AccordionSummary>
                <AccordionDetails>
                  <Component  />
                </AccordionDetails>
        </Accordion>
        );
        })
        }
        </Box>
     </Box>
  )
}

export default UserEndHome
