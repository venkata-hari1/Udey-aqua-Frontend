import { TrainingStyles } from "./PricingStyles";
import { Box } from "@mui/material";
import { useState } from "react";
import SubPriceplan from "./SubPlanPrice";
import { AddPricePlan } from "./PricingButtons";


//type Priceplan={
   // id:string;
   // Section:string;
//}
const PricePlan=()=>{
    const {classes} = TrainingStyles();
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
                    <AddPricePlan onClick={addsubPriceplans}/>
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