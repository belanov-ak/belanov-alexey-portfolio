import React from 'react'
import { PrimaryButton } from './PrimaryButton'

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
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

    render() {
        return (
            <form className='contact__form form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                <h2 className='form__tittle'>Just say hi</h2>
                <div className='form__group'>
                    <input
                        required 
                        type='text'
                        className='form__control'
                        value={this.state.name}
                        onChange={this.onNameChange.bind(this)}
                    />
                    <div className='underline'></div>
                    <label htmlFor='name'> Your Name</label>
                </div>
                <div className='form__group'>
                    <input
                            required 
                            type='text'
                            className='form__control'
                            aria-describedby='emailHelp'
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                    />
                    <div className='underline'></div>
                    <label htmlFor='email'> Your Email</label>
                </div>
                <div className='form__group'>
                    <input
                        required 
                        type='text'
                        className='form__control'
                        rows='5'
                        value={this.state.message}
                        onChange={this.onMessageChange.bind(this)}
                    />
                    <div className='underline'></div>
                    <label htmlFor='message'> Your message</label>
                </div>
                <div className='form__button'>
                    <PrimaryButton text='send message' />
                </div>
            </form>
        )
    }
}