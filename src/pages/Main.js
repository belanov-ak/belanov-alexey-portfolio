import React from 'react'
import { Hero } from './Hero'
import { About } from './About'
import { Skills } from './Skills'
import { Contacts } from './Contacts'
import { PageTemplate } from './PageTemplate'

export const Main = () => {
    return (
        <>
            <PageTemplate>
                <Hero />
                <hr/>
                <About />
                <hr/>
                <Skills />
                <hr/>
                <Contacts />
            </PageTemplate>
        </>
    )
}