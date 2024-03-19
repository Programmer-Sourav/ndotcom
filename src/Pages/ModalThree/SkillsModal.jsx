import { useDispatch } from "react-redux"
import "./skills.css"
import { addSkills } from "../Slices/JobsSlice"
import { useState } from "react"

export default function SkillsModal(){
     const arrayOfSkills = ["Java", "SQL", "Angular", "Javascript", "Python", "React"]

     const [skills, setSkills ] = useState([])
     const [searchSkills, setSearchSkills] = useState("")

     const dispatch = useDispatch()


     function cancelOnClick(){

     }


     function saveOnClick(e){
        const skill = e.target.value;
        setSkills([...skills, skill ])
        dispatch(addSkills())
     }

    const onSkillChange = (e) =>{
      setSearchSkills(e.target.value)
    }

    const onListItemClick = (item) =>{
     console.log(111, item)
    }
    const filteredList = arrayOfSkills.filter((skill)=>(skill.includes(searchSkills)))

    return(
        <div className="skillsbody"> 
        <div className="headerdesign">
        <span className="skillsheader">Key skills</span> <span className="skillsadd"> Add 8% </span>
        </div>
        <p className="skillspara"> Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills, each skill is seperated by a comma.</p>
        <span className="skillsheader"> Skills </span>
        <div className="flex-outside-inputbox">
        <div className="skillpillswithcloseparent">
          {skills.map((skill)=>(
        <ul>    
        <label className="skillpillswithclose">{skill}</label>   
        <div className="closebtn">X</div>
        </ul>
        ))}
        </div>
        </div>
        <input type="text" placeholder="Enter your area of Expertise/Specialization" className="inputbox" value={searchSkills} onChange={onSkillChange}/>
        <span className="skillsheader"> Or you can select from the suggested set of skills</span>
        <div className="skillspillsholder">
          { arrayOfSkills.map((item, index)=>(
        <label className="skillpills" key={index} onClick={()=>{onListItemClick(item)}}>{item}</label>
        ))}
        </div>
        <div className="bottombtnpanel">
          <button onClick={cancelOnClick} className="btnone" > Cancel </button>
          <button onClick={saveOnClick} className="btntwo"> Save </button>
        </div>
        </div>
        
    )
}