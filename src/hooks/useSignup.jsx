/* eslint-disable no-unused-vars */
import { useState, useEffect} from 'react';
import { useAuthContext } from './useAuthContext';
import { toast } from "react-toastify"; 
import { Link, useNavigate } from "react-router-dom";

//firebase import
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup  } from "firebase/auth";


export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext()

    const navigate = useNavigate();

    const signup = (email, password, firstName) => {
        setError(null)
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password, firstName)
            .then((res) => {

                const user = res.user;

                // Signed in 
                console.log('user signed in', user)

                // dispatch login action
                dispatch({ type: 'LOGIN', payload: user })
                toast.success('Signup successful');

                
                navigate("/pages/urlshorten/urlshortendashboard");

                // update state
                if (!isCancelled) {
                    setIsLoading(false)
                    setError(null)
                } 

                // add display name to user
                return updateProfile(user, {
                    displayName: firstName
                });

            })
            .catch((error) => {
              toast.error(error.message);
                if (!isCancelled) {
                    setError(error.message)
                    setIsLoading(false);
                   
                }
            });
    }

    const signupWithGoogle = () => {
        // Google authentication logic
        signInWithPopup(auth, new GoogleAuthProvider())
          .then((res) => {
            console.log('user logged in with Google', res.user);
            dispatch({ type: 'LOGIN', payload: res.user });
            toast.success('Signup successful');
    
            if (!isCancelled) { 
              setIsLoading(false);
              setError(null);
            }
          })
          .catch((error) => {
            toast.error(error.message);
            if (!isCancelled) {
              setError(error.message);
              setIsLoading(false);
            }
          });
      };
    
      const signupWithFacebook = () => {
        // Facebook authentication logic
        signInWithPopup(auth, new FacebookAuthProvider())
          .then((res) => {
            console.log('user logged in with Facebook', res.user);
            dispatch({ type: 'LOGIN', payload: res.user });
            toast.success('Signup successful');
    
            if (!isCancelled) {
              setIsLoading(false);
              setError(null);
            }
          })
          .catch((error) => {
            toast.error(error.message);
            if (!isCancelled) { 
              setError(error.message);
              setIsLoading(false);
            }
          });
      };
          //  Add cleanup function
            useEffect(() => {
                return () => setIsCancelled(true)
            }, [])

 return { signup, signupWithGoogle, signupWithFacebook, error, isLoading}
}