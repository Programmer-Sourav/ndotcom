import AddDepartment from "./AddDepartment"
import AddIndustry from "./AddIndustry"
import AddPrefferedShift from "./AddPrefferedShift"
import DesiredEmployementType from "./DesiredEmployementType"
import DesiredJobTypeModal from "./DesiredJobTypeModal"
import "./careerprofile.css"

export default function CareerProfile(){


    function addCurrentIndustry(){

    }
    return(
        <div className="cpbody">
        <h3>Career profile</h3>
        <p className="careerpara">This information will help the recruiters and Naukri know about your current job profile and also your desired job criteria. This will also help us personalize your job recommendations.</p>
        <div className = "careerprofileholder"> 
        <div className= "careerone"> 
        <label>Current industry</label>
        {/* <label onClick={addCurrentIndustry} className="careeractionbtn">Add current industry</label> */}
        <AddIndustry/>
        <label>Desired job type</label>
        {/* <label onClick={addCurrentIndustry} className="careeractionbtn">Add desired job type</label> */}
        <DesiredJobTypeModal/>
        <label>Preferred Shift</label>
        {/* <label onClick={addCurrentIndustry} className="careeractionbtn">Add preferred shift</label> */}
        <AddPrefferedShift/>
        <label>Expected salary</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add expected salary</label>
        </div>
        <div className= "careertwo"> 
        <label>Department</label>
        {/* <label onClick={addCurrentIndustry} className="careeractionbtn">Add department</label> */}
        <AddDepartment/>
        <label>Desired employeement type</label>
        {/* <label onClick={addCurrentIndustry} className="careeractionbtn">Add desired employeement type</label> */}
        <DesiredEmployementType/>
        <label>Preferred work location</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add preferred work location</label>
        </div>
        </div>
        </div>
    )
}