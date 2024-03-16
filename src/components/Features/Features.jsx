import "./Features.css"
import urlshortening from '../../assets/url-shortening.svg';
import customurl from '../../assets/custom-url.svg';
import qrcode from '../../assets/qr-code.svg';
import dataanalytics from '../../assets/data-analytics.svg';

function Features() {
  return (

    <div>
    <section className="features">
      
      <div className="features-container">
          <div className="features-sidebar"></div>
          <div>
              <h3 className="features-title">Why choose <span className="scissors">Scissors</span></h3>
              <p className="features-subtitle">
                  Scissors is the hub of everything that has to do with your link management. 
                  We shorten your URLs, allow you creating custom ones for your personal, business, event usage. 
                  Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. 
              </p> 
          </div>
      </div>

      <div className="features-list-container">

          <div className="features-list">
              <div className="feature-icon">
                  <img src={urlshortening} alt="url-shortening-image" />
              </div>  
              <h4 className="features-list-heading">URL Shortening</h4>
              <p className="features-list-subheading">Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
          </div>

          <div className="features-list">
              <div className="feature-icon">
                  <img src={customurl} alt="custom-url-image" />
              </div>
              <h4 className="features-list-heading">Custom URLs</h4>
              <p className="features-list-subheading">With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
          </div>

          <div className="features-list">
              <div className="feature-icon">
                  <img src={qrcode} alt="qr-code-image" />
              </div>
              <h4 className="features-list-heading">QR Codes</h4>
              <p className="features-list-subheading">Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
          </div>

          <div className="features-list">
              <div className="feature-icon">
                  <img src={dataanalytics} alt="data-analytics-image" />
              </div>
              <h4 className="features-list-heading">Data Analytics</h4>
              <p className="features-list-subheading">Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
          </div>

      </div>

  </section>
    </div>

  )
}

export default Features;