import { useState } from "react"
import "./onlineprofile.css"
import { Button, CloseButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { jobsSlice } from "../Slices/JobsSlice";

export default function WhitePaperModal(){

    const { onClose, onOpen, isOpen } = useDisclosure()

    const [whitePaperStats, setWhitePaperStats] = useState({whitePaperName: "", whitePaperDesc: ""})
    

    const dispatch = useDispatch();

    function onChangeProfileDetails(e){
       const { name, value} = e.target;
       setWhitePaperStats({...whitePaperStats, [name] : value })
    }

    const addOnBtnPress = () =>{
        const publication = whitePaperStats;
        dispatch(jobsSlice.actions.actionAccomplishments(publication))
    }
    
    return(
        <>
        <Button onClick={onOpen}  style={{height: "32px", outline: "none", color: "blue", height:"32px", backgroundColor:"transparent"}}>Add</Button>   {/*onOpen prop will be supplied to button onClick*/}
        <Modal isOpen={isOpen} onClose={onClose} size="xl"> {/* Modal will receive isOpen prop to open */}
        <ModalOverlay/> 
        <ModalContent>   
        <ModalCloseButton></ModalCloseButton> 
        <ModalBody>
        <div className="opbody">
        <h2>White paper/Research publication/Journal entry</h2>   
        <p>Add links to your online publications.</p>
        <h3>Publication url</h3>
        <input type="text" value={whitePaperStats.whitePaperName} name="whitePaperName" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputbox"/>
        <h3>Description</h3>
        <textarea value={whitePaperStats.whitePaperDesc} name="whitePaperDesc" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputboxdesc"/>
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