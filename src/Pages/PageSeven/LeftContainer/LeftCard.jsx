import "./leftcard.css";
// import { CompanyIcon } from "../../../assets/oracle.png";

export default function LeftCard(){


    return(
        <div className="cardcontainer"> 
           <h3 className="headerblock">Job | Java Developer</h3>
           <div className="subheaderholder">
           <label className="subheaderblock">Oracle</label> <label className="subheaderblock">3.8</label><label className="subheaderblock">4357 Reviews</label>
           </div>
           {/* <img src={CompanyIcon} height="92px" width="92px" alt="brand-logo"/> */}
           <div className="bottombar"> 
           <div className="contacted-pill">
            <p>Contacted by Email 5 weeks ago </p>
           </div>
           <div className="recruiter-active-pill">
            <p>Recruiter last active 4 wk ago </p>
           </div>
           </div>
        </div>
    )
}