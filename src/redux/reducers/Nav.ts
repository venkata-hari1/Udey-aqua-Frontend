import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AccordianState ={
    ExpandAccordian:string | null
    EditBanner:{
        edit:boolean;
        cancel:boolean;
        banner:boolean
    }
    CulturesData:string[]
}
const initialState : AccordianState = {
    ExpandAccordian:null,
    EditBanner:{
        edit:false,
        cancel:false,
        banner:false
    },
    CulturesData:['Cage Culture','Fish Hatchery','Pond Culture','See Weed','RAS','CAS','Sea Bass','Pearl Spot','Mud crab','Murrel','Tilapia']
}

const AccordianSlice = createSlice({
    name:'accordian',
    initialState,
    reducers:{
        setExpandAccordian:(state, action:PayloadAction<string | null>)=>{
            state.ExpandAccordian= action.payload},
        SetEdit:(state, action:PayloadAction<Partial<{setedit:boolean,setcancel:boolean,setbanner:boolean}>>)=>{
            Object.assign(state,action.payload)},
        AddCulture:(state,action:PayloadAction<string>)=>{
             state.CulturesData.push(action.payload)
        }
    }
})
export const {setExpandAccordian, SetEdit,AddCulture} = AccordianSlice.actions
export default AccordianSlice.reducer