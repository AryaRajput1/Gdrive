import React,{useEffect,useState} from 'react'
import './main.css'
import auth,{db,storage} from '../firebasefile'
import FileItem from './FileItem';

function Fileview() {
    const [files, setfiles] = useState(null);
    useEffect(() => {
        
            db.collection('files').get().then(snapshot=>{
                snapshot.docs.map(doc=>{
              setfiles({
                  id:doc.id,
                  item:doc.data()
              })
                })
            })
        
        
    }, [])
    return (
        <div class='Fileview'>
            <h4>Files</h4>
            <div className='filecard'>

</div>
<hr/>
            <div className='fileList'>
            <p > Files List</p>
                <div className='files'> 
                <h3>No.</h3>
                <h3>Name</h3>
                    <h3>Last Modified</h3>
                    <h3>Size</h3>
                </div>
                {
                    files && files.map((id,item) => <FileItem key={id} name={item.name} date={item.timestamp} url={item.url} size={item.size}/>
                    )
                }
                
                <hr/>
            </div>
        </div>
    )
}

export default Fileview