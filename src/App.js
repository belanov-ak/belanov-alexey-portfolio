import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Main } from './pages/Main'
import { AboutPage } from './pages/AboutPage'
import { SkillsPage } from './pages/SkillsPage'
import { ContactsPage } from './pages/ContactsPage'
import { JokePage } from './pages/JokePage'

export const LoaderContext = React.createContext()

function App() {
  

  return (
    <>
      <Router >
        <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/skills' component={SkillsPage}/>
            <Route path='/contacts' component={ContactsPage}/>
            <Route path='/joke' component={JokePage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
