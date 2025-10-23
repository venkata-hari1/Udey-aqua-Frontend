import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, } from '@mui/material';
import { AddBanner, AddSection, } from '../userEnd-Aboutus/AboutUsButtons';
import SubSection from './subSection';
import { useState,  } from 'react';
import Banner from './Banner';
import Hero from '../userEnd-Aboutus/Hero';
import  Badge  from "@mui/material/Badge";

type RASProps={
    id:string;
    accordianId:string
    Section:string;
    title:string
}
const RAS=({id,accordianId,Section,title}:RASProps)=>{
    const {classes} = useAboutusStyles();
    const [counter, setCounter] = useState<number>(1);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [banner, setBanner] = useState<{id:string}[]>([]);
    const [bannercount, setBannerCount] = useState<number>(0);
    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter+1)
    };

    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
        setCounter(counter-1)
    }; 
    const handleAddBanner = () => {
        const newId = ` Banner-${bannercount+1}`; // unique id
        setBanner((prev) => [...prev, { id: newId }]);
        setBannerCount(bannercount+1)
    };

    const handleDeleteBanner = (subId: string) => {
        setBanner((prev) => prev.filter((sub) => sub.id !== subId));
        setBannerCount(bannercount-1)
    }; 
    return(
        <>
     
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AddSectionBox} sx={{gap:3}}>
                    <Badge
                                                        badgeContent={bannercount}
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
                                                    <AddBanner onClick={handleAddBanner}/>
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
                {title ==='Technologies' &&<Hero id={id} accordianId={id} Section={Section}/>}
                <SubSection id='Sub Section-1' accordianId='2' Section={Section}/>
                {subpages.map((sub) => (
                    <SubSection key={sub.id} id={sub.id} accordianId={accordianId} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}
                {banner.map((sub)=>(
                    <Banner key={sub.id} id={sub.id} accordianId={accordianId} Section={Section} onDelete={() => handleDeleteBanner(sub.id)}/>
                ))}
            </Box>
        </>
    )
}
export default RAS;