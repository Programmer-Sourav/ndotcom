
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { jobsSlice } from "../Slices/JobsSlice";
import { useDispatch } from "react-redux";


export default function AddDepartment(){

    const [department, setDepartment] = useState("")
    const { onOpen, isOpen, onClose} = useDisclosure();

    const dispatch = useDispatch();
 
    const addOnBtnPress = () =>{
          dispatch(jobsSlice.actions.actionCreateCareerProfile({department: department}))
    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px", width: "180px", display: "flex", justifyContent: "left", outline: "none", border:"none"}}>Add department</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Select Department:</p>
        <select onChange={(e)=>{setDepartment(e.target.value)}} value={department}>
         <option value="Software Development">Software Development</option>
         <option value="ITES">ITES</option>
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