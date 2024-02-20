import { useState } from "react"

import "./basic.css"

export default function BasicDetails(){

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    

    function changeRadio(){

    }


    function onSelectChange(){

    }


    function onSetMobileNumber(){

    }

    return(
        <div className="modalforbasic"> 
            <h2>Basic details</h2>
            <label className="labelinput">Name</label>
            <input type="text" value={name} onChange={()=>{setName()}} className="inputdesign"/>
            <div className="radiogroup">
            <label  className="labelinput">
            <input type="radio" value={name} checked={true} onChange={()=>{changeRadio}}/>
            Freshers
            </label>
            <label className="labelinput">
            <input type="radio" value={name} checked={true} onChange={()=>{changeRadio}}/>
            Experienced
            </label>
            </div>


            <label className="labelinput">Current location</label>
            <div className="radiogroupwithoutmargin">
            <label  className="labelinput">
            <input type="radio" value={name} checked={true} onChange={()=>{changeRadio}}/>
            India
            </label>
            <label className="labelinput">
            <input type="radio" value={name} checked={true} onChange={()=>{changeRadio}}/>
            Outside India
            </label>
            </div>


           <div className="inputgroup">
           <input type="text" value={name} onChange={()=>{setName()}} className="styledinput" placeholder="Tell us about your current location"/>
           <select onChange={()=>{onSelectChange}} className="styledinput">
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
        <input type="text" value={name} onChange={()=>{setName()}} className="styledinputone" placeholder="Country code"/>
        <input type="text" value={name} onChange={()=>{setName()}} className="styledinputtwo" placeholder="Area code"/>
        <input type="text" value={name} onChange={()=>{setName()}} className="styledinputthree" placeholder="Phone number"/>
        </div>
        <label className="labelinputauto">Email address</label>
        <div className="flexstyle">
        <span className="graytext">imsourav123@gmail.com</span> 
        <span onClick={()=>{changeEmailId}} className="emailstyle">Change Email</span>
        </div>
        <label className="labelinputauto">Availaibility to join</label>
        <div className="flexstyle">
        <span onClick={()=>{changeEmailId}} className="btnstyle">15 days or less</span>
        <span onClick={()=>{changeEmailId}} className="btnstyle">1 Month</span>
        <span onClick={()=>{changeEmailId}} className="btnstyle">2 Months</span>
        <span onClick={()=>{changeEmailId}} className="btnstyle">3 Months</span>
        <span onClick={()=>{changeEmailId}} className="btnstyle">More than 3 months</span>
        </div>
        <div className="btnflex">
        <span onClick={()=>{changeEmailId}} className="btnone">Cancel</span>
        <span onClick={()=>{changeEmailId}} className="btntwo">Save</span>   
        </div>
       </div>
    )
}