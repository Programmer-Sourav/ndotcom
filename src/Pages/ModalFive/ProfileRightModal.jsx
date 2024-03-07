import "./profilemodal.css"

export default function ProfileRightModal(){


    const updateProfile = () =>{

    }

    return(
        <div className="pmbody"> 
            <div className="topcontainer">
            <img src=""  className="leftimage"/>
            <div className="rightcontainer">
                <span className="headerstyle">SOURAV NATH</span>
                <span className="designtstyle">Freelancer at Individual</span>
                <button onClick={()=>{updateProfile()}} className="updateclassstyle"> View & Update Profile </button>
                </div>
            </div>
           <hr/>
           <div className="secondcontainer">
            <p className="textsecondary"> Your profile performance </p>
            <p className="textsecondarygray">Last 90 days</p>
           </div>
           <div className="thirdcontainer">
             <div className="thirdcontainerleft">
                <h2 className="headerbottom">15754</h2>
                <section>Search Appearances</section>
             </div>
             <div className="thirdcontainerright">
               <h2 className="headerbottom">492</h2>
               <section>Recruiters Actions</section>
             </div>
           </div>
           <div className="bottomcontainer">
              <label className="paradesign">Naukri Blog</label>
              <label className="paradesign">Settings</label>
              <label className="paradesign">Logout</label>
             </div>
        </div>
    )
}