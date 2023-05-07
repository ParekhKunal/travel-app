import React from 'react'

const NavbarSocial = (props) => {
    const { social, target } = props
    return (
        <>
            <li>
                <a href={`https://www.${social}.com`} target={target} rel="noreferrer" className="nav-icon"
                ><i className={`fab fa-${social}`}></i></a>
            </li>
        </>
    )
}

export default NavbarSocial
