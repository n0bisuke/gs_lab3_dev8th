<template>
  <div class="sign-in" v-if="!currentUser">
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
        <span class="icon is-small is-right">
      <i class="fa fa-check"></i>
    </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left"><i class="fa fa-lock"></i></span>
      </p>
    </div>
    <div class="button-field">
      <p class="control">
        <button class="button is-primary is-rounded is-medium" @click="signIn">LOGIN</button>
        <router-link :to="{ name: 'signUpLink' }" tag="a" class="">Create Account</router-link>
      </p>
    </div>
  </div>
  <div class="button-field" v-else >
    <div class="control">
      <p>{{ message }}</p>
      <button class="button is-info is-rounded is-medium" @click="signOut">SIGN OUT</button>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase'
  import { store } from '../store/index.js'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Signin',
    data () {
      return {
        email: '',
        password: '',
        message: ''
      }
    },
    methods: {
      signIn:function ()  {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          user => {
            alert('success!')
            this.$router.push('/')
          },
          err => {
            alert(err.message)
          }
        )
      },
      signOut () {
        firebase.auth().signOut().then(function () {
          alert('logged out');
        }).catch(function () {
          alert('error.');
        })
      }
    },
    computed: {
      currentUser: function() {
         return this.$store.getters['auth/user'].auth
      }
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.message = `${user.email}でログイン中`
        } else {
          this.message = `ログインしてない`
        }
      })
    }
  }
</script>

<style lang="scss" scopped>
  .sign-in {
    padding: .5rem;
    max-width: 726px;
    margin:0 auto;
  }
  .button-field {
    .control {
      text-align: center;
      .button {
        width:100%;
      }
    }
  }
</style>

