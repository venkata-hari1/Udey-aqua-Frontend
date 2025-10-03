import {useUserEndwebStyles} from '../userEnd-Aboutus/AboutusStyles';
import { AccordionDetails, Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddSubpage, ArrowBack} from '../userEnd-Aboutus/AboutUsButtons';
import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import SubPriceplan from "./SubPlanPrice"



const TrainingPrograms=()=>{
    const {classes}= useUserEndwebStyles();
    const naviagte = useNavigate();
    const AccordianData = [
        {id:'1',title:'Hero Section',component:HeroSection},
        {id:'2',title:'Price Plans ',component:SubPriceplan},
        //{id:'3',title:'Aquaculture Type  '},
       // {id:'4',title:'Form Details '},
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
                                        <Component id={item.id} accordianId={item.id} Accordiantitle={item.title} />
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
export default TrainingPrograms;