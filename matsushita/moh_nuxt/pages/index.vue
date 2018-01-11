<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to the JavaScript SSR Blog.
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </section>
    <button @click="signOut">Sign out</button>
  </div>
</template>



<script>
  import Logo from '~/components/Logo.vue'
  import firebase from 'firebase'

  export default {
    components: {
      Logo
    },
    head: {
      title: 'Home'
    },
    meta: {
      requiresAuth: false
    },
    methods: {
      signOut () {
        firebase.auth().signOut().then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style>
</style>
