/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */ 
import './Login.css'; 
import { useState } from 'react' 
import { useLogin } from '../../hooks/useLogin'; 
import { Link } from 'react-router-dom';

function Login () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, loginWithGoogle, loginWithFacebook, error, isLoading } = useLogin();

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(email, password) 
      login(email, password)
    }

    return(

      <div className='login-form'>

        {/* Login Socials */}

          <h2 className='login-header'>Login with:</h2>

          <div className="signinsocials">

            <div className="signingoogle signinsocial" onClick={loginWithGoogle}>
               <img src="https://img.icons8.com/fluency/48/null/google-logo.png" className="socialicon" />
               <span className="sign">Google</span>
            </div>

            <div className="signinfacebook signinsocial" onClick={loginWithFacebook}>                           
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" className='socialicon facebookicon'/>         
               <span className="sign">Facebook</span>           
            </div>

          </div>

          <div className='partition'>
             <span className='or'> OR </span>
          </div>
        
        {/* Login Form */}

        <form onSubmit={handleSubmit}>

            <input 
              type="email" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              placeholder="Email address" 
              required 
              className='input-box'
            />

            <input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              placeholder="Password" 
              required 
              className='input-box'
            />
          
            { !isLoading && <button className="submit">Login</button> }
            { isLoading && <button className="submit" disabled>loading</button> }
            { error && <p>{error}</p> }
        </form>

         {/* Other Information */}

         <div className='last-section'>
            <h5 className="createaccount"> Don't have an account? <Link className="signup" to="/signup"> Sign up</Link> </h5>
            <h6 className='terms'> By signing in with an account you agree to <br/> Scissor's <strong>Terms of Service Privacy Policy</strong> and <strong>Acceptable Use Policy.</strong></h6>
         </div>

      </div>
    )
}

export default Login;