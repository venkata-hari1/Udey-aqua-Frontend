import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { AccordionDetails, Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddSubpage, ArrowBack} from '../userEnd-Aboutus/AboutUsButtons';
import { useNavigate } from 'react-router-dom';
import RAS from '../userEnd-Technologies/RAS';
import { useState, type ComponentType, } from 'react';
import Hero from "../userEnd-Aboutus/Hero";
import TitlePage from '../userEnd-Aboutus/TitlePage';

const Technologies=()=>{
    const {classes}= useAboutusStyles();
    const naviagte = useNavigate();
    const AccordianData = [
        {id:'1',title:'Hero Section',component:Hero},
        {id:'2',title:'Culture Image ',component: Hero},
        {id:'3',title:'Sea Bass  ', component: RAS},
        {id:'4',title:'Pear Spot  ',component:RAS},
        {id:'6',title:'Mud Crab',component:RAS},
        {id:'7',title:'Murrel',component:RAS},
        {id:'8',title:'Tilapia',component:RAS},
        {id:'9',title:'Sea Weed',component:RAS}
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
    }
    return(
        <>
            
                <Box className={classes.AboutUscontainer}>
                    <Box className={classes.AboutUsHeaderbox}>
                        <Box className={classes.AboutUsArrowAndHeaderBox}>
                            <ArrowBack onClick={()=>naviagte(-1)}/>
                            <Typography className={classes.AboutUsHeader}> Cultures</Typography>
                        </Box>
                        <Box className={classes.AboutUsHeaderButtonBox}>
                            <AddSubpage onClick={handleSubpage}/>
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
                                        <Component id={item.id} accordianId={item.id} Section={item.title} title="Cultures" />
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
export default Technologies;
