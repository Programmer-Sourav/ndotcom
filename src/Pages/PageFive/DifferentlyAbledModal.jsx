
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { jobsSlice } from "../Slices/JobsSlice";
import { useDispatch } from "react-redux";


export default function DifferentlyAbledModal(){

    const [desiredJob, setDesiredJob] = useState("")
    const { onOpen, isOpen, onClose} = useDisclosure();

    const dispatch = useDispatch();
    
    const addOnBtnPress = () =>{
     dispatch(jobsSlice.actions.setPersonalProfile(desiredJob))
    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px"}}>Add disability status</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Physically Challanged:</p>
        <select onChange={(e)=>{setDesiredJob(e.target.value)}} value={desiredJob}>
         <option value="Yes">Yes</option>
         <option value="No">No</option>
        </select>
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