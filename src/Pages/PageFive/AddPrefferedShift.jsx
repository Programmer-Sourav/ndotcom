
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { jobsSlice } from "../Slices/JobsSlice";


export default function AddPrefferedShift(){

    const [prefferedShift, setPrefferedShift] = useState("Full Day")
    const { onOpen, isOpen, onClose} = useDisclosure();


    const addOnBtnPress = () =>{
        dispatch(jobsSlice.actions.actionCreateCareerProfile({preferredShift: prefferedShift}))
    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px", width: "180px", display: "flex", justifyContent: "left", outline: "none", border:"none"}}>Add preffered shift</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Add Preffered Shift:</p>
        <label>
        <input type="radio" value={prefferedShift} checked={prefferedShift==="Full Day"} onChange={()=>{setPrefferedShift("Full Day")}}/>
        Full Day
        </label>
        <label> 
        <input type="radio" value={prefferedShift} checked={prefferedShift==="Night Shift"} onChange={()=>{setPrefferedShift("Night Shift")}}/>
        Night Shift
        </label>
        </label>
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