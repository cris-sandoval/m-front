import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="divFoteerSup">
        <img className="imgfooter" src="./imgfooter.png" />
        <div className="divSubscripcion">
          <h2 className="tituloSubcribe">Subscribe</h2>
          <div className="seccionSubscribe">
            <input
              className="inputsubscribe"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="botonSubscribe" type="button">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="divFooterInf">
        <div className="footerInfText">
          <h3>Home</h3>
          <h3>Manga</h3>
        </div>
        <div class="logofooter">
          <img className="imglogofooter" src="./Logo 2.png" />
        </div>
        <div className="rrssFooter">
          <div className="rrsslogos">
            <img src="./Facebook.png" />
            <img src="./Twitter.png" />
            <img src="./Vimeo.png" />
            <img src="./Youtube.png" />
          </div>
          <div>
            <button className="botonDonate" type="button">
              Donate
              <img src="Union.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
