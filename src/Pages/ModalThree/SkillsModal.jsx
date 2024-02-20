import "./skills.css"

export default function SkillsModal(){
     const arrayOfSkills = ["Java", "SQL", "Angular", "Javascript", "Python", "React"]


     function cancelOnClick(){

     }


     function saveOnClick(){

     }


    return(
        <div className="skillsbody"> 
        <div className="headerdesign">
        <span className="skillsheader">Key skills</span> <span className="skillsadd"> Add 8% </span>
        </div>
        <p className="skillspara"> Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills, each skill is seperated by a comma.</p>
        <span className="skillsheader"> Skills </span>
        <div className="flex-outside-inputbox">
        <div className="skillpillswithcloseparent">
        <label className="skillpillswithclose">Android</label>   
        <div className="closebtn">X</div>
        </div>
        </div>
        <input type="text" placeholder="Enter your area of Expertise/Specialization" className="inputbox"/>
        <span className="skillsheader"> Or you can select from the suggested set of skills</span>
        <div className="skillspillsholder">
          { arrayOfSkills.map((item)=>(
        <label className="skillpills">{item}</label>
        ))}
        </div>
        <div className="bottombtnpanel">
          <button onClick={cancelOnClick} className="btnone"> Cancel </button>
          <button onClick={saveOnClick} className="btntwo"> Save </button>
        </div>
        </div>
        
    )
}