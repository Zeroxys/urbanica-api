import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Navigation from './navigation/navigation'
import Banner from './banner/banner'
import Footer from './footer/footer'

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      value : null
    }
  }

  render () {
    return (
      <div>
        <Navigation/>
        <Banner subscribe = {this.state.value}/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))