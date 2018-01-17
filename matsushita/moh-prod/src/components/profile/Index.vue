<template>
  <div class="profile-wrap">
    <div class="profile-photo-slide">
      <carousel :perPage="1" paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize='5' easing="linear">
        <slide>
          <img v-if="getUser.photoUrl1" v-bind:src="getUser.photoUrl1" alt="プロフィール写真">
          <img v-else src="http://placehold.jp/24/cccccc/ffffff/500x500.png?text=placehold.jp">
        </slide>
        <slide v-if="getUser.photoUrl2">
          <img v-bind:src="getUser.photoUrl2" alt="プロフィール写真">
        </slide>
        <slide v-if="getUser.photoUrl3">
          <img v-bind:src="getUser.photoUrl3" alt="プロフィール写真">
        </slide>
      </carousel>
    </div>
    <div class="breed">
      <span class="tag is-primary is-rounded">{{ getUser.breed }}</span>
    </div>
    <div class="profile-info">
      <div class="profile-info__head">
        <span class="name">{{ getUser.displayName }}</span>
        <span class="age">({{ getUser.age }}歳)</span>
        <span class="gender">{{ setGender }}</span>
      </div>
      <div class="profile-info__sub">
        <!--<span class="sex">オス</span>-->
        <span class="area">東京都</span>
      </div>
      <hr>
    </div>

    <div class="profile-discription">
      <p>{{ getUser.description }}</p>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        profile: {
          images: {
            imageUrl: 'http://dummyimage.com/200x140'
          }
        },
        gender: ''
      }
    },
    computed: {
      ...mapGetters ([
        'user',
        'getUser'
      ]),
      setGender() {
        if(this.getUser.gender == 'male') {
          return '男の子'
        } else {
          return '女の子'
        }
      }
    },
    components: {
      Carousel,
      Slide
    },

  }
</script>
<style lang="scss">
  @import "../../assets/sass/setting";
  .profile-photo-slide {
    max-width: $widthTab;
    margin: 0 auto;
  }
  .VueCarousel-slide {
    img {
      width: 100%;
    }
  }
  .profile-info {
    padding: 0 0.5rem;
    text-align: center;
    .name {
      font-size: 20px;
    }
  }
  .profile-info__sub {
    .area {
      font-size:12px;
    }
  }
  .profile-discription {
    padding:.5rem;
  }
  .VueCarousel-pagination {
    position: absolute;
    bottom: 10px;
  }
  .breed {
    text-align: center;
    margin-bottom:.5rem;
  }
</style>
