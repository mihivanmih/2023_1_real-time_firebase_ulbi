import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import 'firebase/compat/database';

const root = ReactDOM.createRoot(document.getElementById('root'));


firebase.initializeApp({
    apiKey: "AIzaSyD0PnguzwmCHczg1weOweTas__e3fsiVno",
    authDomain: "chat-react-bb053.firebaseapp.com",
    projectId: "chat-react-bb053",
    storageBucket: "chat-react-bb053.appspot.com",
    messagingSenderId: "342373535526",
    appId: "1:342373535526:web:6b3ccde546c0dbc41b3be7",
    measurementId: "G-RTL21ZT1N4"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>
);
