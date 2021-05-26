import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = ({buttons}) => {
    return (
        <>
        {buttons[0].path ?
            <ul className='navbar'>
                {buttons.map(btn => (
                    <li 
                        className='navbar__item'
                        key={btn.id}
                    >
                        <Link className='navbar__item-button' to={btn.path}>{btn.inner}</Link>
                    </li>
                ))}
            </ul> :
            <ul className='navbar'>
                {buttons.map(btn => (
                    <li 
                        className='navbar__item'
                        key={btn.id}
                    >
                        <a className='navbar__item-button' href={btn.link}>{btn.inner}</a>
                    </li>
                ))}
            </ul>
        }
        </>
    )
}