
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { jobsSlice } from "../Slices/JobsSlice";


export default function AddDateOfBirthModal(){

    const [dob, setDob] = useState("")

    const { onOpen, isOpen, onClose} = useDisclosure();

    const dispatch = useDispatch()

    const addOnBtnPress = () =>{
      dispatch(jobsSlice.actions.setPersonalProfile({dateOfBirth : dob}))
    }

    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px"}}>Add date of birth</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Select Industry:</p>
        <input type="date" onChange={(e)=>{setDob(e.target.value)}} value={dob}/>
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