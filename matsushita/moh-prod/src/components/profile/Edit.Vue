<template>
  <form action="">
    <h3 class="title is-5">プロフィール編集</h3>


    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <p></p>
        <input class="input" type="text" placeholder="お名前" :value="getUser.displayName" @input="updateUserDisplayName">
        <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email input" v-model="currentUser.email">
        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">犬種</label>
      <div class="control">
        <input class="input" type="text" placeholder="" :value="getUser.breed" @input="updateUserBreed">
      </div>
    </div>

    <div class="field">
      <label class="label">Gender</label>
      <div class="control">
        <div class="select">
          <select :value="getUser.gender" @input="updateUserGender">
            <option v-for="gender in genderOptions" v-bind:value="gender.value">{{ gender.text }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Age</label>
      <div class="control">
        <input class="input" type="number" placeholder="" :value="getUser.age" @input="updateUserAge">
      </div>
    </div>

    <div class="field">
      <label class="label">紹介文</label>
      <div class="control">
        <textarea class="textarea" :value="getUser.description" @input="updateUserDesc" placeholder="性格など"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" @click="saveUserProfile" type="button">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
  import firebase from 'firebase'
  import { firebaseApp } from '../../main'
  import { mapGetters ,mapActions } from 'vuex'

  export default {
    data() {
      return {
        genderOptions: [
          { text: '男の子', value: 'male' },
          { text: '女の子', value: 'female' }
        ],
//        user: {
//          'displayName': firebase.auth().currentUser.displayName,
//          'description': '',
//          'age': '',
//          'gender': '',
//          'likes': [
//            {
//              'likedId': '',
//            }
//          ]
//        }
      }
    },
    computed: {
      currentUser: function() {
        return this.$store.getters['auth/user']
      },
      ...mapGetters([
        'getUser'
      ])
    },
//    created () {
//      const userID = firebase.auth().currentUser.uid
//      const db = firebaseApp.database()
//      const dbUsersRef = db.ref('/users/' + userID)
//      this.$store.dispatch('setUsersRef', dbUsersRef)
//    },
    methods: {
//      addNewUser() {
//        const user = firebase.auth().currentUser;
//        user.updateProfile({
//          displayName: this.currentUser.displayName,
//          photoURL: this.currentUser.photoURL,
//        }).then(function() {
//          alert('Success!')
//        }).catch(function(error) {
//          alert(error.message)
//        })
//      },
//      saveUserData () {
//        firebase.database().ref('users/' + this.currentUser.uid).set(
//          this.getUser
//        ).then( function() {
//          alert('Success')
//        }).catch(function(error) {
//          alert(error)
//        })
//      },
      saveUserProfile() {
//        this.$store.commit('updateUser', this.user)
        const obj = this.getUser
        delete obj['.key']
        delete obj['.value']
        console.log(obj)
        firebase.database().ref('/users/' + this.currentUser.uid ).set(
          obj
        ).then( function() {
          alert('Success')
        }).catch(function(error) {
          alert(error)
        })
      },
      updateUser () {
        this.user = this.getUser.user
      },
      updateUserAge (e) {
        this.$store.commit('updateUserAge', e.target.value)
      },
      updateUserDesc (e) {
        this.$store.commit('updateUserDesc', e.target.value)
      },
      updateUserDisplayName (e) {
        this.$store.commit('updateUserDisplayName', e.target.value)
      },
      updateUserGender(e) {
        this.$store.commit('updateUserGender', e.target.value)
      },
      updateUserBreed(e) {
        this.$store.commit('updateUserBreed', e.target.value)
      }
    }
  }
</script>
