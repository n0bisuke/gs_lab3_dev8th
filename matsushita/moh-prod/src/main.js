require('./assets/sass/style.scss');
import Vue from 'vue'
import firebase from 'firebase'
import 'es6-promise/auto'
import router from './router'
import store from './store'
import App from './App.vue'
import { fireBaseConfig } from './firebaseConfig'


// Firebase初期化
export const firebaseApp = firebase.initializeApp(fireBaseConfig);
// const db = firebaseApp.database();
// const userID = 'OcOH4RdjLNb4rHmr59csCuVtPPO2';
// export const dbUsersRef = db.ref('/users/' + userID);
// export const dbOrdersRef = db.ref('orders');

// 認証を初期化
store.dispatch('auth/init').then(() => {
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})


