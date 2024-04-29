import { useState } from "react"
import "./personalprofile.css"
import AddDateOfBirthModal from "./AddDateOfBirthModal"
import AddCareerBreak from "./AddCareerBreak"
import DifferentlyAbledModal from "./DifferentlyAbledModal"
import AddCategory from "./AddCategory"
import AddGender from "./AddGender"
import AddWorkPermit from "./AddWorkPermit"

export default function PersonalProfile(){


    function addCurrentIndustry(){
      
    }

return(
        
 <div className="ppbody">
        <h3>Personal details</h3>
        <div className = "careerprofileholder"> 
        <div className= "careerone"> 
        <label>Personal</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn"><AddGender/></label>
        <label>Date of birth</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn"><AddDateOfBirthModal/></label>
        <label>Category</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn"><AddCategory/></label>
        <label>Differently abled</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn"><DifferentlyAbledModal/></label>
        </div>
        <div className= "careertwo"> 
        <label>Career break</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn"><AddCareerBreak/></label>
        <label>Work permit</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn"><AddWorkPermit/></label>
        <label>Address</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Address</label>
        <label>Languages</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Languages</label>
        </div>
        </div>
        </div>
    )
}