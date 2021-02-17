import { SignalCellularNull } from '@material-ui/icons'
import React from 'react'
import SidebarOption from './SidebarOption'
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import './main.css';
function SideBar() {
    return (
        <div className='sidebar'>
            <div className='new-button'>
                <AddIcon/><h3>NEW</h3>
            </div>
            <SidebarOption icon={<GroupIcon/>} text='My Drive'/>
            <SidebarOption icon={<GroupIcon/>} text='Shared with me'/>
            <SidebarOption icon={<GroupIcon/>} text='Recents'/>
            <SidebarOption icon={<GroupIcon/>} text='Starred'/>
            <SidebarOption icon={<GroupIcon/>} text='Trash'/>
            <hr/>
            <SidebarOption icon={<GroupIcon/>} text='Storage'/>
        </div>
    )
}

export default SideBar
