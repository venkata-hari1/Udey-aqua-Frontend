import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AccordianState ={
    ExpandAccordian:string | null
}
const initialState : AccordianState = {
    ExpandAccordian:null
}

const AccordianSlice = createSlice({
    name:'accordian',
    initialState,
    reducers:{
        setExpandAccordian:(state, action:PayloadAction<string | null>)=>{
            state.ExpandAccordian= action.payload        }
    }
})
export const {setExpandAccordian} = AccordianSlice.actions
export default AccordianSlice.reducer