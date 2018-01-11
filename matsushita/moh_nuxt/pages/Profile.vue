<template>
  <div class="main-content">
    <div class="container">
      <div class="profile-photo">
        <div class="profile-photo__list">
          <carousel :perPage="1" paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize='5' easing="linear">
            <slide v-for="" >
              <img src="http://dummyimage.com/320x320" alt="プロフィール写真">
            </slide>
            <slide>
              <img src="http://dummyimage.com/200x200" alt="プロフィール写真">
            </slide>
            <slide>
              <img src="http://dummyimage.com/200x200" alt="プロフィール写真">
            </slide>
          </carousel>
        </div>
      </div>

      <div class="breed">
        <span class="tag is-primary">柴犬</span>
      </div>
      <div class="profile-info">
        <div class="profile-info__head">
          <span class="name">Tama </span>
          <span class="age">(2歳)</span>
        </div>
        <div class="profile-info__sub">
          <!--<span class="sex">オス</span>-->
          <span class="area">東京都</span>
        </div>
        <hr>
      </div>

      <div class="profile-discription">
        <p>
          性格は、温厚で無駄吠えしません。
        </p>
      </div>


    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    data () {
      return {

      }
    },
    head: {
      title: 'Profile'
    },
    meta: {
      requiresAuth: true
    },
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style lang="scss" scopped>
  @import "../assets/scss/style";
  .profile-photo__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
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
      color: $secondaryColor;
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
  }

</style>
