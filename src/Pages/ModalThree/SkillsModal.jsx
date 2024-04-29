import { useDispatch } from "react-redux"
import "./skills.css"
import { addSkills, jobsSlice } from "../Slices/JobsSlice"
import { useRef, useState } from "react"
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, UnorderedList, useDisclosure } from "@chakra-ui/react"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function SkillsModal(){

    const { isOpen, onOpen, onClose} = useDisclosure();

     const arrayOfSkills = ["Java", "SQL", "Angular", "Javascript", "Python", "React", "Android", "Mainframe", "docker","kubernaties", "kafka", "json"]

     const [skills, setSkills ] = useState([])
     const [searchSkills, setSearchSkills] = useState("")
     const [isOpenOnInput, setIsOpen] = useState(false);

     const inputRef = useRef(null)

     const dispatch = useDispatch()


     function cancelOnClick(){

     }


     function saveOnClick(){
        dispatch(jobsSlice.actions.addSkills(skills))
     }

    const onSkillChange = (e) =>{
      const value = e.target.value;
      setSearchSkills(e.target.value)
      if(value){
        inputRef.current.focus();
      setIsOpen(true);
     
      }
    else
      setIsOpen(false)
    }

    const onListItemClick = (item) =>{
     console.log(111, item)
     setSkills([...skills, item])
    }
    let skillfilteredList  = skills;
    function onCancel(skillItem){
      skillfilteredList = skills.filter((skill)=>(!skill.includes(skillItem)))
      setSkills(skillfilteredList)
    }

    function addOnSkillSelected(item){
      setSkills([...skills, item])
    }

   let filteredList = [];
   if(searchSkills){
    //Note: arrayofSkills will come from array
    //can use debouncing
    //usememo 
   filteredList = arrayOfSkills.filter((skill)=>(skill.toLowerCase().includes(searchSkills.toLowerCase())))
   }

    return(
        <>
        <Button onClick={onOpen} style={{background: "transparent", outline: "none" }}>Add key skills</Button>
        <Modal isOpen = {isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
          <ModalContent>
          <ModalCloseButton />
          <ModalBody>
        <div className="skillsbody"> 
        <div className="headerdesign">
        <span className="skillsheader">Key skills</span> <span className="skillsadd"> Add 8% </span>
        </div>
        <div className="skillsparaholder">
        <p className="skillspara"> Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills, each skill is seperated by a comma.</p>
        </div>
        <span className="skillsheader"> Skills </span>
        <div className="flex-outside-inputbox">
        <div className="skillpillswithcloseparent">
          {skillfilteredList.map((skill)=>(
        <ul>    
        <label className="skillpillswithclose">{skill}</label>   
        <span className="closebtn" onClick={()=>{onCancel(skill)}}>X</span>
        </ul>
        ))}
        </div>
        </div>
        <input type="text" ref={inputRef} placeholder="Enter your area of Expertise/Specialization" className="inputbox" value={searchSkills} onChange={onSkillChange}/>
        <Popover isOpen={isOpenOnInput}>
        <PopoverTrigger>
          <span></span>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
          <UnorderedList mt={4}>
          <span>{filteredList.map((item)=>(<li  onClick={()=>{addOnSkillSelected(item)}}>{item}</li>))}</span>
          </UnorderedList>
          </PopoverBody>
        </PopoverContent>
      </Popover>
        <span className="skillsheader"> Or you can select from the suggested set of skills</span>
        <div className="skillspillsholder">
          { arrayOfSkills.map((item, index)=>(
        <label className="skillpills" key={index} onClick={()=>{onListItemClick(item)}}>{item}</label>
        ))}
        </div>
        {/* <div className="bottombtnpanel">
          <button onClick={cancelOnClick} className="btnone" > Cancel </button>
          <button onClick={saveOnClick} className="btntwo"> Save </button>
        </div> */}
        </div>
        </ModalBody>
        <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={saveOnClick}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
    )
    
}