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
import CultureTelipia from "./CultureTelipia";
import CultureSeaweeds from "./CultureSeaweeds";
import { useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import Culturessubpage from "./Culturessubpage";

interface CultureItem{
  id:string,
  menu:string,
  content:ReactNode
}

const CultureHome = () => {

  const{classes}=useUserEndwebStyles()
  const navigate=useNavigate()
  const[culturesdata,setCulturesdata]=useState<CultureItem[]>([
    
   {id:uuidv4(),menu:"Hero Section",content:<CultureHero />} ,
   {id:uuidv4(),menu:"Cultures Image",content:<CulturesImage />} ,
   {id:uuidv4(),menu:"Sae Bass",content:<CultureSeabass />} ,
   {id:uuidv4(),menu:"Pear Spot",content:<CulturePearsport />} ,
   {id:uuidv4(),menu: "Mud Crab",content:<CultureMudcrabs />} ,
   {id:uuidv4(),menu:"Murrel",content:<CultureMurrel />} ,
   {id:uuidv4(),menu:"Tilapia",content:<CultureTelipia />} ,
   {id:uuidv4(),menu:"Sea Weed",content:<CultureSeaweeds />} , 
  ])
  
const handleBackarrow=()=>{
 navigate('/admin/userend-web')
}

const handleAddSubpage=()=>{
const newCulturedata={id:uuidv4(),menu:`Subpage ${culturesdata.length+1}`,content:<Culturessubpage />}; 
  setCulturesdata((prev)=>[...prev,newCulturedata]); 
  /* navigate('/admin/userend-web/userend-culture/subpage') */
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
          startIcon={<AddIcon />}
          onClick={handleAddSubpage}>Add Subpage</Button>
      </Box>
      <Box className={classes.CulturehomeMaincontainer}>
    {culturesdata.map((menu,index)=>(
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
