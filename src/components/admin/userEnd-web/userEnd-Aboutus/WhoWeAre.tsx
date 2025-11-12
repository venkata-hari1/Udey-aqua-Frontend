import {useAboutusStyles} from './AboutusStyles';
import { Box,} from '@mui/material';
import { BadgeButton} from './AboutUsButtons';
import Subsection from './Subsection';
import { useState,} from 'react';
import Hero from './Hero';

type WhoweareProps={
    id:string;
    accordianId:string
    Section:string
}
const WhoWeAre=({id,accordianId,Section}:WhoweareProps)=>{
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [counter, setCounter] = useState<number>(1);
    const {classes} = useAboutusStyles();
    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter +1)
    };
    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => {
            const filtersubpages =prev.filter((sub) => sub.id !== subId);
            const reindexing = filtersubpages.map((sub,index)=>({
                id:`Sub Section-${index+2}`
            }))
            return reindexing
        });

        setCounter(counter -1)
    };
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1}}>
                <BadgeButton label='Add Section' counter={counter} onClick={handleAddSubpage}/>         
            </Box>
            <Box>
                <Hero id='1' accordianId={accordianId} Section={Section} title='About us'/>
            </Box>
            <Subsection id='Sub Section-1' accordianId={accordianId} Section={Section} title='About us' />
            {subpages.map((sub) => (
                <Subsection key={sub.id} id={sub.id} accordianId={id} Section={Section} title='About us' onDelete={() => handleDeleteSubpage(sub.id)} />
            ))}
         </Box>
        </>
    )
}


export default WhoWeAre;