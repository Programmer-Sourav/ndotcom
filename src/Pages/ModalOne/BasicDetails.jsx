import { useState } from "react"

import "./basic.css"
import { useDispatch } from "react-redux"
import { addBasicDetailsAsync } from "../Slices/JobsSlice"

export default function BasicDetails(){

    const [name, setName] = useState("")
    const [experience, setExperience] = useState("Freshers")
    const [currentCountry, setCurrentCountry] = useState("India")
    const [selectedState, setSelectedState] = useState("Bangalore")
    const [mobileNumber, setMobileNumber] = useState("")
    const [telephone, setTelephone] = useState({countryCode: "", areaCode: "", phoneNumber: ""})
    const [emailId, setEmailId] = useState("")
    const [selectedAvailability, setSelectedAvailability] = useState("")

    
    const dispatch = useDispatch()

    function changeExperience(value){
        setExperience(value)
    }


    function changeCountry(value){
        setCurrentCountry(value)
    }


    function onSelectChange(value){
        setSelectedState(value)
    }

    function onSetMobileNumber(value){
       setMobileNumber(value)
    }

    function onSelectedAvailability(value){
        setSelectedAvailability(value)
    }

    const cancelOnButtonClick = () =>{

    }

    const saveOnButtonClick = () =>{
       const  basicDetailsObject = {name: name, experience: experience, country: currentCountry, state: selectedState, mobile: mobileNumber, telephone: telephone, availaibility: selectedAvailability}
       dispatch(addBasicDetailsAsync(basicDetailsObject))
    }

    const onChangeTelephone = (e) => {
        const { name, value} = e.target;
        setTelephone(prevTelephone=>(
            {...prevTelephone, [name] : value}
        ))
    }


    return(
        <div className="modalforbasic"> 
            <h2>Basic details</h2>
            <label className="labelinput">Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="inputdesign"/>
            <div className="radiogroup">
            <label  className="labelinput">
            <input type="radio" value="Freshers" checked={experience==="Freshers"} onChange={(e)=>{changeExperience(e.target.value)}}/>
            Freshers
            </label>
            <label className="labelinput">
            <input type="radio" value="Experienced" checked={experience==="Experienced"} onChange={(e)=>{changeExperience(e.target.value)}}/>
            Experienced
            </label>
            </div>


            <label className="labelinput">Current location</label>
            <div className="radiogroupwithoutmargin">
            <label  className="labelinput">
            <input type="radio" value="India" checked={currentCountry==="India"} onChange={(e)=>{changeCountry(e.target.value)}}/>
            India
            </label>
            <label className="labelinput">
            <input type="radio" value="Outside India" checked={currentCountry==="Outside India"} onChange={(e)=>{changeCountry(e.target.value)}}/>
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
        <input type="text" name="countryCode" value={telephone.countryCode} onChange={onChangeTelephone} className="styledinputone" placeholder="Country code"/>
        <input type="text" name="areaCode"  value={telephone.areaCode} onChange={onChangeTelephone} className="styledinputtwo" placeholder="Area code"/>
        <input type="text" name="phoneNumber"  value={telephone.phoneNumber} onChange={onChangeTelephone} className="styledinputthree" placeholder="Phone number"/>
        </div>
        <label className="labelinputauto">Email address</label>
        <div className="flexstyle">
        <span className="graytext">imsourav123@gmail.com</span> 
        <span onClick={()=>{changeEmailId}} className="emailstyle">Change Email</span>
        </div>
        <label className="labelinputauto">Availaibility to join</label>
        <div className="flexstyle">
        <span value={selectedAvailability} onClick={()=>{onSelectedAvailability("15 days or less")}} className="btnstyle" >15 days or less</span>
        <span value={selectedAvailability} onClick={()=>{onSelectedAvailability("1 Month")}} className="btnstyle" >1 Month</span>
        <span value={selectedAvailability} onClick={()=>{onSelectedAvailability("2 Months")}} className="btnstyle" >2 Months</span>
        <span value={selectedAvailability} onClick={()=>{onSelectedAvailability("3 Months")}} className="btnstyle" >3 Months</span>
        <span value={selectedAvailability} onClick={()=>{onSelectedAvailability("More than 3 months")}} className="btnstyle">More than 3 months</span>
        </div>
        <div className="btnflex">
        <span onClick={()=>{cancelOnButtonClick()}} className="btnone">Cancel</span>
        <span onClick={()=>{saveOnButtonClick()}} className="btntwo">Save</span>   
        </div>
       </div>
    )
}