import React from 'react'
import { WelcomText } from '../components/hero/welcomText'
import { NeomorfistickBlock } from '../components/NeomorfistickBlock'
import {PrimaryButton} from '../components/PrimaryButton'

export class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.blockHeight = {
            height: '190px'
        }
    }

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
                        <NeomorfistickBlock inner={<WelcomText/>} style={this.blockHeight} />
                    </div>
                    <div className='welcom-block__button'>
                        <PrimaryButton text = 'Contact me'/>
                    </div>
                </div>
            </div>
        )
    }
}