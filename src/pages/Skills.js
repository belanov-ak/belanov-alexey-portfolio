import React from 'react'
import { Logo } from '../components/Logo'
import { PrimaryButton } from '../components/PrimaryButton'

export class Skills extends React.Component {
    render() {
        return(
            <div className='skills section-wraper'>
                <div className='skills__subblock'>
                    <div className='skills__subblock-title'>
                        <Logo title='skills'/>
                    </div>
                </div>
                <div className='skills__main'>
                    <div className='hard-skills'>
                        <h2 className='hard-skills__title'> My hard skills:</h2>
                        <div className='hard-skills__main'>
                            <div className='hard-skills__element skill'>
                                <h2 className='skill__header'>Html</h2>
                                <h3 className='skill__text'>I can do layout of any complexity. Work with PUG and JSX</h3>
                            </div>
                            <div className='hard-skills__element skill'>
                                <h2 className='skill__header'>Css</h2>
                                <h3 className='skill__text'>Create web interfaces with Sass(Scss). Also use bootsrap</h3>
                            </div>
                            <div className='hard-skills__element skill'>
                                <h2 className='skill__header'>JavaScrtipt</h2>
                                <h3 className='skill__text'>Studying native JS, I wrote libraries similar to Reat, Redux, JQuery</h3>
                            </div>
                            <div className='hard-skills__element skill'>
                                <h2 className='skill__header'>React</h2>
                                <h3 className='skill__text'>The emphasis in development is on interactivity and performance</h3>
                            </div>
                        </div>
                        <div className='hard-skills__button'>
                            <PrimaryButton text='view github' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}