import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box} from '@mui/material';
import Hero from '../userEnd-Aboutus/Hero';
import Subsection from '../userEnd-Aboutus/Subsection';
import {  AddSection } from '../userEnd-Aboutus/AboutUsButtons';
import { useState } from 'react';
import  Badge  from "@mui/material/Badge";
import SubHighlights from '../userEnd-Aboutus/SubHighlights';

type HeroProps={
    id:string;
    accordianId?:string;
    Section:string
}
 const SuccessStories=({id,accordianId,Section}:HeroProps)=>{
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [highlights, setHighlights] = useState<{ id:string}[]>([]);
        const [SubSection, setCounter] = useState<number>(1);
        const [Highlights, sethighlightscounter] = useState<number>(0);
        const {classes} = useAboutusStyles();
        
       
        const handleAddSubpage = (type: 'Highlights' | 'Subsections') => {
        const newId =  `${(type === 'Highlights' ? Highlights : SubSection ) + 1}`
        if (type === 'Highlights') {
            setHighlights((prev) => [...prev, { id: newId }]);
            sethighlightscounter(Highlights+1);
        } else {
            setSubpages((prev) => [...prev, { id: newId }]);
            setCounter(SubSection+1);
        }
    }; 
    const handleDeleteSubpage = (type: 'Highlights' | 'Subsections',subId: string) => {
        if (type === 'Highlights') {
            setHighlights((prev) => prev.filter((sub) => sub.id !== subId));
            sethighlightscounter(Highlights-1);
        } else {
            setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
            setCounter(SubSection-1);
        }
    }; 
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1,gap:2}}>
                <Badge
                                    badgeContent={0}
                                        sx={{
                                            "& .MuiBadge-badge": {
                                            backgroundColor: "#0A4FA4",
                                            color: "#fff", 
                                            },
                                        }}
                
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                >
                                <AddSection label='Add Highlights' onClick={()=>handleAddSubpage('Highlights')}/>
                                </Badge>
                <Badge
                                    badgeContent={SubSection}
                                        sx={{
                                            "& .MuiBadge-badge": {
                                            backgroundColor: "#0A4FA4",
                                            color: "#fff", 
                                            },
                                        }}
                
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                >
                                <AddSection label='Add Section' onClick={()=>handleAddSubpage('Subsections')}/>
                                </Badge>
            </Box>
            <Box>
                <Hero id={id} accordianId={accordianId} Section={Section} title='News & Events'/>
            </Box>
            <Subsection id='Sub Section-1' accordianId={accordianId} Section={Section} title='News & Events'  />
            {subpages.map((sub) => (
                <Subsection key={sub.id} id={sub.id} accordianId={id} Section={Section} title='News & Events' onDelete={() => handleDeleteSubpage('Subsections',sub.id)} />
            ))}
            {highlights.map((sub) => (
                <SubHighlights key={sub.id} id={sub.id} accordianId={id} subSection='Highlights'  onDelete={() => handleDeleteSubpage('Highlights',sub.id)} />
            ))}
         </Box>
        </>
    )
 }
 export default SuccessStories