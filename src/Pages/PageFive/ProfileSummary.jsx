import "./components.css"
import AddProfileSummary from "../ModalFour/AddProfileSummary"

export default function ProfileSummary(){



    return(
        
        <div className="ps-fbody">
        <div className="ps-headerbox">
        <h3 className="ps-leftheader">Profile summary</h3>
        <AddProfileSummary/>
        </div>
        <p className="ps-summarypara"> Your profile summary should mention the highlights of your career and education, what your professional interests are and what kind of career you are looking for. Write a meaningful summary of more than 50 characters. </p>
        </div>
    
    )
}