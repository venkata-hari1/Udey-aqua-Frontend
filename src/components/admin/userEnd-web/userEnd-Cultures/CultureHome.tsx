import { Box,  Typography } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
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
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { AddSubpage, ArrowBack} from '../userEnd-Aboutus/AboutUsButtons';

interface CultureItem{
  id:string,
  menu:string,
  content:ReactNode
}

const CultureHome = () => {

  //const{classes}=useUserEndwebStyles();
  const{classes:aboutus}=useAboutusStyles();
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
  const [subpageTitle, setSubpageTitle] = useState("");
 
const handleTitleChange = (id: string, value: string) => {
  setCulturesdata((prev) =>
    prev.map((item) => (item.id === id ? { ...item, menu: value } : item))
  );
};
const handleBackarrow=()=>{
 navigate('/admin/userend-web')
}

{/*const handleAddSubpage=()=>{
const newCulturedata={id:uuidv4(),menu:`Subpage ${culturesdata.length+1}`,content:<Culturessubpage />}; 
  setCulturesdata((prev)=>[...prev,newCulturedata]); 
  /* navigate('/admin/userend-web/userend-culture/subpage') 
}*/}
const handleAddSubpage = () => {
  const newSubpageId = uuidv4();
  const newCulturedata: CultureItem = {
    id: newSubpageId,
    menu: `Subpage ${culturesdata.length + 1}`,
    content: (
      <Culturessubpage
        title={subpageTitle}
        setTitle={(value) => {
          setSubpageTitle(value);
          handleTitleChange(newSubpageId, value); 
        }}/>
    ),
  };
  setCulturesdata((prev) => [...prev, newCulturedata]);
};
  return (
   
     <Box className={aboutus.AboutUscontainer}>
      <Box className={aboutus.AboutUsHeaderbox}>
           <Box className={aboutus.AboutUsArrowAndHeaderBox}>
            <ArrowBack onClick={handleBackarrow}/>
            <Typography className={aboutus.AboutUsHeader}>Culture</Typography>
            </Box>
          <Box className={aboutus.AboutUsHeaderButtonBox}>
            <AddSubpage onClick={handleAddSubpage}/>
          </Box>
      </Box>
      <Box className={aboutus.AccordianBox}>
    {culturesdata.map((menu,index)=>(
       <Accordion key={index}  className={aboutus.AccordiaStack}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
         <Typography component="span" className={aboutus.AccordianText}>{menu.menu}</Typography>
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
