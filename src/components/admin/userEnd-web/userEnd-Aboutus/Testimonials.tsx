import {useAboutusStyles} from './AboutusStyles';
import { Box, } from '@mui/material';
import { AddHighlights, AddTestimonials, } from './AboutUsButtons';
import { useState,  } from 'react';
import SubHighlights from './SubHighlights';
interface TestimonialsProps {
  accordianId:string;
  id: string;
  Section:string
}
const Testimonials=({  id,  }: TestimonialsProps)=>{
    const {classes} = useAboutusStyles();
    const [sudHighlights, setSubHighlights] = useState<{ id:string}[]>([]);
    const [sudTestimonials, setSubTestimonials] = useState<{ id:string}[]>([]);
    const [Highlights, setHighlights] = useState<any>([]);
    const [Testimonials, setTestimonials] = useState<any>([]);
    const handleAddSubHighlights = (type: 'Highlights' | 'Testimonials') => {
        const newId =  `${(type === 'Highlights' ? Highlights.length : Testimonials.length) + 1}`
        if (type === 'Highlights') {
            setSubHighlights((prev) => [...prev, { id: newId }]);
            setHighlights((prev: any) => [...prev, newId]);
        } else {
            setSubTestimonials((prev) => [...prev, { id: newId }]);
            setTestimonials((prev: any) => [...prev, newId]);
        }
    }; 
    const handleDeleteSubHighlights = (type: 'Highlights' | 'Testimonials',subId: string) => {
        if (type === 'Highlights') {
            setSubHighlights((prev) => prev.filter((sub) => sub.id !== subId));
        } else {
            setSubTestimonials((prev) => prev.filter((sub) => sub.id !== subId));
        }
    }; 
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1,gap:2}}>
                <AddHighlights onClick={()=>handleAddSubHighlights('Highlights')}/>
                <AddTestimonials onClick={()=>handleAddSubHighlights('Testimonials')}/>
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
