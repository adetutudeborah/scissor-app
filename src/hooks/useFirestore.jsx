/* eslint-disable no-unused-vars */
import { useReducer, useEffect, useState } from "react"
import { db, timestamp } from "../firebase/config";
import { collection, addDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return {success: false, isPending: true, error: null, document: null}
    case "ERROR":
      return {success: false, isPending: false, error: action.payload, document: null}
    case "ADDED_DOCUMENT":
      return {success: true, isPending: false, error: null, document: null}
    case 'DELETED_DOCUMENT':
      return { success: true, isPending: false, document: null, error: null }
    default:
      return state
  }
}

export const useFirestore = (collections) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref

  const collectionRef = collection(db, collections);


  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }
  
  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const createdAt = serverTimestamp();
      const addedDocument = await addDoc(collectionRef, { ...doc, createdAt });

      dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addedDocument });
    }
    catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message })
    }

  }

  // delete a document
  const deleteDocument = async (id) => {

    dispatch({ type: "IS_PENDING" });

    try {
      await deleteDoc(doc(collectionRef, id));
      dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" });
    } 
    catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response }

}