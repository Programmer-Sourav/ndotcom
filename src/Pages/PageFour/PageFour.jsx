import { Fragment } from "react"
import "./four.css"

export default function PageFour(){



    function verifyOTP(){

    }

    return(
        <Fragment className="body">
        <h3 className="headerdesign">Verify mobile number</h3>
        <p>Please enter the OTP sent to mobile number +91 9999900000</p>

        <div className="otpbox">
        <input type="text"  maxLength="1"  className="inputotp"/>
        <input type="text"  maxLength="1" className="inputotp"/>
        <input type="text"  maxLength="1" className="inputotp"/>
        <input type="text"  maxLength="1" className="inputotp"/>
        </div>
        <p className="graytext">Your OTP should arrive in 40 seconds</p>
        <button onClick={verifyOTP} className="verifybtn">Verify</button>
        </Fragment>
    )
}