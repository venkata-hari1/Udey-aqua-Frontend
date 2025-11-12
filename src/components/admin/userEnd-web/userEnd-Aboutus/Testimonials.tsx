import {useAboutusStyles} from './AboutusStyles';
import { Box, } from '@mui/material';
import { AddSection, BadgeButton,  } from './AboutUsButtons';
import { useState,  } from 'react';
import SubHighlights from './SubHighlights';
import  Badge  from "@mui/material/Badge";
interface TestimonialsProps {
  accordianId:string;
  id: string;
  Section:string
}
const Testimonials=({  id,  }: TestimonialsProps)=>{
    const {classes} = useAboutusStyles();
    const [sudHighlights, setSubHighlights] = useState<{ id:string}[]>([]);
    const [sudTestimonials, setSubTestimonials] = useState<{ id:string}[]>([]);
    const [Highlights, setHighlights] = useState<number>(0);
    const [Testimonials, setTestimonials] = useState<number>(0);
    const handleAddSubpage = (type: 'Highlights' | 'Testimonials') => {
        const newId =  `${(type === 'Highlights' ? Highlights : Testimonials) + 1}`
        if (type === 'Highlights') {
            setSubHighlights((prev) => [...prev, { id: newId }]);
            setHighlights(Highlights+1);
        } else {
            setSubTestimonials((prev) => [...prev, { id: newId }]);
            setTestimonials(Testimonials+1);
        }
    }; 
    const handleDeleteSubHighlights = (type: 'Highlights' | 'Testimonials',subId: string) => {
        if (type === 'Highlights') {
            setSubHighlights((prev) => {
            const filtersubpages =prev.filter((sub) => sub.id !== subId);
            const reindexing = filtersubpages.map((sub,index)=>({
                id:`Milestone-${index+2}`
            }))
            return reindexing
        });
            setHighlights(Highlights-1);
        } else {
            setSubTestimonials((prev) => {
            const filtersubpages =prev.filter((sub) => sub.id !== subId);
            const reindexing = filtersubpages.map((sub,index)=>({
                id:`Milestone-${index+2}`
            }))
            return reindexing
        });
            setTestimonials(Testimonials-1);
        }
    }; 
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1,gap:2}}>
                 <BadgeButton label='Add Highlights' counter={Highlights} onClick={()=>handleAddSubpage('Highlights')}/>
                 <BadgeButton label='Add testimonials' counter={Testimonials} onClick={()=>handleAddSubpage('Testimonials')}/>
            </Box>
            <SubHighlights id='Highlights-1' accordianId={id} subSection='Highlights'/>
            {sudHighlights.map((sub) => (
                <SubHighlights key={sub.id} id={sub.id} accordianId={id} subSection='Highlights' onDelete={() => handleDeleteSubHighlights('Highlights',sub.id)} />
            ))}
            <SubHighlights id='Testimonials-1' accordianId={id} subSection='Testimonials'/>
            {sudTestimonials.map((sub) => (
                <SubHighlights key={sub.id} id={sub.id} accordianId={id} subSection='Testimonials' onDelete={() => handleDeleteSubHighlights('Testimonials',sub.id)} />
            ))}
         </Box>
        </>
    )
}
export default Testimonials;
