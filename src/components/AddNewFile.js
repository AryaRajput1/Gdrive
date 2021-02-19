import React,{useState} from 'react'
import './main.css'
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-modal'
import { Button } from '@material-ui/core';
import auth,{db,storage} from '../firebasefile'
import firebase from 'firebase'

Modal.setAppElement('#root');
export default function AddNewFile() {
    const [open, setopen] = useState(false);
    const [file, setfile] = useState(null);
    const [isupload,setuploading] = useState(false);
    const openHandle=()=> {setopen(true)}
    const closeHandle=()=> {setopen(false)}
    const filehandler=(e)=> {
       if(e.target.files[0]){
            setfile(e.target.files[0]);
          
        }
    }
    const uploadHandle=()=> {
        if(file){
            setuploading(true);
        storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
            console.log(snapshot);
            storage.ref('files').child(file.name).getDownloadURL().then(url=>{
                db.collection('myfiles').add({
                    timestamp
                    :firebase.firestore.FieldValue.serverTimestamp(),
                    url:url,
                    name:file.name
                });
                setuploading(false);
                setopen(false);
                
            })
        })
        }

    }
    
    return (
        <div>
            <div className='new-button' onClick={openHandle}>
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
                <input type='file' onChange={(e)=>filehandler(e)}/>
                <br/>
                <Button  onClick={()=>closeHandle()}>close</Button>
                <Button onClick={()=>uploadHandle()}>upload</Button>
                </div>}
          
            </Modal>

        </div>
    )
}
