import { useState } from "react"
import "./onlineprofile.css"
import { Button, CloseButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export default function PresentationModal(){

    const { onClose, onOpen, isOpen } = useDisclosure()

    const [presentation, setPresentation] = useState({paresentationName: "", presentationDesc: ""})
    

    const dispatch = useDispatch();

    function onChangeProfileDetails(e){
       const { name, value} = e.target;
       setPresentation({...presentation, [name] : value })
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
        <h2>White paper/Research publication/Journal entry</h2>   
        <p>Add links to your online publications.</p>
        <h3>Presentation url</h3>
        <input type="text" value={presentation.paresentationName} name="paresentationName" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputbox"/>
        <h3>Presentation Description</h3>
        <textarea value={presentation.presentationDesc} name="presentationDesc" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputboxdesc"/>
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