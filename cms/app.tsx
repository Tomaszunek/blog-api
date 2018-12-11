import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './app.scss'

export class App extends React.Component {
    render() {
        return (
            <div className='conteiner'>
                woda
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))