import React, {Component} from 'react'
import Ionicon from 'react-ionicons'

export default class Navigation extends Component {
  constructor (props) {
    super()
    this.state = {
      iconShake : false
    }
    this.Icon = this.Icon.bind(this)
  }

  Icon () {
    this.setState({
      iconShake : !this.state.iconShake
    })
    console.log(this.state.iconShake)
  }

  render () {
    return (
      <nav className="nav">
        <section><h1 className="title">URBANIK</h1></section>
        <menu className="menu">
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="#">¿QUIENES SOMOS?</a></li>
            <li><a href="#">SERVICIOS</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACTO</a></li>
          </ul>
          <div onClick={this.Icon} className='iconContent'>
            <Ionicon className="burgerIcon" shake={this.state.iconShake} icon="ion-android-menu" color="#ffffff" fontSize="30px"/>
          </div>
        </menu>
      </nav>
    )
  }
}