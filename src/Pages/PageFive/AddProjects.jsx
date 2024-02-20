import { Fragment } from "react"
import "./addprojects.css"

export default function AddProjects(){


    function addOnBtnPress(){

    }
    return(
        
        <div className="fbody">
        <div className="headerbox">
        <h3 classname="leftheader">Projects</h3>
        {/* <span className="project-percentage">Add 8%</span> */}
        <button onClick={addOnBtnPress} className="rightheader">Add project</button>
        </div>
        <p className="summarypara"> Add details about projects you have done in college, internship or at work. </p>
        </div>
    
    )
}