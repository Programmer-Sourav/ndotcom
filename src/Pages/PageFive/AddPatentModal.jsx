import { useState } from "react"
import "./onlineprofile.css"
import { Button, CloseButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { jobsSlice } from "../Slices/JobsSlice";

export default function AddPatentModal(){

    const { onClose, onOpen, isOpen } = useDisclosure()

    const [patentStatus, setPatentStatus] = useState({patentUrl: "", patentDesc: ""})
    

    const dispatch = useDispatch();

    function onChangeProfileDetails(e){
       const { name, value} = e.target;
       setPatentStatus({...patentStatus, [name] : value })
    }

    const addOnBtnPress = () =>{
        const patent = patentStatus;
        dispatch(jobsSlice.actions.actionAccomplishments(patent));
    }
    
    return(
        <>
        <Button onClick={onOpen}  style={{height: "32px", outline: "none", color: "blue", backgroundColor:"transparent", height: "32px"}}>Add</Button>   {/*onOpen prop will be supplied to button onClick*/}
        <Modal isOpen={isOpen} onClose={onClose} size="xl"> {/* Modal will receive isOpen prop to open */}
        <ModalOverlay/> 
        <ModalContent>   
        <ModalCloseButton></ModalCloseButton> 
        <ModalBody>
        <div className="opbody">
        <h2>Patents</h2>   
        <p>Add details of patents you have filled.</p>
        <h3>Patent url</h3>
        <input type="text" value={patentStatus.patentUrl} name="patentUrl" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputbox"/>
        <h3>Patent Description</h3>
        <textarea value={patentStatus.patentDesc} name="patentDesc" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputboxdesc"/>
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