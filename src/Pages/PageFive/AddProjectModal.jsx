import { useState } from "react"
import "./adpcss.css"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"

export default function AddProjectModal(){

    const [projectTitle, setProjectTitle] = useState("")
    const [employment, setEmployment] = useState("")
    const [clientName, setClientName] = useState("")
    const [radioSelection, setRadioSelection] = useState("In progress")

    const { onClose, onOpen, isOpen} = useDisclosure()
    

    function addOnBtnPress(){

    }
    return(
        <>
        <Button onClick={onOpen} style={{color: "blue", outline: "none", backgroundColor: "white" }}>Add Project</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay/> 
        <ModalContent> 
        <ModalCloseButton></ModalCloseButton>   
        <ModalBody> 
        <div className="fnbody"> 
            <h2 className="htwostyle">Add Project</h2>
             <p className="pstyle">Project Title</p>
             <input type="text" value={projectTitle} onChange={(e)=>{setProjectTitle(e.target.value)}} className="inputbox" />
             <p className="pstyle">Tag this project with your employment/education</p>
             <input type="text" value={employment} onChange={(e)=>{setEmployment(e.target.value)}} className="inputbox"/>
             <p className="pstyle">Client</p>
             <input type="text" value={clientName} onChange={(e)=>{setClientName(e.target.value)}} className="inputbox"/>
             <p className="pstyle">Project status</p>
             <div className="psflex">
             <label>
             <input type="radio" value={radioSelection} checked={{}} onChange={(e)=>{setRadioSelection()}}/>
             In progress</label>
             <label>
             <input type="radio" value={radioSelection} checked={{}} onChange={(e)=>{setRadioSelection()}}/>
             Finished</label>
             </div>
             <p className="pstyle">Worked from</p>
             <div className="psflex">
             <input type="text" value={clientName} onChange={(e)=>{setClientName(e.target.value)}} className="inputboxtwo"/>
             <input type="text" value={clientName} onChange={(e)=>{setClientName(e.target.value)}} className="inputboxtwo"/>
             </div>
             <p className="pstyle">Details of project</p>
             <textarea value={clientName} onChange={(e)=>{setClientName(e.target.value)}} className="inputeditbox"/>
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