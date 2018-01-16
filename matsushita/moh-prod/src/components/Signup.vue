<template>
  <div class="sign-up">
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
        <button class="button is-primary is-rounded is-medium" @click="signUp">SIGN UP FREE</button>
        <button class="button is-info is-rounded is-medium" @click="signOut">SIGN OUT</button>
        <router-link :to="{ name: 'signInLink' }" tag="a" class="">Return to login</router-link>
      </p>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase'
  import { store } from '../store/index'
  export default {
    name: 'Signup',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          user => {
            alert('Create account: ', user.email)
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
    }
  }
</script>
<style lang="scss" scopped>
  .sign-up {
    padding: .5rem;
    max-width: 726px;
    margin:0 auto;
  }
  .button-field {
    .control {
      text-align: center;
      .button {
        margin-bottom:.5rem;
        width:100%;
      }
    }
  }
</style>
