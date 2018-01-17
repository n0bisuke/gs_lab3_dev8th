<template>
  <div class="profile-wrap">
    <div class="profile-photo-slide">
      <carousel :perPage="1" paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize='5' easing="linear">
        <slide v-for="" >
          <img src="../../assets/images/dog01.png" alt="プロフィール写真">
        </slide>
        <slide>
          <img src="../../assets/images/dog02.jpg" alt="プロフィール写真">
        </slide>
        <slide>
          <img src="../../assets/images/dog03.jpg" alt="プロフィール写真">
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
