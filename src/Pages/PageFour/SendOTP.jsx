import { useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";

export default function SendOTP(){
    const [phone, setPhone] = useState("")


    function onCaptchaVerification(){
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
          }
        });
        
      }


      function onSignInSubmit(){
        onCaptchaVerification();
        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth();
        const formatPh = '+' +phone;
       signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP SENT")
      }).catch((error) => {
        grecaptcha.reset(window.recaptchaWidgetId);
        // Or, if you haven't stored the widget ID:
        window.recaptchaVerifier.render().then(function(widgetId) {
          grecaptcha.reset(widgetId);
        });
      });
      }
       
     

    return(
        <div> 
           <PhoneInput country={"in"} value={phone} onChange={setPhone}/>
           <button onClick={onSignInSubmit}>Send OTP via SMS</button>
        </div>
    )
}