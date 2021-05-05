import React from 'react'
import {PrimaryButton} from '../components/PrimaryButton'

export class Hero extends React.Component {
    render() {
        return(
            <div className='hero'>
                <div className='hero__welcom-subblock'>
                    <div className='hero__welcom-subblock-photo-wraper'>
                        <img className='hero__welcom-subblock-photo' src='./img/person.jpg' alt='person'></img>
                    </div>
                    <h3 className='hero__welcom-subblock-text'>
                        My passion - is style and innovation in all things!
                    </h3>
                </div>
                <div className='hero__welcom-block welcom-block'>
                    <h1 className='welcom-block__header'>
                        Welcome to my portfolio, <br/> I’m Belanov Alexey.
                    </h1>
                    <div className='welcom-block__main'>
                        <h2 className='welcom-block__main-text'>
                            Web developer<br/>UX/UI designer<br/>Minimalist
                        </h2>
                    </div>
                    <div className='welcom-block__button'>
                        <PrimaryButton text = 'Contact me'/>
                    </div>
                </div>
            </div>
        )
    }
}