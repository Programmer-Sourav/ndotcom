import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, ModalFooter } from "@chakra-ui/react"
import "./careerbreak.css"
import { useState } from "react"
import { jobsSlice } from "../Slices/JobsSlice"
import { useDispatch } from "react-redux"

export default function AddCareerBreak(){

    const [careerBreakBoolean, setCareerBreakBoolean] = useState("No")
    const [careerBreakReason, setCareerBreakReason] = useState("")

    const { isOpen, onOpen, onClose} = useDisclosure()

    const dispatch = useDispatch();
    
    function addOnBtnPress(){
        const careerBreak = {hasBreak: careerBreakBoolean, reason: careerBreakReason}
        dispatch(jobsSlice.actions.setPersonalProfile(careerBreak))
    }

    return(
        <>
        <Button onClick={onOpen} style={{background: "transparent", height: "32px", color: "blue", outline: "none"}}>Add career break</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay/>
        <ModalContent> 
        <ModalCloseButton/>
        <ModalBody>  
        <div className="cbbody"> 
         <label>
           Do you have any career break? 
         </label>
         <label>
         <input type="radio" value={careerBreakBoolean} checked={careerBreakBoolean==="No"} onChange={()=>{setCareerBreakBoolean("No")}}/>
         No
         </label>
         <label>
         <input type="radio" value={careerBreakBoolean} checked={careerBreakBoolean==="Yes"} onChange={()=>{setCareerBreakBoolean("Yes")}}/>
         Yes
         </label>
         <label>Reason for Career Break?</label>
         <textarea value={careerBreakReason} className="textareadiv" onChange={()=>{setCareerBreakReason()}}/>
        </div>
        </ModalBody> 
        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
        </Button>
            <Button variant='ghost' onClick={addOnBtnPress}>Save</Button>
            </ModalFooter>  
        </ModalContent>  
        </Modal>
        </>
    )
}