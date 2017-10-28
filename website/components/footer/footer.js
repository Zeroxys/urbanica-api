import React, {Component} from 'react'

import Newsletter from './newsletter'

export default class Foooter extends Component {
  constructor (props) {
    super()
  }

  render() {
    return (
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

              <Newsletter/>

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
    )
  }
}