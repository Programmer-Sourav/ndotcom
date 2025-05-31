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
export const actionCreateCareerProfile = createAction("addCareerProfile")
export const actionAddProjects = createAction("addProjects")
export const actionAccomplishments = createAction("addAccomplishments")



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

export const actionAddGenderAndMaritalStatusAsync = createAsyncThunk("/profile-creation/addGenderAndMaritalStatusAsync", 
    async(genderAndMaritalStatus) =>{
      const response = await fetch(
        {profileName: "profileName", method: 'POST', body: genderAndMaritalStatus}
      )
      return response.data;
    })
 
export const actionAddDateOfBirthAsync = createAsyncThunk("/profile-creation/addDateOfBirthAsync", 
    async(dateOfBirth) =>{
      const response = await fetch(
        {profileName: "profileName", method: 'POST', body: dateOfBirth}
      )
      return response.data;
    })   

export const actionAddCategoryAsync = createAsyncThunk("/profile-creation/addCategoryAsync", 
    async(category) =>{
      const response = await fetch(
        {profileName: "profileName", method: 'POST', body: category}
      )
      return response.data;
    })  
    
export const actionAddDifferentlyAbledAsync = createAsyncThunk("/profile-creation/addDiffferentlyAbledAsync", 
    async(differentlyAbled) =>{
      const response = await fetch(
        {profileName: "profileName", method: 'POST', body: differentlyAbled}
      )
      return response.data;
    }) 

 export const actionCareerBreakAsync = createAsyncThunk("/profile-creation/addCareerBreakAsync", 
  async(careerBreak) =>{
    const response = await fetch({profileName: "profileName", method: 'post', body: careerBreak})
    return response.data;
   })   
 
  export const actionAddWorkPermitAsync = createAsyncThunk("/profile-creation/addWorkPermitAsync", 
  async(workPermit) =>{
    const response = await fetch({profileName: "profileName", method: 'post', body: workPermit})
    return response.data;
  })

  export const actionAddAddressAsync = createAsyncThunk("/profile-creation/addLanguages", 
  async(languages) =>{
    const response = await fetch({profileName: "profileName", method: 'post', body: languages})
    return response.data;
  })

export const addPersonalDetailsAsync = createAsyncThunk("/profile-creation/addPersonalDetailsAsync", 
async(genderAndMaritalStatus) =>{
  const response = await fetch({url: "url", method: "POST", body: genderAndMaritalStatus})
}
 )

 export const addCurrentIndustry = createAsyncThunk("/profile-creation/addCurrentIndustryAsync", 
 async(currentIndustry)=>{
  const response = await fetch({url: "url", method: "POST", body: currentIndustry})
 })

 export const addJobType = createAsyncThunk("/profile-creation/addJobType", 
  async(jobType) =>{
  const response = await fetch({url: "url", method: "POST", body: jobType})
  return response.data;
})

export const addDepartment = createAsyncThunk("/profile-creation/addDepartment", 
async(department)=>{
  const response = await fetch({url: "url", method: "POST", body: department})
  return response.data;
})

export const addEmployement = createAsyncThunk("/profile-creation/addEmployeement", 
 async(employeementType)=>{
  const response = await fetch({url: "url", method: "POST", body: employeementType})
  return response.data;
 })

export const addPrefferedWorkLocation = createAsyncThunk("/profile-creation/addPrefferedWorkLocation", 
async(preferredWorkLocation)=>{
  const response = await fetch({url:"url", method: "POST", body: preferredWorkLocation})
  return response.data;
})

export const addExpectedSalary = createAsyncThunk("/profile-creation/addExpectedSalary", 
async(expectedSalary) =>{
  const response = await fetch({url: "url", method: "POST", body: expectedSalary})
  return response.data;
})

export const addPrefferedShift = createAsyncThunk("/profile-creation/addPrefferedShift", 
 async(preferredShift) =>{
  const response = await fetch({url: "url", method: "POST", body: preferredShift})
  return response.data;
 })

export const addOnlineProfileAsync = createAsyncThunk("/profile-creation/addOnlineProfile", 
async(onlineProfile) =>{
  const response = await fetch({url: "url", method: "POST", body: onlineProfile})
  return response.data;
})

export const addWorkSample = createAsyncThunk("/profile-creation/addWorkSample", 
async(workSample) =>{
  const response = await fetch({url: "url", method: "POST", body: workSample})
  return response.data;
})

export const addCertification = createAsyncThunk("/profile-creation/addCertification", 
async(certification)=>{
  const response = await fetch({url: "url", method: "POST", body: certification})
  return response.data;
})

export const addPatent = createAsyncThunk("/profile-creation/addPatent", 
async(patent) =>{
  const response = await fetch({url: "url", method: "POST", body: patent})
  return response.data;
})

export const addPresentation = createAsyncThunk("/profile-creation/addPresentation", 
async(presentation) =>{
  const response = await fetch({url: "url", method: "POST", body: presentation})
  return response.data;
})

export const addPublication = createAsyncThunk("/profile-creation/addPublication", 
 async(publication)=>{
  const response = await fetch({url: "url", method: "POST", body: publication})
  return response.data;
 })

 export const addProject = createAsyncThunk("/profile-creation/addProject", 
 async(projectDetails) =>{
  const response = await fetch({url: "url", method: "POST", body: projectDetails})
  return response.data;
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
          onlineProfile: [],
          workSample: [],
          publication: [],
          presentation: [],
          patent:[],
          certification: []
        }, 
        projects: []
        },
    reducers: {
         createJobProfile : (state, action ) =>{
            
         },
         setBasicProfileDetails : (state, action) =>{
           
         },
         setPersonalProfile: (state, action) =>{
          state.careerProfile.genderAndMaritalStatus = action.payload.genderAndMaritalStatus;
          state.careerProfile.dateOfBirth = action.payload.dateOfBirth;
          state.careerProfile.category = action.payload.category;
          state.careerProfile.differentlyAbled = action.payload.differentlyAbled;
          state.careerProfile.careerBreak = action.payload.careerBreak;
          state.careerProfile.workPermit = action.payload.workPermit;
          state.careerProfile.address = action.payload.address;
          state.careerProfile.languages = action.payload.languages;
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
         actionCreateCareerProfile : (state, action) =>{
           state.careerProfile.currentIndustry = action.payload.currentIndustry;
           state.careerProfile.jobType = action.payload.jobType;
           state.careerProfile.department = action.payload.department;
           state.careerProfile.employeementType = action.payload.employeementType;
           state.careerProfile.preferredWorkLocation = action.payload.preferredWorkLocation;
           state.careerProfile.expectedSalary = action.payload.expectedSalary;
           state.careerProfile.preferredShift = action.payload.preferredShift;
         },
         actionAccomplishments : (state, action) =>{
           state.accomplishmentsDetails.onlineProfile = [...state.accomplishmentsDetails.onlineProfile, action.payload.onlineProfileDetails];
           state.accomplishmentsDetails.workSample = [...state.accomplishmentsDetails.workSample, action.payload.workSample];
           state.accomplishmentsDetails.certification = [...state.accomplishmentsDetails.certification, action.payload.certification];
           state.accomplishmentsDetails.patent = [...state.accomplishmentsDetails.patent, action.payload.patent];
           state.accomplishmentsDetails.presentation = [...state.accomplishmentsDetails.presentation, action.payload.presentation];
           state.accomplishmentsDetails.publication = [...state.accomplishmentsDetails.publication, action.payload.publication];
         },

         actionAddProjects : (state, action ) =>{
          state.projects = [...state.projects, action.payload.projectDetails]
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