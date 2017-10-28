import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Ionicon from 'react-ionicons'

export default class Navigation extends Component {
  constructor (props) {
    super()
  }

  render () {
    console.log(ReactDOM)
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
          <Ionicon className="burgerIcon" icon="ion-android-menu" color="#ffffff" fontSize="30px"/>
        </menu>
      </nav>
    )
  }
}