import React from 'react'
import './topbar.scss'
import { Person, Mail } from '@material-ui/icons'


export default function Topbar({ setMenuOpen, menuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Genius.</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+609-575-3978</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>ariun1118@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
