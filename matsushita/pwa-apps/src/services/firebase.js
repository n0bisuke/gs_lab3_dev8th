import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDkkp1LIdAkF_PIxr6WQXvZzsI4XwQ3sLQ',
  authDomain: 'pwa-apps.firebaseapp.com',
  databaseURL: 'https://pwa-apps.firebaseio.com',
  projectId: 'pwa-apps',
  storageBucket: 'pwa-apps.appspot.com',
  messagingSenderId: '721352098319'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
