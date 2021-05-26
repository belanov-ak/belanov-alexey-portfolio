import React from 'react'
import { Form } from '../components/Form'
import { Logo } from '../components/Logo'
import { NavBar } from '../components/NavBar'
import { telegramIcon, tikTokIcon, vKontakteIcon, whatsAppIcon } from '../components/navbar/NavButtons'
import { NeomorfistickBlock } from '../components/NeomorfistickBlock'
import { PageTemplate } from './PageTemplate'

export class Contacts extends PageTemplate {
    constructor(props) {
        super(props)

        this.buttons = [
            telegramIcon(),
            vKontakteIcon(),
            whatsAppIcon(),
            tikTokIcon()
        ].map((obj, i) => ({id: i, link: obj.link, inner: obj.icon}))

        this.blockStyles = {
            height: '454px',
            marginLeft: '15px',
            paddingTop: '30px'
        }
    }

    render() {
        return(
            <div className='contacts section-wraper'>
                <div className='contacts__subblock'>
                    <div className='contacts__subblock-tittle'>
                        <Logo title='contacts' path='/contacts'/>
                    </div>
                    <h3 className='contacts__subblock-text'>I’m always open to discuss your project and talk about new things</h3>
                    <div className='contacts__subbloc-socials'>
                        <NavBar buttons={this.buttons}/>
                    </div>
                    <p className='contacts__subblock-mail'>Also, you can mail me:<br/>
                        <span>a.k.belanov@gmail.com</span>
                    </p>
                </div>
                <div className='contacts__main'>
                    <NeomorfistickBlock inner={<Form />} style={this.blockStyles} />
                </div>
            </div>
        )
    }
}