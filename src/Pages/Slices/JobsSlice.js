import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addBasicDetails = createAction("addBasicDetails")
export const addResumeTitle = createAction("addResumeTitle")
export const cancelResumeTitle = createAction("cancelResumeTitle")
export const addProjects = createAction("addProjects")
export const addLinks = createAction("addLinks")
export const addCareerProfile = createAction("addCareerProfile")
export const addSkills = createAction("addSkills")
export const addProfileSummary = createAction("addProfileSummary")
export const actionUpdateProfile = createAction("updateProfile")
export const actionAddProfileDetails = createAction("addProfileDetails")


export const addBasicDetailsAsync = createAsyncThunk(
    "/profile-creation/addBasicDetailsAsync",

    async(basicDetailsObject) =>{
         const response = await fetch(
           { url: "url", method: 'POST', body: basicDetailsObject}
    
         )
         return response.data
    }
)

export const actionAddProfileDetailsAsync = createAsyncThunk("/profile-creation/addProfileDetailsAsync", 
    async(profileDetailsObject) =>{
      const response = await fetch(
        {profileName: "profileName", method: 'POST', body: profileDetailsObject}
      )
      return response.data;
    })

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
          skills: "",
          personalProfile: {
            genderAndMaritalStatus: "",
            dateOfBirth:"",
            category: "",
            differentlyAbled: "",
            careerBreak:"",
            workPermit: "",
            address: "",
            languages: ""
          },
         careerProfile: {
           currentIndustry: "",
           jobType: "",
           department: "",
           employeementType: "",
           preferredShift: "",
           preferredWorkLocation: "",
           expectedSalary: ""
         },
        projectDetails: {
          projectTitle: "",
          tag: "",
          projectStatus: "",
          workedFrom: "",
          detailsOfProject: ""
        },
        accomplishmentsDetails : {
          onlineProfile: {socialProfile: "", url: "", description: ""},
          workSample: {githubProfile: "", description: ""},
          publication: {publicationUrl: "", description: ""},
          presentation: {presentationUrl: "", description: ""},
          patent: {patentUrl: "", patentDescription: ""},
          certification: {certificationUrl : "", certificationDescription: ""}
        }
        },
    reducers: {
         createJobProfile : (state, action ) =>{
            
         },
         setBasicProfileDetails : (state, action) =>{
           
         },
         setPersonalProfile: (state, action) =>{
            state.personalProfile = action.payload;
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
         },
         actionUpdateProfile : (state, action) =>{
          //
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