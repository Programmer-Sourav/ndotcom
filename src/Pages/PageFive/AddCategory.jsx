
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"


export default function AddCategory(){

    const [category, setCategory] = useState("General")
  
  
    const { onOpen, isOpen, onClose} = useDisclosure();


    const addOnBtnPress = () =>{

    }
    return(
        <>
        <Button onClick={onOpen} style={{background: "white", color: "blue", outline: "none", height: "32px"}}>Add category</Button>
        <Modal  isOpen={isOpen} onClose={onClose} size="xl">
         <ModalOverlay/>
         <ModalContent>
         <ModalCloseButton></ModalCloseButton>
         <ModalBody>
        <div className="adibod"> 
        <label><p>Add Category:</p>
        <label>
         <input type="radio" value={category} checked={category==="General"} onChange={()=>{setCategory("General")}} />
         General
         </label>
         <label>
         <input type="radio" value={category} checked={category==="SC"} onChange={(e)=>{setCategory("SC")}} />
         SC
         </label>
         <label>
         <input type="radio" value={category} checked={category==="ST"} onChange={(e)=>{setCategory("ST")}} />
         ST
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