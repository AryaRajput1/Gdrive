import { CloudQueueOutlined, DeleteForever, DeleteOutline, InsertDriveFile, QueryBuilder, SignalCellularNull, StarBorder } from '@material-ui/icons'
import React from 'react'
import SidebarOption from './SidebarOption'
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import './main.css';
function SideBar() {
    return (
        <div className='sidebar'>
            <div className='new-button'>
                <AddIcon/><h3>New</h3>
            </div>
            <SidebarOption icon={<InsertDriveFile/>} text='My Drive'/>
            <SidebarOption icon={<GroupIcon/>} text='Shared with me'/>
            <SidebarOption icon={<QueryBuilder/>} text='Recents'/>
            <SidebarOption icon={<StarBorder/>} text='Starred'/>
            <SidebarOption icon={<DeleteOutline/>} text='Trash'/>
            <br/>
            <hr/>
            <SidebarOption icon={<CloudQueueOutlined/>} text='Storage'/>
        </div>
    )
}

export default SideBar
