import React from 'react'
import './main.css'
function SidebarOption({icon,text}) {
    return (
        <div className='sidebarOptions'>
          {icon}
         <span className='sidebarOptionsText'> {text}</span>  
        </div>
    )
}

export default SidebarOption
