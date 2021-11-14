import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile} from "firebase/auth";



//initialize firebase app
initializeFirebase();

const useFirebase =()=>{
    const [user,setUser] =useState({});
    const [authError,setAuthError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //sign in with google 
    // const signInWithGoogle = () => {

    //     return signInWithPopup(auth, googleProvider)

    // } 
    //sign in with google 

    const signInWithGoogle =(location,history)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination)
                // ...
            }).catch((error) => {
                
                
                setAuthError(error.messages);
            }).finally(()=>setIsLoading(false));
    }

//register with email and password 
    const registerUser =(email,password,name,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setAuthError('');
            const newUser ={ email,displayName:name};
            setUser(newUser);
            //save user to database
            saveUser(email,name,'POST')
            //send name to firebase after creatin 
            updateProfile(auth.currentUser, {
                displayName: name 
            }).then(() => {
                
            }).catch((error) => {
                
            });

            
            history.replace('/');
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

    //for admin check in client side 
    useEffect(()=>{
        fetch(`https://immense-oasis-52476.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data =>{
            
            setAdmin(data.admin)
        })

    },[user.email])

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
    //save user to the database 
    const saveUser = (email,displayName,method)=>{
        const user ={
            email, displayName
        };
        fetch('https://immense-oasis-52476.herokuapp.com/users',{
            method:(method),
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()

    }

    return {
        user,
        admin,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle, setUser, authError, setIsLoading
       
    }

}

export default useFirebase;