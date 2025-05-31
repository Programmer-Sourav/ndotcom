import { useDispatch } from "react-redux"
import "./resumetitle.css"
import { addResumeTitle, cancelResumeTitle } from "../Slices/JobsSlice"
import { useState } from "react"
import { Textarea } from "@chakra-ui/react"

export default function ResumeTitle(){


    const [resumeHeadline, setResumeHeadline] = useState("")

    const dispatch = useDispatch()

    const onSaveResumeTitle = (e) =>{
      const resumeTitle = e.target.value;
      console.log(3333, resumeTitle);  
      dispatch(addResumeTitle(e.target.value))
      setResumeHeadline("");
    }

    const onCancelResume = () =>{
       dispatch(cancelResumeTitle())
    }

    const onResumeHeadlineChange = (e) =>{
        const resumeTitle = e.target.value;
        setResumeHeadline(e.target.value);
    }


    return(
        <div className="rtbody"> 
        <div className="headline">
        <span className="headlinestyle">Resume headline</span>
        <span className="addheadline">Add 8%</span>
        </div>
        <div className="graytextHolder">
        <p className="graytext"> It is the first thing recruiters notice in your profile. Write conciously what makes you unique and right person for the job you are looking for.</p>
        </div>
        <textarea rows={6} cols={50} className="inputdesign" value={resumeHeadline} onChange={onResumeHeadlineChange}/>
        <span className="characterprompt">250 characters left</span>
        <div className="btnflex">
        <span className="btnone" onClick={onCancelResume}>Cancel</span>  
        <span className="btntwo" onClick={onSaveResumeTitle}>Save</span> 
        </div>
        </div>
    )
}