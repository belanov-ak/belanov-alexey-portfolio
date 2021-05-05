import React from 'react'
import { Logo } from './Logo'
import { NavBar } from './NavBar'

export const Navigation = () => {
    const buttons = ['Home', 'About', 'Skills', 'Contacts']
        .map((name, i) => ({id: i, title: name}))

    return (
        <div className='navigation'>

            <Logo title='a'/>

            <NavBar buttons={buttons}/>
        </div>
    )
}