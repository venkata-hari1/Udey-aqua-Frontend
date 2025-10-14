import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, } from '@mui/material';
import { AddBanner, AddSection, } from '../userEnd-Aboutus/AboutUsButtons';
import SubSection from './subSection';
import { useState,  } from 'react';
import Banner from './Banner';
import Hero from '../userEnd-Aboutus/Hero';

type RASProps={
    id:string;
    accordianId:string
    Section:string;
}
const RAS=({id,accordianId,Section}:RASProps)=>{
    const {classes} = useAboutusStyles();
    const [counter, setCounter] = useState<any>([1]);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);
    const [banner, setBanner] = useState<{id:string}[]>([]);
    const [bannercount, setBannerCount] = useState<any>([]);
    const handleAddSubpage = () => {
        const newId = `Sub Section-${counter.length+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter((prev:any) => [...prev, newId])
    };

    const handleDeleteSubpage = (subId: string) => {
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
    }; 
    const handleAddBanner = () => {
        const newId = ` Banner-${bannercount.length+1}`; // unique id
        setBanner((prev) => [...prev, { id: newId }]);
        setBannerCount((prev:any) => [...prev, newId])
    };

    const handleDeleteBanner = (subId: string) => {
        setBanner((prev) => prev.filter((sub) => sub.id !== subId));
    }; 
    return(
        <>
     
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AddSectionBox} sx={{gap:3}}>
                    <AddBanner onClick={handleAddBanner}/>
                    <AddSection onClick={handleAddSubpage}/>
                </Box>
                <Hero id={id} accordianId={id} Section={Section}/>
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