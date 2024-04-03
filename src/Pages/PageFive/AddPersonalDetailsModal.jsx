
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"


export default function AddPersonalDetailsModal(){

    const [gender, setGender] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
  
    const { onOpen, isOpen, onClose} = useDisclosure();


    const addOnBtnPress = () =>{

    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px"}}>Add gender, marital status, more info</Button>
        <Modal  isOpen={isOpen} onClose={onClose} size="xl">
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Select Gender:</p>
        <label>Male
         <input type="radio" value={gender} onChange={setGender} />
         </label>
         <label>Female
         <input type="radio" value={gender} onChange={setGender} />
         </label>
         <label>Don't want to mention
         <input type="radio" value={gender} onChange={setGender} />
         </label>
        </label>
        <label><p>Select Marital Status:</p>
        <label>Single
         <input type="radio" value={maritalStatus} onChange={setMaritalStatus} />
         </label>
         <label>Married
         <input type="radio" value={maritalStatus} onChange={setMaritalStatus} />
         </label>
         <label>In a Relationship
         <input type="radio" value={maritalStatus} onChange={setMaritalStatus} />
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