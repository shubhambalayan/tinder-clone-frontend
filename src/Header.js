import React from 'react'
import "./Header.css"
import IconButton from '@mui/material/IconButton';

const PersonIcon = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>

const Logo = <svg class="Sq(36px)" viewBox="0 0 24 24" width="40px" height="40px" focusable="false" aria-hidden="true" role="presentation"><path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z" fill="#ff6036" fill-rule="nonzero"></path></svg>


const Message = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#616161"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>

const Header = () => {
    return (
        <section className="header-section">
        <div className="header">
            <IconButton>
                <span className="header-icon">{PersonIcon}</span>
            </IconButton>
            <IconButton>
                <span className="header-icon">{Logo}</span>
            </IconButton>
            <IconButton>
                <span className="header-icon">{Message}</span>
            </IconButton>
        </div>
        </section>
    )
}

export default Header
