/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import './Signup.css'; 
import { Link } from 'react-router-dom';
import { useState } from 'react' 
import { useSignup } from '../../hooks/useSignup'; 
 

function Signup () {
 
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('')
const { signup, signupWithGoogle, signupWithFacebook, error, isLoading } = useSignup()

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, firstName)
    signup(email, password, firstName)
}

    return(
        <div className='login-form'>

        {/* Login Socials */}

          <h2 className='login-header'>Sign up with:</h2>

          <div className="signinsocials">

            <div className="signingoogle signinsocial" onClick={signupWithGoogle}>
               <img src="https://img.icons8.com/fluency/48/null/google-logo.png" className="socialicon" />
               <span className="sign">Google</span>
            </div>

            <div className="signinfacebook signinsocial" onClick={signupWithFacebook}>                           
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
             type="text" 
             onChange={(e) => setFirstName(e.target.value)}
             value={firstName}
             placeholder="First name" 
             required 
             className='input-box'
            />

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
          
            { !isLoading && <button className="submit">Sign up</button> }
            { isLoading && <button className="submit" disabled>loading</button> }
            { error && <p>{error}</p> }
        </form>

         {/* Other Information */}

         <div className='last-section'>
            <h5 className="createaccount"> Already have an account? <Link className="signup" to="/login">Login</Link> </h5>
            <h6 className='terms'> By signing up with an account you agree to <br/> Scissor's <strong>Terms of Service Privacy Policy</strong> and <strong>Acceptable Use Policy.</strong></h6>
         </div>

      </div>
    )
}

export default Signup;