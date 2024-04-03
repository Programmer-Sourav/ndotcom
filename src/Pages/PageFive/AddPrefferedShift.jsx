
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"


export default function AddPrefferedShift(){

    const [prefferedShift, setPrefferedShift] = useState("")
    const { onOpen, isOpen, onClose} = useDisclosure();


    const addOnBtnPress = () =>{

    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px"}}>Add preffered shift</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Add Preffered Shift:</p>
        <label>
        <input type="radio" value={prefferedShift} checked={{}} onChange={setPrefferedShift}/>
        Full Day
        </label>
        <label> 
        <input type="radio" value={prefferedShift} checked={{}} onChange={setPrefferedShift}/>
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