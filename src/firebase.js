import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: 
  "AIzaSyARGadO6AouvbnYwiaRBASw6PdMD6R5I5A",
  authDomain: 
  "apolo-ce177.firebaseapp.com",
  projectId: 
  "apolo-ce177",
  storageBucket: 
  "apolo-ce177.appspot.com",
  messagingSenderId: 
  "914184786362",
  appId: 
  "1:914184786362:web:f9379ae8acf67ea899cd83",
};
export const firebase = initializeApp(firebaseConfig);
export const fs = getFirestore()
export const db = getStorage() 

  
  