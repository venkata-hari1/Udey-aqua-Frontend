import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box} from '@mui/material';
import Hero from '../userEnd-Aboutus/Hero';
import Subsection from '../userEnd-Aboutus/Subsection';
import { useState } from 'react';
import SubHighlights from '../userEnd-Aboutus/SubHighlights';
import { BadgeButton } from '../userEnd-Aboutus/AboutUsButtons';

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
            setHighlights((prev) => {
            const filtersubpages =prev.filter((sub) => sub.id !== subId);
            const reindexing = filtersubpages.map((sub,index)=>({
                id:`Milestone-${index+2}`
            }))
            return reindexing
        });
            sethighlightscounter(Highlights-1);
        } else {
            setSubpages((prev) => {
            const filtersubpages =prev.filter((sub) => sub.id !== subId);
            const reindexing = filtersubpages.map((sub,index)=>({
                id:`Milestone-${index+2}`
            }))
            return reindexing
        });
            setCounter(SubSection-1);
        }
    }; 
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1,gap:2}}>
                <BadgeButton label='Add Highlights' counter={Highlights} onClick={()=>handleAddSubpage('Highlights')}/>
                <BadgeButton label='Add Sections' counter={SubSection} onClick={()=>handleAddSubpage('Subsections')}/>                
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