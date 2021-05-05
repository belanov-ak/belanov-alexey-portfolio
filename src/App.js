import React from 'react'
import { Container } from './components/container'
import { Navigation } from './components/Navigation'
import { DeviderLine } from './components/DeviderLine'
import { Hero } from './pages/Hero'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Contacts } from './pages/Contacts'

function App() {
  const pages = [
    <Navigation/>,
    <Hero/>,
    <DeviderLine/>,
    <About/>,
    <DeviderLine />,
    <Skills />,
    <DeviderLine />,
    <Contacts />
  ]

  return (
    <div className="App">
      <Container html={pages} />
    </div>
  );
}

export default App;
