import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navigation from './navigation/navigation.js'

export default class App extends Component {
  constructor(props) {
    super()
  }

  render () {
    return (
      <div>
        <Navigation/>
        <section className="filter">
          <div>
            <div className= "banner">
              <h1>URBANIK</h1>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))