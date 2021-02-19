import React from 'react'
import ImageIcon from '@material-ui/icons/Image';
function Filecard({name,url}) {
    return (
        <div>
            <ImageIcon/>
            {/* <img src={url}/> */}
            <p>{name}</p>
        </div>
    )
}

export default Filecard
