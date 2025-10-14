import {useAboutusStyles} from './AboutusStyles';
import { Box,} from '@mui/material';
import { AddSection,} from './AboutUsButtons';
import Subsection from './Subsection';
import { useState, } from 'react';
import Hero from './Hero';

type OurHistoryProps={
    id:string;
    accordianId:string;
    Section:string
}


 const OurHistory=({id,accordianId,Section}:OurHistoryProps)=>{
    const {classes} = useAboutusStyles();
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [counter, setCounter] = useState<any>([1]);
    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter.length+1}`; 
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
                <AddSection onClick={handleAddSubpage}/>
            </Box>
            <Box>
                <Hero id={id} accordianId={accordianId} Section={Section} title='About us'/>
            </Box>
            <Subsection id='Sub Section-1' accordianId={accordianId} Section={Section}/>
             {subpages.map((sub) => (
                <Subsection key={sub.id} id={sub.id} accordianId={id} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
            ))}
         </Box>
        </>
    )
}
export default OurHistory;