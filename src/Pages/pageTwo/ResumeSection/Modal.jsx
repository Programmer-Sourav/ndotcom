import { useDispatch } from "react-redux";
import "../../ModalTwo/resumetitle.css"
import { useState } from "react";

export default function Modal(){
    if(!open) return null;


    const [resumeHeadline, setResumeHeadline] = useState("")

    const dispatch = useDispatch()

    const onSaveResumeTitle = (e) =>{
      dispatch(addResumeTitle(e.target.value))
    }

    const onCancelResume = () =>{
       dispatch(cancelResumeTitle())
    }

    const onResumeHeadlineChange = (e) =>{
        setResumeHeadline(e.target.value)
    }

    return(
        <div className="rtbody"> 
        <div className="headline">
        <span className="headlinestyle">Resume headline</span>
        <span className="addheadline">Add 8%</span>
        </div>
        <p className="graytext"> It is the first thing recruiters notice in your profile. Write conciously what makes you unique and right person for the job you are looking for.</p>
        <input type="text" className="inputdesign" value={resumeHeadline} onChange={onResumeHeadlineChange}/>
        <span className="characterprompt">250 characters left</span>
        <div className="btnflex">
        <span className="btnone" onClick={onCancelResume}>Cancel</span>  
        <span className="btntwo" onClick={onSaveResumeTitle}>Save</span> 
        </div>
        </div>
    )
}