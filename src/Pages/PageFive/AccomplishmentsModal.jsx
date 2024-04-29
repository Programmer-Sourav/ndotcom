import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, ModalFooter } from "@chakra-ui/react"

import "./accomplishments.css"

import WorkSampleModal from "./WorkSample"
import PresentationModal from "./PresentationModal"
import AddCertification from "./AddCertification"
import OnlineProfileModal from "./OnlineProfileModal"
import WhitePaperModal from "./WhitePaperModal"
import AddPatentModal from "./AddPatentModal"


export default function AccomplishmentsModal(){

    const { isOpen, onOpen, onClose} = useDisclosure()

    function addWhenClicked(){

    }

    return(
        <>
        <Button onClick={onOpen} style={{background: "transparent", height: "32px", color: "blue", outline: "none"}}>Add career break</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay/>
        <ModalContent> 
        <ModalCloseButton/>
        <ModalBody>  
        <div>
            <div className="abody">
            <h3>Accomplishments</h3>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Online profile</h3>

            <OnlineProfileModal/>
            {/* <button onClick={addWhenClicked} className="buttonportion">Add</button> */}

            </div>
            <p className="belowportion">
             Add link to online profiles (e.g. LinkedIn, Facebook etc.)
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Work Sample</h3>
            {/* <button onClick={addWhenClicked} className="buttonportion">Add</button> */}
            <WorkSampleModal/>
            </div>
            <p className="belowportion">
             Add link to your projects(e.g. Github links etc.)
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">White paper/Research publication/Journal entry</h3>
            {/* <button onClick={addWhenClicked} className="buttonportion">Add</button> */}
            <WhitePaperModal/>
            </div>
            <p className="belowportion">
             Add links to your online publications.
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Presentation</h3>
            {/* <button onClick={addWhenClicked} className="buttonportion">Add</button> */}
            <PresentationModal/>
            </div>
            <p className="belowportion">
             Add links to your online presentation (e.g. Slideshare presentation links etc.)
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Patent</h3>
            <AddPatentModal/>
            {/* <button onClick={addWhenClicked} className="buttonportion">Add</button> */}
            </div>
            <p className="belowportion">
             Add details of patents you have filed.
            </p>
            </div>
            <hr/>
            <div className="itembox">
            <div className="topportion">
            <h3 className="labelportion">Certification</h3>
            {/* <button onClick={addWhenClicked} className="buttonportion">Add</button> */}
            <AddCertification/>
            </div>
            <p className="belowportion">
             Add details of certifications you have achieved/completed.
            </p>
            </div>
            <hr/>
            </div>
        </div>
        </ModalBody> 
        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
        </Button>
            <Button variant='ghost' onClick={addWhenClicked}>Save</Button>
            </ModalFooter>  
        </ModalContent>  
        </Modal>
        </>
    )
}