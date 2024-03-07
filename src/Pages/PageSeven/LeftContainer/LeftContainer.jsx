import LeftCard from "./LeftCard"
import "./leftcontainer.css"


export default function Leftcontainer(){



    return(
        <div className="container"> 
          <div className="topbuttoncontainer">
            <button className = "custombtn">Recruiter Actions (1)</button>
            <button className = "custombtn">Applies on Naukri (13) </button>
            </div>
            <LeftCard/>
        </div>
    )
}