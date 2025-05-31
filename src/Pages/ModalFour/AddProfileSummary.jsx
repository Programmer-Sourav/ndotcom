import { useState } from "react"
import "./addprofilesummary.css"
import ProfileSummary from "../PageFive/ProfileSummary"
import { useDispatch } from "react-redux"
import { addProfileSummary, jobsSlice } from "../Slices/JobsSlice"
import { Button, Modal, ModalBody, ModalCloseButton, ModalOverlay, useDisclosure, ModalFooter, ModalContent } from "@chakra-ui/react"

export default function AddProfileSummary(){
 
    const {onClose, isOpen, onOpen} = useDisclosure()

    const [profieSummary, setProfileSummary] = useState("")

    const dispatch = useDispatch()


    const onChangeProfileSummary = (e) =>{
        setProfileSummary(e.target.value)
    }

    const onSaveButtonClick = () =>{
        dispatch(jobsSlice.actions.addProfileSummary(profieSummary))
        setProfileSummary("");
    }

    const onCancelButtonClick = (e) =>{
        
    }

    return(
        <>
        <Button onClick={onOpen} style={{ backgroundColor: 'transparent', color: 'black', border: 'none', outline: 'none', height: "28px" }}>Add</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            
          <ModalCloseButton />
          <ModalBody>
        <div className="apsbody"> 
        <div className="headerflex"> 
        <span className="headertitle">Profile Summary </span>
        <span className="rightadd"> Add 8%</span>
        </div>
        <section className="sectionstyle"> 
            Your Profile Summary should mention the highlights of your career and education, what your professional interests are, 
            and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.
        </section>
        <textarea id="textareadid" rows="4" cols="48" className="textareadesign"  value={profieSummary} onChange={onChangeProfileSummary}></textarea>
        <span className="characterleftprompt">1000 character(s) left</span>
        {/* <div className="bottombtnflex">
         <button className="cancelbtn" onClick={onCancelButtonClick} >Cancel</button>
         <button className="savebtn" onClick={onSaveButtonClick} >Save</button>
        </div> */}
        </div>
        </ModalBody>
        <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={onClose}>
      Close
    </Button>
    <Button variant='ghost' onClick={onSaveButtonClick}>Save</Button>
  </ModalFooter>
</ModalContent>
</Modal>
    </>    
    )
}