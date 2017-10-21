import './css/styles.styl'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props) {
    super()
  }

  render () {
    return <h1>Hello react !</h1>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))