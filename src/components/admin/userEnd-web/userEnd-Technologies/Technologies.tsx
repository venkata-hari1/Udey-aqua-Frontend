import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { AccordionDetails, Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddSubpage, ArrowBack} from '../userEnd-Aboutus/AboutUsButtons';
import { useNavigate } from 'react-router-dom';
import RAS from './RAS';
import Hero from "../userEnd-Aboutus/Hero"


const Technologies=()=>{
    const {classes}= useAboutusStyles();
    const naviagte = useNavigate();
    const AccordianData = [
        {id:'1',title:'Hero Section',component:Hero},
        {id:'2',title:'Recirculating Aquaculture Systems (RAS) ',component: RAS},
        {id:'3',title:'Circulating Aquaculture Systems (CAS)  ', component: RAS},
        {id:'4',title:'Pond Farming  ',component:RAS},
        {id:'6',title:'fish hatchery',component:RAS},
        {id:'7',title:'cage culture',component:RAS}
    ]
    return(
        <>
            
                <Box className={classes.AboutUscontainer}>
                    <Box className={classes.AboutUsHeaderbox}>
                        <Box className={classes.AboutUsArrowAndHeaderBox}>
                            <ArrowBack onClick={()=>naviagte(-1)}/>
                            <Typography className={classes.AboutUsHeader}> Technologies</Typography>
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
                                        <Component id={item.id} accordianId={item.id} Section={item.title} />
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
export default Technologies;