import { configureStore } from "@reduxjs/toolkit";
import Accordianreducer from "./reducers/Nav"
import authReducer from "./reducers/auth"
import homeReducer from "./reducers/home"


const store = configureStore({
    reducer : {
        accordian:Accordianreducer,
        auth: authReducer,
        home: homeReducer,
    }
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store