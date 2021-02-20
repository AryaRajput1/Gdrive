import React from 'react'
import ImageIcon from '@material-ui/icons/Image';
import './main.css'
function Filecard({name,url}) {
    return (
        <div className='card'>
            <img src={url}/>
            <p>{name}</p>
        </div>
    )
}

export default Filecard
