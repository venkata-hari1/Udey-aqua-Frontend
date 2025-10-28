import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box,} from '@mui/material';
import { AddSection,} from '../userEnd-Aboutus/AboutUsButtons';
import { useState,} from 'react';
import Badge from "@mui/material/Badge";
import Address from './Adress';

const AdressMain=()=>{
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [counter, setCounter] = useState<number>(1);
    const {classes} = useAboutusStyles();
    const handleAddSubpage = () => {
        const newId = `Address-${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter +1)
    };
    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
        setCounter(counter-1)
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
                    <AddSection label='Add Section' onClick={handleAddSubpage}/>
                </Badge>            
            </Box>
            
            <Address id='Address-1'   />
            {subpages.map((sub) => (
                <Address key={sub.id} id={sub.id}   onDelete={() => handleDeleteSubpage(sub.id)} />
            ))}
         </Box>
        </>
    )
}
export default AdressMain;