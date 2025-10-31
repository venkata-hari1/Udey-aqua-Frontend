import { configureStore } from "@reduxjs/toolkit";
import Accordianreducer from "./reducers/auth"

const store = configureStore({
    reducer : {
        accordian:Accordianreducer,
    }
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store