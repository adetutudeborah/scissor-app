/* eslint-disable no-const-assign */
import { useEffect, useState, useRef } from "react";
import { collection, onSnapshot, where, query, orderBy } from "firebase/firestore";
import {  db } from "../firebase/config";

export const useCollection = (collections, queryArr, orderByArr) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // The useRef is used to prevent the infinite loop in useEffect and because the query passed into the useCollection function is an array which is differnt at every function call
  const queryRef = useRef(queryArr).current;
  const orderByRef = useRef(orderByArr).current;

  useEffect(() => {

    // collection ref
    let docRef = collection(db, collections);

    if (queryRef) {
        docRef = query(docRef, where(...queryRef));
    }
    if (orderByRef) {
        docRef = query(docRef, orderBy(...orderByRef));
    }
    
    // real time data collection
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      // update state
      setDocuments(results);
      setError(null);
    }, (error) => {
      console.log(error);
      setError("Could not fetch the data");
    });

    // unsubscribe on unmount
    return () => unsubscribe();

  }, [collections, queryRef, orderByRef]);

  return { documents, error };
};


// The useCollection hook is all about subscribing to real time data from a firestore collection.