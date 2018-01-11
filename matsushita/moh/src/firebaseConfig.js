import Firebase from 'firebase'
var config = {
  apiKey: "AIzaSyC8YPQnVl1EedWnHFmlaS9OiIpT3RKa9bQ",
  authDomain: "mohapps-af117.firebaseapp.com",
  databaseURL: "https://mohapps-af117.firebaseio.com",
  projectId: "mohapps-af117",
  storageBucket: "",
  messagingSenderId: "387117251141"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')
