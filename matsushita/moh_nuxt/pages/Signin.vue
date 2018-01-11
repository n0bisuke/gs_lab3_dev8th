<template>
  <div class="sign-in">
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
        <span><a href="#">Create Account</a></span>
        <nuxt-link active-class="is-active" to="/signup" class="" exact>Create Account</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Firebase from '~/plugins/firebase'
  import { store } from '~/store/index'
  Firebase.auth().onAuthStateChanged(function (user) {
    console.log(user)
    if (user) {
      store.dispatch('setUser', user)
    } else {
      store.dispatch('setUser', null)
    }
  })
  export default {
    name: 'Signin',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn () {
        Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          user => {
            alert('success!')
            this.$router.push('/')
          },
          err => {
            alert(err.message)
          }
        )
      }
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
  .is-rounded {
    border-radius: 25px;
  }

</style>
