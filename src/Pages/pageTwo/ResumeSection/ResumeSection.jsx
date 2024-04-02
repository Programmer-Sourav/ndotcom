import { useState } from "react";
import "./index.css";
import ModalComponent from "../../PageFive/ModalComponent";
import ReactModal from "react-modal";
import Modal from "./Modal";
import { Button, useDisclosure } from "@chakra-ui/react";
import ChakraModal from "./ChakraModal";
import SkillsModal from "../../ModalThree/SkillsModal";
import AddProfileSummary from "../../ModalFour/AddProfileSummary";
import ProfileSummary from "../../PageFive/ProfileSummary";
import CareerProfile from "../../PageFive/CareerProfile";
import PersonalProfile from "../../PageFive/PersonalProfile";
import AddProjects from "../../PageFive/AddProjects";
import Accomplishments from "../../PageFive/Accomplishments";


export default function ResumeSection() {

  const {onOpen} = useDisclosure()


  const [file, setFile] = useState("")
  const [uploadedFile, setUploadedFile] = useState("")
  const [error, setError] = useState("")

  function handleChange(e){
    setFile(e.target.file[0])
  }

  function handleSubmit(e){
     e.preventDefault();
     const formData = new FormData()
     formData.append("file", file)
     formData.append("filename", file.name)
     uploadFile(formData)
     
  }

  const openModalFn = () =>{
    setIsVisible(isVisible=>!isVisible)
  }

  const uploadFile = async(formData) =>{
    try{
        const response = await fetch("", {
            method: "PUT",
            headers: {'content-type':'multipart/form-data'},
            body: formData
        })
        const result = response.json();
        setUploadedFile(result.data.fileUrl)
    }
    catch(error){
     console.error("Error", error)
    }
}
  return (
    <>
      <body>
        <div className="parent-div">
          <div className="child-left">
            <h4>Quick Links</h4>
            <div>
              <div className="quick-link">
                <small>Resume</small>
                <a href="#">Upload</a>
              </div>
              <div className="quick-link">
                <small>Resume headline</small>
                <a href="#">Add</a>
              </div>
              <div className="quick-link">
                <small>Key skills</small>
                <a href="#">Add</a>
              </div>
              <div className="quick-link">
                <small>Education</small>
                <a href="#">Add</a>
              </div>
              <div className="quick-link">
                <small>IT skills</small>
                <a href="#">Add</a>
              </div>
              <div className="quick-link">
                <small>Projects</small>
                <a href="#">Add</a>
              </div>
              <div className="quick-link">
                <small>Public summary</small>
                <AddProfileSummary/>
              </div>
              <div className="quick-link">
                <small>Accomplishments</small>
                <a href="#"></a>
              </div>
              <div className="quick-link">
                <small>Career profile</small>
                <a href="#"></a>
              </div>
              <div className="quick-link">
                <small>Personal details</small>
                <a href="#"></a>
              </div>
            </div>
          </div>

          <div className="child-right">
            <div>
              <b>
                Resume <span>Add 10%</span>
              </b>
              <p>
                Resume is the most important document recruiters look for.
                Recruiters generally do not look at profiles without resumes.
              </p>
              <div className="up-resume-btn">
                <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange}/>  
                <button type="submit">Upload resume</button>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
                </form>
              </div>

              <div className="low-part">
                <img
                  src="https://static.naukimg.com/s/5/105/i/folderImgOneTheme.png"
                  alt=""
                />

                <p>
                  <span>Don't have a resume yet?</span>
                  <br /> Create a job-winning resume with our simple resume
                  builder
                </p>

                <a href="#">Create free resume</a>
              </div>
            </div>

            <div className="resume-headline">
              <p className="add-headline">
                <b>
                  Resume headline <span>Add 8%</span>
                </b>
                {/* <button onClick={()=>{setOpenModal(true)}}>Add resume headline</button> */}
                <ChakraModal/>
              </p>
              <p className="headline-para">
                It is the first thing recruiters notice in your profile. Write
                concisely what makes you unique and right person for the job you
                are looking for.
              </p>
            </div>

            <div className="resume-headline">
              <p className="add-headline">
                <b>
                  Key skills <span>Add 8%</span>
                </b>
                <SkillsModal/>
              </p>
              <p className="headline-para">
                Tell recruiters what you know or what you are known for e.g.
                Direct Marketing, Oracle, Java etc. We will send you job
                recommendations based on these skills.
              </p>
            </div>
            <div className="profile-summary">
            <ProfileSummary/>
            </div>
            <div className="career-profile">
      <CareerProfile/>
      </div>
      <div className="personal-profile">
      <PersonalProfile/>
      </div>
      <div className="add-projects">
      <AddProjects/>
      </div>
      <div className="acomplishments">
      <Accomplishments/> 
      </div>
          </div>
        
        </div>
      </body>
    </>
  );
}
