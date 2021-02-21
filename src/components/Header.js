import { Avatar,IconButton } from '@material-ui/core'
import {ExpandMore, SearchRounded, SettingsOutlined ,HelpOutline} from '@material-ui/icons'
import AppsIcon from '@material-ui/icons/Apps';
import React from 'react'
import './header.css'

function Header({image}) {
    return (
        <div className='Header'>
            <div className='logo-sec'>
                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png'/>
                <span>Drive</span>
            </div>
            <div className='search-sec'>
               <IconButton> <SearchRounded/></IconButton>
                <input type='text' placeholder='Search in Drive'/>
                <IconButton><ExpandMore/></IconButton>
            </div>
            <div className='other-sec'>
            <IconButton> <HelpOutline/></IconButton>
            <IconButton><SettingsOutlined/></IconButton>
            <IconButton> <AppsIcon/></IconButton>
                <Avatar src={image}/>
            </div>

        </div>
    )
}

export default Header
