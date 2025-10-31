import { Box } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserendHeader from "./UserendHeader";
import UserendHero from "./UserendHero";
import UserendCorporates from "./UserendCorporates";
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
import { useDispatch } from "react-redux";
import { setExpandAccordian } from "../../../../redux/reducers/Nav";
const UserEndHome = () => {

const{classes:aboutus}=useAboutusStyles()
const navigate=useNavigate()
const dispatch = useDispatch()
const AccordianData=[
   {id:1,menu:"Header",type: "component",content:UserendHeader} ,
   {id:2,menu:"Hero Section",type: "component",content:UserendHero } ,
   {id:3,menu:"Our Corporates",type: "component",content:UserendCorporates} ,
   {id:4,menu:"Our Motto",type: "link",link:'/admin/userend-web/userend-aboutus' } ,
   {id:5,menu: "About Us",type: "component",content:UserEndabout } ,
   {id:6,menu:"Why Choose Us",type: "component",content:UserendWhychoose } ,
   {id:7,menu:"Add Video",type: "component",content:UserEndAddvideo} ,
   {id:8,menu:"Our Projects",type: "component",content:UserEndProjects } ,
   {id:9,menu:"Testimonials",type: "link",link:'/admin/userend-web/userend-aboutus' } , 
   {id:10,menu:"News & Events",type: "link",link:'/admin/userend-web/userend-news&events' } , 
   {id:11,menu:"Pricing",type: "component",content:UserendPricing } , 
   {id:12,menu:"Our Directors & Advisors",type: "link",link:'/admin/userend-web/userend-aboutus' } ,
   {id:13,menu:"Get In Touch",type: "component",content:UserendGetintouch } ,  
   {id:14,menu:"Footer",type: "component",content:UserendFooter }, 
]
const handleDispatch=(id:string,link :string)=>{
  dispatch(setExpandAccordian(id))
  navigate(link)
}
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
         {AccordianData.map((item) => {
            return (
               <Accordion key={item.id} className={aboutus.AccordiaStack}
                onClick={item.type === "link" && item.link ? () => handleDispatch(item.menu, item.link):undefined}>
                  <AccordionSummary
                    expandIcon={item.type === "component" ? <ExpandMoreIcon /> : null}
                    sx={{
                      cursor: "pointer",
                      "&:hover .MuiTypography-root": { color: "#0A4FA4" },
                    }}
                  >
                  <Typography
                    sx={{
                      color:'#0A4FA4',
                      textDecoration: item.type === "link" ? "underline" : "none",
                    }}
                  >
                    
                    {item.menu}
                  </Typography>
                </AccordionSummary>

  {item.type === "component" && item.content && (
    <AccordionDetails>
      {(() => {
        const Component = item.content;
        return <Component id="" accordianId="" Section="" title='' />;
      })()}
    </AccordionDetails>
  )}
</Accordion>

            );
         })}
         </Box>

     </Box>
  )
}

export default UserEndHome
