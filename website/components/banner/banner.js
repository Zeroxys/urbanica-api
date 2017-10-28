import React, {Component} from 'react'

export default class Banner extends Component {
  constructor (props) {
    super(props)

    this.state = {
      subscription : this.props.info
    }
  }

  render () {
    return (
    <div className="banner">
      <div className= "filter">
        <div>
          <h1>URBANIK</h1>
        </div>
      </div>

      {this.state.subscription ? <div className="subscribeNewsletter">Suscribiendo</div> : null}

    </div>
    )
  }
}