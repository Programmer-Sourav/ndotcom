
import "./adibody.css"

import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"


export default function AddCategory(){

    const [category, setCategory] = useState("")
  
  
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
        <label><p>Add Category:</p>
        <label>General
         <input type="radio" value={category} checked={{}} onChange={(e)=>{setCategory(e.target.value)}} />
         </label>
         <label>SC
         <input type="radio" value={category}checked= {{}} onChange={(e)=>{setCategory()}} />
         </label>
         <label>ST
         <input type="radio" value={category} checked= {{}} onChange={(e)=>{setCategory()}} />
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