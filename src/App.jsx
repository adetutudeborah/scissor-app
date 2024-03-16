import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from "react-router-dom"
import { useAuthContext } from './hooks/useAuthContext.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home.jsx";
import Navsection from './components/Navsection/Navsection'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Urlshorten from './pages/Urlshorten/UrlShortenDashboard.jsx'

function App() {

  const { authIsReady, user } = useAuthContext()

  return (
   <div className='app'>  
      {authIsReady && (
        <>  
          <Navsection />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/urlshorten" element={<Urlshorten />} />
            <Route path="/login" element={user ? <Navigate to="/urlshorten" /> : <Login />} />
            <Route path="/signup" element={user && user.displayName ? <Navigate to="/urlshorten" /> : <Signup />} />
          </Routes>
          <ToastContainer />
        </> 
        )}
   </div>
  )
}

export default App
