import React from 'react';

export const Logo = (props) => (
    <div className='logo'>
        <a className='logo__button' href='#'>
            <p>{props.title}</p>
        </a>
    </div>
)