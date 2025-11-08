import Hero from '../userEnd-Aboutus/Hero';
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box,} from '@mui/material';
import { AddSection, BadgeButton,} from '../userEnd-Aboutus/AboutUsButtons';
import Subsection from '../userEnd-Aboutus/Subsection';
import { useState,} from 'react';
import Badge from "@mui/material/Badge";
type WhoweareProps={
    id:string;
    accordianId:string
    Section:string
}
const WhoWeAre=({id,accordianId,Section}:WhoweareProps)=>{
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [counter, setCounter] = useState<number>(1);
    const [newsections, setnewsections] = useState<{ id:string}[]>([]);
    const [NewCounter, setNewCounter] =useState<number>(0);
    const {classes} = useAboutusStyles();
    const handleAddSubpage = (type: 'New project' | 'Subsections') => {
        let newId = '';
        if (type === 'New project') {
            const nextNum = NewCounter + 1;
            newId = `newsection${nextNum}`;
            setnewsections((prev) => [...prev, { id: newId }]);
            setNewCounter(nextNum);
        } else {
            const nextNum = counter + 1;
            newId = `subsection${nextNum}`;
            setSubpages((prev) => [...prev, { id: newId }]);
            setCounter(nextNum);
        }
    }; 
    const handleDeleteSubpage = (type: 'New project' | 'Subsections',subId: string) => {
        if (type === 'New project') {
            setnewsections((prev) => prev.filter((sub) => sub.id !== subId));
            setNewCounter(NewCounter-1);
        } else {
            setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
            setCounter(counter-1);
        }
    }; 
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1,gap:2}}>
                <BadgeButton onClick={()=>handleAddSubpage('New project')} counter={NewCounter} label='Add New Section'/>
                <BadgeButton onClick={()=>handleAddSubpage('Subsections')} counter={counter} label='Add Section'/>         
            </Box>
            <Hero id='1' accordianId={accordianId} Section='Our projects' title='Home' />
            {subpages.map((sub) => (
                <Hero key={sub.id} id={sub.id} accordianId={accordianId} Section='Our projects' title='Home' ondelete={() => handleDeleteSubpage('Subsections',sub.id)}/>
            ))}
            {newsections.map((sub) => (
                <Hero key={sub.id} id={sub.id} accordianId={accordianId} Section='Our projects' title='Home' ondelete={() => handleDeleteSubpage('New project',sub.id)}/>
            ))}
         </Box>
        </>
    )
}


export default WhoWeAre;
