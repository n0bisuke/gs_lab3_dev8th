<template>
  <div class="profile-wrap">
    <div class="profile-photo-slide">
      <carousel :perPage="1" paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize='5' easing="linear">
        <slide v-for="" >
          <img src="http://dummyimage.com/200x200" alt="プロフィール写真">
        </slide>
        <slide>
          <img src="" alt="プロフィール写真">
        </slide>
        <slide>
          <img src="http://dummyimage.com/200x200" alt="プロフィール写真">
        </slide>
      </carousel>
    </div>
    <div class="breed">
      <span class="tag is-primary is-rounded">柴犬</span>
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
        }
      }
   },
    computed: {
      ...mapGetters ([
          'user'
      ])
    },
    components: {
      Carousel,
      Slide
    }
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
  }
</style>
