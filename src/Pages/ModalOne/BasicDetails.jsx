import { useState } from "react"

import "./basic.css"
import { useDispatch } from "react-redux"
import { addBasicDetailsAsync } from "../Slices/JobsSlice"

export default function BasicDetails(){

    const [name, setName] = useState("")
    const [experience, setExperience] = useState("")
    const [currentCountry, setCurrentCountry] = useState("")
    const [selectedState, setSelectedState] = useState("Bangalore")
    const [mobileNumber, setMobileNumber] = useState("")
    const [telephone, setTelephone] = useState({countryCode: "", areaCode: "", phoneNumber: ""})
    const [emailId, setEmailId] = useState("")
    const [selectedAvailability, setSelectedAvailability] = useState("")

    
    const dispatch = useDispatch()

    function changeExperience(value){
        console.log(value)
        setExperience(value)
    }


    function changeCountry(value){
        console.log(value)
        setCurrentCountry(value)
    }


    function onSelectChange(value){
        console.log(value)
        setSelectedState(value)
    }

    function onSetMobileNumber(value){
        console.log(value)
       setMobileNumber(value)
    }

    function onSelectedAvailability(value){
        console.log(value)
        setSelectedAvailability(value)
    }

    const cancelOnButtonClick = () =>{

    }

    const saveOnButtonClick = () =>{
       const  basicDetailsObject = {name: name, experience: experience, country: currentCountry, state: selectedState, mobile: mobileNumber, telephone: telephone, availaibility: selectedAvailability}
       console.log(222, basicDetailsObject)
       dispatch(addBasicDetailsAsync(basicDetailsObject))
    }


    return(
        <div className="modalforbasic"> 
            <h2>Basic details</h2>
            <label className="labelinput">Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="inputdesign"/>
            <div className="radiogroup">
            <label  className="labelinput">
            <input type="radio" value={experience} checked={experience.includes("Freshers")} onChange={(e)=>{changeExperience(e.target.value)}}/>
            Freshers
            </label>
            <label className="labelinput">
            <input type="radio" value={experience} checked={experience.includes("Experienced")} onChange={(e)=>{changeExperience(e.target.value)}}/>
            Experienced
            </label>
            </div>


            <label className="labelinput">Current location</label>
            <div className="radiogroupwithoutmargin">
            <label  className="labelinput">
            <input type="radio" value={currentCountry} checked={currentCountry.includes("India")} onChange={(e)=>{changeCountry(e.target.value)}}/>
            India
            </label>
            <label className="labelinput">
            <input type="radio" value={currentCountry} checked={currentCountry.includes("Outside India")} onChange={(e)=>{changeCountry(e.target.value)}}/>
            Outside India
            </label>
            </div>


           <div className="inputgroup">
           <input type="text" value={selectedState} onChange={(e)=>{onSelectChange(e.target.value)}} className="styledinput" placeholder="Tell us about your current location"/>
           <select onChange={()=>{onSelectChange()}} className="styledinput">
             <option>Bangalore</option>
             <option>Agartala</option>
             <option>Calcutta</option>
             <option>Hyderabad</option>
             </select>
             </div>



        <label className="labelinput">Mobile number</label>
        <div className="inputbox">
        <span className="prefix">+91</span>    
        <input type="text" onChange={(e)=>{onSetMobileNumber(e.target.value)}} value={mobileNumber}  placeholder="Mobile number"></input>  
        </div>

        <label className="labelinputauto">Telephone number</label>
        <div className="telephonebox">
        <input type="text" value={telephone.countryCode} onChange={(e)=>{setTelephone(e.target.value)}} className="styledinputone" placeholder="Country code"/>
        <input type="text" value={telephone.areaCode} onChange={(e)=>{setTelephone(e.target.value)}} className="styledinputtwo" placeholder="Area code"/>
        <input type="text" value={telephone.phoneNumber} onChange={(e)=>{setTelephone(e.target.value)}} className="styledinputthree" placeholder="Phone number"/>
        </div>
        <label className="labelinputauto">Email address</label>
        <div className="flexstyle">
        <span className="graytext">imsourav123@gmail.com</span> 
        <span onClick={()=>{changeEmailId}} className="emailstyle">Change Email</span>
        </div>
        <label className="labelinputauto">Availaibility to join</label>
        <div className="flexstyle">
        <span value={selectedAvailability} onClick={()=>{onSelectedAvailability("15 days or less")}} className="btnstyle" >15 days or less</span>
        <span value={selectedAvailability} onClick={(e)=>{onSelectedAvailability("1 Month")}} className="btnstyle" >1 Month</span>
        <span value={selectedAvailability} onClick={(e)=>{onSelectedAvailability("2 Months")}} className="btnstyle" >2 Months</span>
        <span value={selectedAvailability} onClick={(e)=>{onSelectedAvailability("3 Months")}} className="btnstyle" >3 Months</span>
        <span value={selectedAvailability} onClick={(e)=>{onSelectedAvailability("More than 3 months")}} className="btnstyle">More than 3 months</span>
        </div>
        <div className="btnflex">
        <span onClick={()=>{cancelOnButtonClick()}} className="btnone">Cancel</span>
        <span onClick={()=>{saveOnButtonClick()}} className="btntwo">Save</span>   
        </div>
       </div>
    )
}