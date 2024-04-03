import { useState } from "react"
import "./onlineprofile.css"
import { Button, CloseButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export default function AddCertification(){

    const { onClose, onOpen, isOpen } = useDisclosure()

    const [cartificationStatus, setCertificationStatus] = useState({certificationUrl: "", certificationDesc: ""})
    

    const dispatch = useDispatch();

    function onChangeProfileDetails(e){
       const { name, value} = e.target;
       setCertificationStatus({...cartificationStatus, [name] : value })
    }

    const addOnBtnPress = () =>{
        dispatch()
    }
    
    return(
        <>
        <Button onClick={onOpen}  style={{height: "32px", outline: "none", color: "blue", backgroundColor: "white"}}>Add</Button>   {/*onOpen prop will be supplied to button onClick*/}
        <Modal isOpen={isOpen} onClose={onClose} size="xl"> {/* Modal will receive isOpen prop to open */}
        <ModalOverlay/> 
        <ModalContent>   
        <ModalCloseButton></ModalCloseButton> 
        <ModalBody>
        <div className="opbody">
        <h2>Patents</h2>   
        <p>Add details of patents you have filled.</p>
        <h3>Patent url</h3>
        <input type="text" value={cartificationStatus.certificationUrl} name="certificationUrl" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputbox"/>
        <h3>Patent Description</h3>
        <textarea value={cartificationStatus.certificationDesc} name="certificationDesc" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputboxdesc"/>
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