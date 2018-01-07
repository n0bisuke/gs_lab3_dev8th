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
        <nuxt-link active-class="is-active" to="/signin" class="signUp" exact>Return to login</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'
  export default {
    name: 'Signup',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          user => {
            alert('Create account: ', user.email)
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
  .sign-up {
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
