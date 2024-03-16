/* eslint-disable no-unused-vars */
import { useState, useEffect} from 'react';
import { useAuthContext } from './useAuthContext';
import { toast } from "react-toastify";


//firebase import
import { auth } from '../firebase/config'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext()


    const login = (email, password) => {
        setError(null)
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
            console.log('user logged in', res.user);
            dispatch({ type: 'LOGIN', payload: res.user });
            toast.success('Login successful');

            if (!isCancelled) {
                setIsLoading(false);
                setError(null);    
            }
            })
            .catch((error) => {

              if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                toast.error('Account not found. Please sign up.');
                setIsLoading(false);
              } else {
                setError(error.message);
                toast.error(error.message, 'error');
              }
              
              });
          };

    const loginWithGoogle = () => {
        // Google authentication logic
        signInWithPopup(auth, new GoogleAuthProvider())
          .then((res) => {
            console.log('user logged in with Google', res.user);
            dispatch({ type: 'LOGIN', payload: res.user }); 
            toast.success('Login successful');
    
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
    
      const loginWithFacebook = () => {
        // Facebook authentication logic
        signInWithPopup(auth, new FacebookAuthProvider())
          .then((res) => {
            console.log('user logged in with Facebook', res.user);
            dispatch({ type: 'LOGIN', payload: res.user });
            toast.success('Login successful');
    
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


        return { login, loginWithGoogle, loginWithFacebook, error, isLoading };
}