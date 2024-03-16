import "./Getstarted.css"
import { Link } from 'react-router-dom';

function Getstarted() {
  return (
    <div className="get-started">

    <h2 className="get-started-title">Revolutionizing Link Optimization</h2>

    <Link to="/signup">
    <button className="get-started-btn">Get Started</button>
    </Link>

  </div>
  );
}

export default Getstarted;