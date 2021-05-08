import React from 'react'
import { QualitiesIcon } from '../components/about/qualitiesIcon'
import { Logo } from '../components/Logo'
import { NeomorfistickBlock } from '../components/NeomorfistickBlock'

export class About extends React.Component {
    constructor(props) {
        super(props)
        this.blockStyle = {
            width: '100px',
            height: '100px'
        }
    }

    render() {
        return(
            <div className='about'>

                <div className='about__subblock'>
                    <Logo title='about'/>

                    <h3 className='about__subblock-text'>
                    My best personal qualities are discipline, dedication and responsibility. The main goal in my life is constant self-improvement and overcoming new frontiers!
                    </h3>
                </div>

                <div className='about__main'>
                    <div className='qualities'>
                        <h2 className='qualities__header'>Best qualities of my works:</h2>
                        <div className='qualities__wraper'>
                            <div className='qualities__element'>
                                <div className='qualities__element-image'>
                                    <NeomorfistickBlock 
                                    inner={
                                        <QualitiesIcon src='./img/speed.svg' />
                                    }
                                    style = {this.blockStyle}
                                    />
                                </div>
                                <h2 className='qualities__element-header'>Speed</h2>
                                <h3 className='qualities__element-text'>Fast loading, optimized operation, lag free interaction - is the higheest priority </h3>
                            </div>
                            <div className='qualities__element'>
                                <div className='qualities__element-image'>
                                    <NeomorfistickBlock 
                                    inner={
                                        <QualitiesIcon src='./img/gear.svg' />
                                    }
                                    style = {this.blockStyle}
                                    />
                                </div>
                                <h2 className='qualities__element-header'>Innovative</h2>
                                <h3 className='qualities__element-text'>I always strive to use new technologies and styles in my projects</h3>
                            </div>
                            <div className='qualities__element'>
                                <div className='qualities__element-image'>
                                    <NeomorfistickBlock 
                                    inner={
                                        <QualitiesIcon src='./img/laptop.svg' />
                                    }
                                    style = {this.blockStyle}
                                    />
                                </div>
                                <h2 className='qualities__element-header'>Responsive</h2>
                                <h3 className='qualities__element-text'>My project will work on any devices and browsers</h3>
                            </div>
                            <div className='qualities__element'>
                                <div className='qualities__element-image'>
                                    <NeomorfistickBlock 
                                    inner={
                                        <QualitiesIcon src='./img/magic-wand.svg' />
                                    }
                                    style = {this.blockStyle}
                                    />
                                </div>
                                <h2 className='qualities__element-header'>Encanting</h2>
                                <h3 className='qualities__element-text'>Combination of modern design and fresh technical solutions brings magic into my works</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}