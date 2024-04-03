import "./components.css"
import AddProfileSummary from "../ModalFour/AddProfileSummary"

export default function ProfileSummary(){



    return(
        
        <div className="fbody">
        <div className="headerbox">
        <h3 classname="leftheader">Profile summary</h3>
        <AddProfileSummary/>
        </div>
        <p className="summarypara"> Your profile summary should mention the highlights of your career and education, what your professional interests are and what kind of career you are looking for. Write a meaningful summary of more than 50 characters. </p>
        </div>
    
    )
}