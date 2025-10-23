import {useAboutusStyles} from './AboutusStyles';
import { AccordionDetails, Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddSubpage, ArrowBack} from './AboutUsButtons';
import Hero from './Hero';
import WhoWeAre from './WhoWeAre';
import OurHistory from './OurHistory';
import { useNavigate } from 'react-router-dom';
import OurDirectors from './OurDirectors';
import Sustainable from './Sustainable';
import Careers from './Careers';
import MileStone from './MileStone';
import Testimonials from './Testimonials';
import { useState, type ComponentType, } from 'react';
import TitlePage from './TitlePage';

const AboutUs=()=>{
    const {classes}= useAboutusStyles();
    const naviagte = useNavigate();
    const AccordianData = [
        {id:'1',title:'Hero Section',component:Hero},
        {id:'2',title:'Who We Are',component: WhoWeAre},
        {id:'3',title:'Our History',component: OurHistory},
        {id:'4',title:'Our Directors & Advisors',component:OurDirectors},
        {id:'5',title:'Sustainable Development',component:Sustainable},
        {id:'6',title:'Careers',component:Careers},
        {id:'7',title:'Milestones',component:MileStone},
        {id:'8',title:'Testimonials',component:Testimonials}
    ]
    const [CustomAccordians,setCustomAccordians] = useState<{id:string; title:string; component: ComponentType<{id:string,accordianId:string, Section:string ,setTitlehandle:(value:string)=>void;}>}[]>([]);
    const [Id, setId] = useState<string>('0')
    const handleSubpage=() =>{
        setCustomAccordians((prev)=>[...prev,{id:Id,title:'custom',component: TitlePage}]);
        setId(String(Id+1))
    }
    const handleTitleChange = (id: string, value: string) => {
        setCustomAccordians((prev) =>
        prev.map((item) => (item.id === id ? { ...item, title: value? value:'custom' } : item))
    );
    };
    return(
        <>
            <Box className={classes.AboutUscontainer} >
                <Box className={classes.AboutUsHeaderbox}>
                    <Box className={classes.AboutUsArrowAndHeaderBox}>
                        <ArrowBack onClick={()=>naviagte(-1)}/>
                        <Typography className={classes.AboutUsHeader}>About Us</Typography>
                    </Box>
                    <Box className={classes.AboutUsHeaderButtonBox}>
                        <AddSubpage onClick={handleSubpage}/>
                    </Box>
                </Box>
                <Stack className={classes.AccordianBox}>
                    {AccordianData.map((item)=>{
                        const Component=item.component
                            return(
                                <Accordion key={item.id} className={classes.AccordiaStack}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className={classes.AccordianText}>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Component id={item.id} accordianId={item.id} Section={item.title} />
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })
                    }
                    {/* Custom Accordians */}
                    {CustomAccordians.map((item)=>{
                        const Component=item.component
                            return(
                                <Accordion key={item.id} className={classes.AccordiaStack}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className={classes.AccordianText}>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Component id={item.id} accordianId={item.id} Section={item.title} setTitlehandle={(value)=>{handleTitleChange(item.id,value)}}/>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })
                    }
                </Stack>
            </Box>
        </>
    )
}
export default AboutUs;