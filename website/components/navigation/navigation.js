import React, {Component} from 'react'

export default class Navigation extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <nav className="nav">
        <section>URBANIK</section>
        <menu className="menu">
          <ul>
            <li><a href="#">Webservices</a></li>
            <li><a href="#">Webservices</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Tag</a></li>
          </ul>
        </menu>
      </nav>
    )
  }
}