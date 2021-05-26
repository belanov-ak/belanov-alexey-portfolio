import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = (props) => (
    <div className='logo'>
        <Link className='logo__button' to={props.path}>
            <p>{props.title}</p>
        </Link>
    </div>
)