import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, ModalFooter } from "@chakra-ui/react"
import "./careerbreak.css"
import { useState } from "react"

export default function AddGender(){

    const [gender, setGender] = useState("Male")
    const [maritalStatus, setMaritalStatus] = useState("Single")


    const { isOpen, onOpen, onClose} = useDisclosure()

    function addOnBtnPress(){
      
    }

    return(
        <>
        <Button onClick={onOpen} style={{background: "transparent", height: "32px", color: "blue", outline: "none"}}>Add gender, marital status, more info</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay/>
        <ModalContent> 
        <ModalCloseButton/>
        <ModalBody>  
        <div className="cbbody"> 
         <label>
           Please specify your gender.
         </label>
         <label>
         <input type="radio" value={gender} checked={gender==="Male"} onChange={()=>{setGender("Male")}}/>
         Male
         </label>
         <label>
         <input type="radio" value={gender} checked={gender==="Female"} onChange={()=>{setGender("Female")}}/>
         Female
         </label>
         <label>What is your marital status? </label>
         <select value={maritalStatus} onChange={(e)=>{setMaritalStatus(e.target.value)}} className="selectinputstyle">
            <option>Single</option>
            <option>Married</option>
            <option>In a Relationship</option>
            <option>Others</option>
         </select>
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