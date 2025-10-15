import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box} from '@mui/material';
import Hero from '../userEnd-Aboutus/Hero';
import Subsection from '../userEnd-Aboutus/Subsection';
import { AddHighlights, AddSection } from '../userEnd-Aboutus/AboutUsButtons';
import { useState } from 'react';
import  Badge  from "@mui/material/Badge";

type HeroProps={
    id?:string;
    accordianId?:string;
    Section:string
}
 const SuccessStories=({id,accordianId,Section}:HeroProps)=>{
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
        const [counter, setCounter] = useState<number>(1);
        const {classes} = useAboutusStyles();
        const handleAddSubpage = () => {
            const newId = `Sub Section-${counter+1}`; // unique id
            setSubpages((prev) => [...prev, { id: newId }]);
            setCounter(counter+1)
        };
        const handleDeleteSubpage = (subId: string) => {
            setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
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
                                <AddHighlights/>
                                </Badge>
                <Badge
                                    badgeContent={counter}
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
                                <AddSection onClick={handleAddSubpage}/>
                                </Badge>
            </Box>
            <Box>
                <Hero id={id} accordianId={accordianId} Section={Section} title='News & Events'/>
            </Box>
            <Subsection id='Sub Section-1' accordianId={accordianId} Section={Section} title='News & Events'  />
            {subpages.map((sub) => (
                <Subsection key={sub.id} id={sub.id} accordianId={id} Section={Section} title='News & Events' onDelete={() => handleDeleteSubpage(sub.id)} />
            ))}
         </Box>
        </>
    )
 }
 export default SuccessStories