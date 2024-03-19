import { Fragment, useState } from "react"
import "./components.css"

export default function ProfileSummary(){

    const [summary, setSummary] = useState("")
    
    function addOnBtnPress(){

    }

    return(
        
        <div className="fbody">
        <div className="headerbox">
        <h3 classname="leftheader">Profile summary</h3>
        <button onClick={addOnBtnPress} className="rightheader">Add profile summary</button>
        </div>
        <p className="summarypara"> Your profile summary should mention the highlights of your career and education, what your professional interests are and what kind of career you are looking for. Write a meaningful summary of more than 50 characters. </p>
        </div>
    
    )
}