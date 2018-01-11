<template>
  <form action="">
    <h3 class="title is-5">プロフィール編集</h3>


    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <p v-model="getUser"></p>
        <input class="input" type="text" placeholder="お名前" v-model="user.name">
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
        <input class="input" type="email" placeholder="Email input" value="">
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
      <label class="label">Gender</label>
      <div class="control">
        <div class="select">
          <select>
            <option v-for="gender in genderOptions" v-bind:value="gender.value">{{ gender.text }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Age</label>
      <div class="control">
        <input class="input" type="number" placeholder="" v-model.number="user.age">
      </div>
    </div>

    <div class="field">
      <label class="label"></label>
      <div class="control">
        <textarea class="textarea" v-model="user.description" placeholder="性格など""></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" @click="addNewUser">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
  import { dbUsersRef } from '../../main'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        genderOptions: [
          { text: '男の子', value: 'male' },
          { text: '女の子', value: 'female' }
        ],
        user: {
          'uid': '',
          'name': '',
          'description': '',
          'age': '',
          'gender': '',
          'likes': [
            {
              'likedId': '',
            }
          ]
        }
      }
    },
    computed: {
      ...mapGetters ([
        'gerUser',
        'auth/user'
      ])
    },
    methods: {
      addNewUser() {
        dbUsersRef.push(this.user)
        this.user = {}
      }
    }
  }
</script>
