import React, {Component} from 'react'
import Banner from '../banner/banner'

export default class Newsletter extends Component {
  constructor () {
    super()
    this.state = {
      showNewsletter : false
    }

    this.sendNewsletter = this.sendNewsletter.bind(this)
  }

  sendNewsletter (e) {
    e.preventDefault()
    this.setState({
      showNewsletter : !this.state.showNewsletter
    })
    return <Banner info = {this.state.showNewsletter}/>
    
    console.log(this.state.showNewsletter)
  }

  render () {
    return (
      <section className="newsletter">
        <h3 className="subtitles">Newsletter</h3>
        <form>
          <span className="newsContent"><input className="inputStyle" type="text">
            </input><button className="newsButton" onClick={this.sendNewsletter}>Suscribirse</button>
          </span>
        </form>
      </section>
    )
  }
}