import { Box, Button, Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useUserEndwebStyles from "../UserendwebStyles";
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import CultureHero from "./CultureHero";
import CulturesImage from "./CulturesImage";
import CultureSeabass from "./CultureSeabass";
import CulturePearsport from "./CulturePearspot";
import CultureMudcrabs from "./CultureMudcrabs";
import CultureMurrel from "./CultureMurrel";

const CultureHome = () => {

  const{classes}=useUserEndwebStyles()
  const navigate=useNavigate()
  
  const culturemenudata=[
   
   {id:1,menu:"Hero Section",content:<CultureHero />} ,
   {id:2,menu:"Cultures Image",content:<CulturesImage />} ,
   {id:3,menu:"Sae Bass",content:<CultureSeabass />} ,
   {id:4,menu:"Pear Spot",content:<CulturePearsport />} ,
   {id:5,menu: "Mud Crab",content:<CultureMudcrabs />} ,
   {id:6,menu:"Murrel",content:<CultureMurrel />} ,
   {id:7,menu:"Tilapia",content:''} ,
   {id:8,menu:"Our Projects",content:""} ,
   {id:9,menu:"Sea Weed",content:''} , 
]

const handleBackarrow=()=>{
 navigate('/admin/userend-web')
}


  return (
   
     <Box>
      <Box className={classes.cultureHomebox}>
           <Box className={classes.culturebackarrowbox}>       
           <ArrowBackIcon className={classes.culturebackbutton}
           onClick={handleBackarrow}/>
          <Typography className={classes.cultureHomeTitle}>Cultures</Typography>
          </Box>
          <Button variant="contained" className={classes.addSubpagebutton}
          startIcon={<AddIcon />}>Add Subpage</Button>
      </Box>
      <Box className={classes.CulturehomeMaincontainer}>
    {culturemenudata.map((menu,index)=>(
       <Accordion key={index} className={classes.userEndHeaderContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
         <Typography component="span" className={classes.accardianTypoMenu}>{menu.menu}</Typography>
         </AccordionSummary>
         <AccordionDetails>
           {menu.content}
         </AccordionDetails>
         </Accordion>
    ))}
    </Box>
    </Box>

   
  )
}

export default CultureHome
