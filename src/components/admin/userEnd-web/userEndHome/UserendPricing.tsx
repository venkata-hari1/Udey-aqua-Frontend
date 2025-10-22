
import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box,} from '@mui/material';
import { AddSection,} from '../userEnd-Aboutus/AboutUsButtons';
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
    const {classes} = useAboutusStyles();
    const handleAddSubpage = () => {
        const newId = `${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter +1)
    };
    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
        setCounter(counter -1)
    };
    return(
        <>
         <Box className={classes.WhoWeAreContainer}>
            <Box sx={{display:'flex',justifyContent:'flex-end', marginBottom:1}}>
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
            <Subsection id='1' accordianId={accordianId} Section={Section} title='Home' />
            {subpages.map((sub) => (
                <Subsection key={sub.id} id={sub.id} accordianId={id} Section={Section} title='Home' onDelete={() => handleDeleteSubpage(sub.id)} />
            ))}
         </Box>
        </>
    )
}


export default WhoWeAre;
