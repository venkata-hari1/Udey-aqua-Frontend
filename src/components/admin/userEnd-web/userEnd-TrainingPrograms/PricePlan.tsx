import { useAboutusStyles } from "../userEnd-Aboutus/AboutusStyles";
import { Box } from "@mui/material";
import { useState } from "react";
import SubPriceplan from "./SubPlanPrice";
import { AddSection } from "../userEnd-Aboutus/AboutUsButtons";


//type Priceplan={
   // id:string;
   // Section:string;
//}
const PricePlan=()=>{
    const {classes} = useAboutusStyles();
    const [counter, setCounter] = useState(1);
    const [subprice, setSubprice] = useState<{ id:string}[]>([]);


    const addsubPriceplans=()=>{
        const newId=`Plan ${counter+1}`
        setSubprice((prev)=>([...prev,{id:newId}]));
        setCounter(counter+1)
    }
    const RemovesubPriceplans=(subId:string)=>{
        setSubprice((prev) => prev.filter((sub) => sub.id !== subId));
    }
    return(
        <>
            <Box className={classes.PricingMainContainer}>
                <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    <AddSection label="Add Price Plan" onClick={addsubPriceplans}/>
                </Box>
                <SubPriceplan id='Plan 1' Section="Priceplan"/>
                {subprice.map((sub)=>(
                    <SubPriceplan key={sub.id} id={sub.id} Section="Priceplan" onDelete={() => RemovesubPriceplans(sub.id)}/>
                ))}
            </Box>
        </>
    )
}
export default PricePlan;