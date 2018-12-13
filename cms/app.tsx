import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RouteApp } from './components/routes'
import './app.scss'

export class App extends React.Component {
    render() {
        return (
            <RouteApp/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))