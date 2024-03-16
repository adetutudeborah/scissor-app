import './Home.css'
import { Header, Features, Getstarted, Footer} from "../../components";

function Home() {
  return (
    <div className="home">
      <Header /> 
      <Features />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default Home;


