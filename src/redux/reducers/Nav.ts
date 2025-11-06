import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AccordianState ={
    ExpandAccordian:string | null
    EditBanner:boolean
    Cancel:boolean
}
const initialState : AccordianState = {
    ExpandAccordian:null,
    EditBanner:false,
    Cancel:false
}

const AccordianSlice = createSlice({
    name:'accordian',
    initialState,
    reducers:{
        setExpandAccordian:(state, action:PayloadAction<string | null>)=>{
            state.ExpandAccordian= action.payload},
        SetEdit:(state, action:PayloadAction<boolean>)=>{
            state.EditBanner= action.payload},
        SetCancel:(state, action:PayloadAction<boolean>)=>{
            state.Cancel= action.payload}
    }
})
export const {setExpandAccordian, SetEdit, SetCancel} = AccordianSlice.actions
export default AccordianSlice.reducer