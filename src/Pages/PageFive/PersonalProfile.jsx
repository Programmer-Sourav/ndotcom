import { useState } from "react"
import "./personalprofile.css"

export default function PersonalProfile(){


    function addCurrentIndustry(){
      
    }

return(
        
 <div className="ppbody">
        <h3>Personal details</h3>
        <div className = "careerprofileholder"> 
        <div className= "careerone"> 
        <label>Personal</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add gender, marital status, more info</label>
        <label>Date of birth</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Date of birth</label>
        <label>Category</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Category</label>
        <label>Differently abled</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Differently abled</label>
        </div>
        <div className= "careertwo"> 
        <label>Career break</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Career break</label>
        <label>Work permit</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Work permit</label>
        <label>Address</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Address</label>
        <label>Languages</label>
        <label onClick={addCurrentIndustry} className="careeractionbtn">Add Languages</label>
        </div>
        </div>
        </div>
    )
}