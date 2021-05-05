import React from 'react';

export const SubmitButton = (props) => (
    <button type='submit' className='submit-button'>
        <img src='./img/button-bg.svg' alt='sircle' className='submit-button__sircle'></img>
        <a href='#' className='submit-button__text'>{props.text}</a>
        <span className='submit-button__arrow'></span>
    </button>
)