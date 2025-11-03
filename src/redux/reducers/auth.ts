import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AccordianState ={
    ExpandAccordian:string | null;
    EditBanner:{
        Edit:boolean;
        Cancel:boolean;
        
    } 
}
const initialState : AccordianState = {
    ExpandAccordian:null,
    EditBanner:{
        Edit:false,
        Cancel:false,

        
    }
}

const AccordianSlice = createSlice({
    name:'accordian',
    initialState,
    reducers:{
        setExpandAccordian:(state, action:PayloadAction<string | null>)=>{
            state.ExpandAccordian= action.payload },
        SetEdit:(state,action:PayloadAction<boolean>)=>{
            state.EditBanner.Edit=action.payload,
            state.EditBanner.Cancel=action.payload
        }
    }
})
export const {setExpandAccordian, SetEdit} = AccordianSlice.actions
export default AccordianSlice.reducer