import React,{useEffect,useState} from 'react'
import './main.css'
import auth,{db,storage} from '../firebasefile'
import FileItem from './FileItem';
import Filecard from './Filecard';

function Fileview() {
    const [files, setfiles] = useState(null);
    useEffect(() => {
        if(db.collection('myfiles')){
            db.collection('myfiles').get().then(snapshot=>{
                setfiles( snapshot.docs.map(doc=>(
              {
                  id:doc.id,
                  item:doc.data()
              }
                )))
            })
        }
        
    })
    return (
        <div class='Fileview'>
            <h4>Files</h4>
            <div className='filecard'>
            
                {
                        files && files.map(({id,item}) => <Filecard key={id}name={item.name} url={item.url}/>
                    )
                }
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
                        files && files.map(({id,item},index) => <FileItem  num={index+1} key={id} name={item.name} date={item.timestamp} url={item.url} size={item.size}/>
                    )
                }
                
                <hr/>
            </div>
        </div>
    )
}

export default Fileview