import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
  import "../../ModalTwo/resumetitle.css"
import { useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { addResumeTitle, jobsSlice } from '../../Slices/JobsSlice'

export default function ChakraModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [resumeHeadline, setResumeHeadline] = useState("")

    const dispatch = useDispatch()

    const onSaveResumeTitle = () =>{
      dispatch(jobsSlice.actions.addResumeTitle(resumeHeadline))
    }

    const onCancelResume = () =>{
       dispatch(cancelResumeTitle())
    }

    const onResumeHeadlineChange = (e) =>{
        setResumeHeadline(e.target.value)
    }

    // const textareaRef = useRef(null)

    // useEffect(()=>{
    //     console.log("textAreaRef Initialize")
    //     if(textareaRef.current){
    //         textareaRef.current.focus();
    //         textareaRef.current.setSelectionRange(0,0)
    //     }
    // },[])
    return (
      <>
        <Button onClick={onOpen}>Add Resume Headline</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            
          <ModalCloseButton />
          <ModalBody>
        <div className="rtbody"> 
        <div className="headline">
        <span className="headlinestyle">Resume headline</span>
        <span className="addheadline">Add 8%</span>
        </div>
        <div>
        <p className="graytext"> It is the first thing recruiters notice in your profile. Write conciously what makes you unique and right person for the job you are looking for.</p>
        </div>
        <textarea className="inputdesign" value={resumeHeadline} onChange={onResumeHeadlineChange}/>
        <span className="characterprompt">250 characters left</span>
        {/* <div className="btnflex">
        <span className="btnone" onClick={onCancelResume}>Cancel</span>  
        <span className="btntwo" onClick={onSaveResumeTitle}>Save</span> 
        </div> */}
        </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={onSaveResumeTitle}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

