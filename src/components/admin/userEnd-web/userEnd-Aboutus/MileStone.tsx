import {useAboutusStyles} from './AboutusStyles';
import { Box } from '@mui/material';
import { AddSection } from './AboutUsButtons';
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
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
    };  
    return(
        <>
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AddSectionBox}>
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