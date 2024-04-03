import { Button, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import "./careerbreak.css"
import { useState } from "react"

export default function AddCareerBreak(){

    const [careerBreakBoolean, setCareerBreakBoolean] = useState("yes")
    const [careerBreakReason, setCareerBreakReason] = useState("")

    const { isOpen, onOpen, onClose} = useDisclosure()


    return(
        <>
        <Button onClick={onOpen}>Add career break</Button>
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
         <input type="radio" value={careerBreakBoolean} checked={{}} onChange={()=>{setCareerBreakBoolean()}}/>
         Yes
         </label>
         <label>
         <input type="radio" value={careerBreakBoolean} checked={{}} onChange={()=>{setCareerBreakBoolean()}}/>
         Yes
         </label>
         <label>Reason for Career Break?</label>
         <input type="text" value={careerBreakReason} onChange={()=>{setCareerBreakReason()}}/>
        </div>
        </ModalBody>  
        </ModalContent>   
        </Modal>
        </>
    )
}

import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"


export default function AddCareerBreak(){

    const [careerbreak, setCareerBreak] = useState("")
    const [reason, setReason] = useState("")
    const { onOpen, isOpen, onClose} = useDisclosure();


    const addOnBtnPress = () =>{

    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px"}}>Add career break</Button>
        <Modal  isOpen={isOpen} onClose={onClose}>
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Add career break:</p>
        <select onChange={(e)=>{setCareerBreak(e.target.value)}} value={careerbreak}>
         <option value="Yes">Yes</option>
         <option value="No">No</option>
        </select>
        <textarea value={reason} onChange={()=>{setReason(e.target.value)}} cols="5" rows="20"></textarea>
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