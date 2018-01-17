<template>
  <div id="app">
    <pp-header></pp-header>

    <div class="container main-contents">
      <router-view></router-view>
    </div>

    <pp-footer></pp-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import firebase from 'firebase'
  import { firebaseApp } from './main'
  export const moment = require('moment');

  export default {
    components: {
      ppHeader: Header,
      ppFooter: Footer
    },
    name: 'app',
    data () {
      return {
      }
    },
    created () {
      const userID = firebase.auth().currentUser.uid
      const db = firebaseApp.database()
      const dbUsersRef = db.ref('/users/' + userID)
      const dbPartnersRef = db.ref('partners')
      this.$store.dispatch('setUsersRef', dbUsersRef)
      this.$store.dispatch('setPartnersRef', dbPartnersRef)
    }
  }
</script>

<style lang="scss">
  @import "assets/sass/setting";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .main-contents {
    max-width: $widthTab;
    margin: 0 auto;
    text-align: left;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .main-contents {
    padding:1rem;
  }
</style>
