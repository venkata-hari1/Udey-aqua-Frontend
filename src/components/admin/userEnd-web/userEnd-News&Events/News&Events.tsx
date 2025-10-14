import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { AccordionDetails, Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddSubpage, ArrowBack} from '../userEnd-Aboutus/AboutUsButtons';
import { useNavigate } from 'react-router-dom';
import Hero from "../userEnd-Aboutus/Hero";
import SuccessStories from './Sucess&Stories';

const NewsEvents=()=>{
    const {classes}= useAboutusStyles();
    const naviagte = useNavigate();
    const AccordianData = [
        {id:'1',title:'Hero Section',component:Hero},
        {id:'2',title:'Success & Stories  ',component:SuccessStories },
        {id:'3',title:'News  ',component:Hero},
        {id:'4',title:'Videos ',component:Hero},
        {id:'6',title:'Gallery',component:Hero},
        {id:'7',title:'Awards',component:Hero},
        {id:'8',title:'Blog',component:Hero}
    ]
    return(
        <>
            
                <Box className={classes.AboutUscontainer}>
                    <Box className={classes.AboutUsHeaderbox}>
                        <Box className={classes.AboutUsArrowAndHeaderBox}>
                            <ArrowBack onClick={()=>naviagte(-1)}/>
                            <Typography className={classes.AboutUsHeader}> News & Events</Typography>
                        </Box>
                        <Box className={classes.AboutUsHeaderButtonBox}>
                            <AddSubpage onClick={()=>(naviagte('subpage'))}/>
                        </Box>
                    </Box>
                    <Stack className={classes.AccordianBox}>
                        {AccordianData.map((item)=>{
                            const Component = item.component
                            return(
                                <Accordion key={item.id} className={classes.AccordiaStack}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className={classes.AccordianText}>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Component key={item.id} id={item.id} accordianId={item.id} Section={item.title}/>
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
export default NewsEvents;