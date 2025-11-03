import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { Box, } from '@mui/material';
import {  AddSection, } from '../userEnd-Aboutus/AboutUsButtons';
import SubSection from './subSection';
import { useState,  } from 'react';
import Banner from './Banner';
import Hero from '../userEnd-Aboutus/Hero';
import  Badge  from "@mui/material/Badge";
import { useSelector, useDispatch } from 'react-redux';
import type { Rootstate } from '../../../../redux/store';
import { SetEdit } from '../../../../redux/reducers/auth';

type RASProps={
    id:string;
    accordianId:string
    Section:string;
    title:string
}
const RAS=({id,accordianId,Section,title}:RASProps)=>{
    const {classes} = useAboutusStyles();
    const dispatch = useDispatch();
    const BannerEdit = useSelector((state:Rootstate)=>state.accordian.EditBanner);
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
    return(
        <>   
            <Box className={classes.WhoWeAreContainer}>
                <Box className={classes.AddSectionBox} sx={{gap:3}}>
                    <AddSection label='Edit Banner' onClick={()=>{dispatch(SetEdit(true))}} disable={!BannerEdit.Edit}/>
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
                {title ==='Technologies' &&<Hero id={id} accordianId={id} Section={Section}/>}
                <SubSection id='Sub Section-1' accordianId='2' Section={Section}/>
                {subpages.map((sub) => (
                    <SubSection key={sub.id} id={sub.id} accordianId={accordianId} Section={Section} onDelete={() => handleDeleteSubpage(sub.id)} />
                ))}
                    <Banner  id='Banner' accordianId={accordianId} Section={Section} />
            </Box>
        </>
    )
}
export default RAS;