import React, {useState} from 'react';

export const PrimaryButton = (props) => {
    const [className, setClassName] = useState('primary-button__sircle')

    const mouseOver = () => {
        setClassName('primary-button__sircle-active')
    }

    const mouseOut = () => {
        setClassName('primary-button__sircle')
    }
     
    return (
        <button onMouseOver={mouseOver} onMouseOut={mouseOut} className='primary-button'>
            <svg className={className} width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M10.6109 31.8241C18.8952 23.5398 23.5398 18.8952 31.8241 10.6109M10.6758 38.253L38.253 10.6758M11.8014 43.6212L43.6212 11.8014M13.9877 47.9288L47.9288 13.9877M17.2346 51.1757L51.1757 17.2346M20.4815 54.4226L54.4226 20.4815M25.1426 56.2553L56.2553 25.1427M30.5109 57.3809L57.3809 30.5109M37.6469 56.7388L56.7388 37.6469M44.1335 55.4472C48.5518 51.0289 51.0289 48.5518 55.4472 44.1335M12.3137 23.6274C20.598 15.3432 15.3431 20.598 23.6274 12.3137" stroke="#838385"/>
            </svg>
            <a href={props.url} className='primary-button__text'>{props.text}</a>
            <span className='primary-button__arrow'></span>
        </button>
    )
}
    
