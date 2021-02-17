import React from 'react'

function SidebarOption({icon,text}) {
    return (
        <div>
          {icon}
         <span> {text}</span>  
        </div>
    )
}

export default SidebarOption
