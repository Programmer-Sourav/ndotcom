import { useState } from "react"
import "./onlineprofile.css"
import { Button, CloseButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { jobsSlice } from "../Slices/JobsSlice";

export default function PersonalProfileModal(){

    const { onClose, onOpen, isOpen } = useDisclosure()

    const [profileDetails, setProfileDetails] = useState({profileName: "", url: "", pDescription: ""})

    const dispatch = useDispatch();

    function onChangeProfileDetails(e){
       const { name, value} = e.target;
       setProfileDetails({...profileDetails, [name] : value })
    }

    const addOnBtnPress = () =>{
        dispatch(jobsSlice.actions.addProfileSummary(profileDetails))
    }
    
    return(
        <>
        <Button onClick={onOpen} style={{backgroundColor: "transparent", color: "blue", height: "32px"}}>Add</Button>   {/*onOpen prop will be supplied to button onClick*/}
        <Modal isOpen={isOpen} onClose={onClose} size="xl"> {/* Modal will receive isOpen prop to open */}
        <ModalOverlay/> 
        <ModalContent>   
        <ModalCloseButton></ModalCloseButton> 
        <ModalBody>
        <div className="opbody">
        <h2>Online Profiles</h2>   
        <p>Add links to your social profiles.</p>
        <h3>Social Profile</h3>
        <input type="text" value={profileDetails.profileName} name="profileName" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputbox"/>
        <h3>URL</h3>
        <input type="text" value={profileDetails.url} name="url" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputbox"/>
        <h3>Description</h3>
        <textarea value={profileDetails.pDescription} name="pDescription" onChange={(e)=>{onChangeProfileDetails(e)}} className="inputboxdesc"/>
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