import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addBasicDetails = createAction("addBasicDetails")
export const addResumeTitle = createAction("addResumeTitle")
export const cancelResumeTitle = createAction("cancelResumeTitle")
export const addProjects = createAction("addProjects")
export const addLinks = createAction("addLinks")
export const addCareerProfile = createAction("addCareerProfile")
export const addSkills = createAction("addSkills")
export const addProfileSummary = createAction("addProfileSummary")


export const addBasicDetailsAsync = createAsyncThunk(
    "/profile-creation/addBasicDetailsAsync",

    async(basicDetailsObject) =>{
         const response = await fetch(
           { url: "url", method: 'POST', body: basicDetailsObject}
    
         )
         return response.data
    }
)

export const addProfileSummaryASync = createAsyncThunk(
  "/profile-creation/addProfileSummaryAsync", 
   async(profileSummary) =>{
    console.log(2222, profileSummary)
    const response = await fetch({url: "url", method: "POST", body: profileSummary})
    //return ""
   }   
)

export const addResumeTitleAsync = createAsyncThunk("/profile-creation/addResumeTitleAsync",
async(resumeTitle) =>{
  const response = await fetch({url: "url", method: "POST", body: resumeTitle})
  //return ""
})

export const jobsSlice = createSlice(
    {
        
    name: "jobseeker",
    initialState: {
          jobs: [], 
          companiesList : [],
          status: "idle",
          error: null,
          profileData: "",
          basicProfileDetails: "",
          profileSummaryData: "",
          resumeTitle: "",
          skills: ""
        },
    reducers: {
         createJobProfile : (state, action ) =>{
            
         },
         setBasicProfileDetails : (state, action) =>{
           
         },
         addProfileSummary  : (state, action) =>{
              state.profileSummaryData = action.payload
         },
         addResumeTitle : (state, action) =>{
          state.resumeTitle = action.payload
         },
         addSkills : (state, action) =>{
          console.log(55555, action.payload)
          state.skills = action.payload
         }
    },
    extraReducers: (builder) =>{
        builder.addCase(addBasicDetails, (state, action)=>{

        })
         // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
    }
//     extraReducers : {
//         [addBasicDetailsAsync.pending] : (state)=>{
//             state.status = "loading"
//         },
// // 
//         [addBasicDetailsAsync.fulfilled] : (state) =>{
//             state.status = "fulfilled"
//             //add basic details 
//         },
//         [addBasicDetailsAsync.rejected] : (state) =>{
//             state.status = "error";
//             state.error = action.error.message;
//         }
//     }

}

)

export const { createJobProfile, setBasicProfileDetails } = jobsSlice.actions;

export default jobsSlice.reducer;