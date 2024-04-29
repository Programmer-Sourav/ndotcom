
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"


export default function DesiredEmployementType(){

    const [desiredEmployement, setDesiredEmployement] = useState("Permanent")
    const { onOpen, isOpen, onClose} = useDisclosure();


    const addOnBtnPress = (value) =>{
      setDesiredEmployement(value)
    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px", width: "180px", display: "flex", justifyContent: "left", outline: "none", border:"none"}}>Add desired employement type</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Select Desired job type:</p>
        <label>
        <input type="radio" value={desiredEmployement} checked={desiredEmployement==="Permanent"} onChange={()=>{addOnBtnPress("Permanent")}}/>
        Permanent
        </label>
        <label> 
        <input type="radio" value={desiredEmployement} checked={desiredEmployement==="Contractual"} onChange={()=>{addOnBtnPress("Contractual")}}/>
        Contractual
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