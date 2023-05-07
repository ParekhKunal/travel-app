import React from 'react'

const NavbarLinks = (props) => {
    const { link, hash } = props
    return (
        <>
            <li>
                <a href={hash} className="nav-link"> {link} </a>
            </li >
        </>
    )
}

export default NavbarLinks
