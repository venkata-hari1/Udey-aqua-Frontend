import {useAboutusStyles} from './AboutusStyles';
import { Box } from '@mui/material';
import { AddSection, BadgeButton } from './AboutUsButtons';
import { useState } from 'react';
import MilestoneSubsection from './MileStoneSubsection';
import Hero from './Hero';
import Badge from "@mui/material/Badge";
type MileStoneProps={
    id:string;
    accordianId:string;
    Section:string
}
const MileStone=({id,accordianId,Section}:MileStoneProps)=>{
    const {classes} = useAboutusStyles();
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [counter, setCounter] = useState<number>(1);
    const handleAddSubpage = () => {
        const newId = `Milestone-${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter+1)
    };
    const handleDeleteSubpage = (subId: string) => {
         setSubpages((prev) => {
            const filtersubpages =prev.filter((sub) => sub.id !== subId);
            const reindexing = filtersubpages.map((sub,index)=>({
                id:`Milestone-${index+2}`
            }))
            return reindexing
        });

        setCounter(counter -1)
    };  
    return(
        <>
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AddSectionBox}>
                    <BadgeButton label='Add Section' counter={counter} onClick={handleAddSubpage}/>
                </Box>
                <Box>
                    <Hero id={id} accordianId={accordianId} Section={Section} title='About us'/>
                </Box>
                <MilestoneSubsection  id='Milestone-1' accordianId="7" Section={Section} />
                {subpages.map((sub) => (
                    <MilestoneSubsection key={sub.id} id={sub.id} accordianId={id} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}

            </Box>
        </>
    )
}
export default MileStone;