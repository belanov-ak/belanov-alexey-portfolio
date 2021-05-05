import React from 'react'
import {SubmitButton} from './SubmitButton'

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                <div className='form-group'>
                    <input
                        required 
                        type='text'
                        className='form-control'
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}
                    />
                    <div className='underline'></div>
                    <label htmlFor='name'> Your Name</label>
                </div>
                <div className='form-group'>
                    <input
                            required 
                            type='text'
                            className='form-control'
                            aria-describedby='emailHelp'
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                    />
                    <div className='underline'></div>
                    <label htmlFor='email'> Your Email</label>
                </div>
                <div className='form-group'>
                    <input
                        required 
                        type='text'
                        className='form-control'
                        rows='5'
                        value={this.state.message}
                        onChange={this.onMessageChange.bind(this)}
                    />
                    <div className='underline'></div>
                    <label htmlFor='message'> Your message</label>
                </div>
                <SubmitButton text='send message' />
            </form>
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        
    }
}