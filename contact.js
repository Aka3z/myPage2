// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyCCgM1Fd8j3POQo2itNs-67Qgm25HiuQ1o',
  authDomain: 'ohno-b8e46.firebaseapp.com',
  databaseURL: 'https://ohno-b8e46-default-rtdb.firebaseio.com',
  projectId: 'ohno-b8e46',
  storageBucket: 'ohno-b8e46.appspot.com',
  messagingSenderId: '740238340384',
  appId: '1:740238340384:web:d54505ca70ef37218de745',
  measurementId: 'G-E20ZB9Q025',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ready data
var messagesRef = firebase.database().ref('dataVisitor');
// submit process
