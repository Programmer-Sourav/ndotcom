import { useState } from "react"
import ReactModal from "react-modal"

export default function ModalComponent(){

    console.log(123, "ModalComponent")
    const [open, setOpen] = useState(false)


    return(
        <div> 
            <ReactModal isOpen={open}
            onRequestClose={()=>setOpen(false)}>
            </ReactModal>
        </div>
    )
}