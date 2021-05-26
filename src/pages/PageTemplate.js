import React from 'react'
import { Loader } from '../components/loader/Loader'
import { NavBar } from '../components/NavBar'
import { aboutIcon, contactsIcon, mainIcon, skillsIcon } from '../components/navbar/NavButtons'

const buttons = [mainIcon(), aboutIcon(), skillsIcon(), contactsIcon()]
.map((obj, i) => ({id: i, path: obj.path, inner: obj.icon}))

export class PageTemplate extends React.Component {
    constructor(props) {
        super(props)

        this.children = props.children

        this.state = {
            loading: false
        }
    }

    componentWillMount() {
        this.setState({loading : true})
        setTimeout(() => {
            this.setState({loading: false})
        }, 2000)
    }

    render() {
        return (
            <>
                {this.state.loading ?
                    <Loader/>
                :
                    <div className='container'>
                        <header className='page-header'>
                            <div className='page-header__navbar'>
                                <NavBar buttons={buttons} />
                            </div>
                        </header>
                    {this.children}
                    </div>
                }
            </>
        )
    }
}