import { Avatar } from '@material-ui/core'
import { ExpandMore, SearchRounded, SettingsOutlined ,HelpOutline} from '@material-ui/icons'
import AppsIcon from '@material-ui/icons/Apps';
import React from 'react'

function Header() {
    return (
        <div>
            <div className='logo-sec'>
                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png'/>
                <h3>DRIVE</h3>
            </div>
            <div className='search-sec'>
                <SearchRounded/>
                <input type='text'/>
                <ExpandMore/>
            </div>
            <div className='other'>
                <HelpOutline/>
                <SettingsOutlined/>
                <AppsIcon/>
                <Avatar/>
            </div>

        </div>
    )
}

export default Header
