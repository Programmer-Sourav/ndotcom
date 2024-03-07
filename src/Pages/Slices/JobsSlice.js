import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addBasicDetailsAsync = createAsyncThunk(
    "/profile-creation/addBasicDetailsAsync",

    async(basicDetailsObject) =>{
         const response = await fetch(
           { url: "url", method: 'POST', body: basicDetailsObject}
    
         )
         return response.data
    }
)


export const jobsSlice = createSlice(
    {
        
    name: "jobseeker",
    initialState: {
          jobs: [], 
          companiesList : [],
          status: "idle",
          error: null,
          profileData: {
            
          },
          basicProfileDetails: {
           
          }
        },
    reducers: {
         createJobProfile : (state, action ) =>{
            
         },
         setBasicProfileDetails : (state, action) =>{
           
         }
    },
    extraReducers : {
        [addBasicDetailsAsync.pending] : (state)=>{
            state.status = "loading"
        },

        [addBasicDetailsAsync.fulfilled] : (state) =>{
            state.status = "fulfilled"
            //add basic details 
        },
        [addBasicDetailsAsync.rejected] : (state) =>{
            state.status = "error";
            state.error = action.error.message;
        }
    }

}

)



export default jobsSlice.reducer;