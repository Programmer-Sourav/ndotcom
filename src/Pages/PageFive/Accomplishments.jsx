import "./accomplishments.css"
import OnlineProfileModal from "./OnlineProfileModal"


export default function Accomplishments(){


    function addWhenClicked(){

    }

    return(
        <div>
            <div className="abody">
            <h3>Accomplishments</h3>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Online profile</h3>
            {/* <button onClick={addWhenClicked} className="buttonportion">Add</button> */}
            <OnlineProfileModal/>
            </div>
            <p className="belowportion">
             Add link to online profiles (e.g. LinkedIn, Facebook etc.)
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Work Sample</h3>
            <button onClick={addWhenClicked} className="buttonportion">Add</button>
            </div>
            <p className="belowportion">
             Add link to your projects(e.g. Github links etc.)
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">White paper/Research publication/Journal entry</h3>
            <button onClick={addWhenClicked} className="buttonportion">Add</button>
            </div>
            <p className="belowportion">
             Add links to your online publications.
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Presentation</h3>
            <button onClick={addWhenClicked} className="buttonportion">Add</button>
            </div>
            <p className="belowportion">
             Add links to your online presentation (e.g. Slideshare presentation links etc.)
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Patent</h3>
            <button onClick={addWhenClicked} className="buttonportion">Add</button>
            </div>
            <p className="belowportion">
             Add details of patents you have filed.
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Certification</h3>
            <button onClick={addWhenClicked} className="buttonportion">Add</button>
            </div>
            <p className="belowportion">
             Add details of certifications you have achieved/completed.
            </p>
            </div>
            <hr/>
            </div>
        </div>
    )
}