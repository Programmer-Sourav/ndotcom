import { useState } from "react"
import "./onlineprofile.css"
import { Button, CloseButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { jobsSlice } from "../Slices/JobsSlice";

export default function WorkSampleModal(){

    const { onClose, onOpen, isOpen } = useDisclosure()

    const [githubStats, setGithubStats] = useState({githubLink: "", githubDesc: ""})
    

    const dispatch = useDispatch();

    function onChangeProfileDetails(e){
       const { name, value} = e.target;
       setGithubStats({...githubStats, [name] : value })
    }

    const addOnBtnPress = () =>{
        const workSample = githubStats;
        dispatch(jobsSlice.actions.actionAccomplishments(workSample))
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
        <h2>Work Sample</h2>   
        <p>Add links to your github profiles.</p>
        <h3>Github profile url</h3>
        <input type="text" value={githubStats.githubLink} name="githubLink" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputbox"/>
        <h3>Description</h3>
        <textarea value={githubStats.githubDesc} name="githubDesc" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputboxdesc"/>
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