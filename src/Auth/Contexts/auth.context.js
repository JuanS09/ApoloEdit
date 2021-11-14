import React, {
    createContext,
    useState,
    useEffect,
} from 'react';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    doc,
    getDoc,
} from 'firebase/firestore';
import {
    fs,
} from './../../firebase';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const {children} = props;
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        // Observador de autentificacion
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const userDoc = doc(fs, "users", user.uid);
                getDoc(userDoc)
                .then(snap => {
                    if(snap.exists()) {
                        setUser({
                            ...user,
                            userDoc: {
                                ...snap.data()
                            },
                        });
                    }
                    else {
                        setUser(null);
                    }
                })
                .catch(error => console.log("Error al traer documento de usuario ", error));
            } else {
                setUser(null);
            }
        });
    }, []);

    const contextValue = {
        user,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};