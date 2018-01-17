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
//ストレージのルートのリファレンスを取得
var storageRef = firebase.storage().ref();
//ストレージのルートにあるsample.pngのリファレンスを取得
var imgSample = storageRef.child('images/dog03.jpg');
console.log(imgSample.getDownloadURL())


// window.onload = function() {
//   //htmlロード完了したらストレージの画像を表示してみる
//   imgSample.getDownloadURL().then(function(url){
//     document.getElementById("app").style.backgroundImage = "url("+url+")";
//   }).catch(function(error) {
//     // Handle any errors
//     console.log(error);
//   });
// };


// 認証を初期化
store.dispatch('auth/init').then(() => {
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })
})


