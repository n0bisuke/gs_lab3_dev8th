import firebase from 'firebase'
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCv_UV3LhSbXS14nwudnn1_KRKZhl2DlVA',
  authDomain: 'moh-apps.firebaseapp.com',
  databaseURL: 'https://moh-apps.firebaseio.com',
  projectId: 'moh-apps',
  storageBucket: 'moh-apps.appspot.com',
  messagingSenderId: '1001674380913'
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
