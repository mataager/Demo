// Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDss53pHibCpqo87_1bhoUHkf8Idnj-Fig",
//   authDomain: "matager-f1f00.firebaseapp.com",
//   projectId: "matager-f1f00",
//   storageBucket: "matager-f1f00.appspot.com",
//   messagingSenderId: "922824110897",
//   appId: "1:922824110897:web:b7978665d22e2d652e7610",
// };

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
