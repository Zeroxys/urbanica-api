import React, {Component} from 'react'

export default class Navigation extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <nav className="nav">
        <section>logo</section>
        <menu className="menu">
          <ul>
            <li>Webservices</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>About</li>
            <li>Tag</li>
          </ul>
        </menu>
      </nav>
    )
  }
}