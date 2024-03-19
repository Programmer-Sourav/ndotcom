import { useState } from "react"
import "./addprofilesummary.css"
import ProfileSummary from "../PageFive/ProfileSummary"
import { useDispatch } from "react-redux"
import { addProfileSummary } from "../Slices/JobsSlice"

export default function AddProfileSummary(){
 
    const [profieSummary, setProfileSummary] = useState("")

    const dispatch = useDispatch()


    const onChangeProfileSummary = (e) =>{
        setProfileSummary(e.target.value)
    }

    const onSaveButtonClick = (e) =>{
       dispatch(addProfileSummary(e.target.value))
    }

    const onCancelButtonClick = (e) =>{
        
    }

    return(
        <div className="apsbody"> 
        <div className="headerflex"> 
        <span className="headertitle">Profile Summary </span>
        <span className="rightadd"> Add 8%</span>
        </div>
        <section className="sectionstyle"> 
            Your Profile Summary should mention the highlights of your career and education, what your professional interests are, 
            and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.
        </section>
        <textarea id="textareadid" rows="4" cols="48" className="textareadesign"  value={profieSummary} onChange={onChangeProfileSummary}></textarea>
        <span className="characterleftprompt">1000 character(s) left</span>
        <div className="bottombtnflex">
         <button className="cancelbtn" onClick={onCancelButtonClick} >Cancel</button>
         <button className="savebtn" onClick={onSaveButtonClick} >Save</button>
        </div>
        </div>
    )
}