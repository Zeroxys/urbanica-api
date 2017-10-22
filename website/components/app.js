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
        <div className="filter">
          <div className= "banner">
            <h1>URBANIK</h1>
          </div>
        </div>

        <footer>

          <div className="footerContent">


            <div className="principalContent">

              <div className="articulesContent">
                <section className="footSection">
                  <h3 className="subtitles">Servicios</h3>
                  <ul className="references">
                    <li><a href="#">Text</a></li>
                    <li><a href="#">Text</a></li>
                    <li><a href="#">Text</a></li>
                  </ul>
                </section>

                <section className="footSection">
                  <h3 className="subtitles">Acerca de</h3>
                  <ul className="references">
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Text</a></li>
                    <li><a href="#">Text</a></li>
                  </ul>
                </section>

                <section className="footSection">
                  <h3 className="subtitles">Talentos</h3>
                  <ul className="references">
                    <li><a href="#">Text</a></li>
                    <li><a href="#">Text</a></li>
                    <li><a href="#">Text</a></li>
                  </ul>
                </section>

                <section className="newsletter">
                  <h3 className="subtitles">Newsletter</h3>
                  <form>
                    <span className="newsContent"><input className="inputStyle" type="text"></input><button className="newsButton">Suscribirse</button></span>
                  </form>
                </section>
              </div>

            </div>

            <div className="ubication">
              <div className="ubicationContent">
                <section>
                  <h3>Contact Us</h3>
                </section>
              </div>
            </div>


          </div>

          

        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))