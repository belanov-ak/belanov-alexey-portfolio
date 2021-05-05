import React from 'react'

export const NavBar = ({buttons}) => {
    if (buttons[0].title) {
        return (
            <ul className='navbar'>
                {buttons.map(btn => (
                    <li 
                        className='navbar__item'
                        key={btn.id}
                    >
                        <a className='navbar__item-button' href=''>{btn.title}</a>
                    </li>
                ))}
            </ul>
        )
    } else {
        return (
            <ul className='navbar'>
                {buttons.map(btn => (
                    <li 
                        className='navbar__item'
                        key={btn.id}
                    >
                        <a className='navbar__item-button' href=''>
                            <img src={btn.url} alt='icon'></img>
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
}