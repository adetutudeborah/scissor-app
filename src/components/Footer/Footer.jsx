import "./Footer.css"
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'; 
import twitter from '../../assets/twitter-icon.svg';
import instagram from '../../assets/instagram-icon.svg';
import linkedin from '../../assets/linkedin-icon.svg';
import facebook from '../../assets/facebook-icon.svg';

function Footer() {
  return (
    <footer className="footer"> 

    <div className="footer-container">

        <div className="footer-inner-container">

            <div className="scissor-brand">
              <Link to="/"><img src={logo} alt="logo" className="footer-logo"/></Link>
              <ul className="scissor-social-links">
                <li><img src={twitter} alt="twitter-icon" className="social" /></li>
                <li><img src={instagram} alt="instagram-icon" className="social"/></li>
                <li><img src={linkedin} alt="linkedin-icon" className="social" /></li>
                <li><img src={facebook} alt="facebook-icon" className="social" /></li>
              </ul>
            </div>

 
            <div className="about-scissor">
              <h6>Why Scissor?</h6>
              <ul>
                <li><a href="#">Scissors 101</a></li>
                <li><a href="#">Integrations and API</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>

            <div className="about-scissor">
              <h6>Solutions</h6>
              <ul>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">For Developers</a></li>
              </ul>
            </div>

            <div className="about-scissor">
              <h6>Products</h6>
              <ul>
                <li><a href="#">Link Management</a></li>
                <li><a href="#">QR Codes</a></li>
                <li><a href="#">Link-in-bio</a></li>
              </ul>
            </div>

            <div className="about-scissor">
              <h6>Company</h6>
              <ul>
                <li><a href="#">About Scissor</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>
            </div>

            <div className="about-scissor second-line">
              <h6>Resources</h6>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Resource Library</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">App Connectors</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Trust Center</a></li>
                <li><a href="#">Browser Extension</a></li>
                <li><a href="#">Mobile App</a></li>
              </ul>
            </div>

            <div className="about-scissor">
              <h6>Features</h6>
              <ul>
                <li><a href="#">Branded Links</a></li>
                <li><a href="#">Mobile Links</a></li>
                <li><a href="#">Campaign</a></li>
                <li><a href="#">Management &amp; Analytics</a></li>
                <li><a href="#">QR Code generation</a></li>
              </ul>
            </div>

            <div className="about-scissor">
              <h6>Legal</h6>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Acceptable Policy</a></li>
                <li><a href="#">Code of Conduct</a></li>
              </ul>
            </div>

        </div>

        <p className="footer-text"> <span className="service">Terms of Service </span>| <span className="security">Security</span> | <span className="footer-year">Scissor 2023</span></p>
    </div>

</footer>

  )
}

export default Footer; 