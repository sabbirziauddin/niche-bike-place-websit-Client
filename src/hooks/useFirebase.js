import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";



//initialize firebase app
initializeFirebase();

const useFirebase =()=>{
    const [user,setUser] =useState({});
    const [authError,setAuthError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //sign in with google 
    const signInWithGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }
    // const signInWithGoogle =(location,history)=>{
    //     setIsLoading(true);
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
                
    //             const user = result.user;
    //             setAuthError('');
    //             // ...
    //         }).catch((error) => {
                
                
    //             setAuthError(error.messages);
    //         }).finally(()=>setIsLoading(false));
    // }

//register with email and password 
    const registerUser =(email,password)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setAuthError('');
        })
            .catch((error) => {
                
                setAuthError(error.message) ;
              
            })
            .finally(()=>setIsLoading(false));
    }
    // signed in user 
    const loginUser = (email,password,location,history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from||'/';
                history.replace(destination)
               setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));;


    }
    //observe the user 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                
            } else {
                setUser({});
                
            }
            setIsLoading(false);
        });
        return ()=>unSubscribe;

    },[])

    //log out
    const logOut =()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(()=>setIsLoading(false));

    }

    return {
        user,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle, setUser, authError, setIsLoading
       
    }

}

export default useFirebase;