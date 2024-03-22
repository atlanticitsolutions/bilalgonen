// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyCPbjSXe1Liw0gWZEqjNwoLCNB_40e6l4U',
  authDomain: 'bilalgonen5.firebaseapp.com',
  projectId: 'bilalgonen5',
  storageBucket: 'bilalgonen5.appspot.com',
  messagingSenderId: '483353532242',
  appId: '1:483353532242:web:8cbb78200f4d99c0f0cc8b',
  measurementId: 'G-1Q1RL1CPTP',
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const functions = getFunctions(app)

if (import.meta.env.VITE_NODE_ENV === 'dev') {
  console.log('in dev mode')
}

// connectFunctionsEmulator(functions, 'localhost', 5001)
if (import.meta.env.VITE_NODE_ENV === 'dev') {
  connectFunctionsEmulator(getFunctions(app), 'localhost', 5001)
}

export { app, functions }
