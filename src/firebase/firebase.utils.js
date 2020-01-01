import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDee6UtL5npsyy03yQ-tMW_4GbQ0oibr2s",
  authDomain: "my-db-b1fa8.firebaseapp.com",
  databaseURL: "https://my-db-b1fa8.firebaseio.com",
  projectId: "my--db",
  storageBucket: "my--db.appspot.com",
  messagingSenderId: "1023562919579",
  appId: "1:1023562919579:web:f5e5afdaa8b320cc0ee03e",
  measurementId: "G-X6E9RN6E3M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set(
        {
          displayName,
          email,
          createdAt,
          ...additionalData
        }
      )
    }
    catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;