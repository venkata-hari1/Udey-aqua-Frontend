import {useAboutusStyles} from '../userEnd-Aboutus/AboutusStyles';
//import { TrainingStyles } from './PricingStyles';
import { Box} from '@mui/material';
import { useState } from 'react';
//import {planTitle} from '../../utils/Validations';
import SubAquacultureType from './SubAquacultureType';
import { AddSection } from '../userEnd-Aboutus/AboutUsButtons';


type AquacultureTypeProps={
    id?:string;
   accordianId?:string;
   //Section?:string
}
const AquacultureType=({accordianId}:AquacultureTypeProps)=>{
    const {classes:Aboutus} = useAboutusStyles();
    //const {classes} = TrainingStyles();
    const [counter, setCounter] = useState(1);
    const [subpages, setSubpages] = useState<{ id:string}[]>([]);


    const handleAddSubpage = () => {
        const newId = `Image ${counter+1}`; // unique id
        setSubpages((prev) => [...prev, { id: newId }]);
        setCounter(counter+1)
    };
    const RemoveSubPage=(subId:string)=>{
        setSubpages((prev) => prev.filter((sub) => sub.id !== subId));
    }
    
    return(
        <>
            <Box className={Aboutus.WhoWeAreContainer}>
                <Box className={Aboutus.AddSectionBox}>
                    <AddSection label='Add Type' onClick={handleAddSubpage}/>
                </Box>
                <SubAquacultureType id='Image 1' accordianId={accordianId} Section="AquaCultureType"/>
                {subpages.map((sub)=>(
                    <SubAquacultureType key={sub.id} id={sub.id} accordianId={sub.id} Section="AquaCultureType" onDelete={()=>RemoveSubPage(sub.id)}/>
                ))}
            </Box>
        </>
    )

}

export default AquacultureType; 