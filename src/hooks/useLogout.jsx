/* eslint-disable no-unused-vars */
import { useState, useEffect} from 'react';
import { useAuthContext } from './useAuthContext';
import { Link, useNavigate } from "react-router-dom";

//firebase import 
import { auth } from '../firebase/config' 
import { signOut } from "firebase/auth";


export const useLogout = () => {
   const [isCancelled, setIsCancelled] = useState(false)
   const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
   const { dispatch } = useAuthContext()

   const navigate = useNavigate();

   const logout = () => {

      setError(null)
      setIsLoading(true);

        signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log('user signed out')

            // dispatch logout action
            dispatch({ type: 'LOGOUT'})
 
            navigate("/");

            // update state
            if (!isCancelled) {
               setIsLoading(false)
               setError(null)
           } 

        }).catch((error) => {
        // An error happened.
            if (!isCancelled) {
               setError(error.message)
               setIsLoading(false);
            }
        });
   }
      //  Add cleanup function
         useEffect(() => {
            return () => setIsCancelled(true)
         }, [])

      return { logout, error, isLoading }
}