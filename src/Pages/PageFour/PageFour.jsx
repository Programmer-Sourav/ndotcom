import { Fragment, useEffect, useState } from "react"

import "./four.css"

export default function PageFour(){

     const [otpInput, setOtpInput] = useState({input1: "", input2: "", input3: "", input4: "", input5: "", input6: ""})
     const [timeLeft, setTimeLeft] = useState(40);
     const [user, setUser] = useState(null);

    function verifyOTP(){

    }

    const onOtpChange =(e) =>{
        const {name, value} = e.target
        setOtpInput({...otpInput, [name]: value})
    }

    // const loopWithTimeout = (timeout) => {

    //     console.log(`Timeout: ${timeout} seconds`);

    //     if (timeout <= 0) {
    //       console.log("Loop ended.");
    //       return;
    //     }
      
    //     setTimeout(() => {
    //       const currentTime = timeout-1;
    //       loopWithTimeout(timeout - 1);
    //     },1000); 

    //   };
      
    //   loopWithTimeout(30);
      
    //  console.log(333, currentTimeLeft)
    const concatenatedInput = Object.values(otpInput).join("");
    console.log(444, concatenatedInput)
    function verifyOTP() {
      window.confirmationResult
        .confirm(concatenatedInput)
        .then(async (res) => {
          console.log(res);
          setUser(res.user);
       
        })
        .catch((err) => {
          console.log(err);
          
        });
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        if (timeLeft === 0) {
          return;
        }
        setTimeLeft(timeLeft - 1);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [timeLeft]);

   
    return(
        <div className="body">
        <div id="sign-in-button"></div>  
        <h3 className="headerdesign">Verify mobile number</h3>
        <p>Please enter the OTP sent to mobile number +91 9999900000</p>

        <div className="otpbox">
        <input type="text"  maxLength="1"  className="inputotp" name="input1" value= {otpInput.input1} onChange={onOtpChange}/>
        <input type="text"  maxLength="1" className="inputotp"  name="input2"  value= {otpInput.input2} onChange={onOtpChange}/>
        <input type="text"  maxLength="1" className="inputotp"  name="input3" value= {otpInput.input3} onChange={onOtpChange}/>
        <input type="text"  maxLength="1" className="inputotp"  name="input4" value= {otpInput.input4} onChange={onOtpChange}/>
        <input type="text"  maxLength="1" className="inputotp"  name="input5" value= {otpInput.input5} onChange={onOtpChange}/>
        <input type="text"  maxLength="1" className="inputotp"  name="input6" value= {otpInput.input6} onChange={onOtpChange}/>
        </div>
        <p className="graytext">Your OTP should arrive in {timeLeft} seconds</p>
        <button onClick={verifyOTP} className="verifybtn">Verify</button>
        </div>
    )
}