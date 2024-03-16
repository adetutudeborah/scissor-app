import "./Header.css"
import { Link } from 'react-router-dom';
import underline from '../../assets/underline.svg';
 
function Header() {  
  return (
    <div className="header">
        <div className="hero">
            <div className="hero-section">
                <h1 className="hero-heading"> Optimize Your Online Experience with Our Advanced <span className="url-shortening">URL Shortening</span> Solution</h1>
                <img src={underline} alt="underline" className="underline" />
                <p className="hero-subheading">Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            </div>

            <div className="hero-links">
                <Link to="/signup"><button className="btn hero-signup-btn">Sign Up</button></Link>
                <a className="hero-more-btn" href="#">Learn More</a>
            </div>
        </div>
    
        
    </div>
    );
}

export default Header;