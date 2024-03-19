import { configureStore } from "@reduxjs/toolkit";
import { jobsSlice } from "../Slices/JobsSlice";


export default configureStore({
    reducer: {
        jobseeker: jobsSlice.reducer
    }
})