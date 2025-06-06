
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { jobsSlice } from "../Slices/JobsSlice";


export default function AddIndustry(){

    const [industry, setIndustry] = useState("")
    const { onOpen, isOpen, onClose} = useDisclosure();

    const dispatch = useDispatch();

    const addOnBtnPress = () =>{
       dispatch(jobsSlice.actions.actionCreateCareerProfile({currentIndustry: industry}))
    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", width: "180px", display: "flex", justifyContent: "left", outline: "none", border:"none"}}>Add current industry</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Select Industry:</p>
        <select onChange={(e)=>{setIndustry(e.target.value)}} value={industry}>
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