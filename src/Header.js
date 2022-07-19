import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <div className="header">
        <IconButton>
        <PersonIcon className="header_icon" fontSize="large"/>
        </IconButton>
        <h2 className="header_logo">Project Match Logo</h2>
        <IconButton>
        <EmailIcon className="header_icon" fontSize="large"/>
        </IconButton>
    </div>
  )
}

export default Header