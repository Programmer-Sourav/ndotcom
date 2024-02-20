import "./rightside.css"


import { useState } from "react"


export default function RightSide(){

    const [fullName, setFullName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")

    function xyz(){

    }

    function registerNow(){

    }

    return(
        <div className="body">

        <h2> Find a job & grow your career</h2>
        <div><label className="labeldesign">Full name</label></div>
        <input type="text" onChange={(e)=>{setFullName(e.target.value)}} value={fullName} className="inputfield" placeholder="What is your name?"></input> 
        <div><label className="labeldesign">Email ID</label></div>
        <input type="text" onChange={()=>{setFullName(e.target.value)}} value={fullName} className="inputfield" placeholder="Tell us your Email ID"></input> 
        <p className="graytext">We'll send you relevant jobs in your mail</p>
        <div><label className="labeldesign">Password</label></div>
        <input type="text" onChange={()=>{setFullName(e.target.value)}} value={fullName} className="inputfield" placeholder="Create a password for your account"></input>
        <p className="graytext">Minimum 6 characters required</p> 
        <div><label className="labeldesign">Mobile number</label></div>
        <div className="inputbox">
        <span className="prefix">+91</span>    
        <input type="text" onChange={(e)=>{setMobileNumber(e.target.value)}} value={mobileNumber}  placeholder="Mobile number"></input>  
        </div>  
        <p className="graytext">Recruiters will call you on this number</p> 
        <div><label className="labeldesign">Work status</label></div> 
        <div className="workcontainer">
         <div className="workbuttondesign">
            <div className="leftside-workbutton">
            <h4>I'm experienced</h4>
            <p>I have work experience (excluding internship)</p>
            </div>
            <div style={{paddingRight: "8px"}}>
            <img src="https://static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg" height="64px" width="64px" alt="briefcase-icon-experienced"></img>
            </div>
          </div>   
         <div className="workbuttondesign">
         <div className="leftside-workbutton">
            <h4>I'm a fresher</h4>
            <p>I am a student/Haven't worked after graduation</p>
            </div>
            <div style={{paddingRight: "8px"}}>
            <img src="https://static.naukimg.com/s/7/104/assets/images/schoolbag.a54cbf7a.svg" alt="briefcase-icon-fresher" height="64px" width="64px"></img>
            </div>
        </div> 
        </div>
        <div><label className="labeldesign">Resume</label></div>
        <div className="upload-button-design">
        <div className="resume-upload-btn-holder">
      <label htmlFor="files" className="resume-upload-btn">Upload Resume</label>
      <input id="files" style={{visibility: "hidden"}} type="file"/>
      <span>DOC, DOCx, PDF, RTF | Max: 2MB</span>
     </div>
        </div>
        <p className="graytext">Recruiters give first preference to candidates who have a resume</p>
        <label>
        <input type="checkbox" onChange={xyz} checked={false} className="graytext-two"/>
        Send me important updates on <span> <img src="https://static.naukimg.com/s/7/104/assets/images/whatsappicon.81b19a23.svg" height="8px" width="8px" alt="whatsapp"/></span> WhatsApp
        </label>
        <p className="graytext-two">
        By clicking Register, you agree to the <a href="">Terms and Conditions</a> & <a href="">Privacy Policy</a> of Naukri.com
        </p>
        <button onClick={registerNow} className="registerbtn">Register now</button>
        </div>
        
    )
}