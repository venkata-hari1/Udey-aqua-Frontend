import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box} from '@mui/material';
import Hero from '../userEnd-Aboutus/Hero';
import Subsection from '../userEnd-Aboutus/Subsection';
import { AddHighlights, AddSection } from '../userEnd-Aboutus/AboutUsButtons';
import { useState } from 'react';

type HeroProps={
    id?:string;
    accordianId?:string;
    Section:string
}
 const SuccessStories=({id,accordianId,Section}:HeroProps)=>{
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
        const [counter, setCounter] = useState<any>([1]);
        const {classes} = useAboutusStyles();
        const handleAddSubpage = () => {
            const newId = `Sub Section-${counter.length+1}`; // unique id
            setSubpages((prev) => [...prev, { id: newId }]);
            setCounter((prev:any) => [...prev, newId])
        };
        const handleDeleteSubpage = (subId: string) => {
            setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
        };
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1}}>
                <AddHighlights/>
                <AddSection onClick={handleAddSubpage}/>
            </Box>
            <Box>
                <Hero id={id} accordianId={accordianId} Section={Section} title='About us'/>
            </Box>
            <Subsection id='Sub Section-1' accordianId={accordianId} Section={Section}  />
            {subpages.map((sub) => (
                <Subsection key={sub.id} id={sub.id} accordianId={id} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
            ))}
         </Box>
        </>
    )
 }
 export default SuccessStories