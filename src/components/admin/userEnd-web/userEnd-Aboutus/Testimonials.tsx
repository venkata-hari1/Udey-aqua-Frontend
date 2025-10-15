import {useAboutusStyles} from './AboutusStyles';
import { Box, } from '@mui/material';
import { AddHighlights, AddTestimonials, } from './AboutUsButtons';
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
    const handleAddSubHighlights = (type: 'Highlights' | 'Testimonials') => {
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
            setSubHighlights((prev) => prev.filter((sub) => sub.id !== subId));
        } else {
            setSubTestimonials((prev) => prev.filter((sub) => sub.id !== subId));
        }
    }; 
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1,gap:2}}>
                 <Badge
                    badgeContent={Highlights}
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
                    <AddHighlights onClick={()=>handleAddSubHighlights('Highlights')}/>
                </Badge>
                <Badge
                    badgeContent={Testimonials}
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
                    <AddTestimonials onClick={()=>handleAddSubHighlights('Testimonials')}/>
                </Badge>
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
