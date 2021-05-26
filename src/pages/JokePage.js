import React from 'react'
import { Logo } from '../components/Logo'
import { NeomorfistickBlock } from '../components/NeomorfistickBlock'
import { Joke } from './Joke'
import { PageTemplate } from './PageTemplate'

const blockStyles = {
    width: '100%',
    height: '50vh',
}

export const JokePage = () => (
    <PageTemplate>
        <div className='joke-page'>
            <div className='joke-page__header'>
                <Logo title='back' path='/contacts' />
            </div>
        </div>
        <NeomorfistickBlock inner={<Joke/>} style={blockStyles} />
    </PageTemplate>
)