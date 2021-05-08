import React from 'react'
import { Form } from '../components/Form'
import { Logo } from '../components/Logo'
import { NavBar } from '../components/NavBar'
import { NeomorfistickBlock } from '../components/NeomorfistickBlock'

export class Contacts extends React.Component {
    constructor(props) {
        super(props)

        this.buttons = [
            './img/telegram.svg',
            './img/vk.svg',
            './img/whatsapp.svg'
        ].map((url, i) => ({id: i, url}))

        this.blockStyles = {
            width: '670px',
            height: '454px',
            marginTop: '100px',
            marginLeft: '15px',
            marginRight: '10px',
            paddingTop: '30px'
        }
    }

    render() {
        return(
            <div class='contacts section-wraper'>
                <div class='contacts__subblock'>
                    <Logo title='contacts'/>
                    <h2 class='contacts__subbloc-tittle'>Just say hi</h2>
                    <div className='contacts__subbloc-socials'>
                        <NavBar buttons={this.buttons}/>
                    </div>
                    <h3 class='contacts__subblock-text'>I’m always open to discuss your project and talk about new things</h3>
                    <p class='contacts__subblock-mail'>Also, you can mail me:<br/>
                        <span>a.k.belanov@gmail.com</span>
                    </p>
                </div>
                <div class='contacts__main'>
                    <NeomorfistickBlock inner={<Form />} style={this.blockStyles} />
                </div>
            </div>
        )
    }
}