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
  <div class="is-loggedIn" v-else>
    <div class="" v-for="partner, idx in getPartners" :key="partner['.key']">
      <div class="profile-wrap">
        <div class="profile-photo-slide">
          <carousel :perPage="1" paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize='5' easing="linear">
            <slide v-for="" >
              <img src="../assets/images/dog01.png" alt="プロフィール写真">
            </slide>
            <slide>
              <img src="../assets/images/dog02.jpg" alt="プロフィール写真">
            </slide>
            <slide>
              <img src="../assets/images/dog03.jpg" alt="プロフィール写真">
            </slide>
          </carousel>
        </div>
        <div class="breed">
          <span class="tag is-primary is-rounded">{{ partner.breed }}</span>
        </div>
        <div class="profile-info">
          <div class="profile-info__head">
            <span class="name">{{ partner.displayName }}</span>
            <span class="age">({{ partner.age }}歳)</span>
            <!--<span class="gender">{{ setGender }}</span>-->
          </div>
          <div class="profile-info__sub">
            <!--<span class="sex">オス</span>-->
            <span class="area">東京都</span>
          </div>
          <hr>
        </div>

        <div class="profile-discription">
          <p>{{ partner.description }}</p>
        </div>
      </div>
    </div>
    <div class="button-field">
      <div class="control">
        <p class="login-user"><strong>{{ getUser.displayName }}</strong>でログイン中 </p>
        <button class="button is-info is-rounded is-medium" @click="signOut">SIGN OUT</button>
      </div>
    </div>
  </div>


</template>
<script>
  import firebase from 'firebase'
  import { firebaseApp, dbPartnersRef } from '../main'
  import { store } from '../store/index.js'
  import { mapGetters } from 'vuex'
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    name: 'Signin',
    data () {
      return {
        email: '',
        password: '',
        message: '',
        partners: [
          {
            uid:'OcOH4RdjLNb4rHmr59csCuVtPPO2',
            displayName: '',
            age:'5',
            breed: 'ポメラニアン',
            description: '大きなお耳につぶらな瞳のチビちゃん',
            gender: 'male'
          },
          {
            uid:'OcOH4RdjLNb4rHmr59csCuVtPPO2',
            displayName: '',
            age:'5',
            breed: 'ポメラニアン',
            description: '大きなお耳につぶらな瞳のチビちゃん',
            gender: 'male'
          }
        ]
      }
    },
    components: {
      Carousel,
      Slide
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
      },
      ...mapGetters([
        'getUser',
        'getPartners'
      ])
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.message = `${user.displayName}でログイン中`
        } else {
          this.message = `ログインしてない`
        }
      })
      const userID = firebase.auth().currentUser.uid
      const db = firebaseApp.database()
      const dbUsersRef = db.ref('/users/' + userID)
      const dbPartnersRef = db.ref('users');
      console.log(dbUsersRef);
      this.$store.dispatch('setUsersRef', dbUsersRef)
      this.$store.dispatch('setPartnersRef', dbPartnersRef)
    }
  }
</script>

<style lang="scss" scopped>
  .sign-in {
    padding: .5rem;
    max-width: 726px;
    margin:0 auto;
  }
  .login-user {

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

