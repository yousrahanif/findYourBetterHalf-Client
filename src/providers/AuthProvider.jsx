import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../pages/firebase/firebase.config";

export const AuthContext=createContext(null)
const auth = getAuth(app);
const provider= new GoogleAuthProvider



const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)


const createUser=(email,password)=>{
    setLoading(true)

    return createUserWithEmailAndPassword(auth,email,password)

}

const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const signInWithGoogle=()=>{
    return signInWithPopup(auth,provider)
}

const signOutUser=()=>{
    setLoading(true)

    return signOut(auth)
}
useEffect(()=>{

 const unSubscribe= onAuthStateChanged(auth,currentUser=>{
    
       setUser(currentUser)
       setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }

},[])

    const authInfo={
       createUser, signInUser, user, signOutUser, loading, signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
    
};

export default AuthProvider;