import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCvz_iAFTj1VSwVKgbv9CJWDMwKWvgQacM',
  authDomain: 'internproj-2cad7.firebaseapp.com',
  projectId: 'internproj-2cad7',
  storageBucket: 'internproj-2cad7.appspot.com',
  messagingSenderId: '921606301126',
  appId: '1:921606301126:web:85131c1841118bc6df7ec7',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
