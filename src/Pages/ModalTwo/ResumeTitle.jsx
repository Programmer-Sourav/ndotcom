import "./resumetitle.css"

export default function ResumeTitle(){


    return(
        <div className="rtbody"> 
        <div className="headline">
        <span className="headlinestyle">Resume headline</span>
        <span className="addheadline">Add 8%</span>
        </div>
        <p className="graytext"> It is the first thing recruiters notice in your profile. Write conciously what makes you unique and right person for the job you are looking for.</p>
        <input type="text" className="inputdesign"/>
        <span className="characterprompt">250 characters left</span>
        <div className="btnflex">
        <span className="btnone">Cancel</span>  
        <span className="btntwo">Save</span> 
        </div>
        </div>
    )
}