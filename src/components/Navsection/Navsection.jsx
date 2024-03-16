import "./Navsection.css";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

function Navsection(){
 
    const { logout } = useLogout()
    const { user } = useAuthContext()
 
    return( 
    <div className="nav-container"> 
      <Navbar expand="md" className="">

        <Container>

            <Navbar.Brand href="/">
                 <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ms-auto nav-gap">
                {!user && (
                      <>
                          <LinkContainer to="/login">                         
                            <Nav.Link className="nav-item">Login</Nav.Link>                         
                          </LinkContainer>

                          <LinkContainer to="/signup" >
                             <Nav.Link className="nav-item">Get Started</Nav.Link>  
                          </LinkContainer>   
                      </>
                  )}

                {user && (
                      <div className="signed-user">
                          <Nav.Link className="nav-item welcome"> Welcome, {user.displayName} </Nav.Link>
                          <Nav.Link className="nav-item nav-item-logout" onClick={logout}>Logout </Nav.Link>     
                      </div>
                  )}  
              </Nav>
            </Navbar.Collapse>
        </Container>

      </Navbar>
  </div>   
  )
}

export default Navsection;