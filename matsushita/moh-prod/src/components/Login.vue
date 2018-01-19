<template>

  <section class="Login-area">
    <!--サインアウト中-->
    <div class="is-sign-out" v-if="!currentUser">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model="email">
          <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
          <span class="icon is-small is-right"><i class="fa fa-check"></i></span>
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
          <button class="button is-primary is-medium" @click="signIn">LOGIN</button>
          <router-link :to="{ name: 'signUpLink' }" tag="a" class="">Create Account</router-link>
        </p>
      </div>
    </div>
    <!--サインイン中-->
    <div class="is-sign-in" v-else>
      <div class="button-field">
        <div class="control">
          <p class="login-user"><strong>{{ getUser.displayName }}</strong>でログイン中 </p>
          <button class="button is-info is-medium" @click="signOut">SIGN OUT</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default  {
    data () {
      return {
        email: '',
        password: '',
        message: ''
      }
    },
    computed: {
      currentUser: function() {
        return this.$store.getters['auth/user'].auth
      },
      ...mapGetters([
        'getUser'
      ])
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
      },
    }
  }
</script>
