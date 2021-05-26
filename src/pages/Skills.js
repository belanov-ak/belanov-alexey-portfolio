import React from 'react'
import { Logo } from '../components/Logo'
import { NeomorfistickBlock } from '../components/NeomorfistickBlock'
import { HardSkills } from '../components/skills/HardSkills'
import { PageTemplate } from './PageTemplate'

export class Skills extends PageTemplate {
    constructor(props) {
        super(props)
        this.blockStyles = {
            width: '680px',
            height: '450px',
            paddingTop: '1px'
        }
    }

    render() {
        return(
            <div className='skills section-wraper'>
                <div className='skills__subblock'>
                    <div className='skills__subblock-title'>
                        <Logo title='skills' path='/skills'/>
                    </div>
                </div>
                <div className='skills__main'>
                    <div className='hard-skills'>
                        <h2 className='hard-skills__title'> My hard skills:</h2>
                        <NeomorfistickBlock inner={<HardSkills/>} style={this.blockStyles} />
                    </div>
                </div>
            </div>
        )
    }
}