

import "./rightcontainer.css"

export default function RightContainer(){

    return(
        <div className="rightbody"> 
        <div className="topheader">
        <div className="topleft">
            <h3>Ui Developer (JavaScript/TypeScript/ReactJS)</h3>
            <div className="subheaderholder">
            <label className="subheaderblock">Oracle</label> <label className="subheaderblock">3.8</label> <label className="subheaderblock">4357 Reviews</label>
            </div>
        </div>
        </div> 
        <div className="appstatusholder">
         <h4>Application status</h4>   
        <div className= "appstatuscontainer">
         <div className="greencircle"></div>
         <div className="greenbar"></div>
         <div className="greencircle"></div>
         <div className="greenbar"></div>
         <div className="greencircle"></div>
         <div className="greenbar"></div>
         <div className="greencircle"></div>
         </div>
         <div className="statusrow">
            <div className="eachstatus">
                <label className="statusheader">Applied</label>
                <label className="graytext">21 Nov'23</label>
            </div>
            <div className="eachstatus">
            <label className="statusheader">Application sent</label>
                <label className="graytext">21 Nov'23</label>
            </div>
            <div className="eachstatus">
            <label className="statusheader">Contacted By Email</label>
                <label className="graytext">09 Jan'24</label>
            </div>
            <div className="eachstatus">
            <label className="statusheader">Awaiting Recruiter Action</label>
            </div>
         </div>
         </div>
        </div>
    )
}