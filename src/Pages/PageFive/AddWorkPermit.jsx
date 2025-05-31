import { useDisclosure, Button, Modal, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { jobsSlice } from "../Slices/JobsSlice";

export default function AddWorkPermit(){

    const [workPermitBoolean, setWorkPermitBoolean] = useState("Yes")
  

    const { isOpen, onOpen, onClose} = useDisclosure()

    const dispatch = useDispatch()

    const addOnBtnPress = () =>{
       dispatch(jobsSlice.actions.setPersonalProfile({workPermit: workPermitBoolean}))
    }

    return(
        <>
        <Button onClick={onOpen} style={{background: "transparent", height: "32px", color: "blue"}}>Add work permit status</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay/>
        <ModalContent> 
        <ModalCloseButton/>
        <ModalBody>  
        <div className="cbbody"> 
         <label>
           Do you have work permit? 
         </label>
         <label>
         <input type="radio" value={workPermitBoolean} checked={workPermitBoolean==="Yes"} onChange={()=>{setWorkPermitBoolean("Yes")}}/>
         No
         </label>
         <label>
         <input type="radio" value={workPermitBoolean} checked={workPermitBoolean==="No"} onChange={()=>{setWorkPermitBoolean("No")}}/>
         Yes
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