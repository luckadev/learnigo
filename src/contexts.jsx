import { createContext, useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  getAuth
} from 'firebase/auth';
import { doc, addDoc, collection } from 'firebase/firestore';
import { app, auth, db } from '../firebaseConfig';


export const AppContext = createContext();

export default function AppProvider({ children }) {

  const [ user, setUser ] = useState(false);

  // Global functions
  const signUp = async(email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(userResponse => {
        console.log(userResponse);
      })
      .catch(error => {
        console.error('Registration error:', error);
      })
  }
  
  const signIn = async(email, password)=>{
    await signInWithEmailAndPassword(auth, email, password)
      .then(userResponse => {
        console.log(userResponse);
      })
      .catch(error => {
        console.error('Login error:', error);
      })
  }

  return (
    <AppContext.Provider value={{
      // Global Contexts
      signIn,
      signUp,
      user,
      setUser,
    }}>
      {children}
    </AppContext.Provider>
  );
}