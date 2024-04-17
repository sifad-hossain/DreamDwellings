import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

//Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    // console.log(user);
    const [loading, setLoading] = useState(true);
    console.log(loading);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //updated user profile
    const updateUserProfile = (name, image) => {
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
       
    }


    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    //Google Login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Github Provider
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //LogOut
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    //Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                
            }
            setLoading(false);
        });
        return () => unSubscribe()
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        updateUserProfile,
        user,
        setUser,
        loading,
        
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;