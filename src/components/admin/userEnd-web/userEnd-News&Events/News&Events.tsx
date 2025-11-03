import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
import { AccordionDetails, Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddSubpage, ArrowBack} from '../userEnd-Aboutus/AboutUsButtons';
import { useNavigate } from 'react-router-dom';
import Hero from "../userEnd-Aboutus/Hero";
import SuccessStories from './Sucess&Stories';
import News from './News';
import { useState, type ComponentType } from 'react';
import TitlePage from '../userEnd-Aboutus/TitlePage';
import { useSelector, useDispatch } from 'react-redux';
import type { Rootstate } from '../../../../redux/store';
import { setExpandAccordian } from '../../../../redux/reducers/Nav';

const NewsEvents=()=>{
    const {classes}= useAboutusStyles();
    const naviagte = useNavigate();
    const dispatch = useDispatch();
    const ExpandAccordian = useSelector((state:Rootstate)=>state.accordian.ExpandAccordian);
    const handleChange =
        (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
          dispatch(setExpandAccordian(isExpanded ? panel : null));
        };
    const AccordianData = [
        {id:'1',title:'Hero Section',component:Hero,refid:'Hero'},
        {id:'2',title:'Success & Stories',component:SuccessStories,refid:'Sucessstories' },
        {id:'3',title:'News',component:News,refid:'News & Events'},
        {id:'4',title:'Videos',component:SuccessStories,refid:'videos'},
        {id:'5',title:'Gallery',component:SuccessStories,refid:'gallery'},
        {id:'6',title:'Awards',component:SuccessStories,refid:'awards'},
        {id:'7',title:'Blog',component:SuccessStories,refid:'blog'}
    ]
    const [Customdata, setCoustomdata] = useState<{id:string; title:string; component: ComponentType<{id:string,accordianId:string, Section:string ,setTitlehandle:(value:string)=>void;}>}[]>([]);
    const [Id, setId] = useState<string>('0')
    const  handleSubpage = ()=>{
        setCoustomdata((prev)=>[...prev,{id:Id,title:'custom',component: TitlePage}])
        setId(String(Id+1))
    }
    const handleTitleChange =(id:string, value :string)=>{
        setCoustomdata((prev) =>
    prev.map((item) => (item.id === id ? { ...item, title: value? value:'custom' } : item))
  );
    }
    return(
        <>
            
                <Box className={classes.AboutUscontainer}>
                    <Box className={classes.AboutUsHeaderbox}>
                        <Box className={classes.AboutUsArrowAndHeaderBox}>
                            <ArrowBack onClick={()=>naviagte(-1)}/>
                            <Typography className={classes.AboutUsHeader}> News & Events</Typography>
                        </Box>
                        <Box className={classes.AboutUsHeaderButtonBox}>
                            <AddSubpage onClick={handleSubpage}/>
                        </Box>
                    </Box>
                    <Stack className={classes.AccordianBox}>
                        {AccordianData.map((item)=>{
                            const Component = item.component
                            return(
                                <Accordion key={item.id} className={classes.AccordiaStack}
                                    expanded={ExpandAccordian === item.refid}
                                            onChange={handleChange(item.refid)}>
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
                        {/* Custom Accordians */}
                        {Customdata.map((item)=>{
                            const Component = item.component
                            return(
                                <Accordion key={item.id} className={classes.AccordiaStack}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className={classes.AccordianText}>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Component key={item.id} id={item.id} accordianId={item.id} Section={item.title} setTitlehandle={(value)=>handleTitleChange(item.id,value)}/>
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