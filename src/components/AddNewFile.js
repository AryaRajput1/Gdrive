import React,{useState} from 'react'
import './main.css'
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-modal'
import { Button } from '@material-ui/core';

Modal.setAppElement('#root');
export default function AddNewFile() {
    const [open, setopen] = useState(false);
    const [isupload,setuploading] = useState(false);
    const openHandle=()=> {setopen(true)}
    const closeHandle=()=> {setopen(false)}
    return (
        <div>
            <div className='new-button' onClick={()=>{openHandle()}}>
                <AddIcon/><h3>New</h3>
            </div>
            <Modal
            isOpen={open}
            shouldCloseOnOverlayClick={false}
            style={{
                overlay:{
                    backgroundColor:'grey',
    
                },
                content:{
                    width:'400px',
                    position:'absolute',
                    border:'2px solid #000',
                    top:'50%',
                    left:'50%',
                    transform:'translate(-50%,-50%)',
                    height:'200px'
                }
            }}
            >
                <p>select file to upload.</p>
              {  isupload ? 
                <h3>Uploading.....</h3>:<div className='modalupload'>
                <input type='file'/>
                <br/>
                <Button  onClick={()=>closeHandle()}>close</Button>
                <Button>upload</Button>
                </div>}
          
            </Modal>

        </div>
    )
}
