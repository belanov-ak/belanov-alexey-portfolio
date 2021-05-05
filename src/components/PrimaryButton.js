import React from 'react';

export const PrimaryButton = (props) => (
    <button className='primary-button'>
        <img src='./img/button-bg.svg' alt='sircle' className='primary-button__sircle'></img>
        <a href='#' className='primary-button__text'>{props.text}</a>
        <span className='primary-button__arrow'></span>
    </button>
)