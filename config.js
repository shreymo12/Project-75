import firebase from 'firebase';
require ("@firebase/firestore");



firebase.initializeApp(firebaseConfig)

export default firebase.firestore()