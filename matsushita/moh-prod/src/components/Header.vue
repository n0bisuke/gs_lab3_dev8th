<template>
  <nav class="header-nav navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/images/logo-type.svg" alt="Moh" width="112" height="28">
      </a>
      <router-link :to="{ name: 'profileLink' }" tag="a" class="navbar-item profile"></router-link>
      <router-link :to="{ name: 'profileEditLink' }" tag="a" class="navbar-item profile-edit"></router-link>
      <router-link :to="{ name: 'chatListLink' }" tag="a" class="navbar-item chat"></router-link>
      <!--<router-link :to="{ name: 'chatDetailLink' }" tag="a" class="navbar-item"></router-link>-->
    </div>
  </nav>
</template>

<script>

</script>

<style lang="scss" scopped>
  @import "../assets/sass/setting";
  .header-nav {
    background-color: $primaryBgColor;
    .navbar-item {
      color: $linkLightColor;
      &::before {
        display: inline-block;
        font-family: FontAwesome;
      }
      &.chat {
        &::before {
          content: '\f075';
        }
      }
      &.profile-edit {
        &::before {
          content: '\f14b';
        }
      }
      &.profile {
        &::before {
          content: '\f2be';
        }
      }
    }
  }
  @include break-at($widthTab) {
    .header-nav {
      .navbar-item {
        &::before {
          display: inline-block;
          font-family: FontAwesome;
        }
        &.chat {
          &::before {
            content: '\f075';
          }
        }
        &.profile-edit {
          &::before {
            content: '\f14b';
          }
        }
        &.profile {
          &::before {
            content: '\f2be';
          }
        }
      }
    }
  }
</style>
