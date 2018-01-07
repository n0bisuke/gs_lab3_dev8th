<template>
  <div class="chat-area">
    <form action="">
      <input type="text" class="required is-flat search">
    </form>
    <ul class="chat-list">
      <li class="chat-info">
        <a href="#">
          <div class="thumb">
            <img src="http://dummyimage.com/120x120" alt="">
          </div>
          <div class="info">
            <p class="name">はち</p>
            <p class="latest-message">Your latest message here</p>
          </div>
        </a>
      </li>
      <li class="chat-info">
        <a href="#">
          <div class="thumb">
            <img src="http://dummyimage.com/120x120" alt="">
          </div>
          <div class="info">
            <p class="name">ポチ</p>
            <p class="latest-message">Your latest message here</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scopped>
  @import "../../assets/scss/style";
  .chat-area {
  }
  .chat-list {
    li {
      border-bottom: 1px solid $borerColor;
      a {
        display: flex;
        padding:.5rem;
        justify-content: flex-start;
        align-items: flex-end;
        &:hover {
          background: $paleGray;
        }
      }
    }
    .thumb {
      img {
        min-width:60px;
        width: 60px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
      }
    }
    .info {
      padding: 0.5rem;
      .name {
        font-weight: 600;
      }
      .latest-message {
        font-size:14px;
        color: $lightGray;
        &::before {
          content: '\f112';
          font-family: FontAwesome;
          display: inline-block;
          margin-right: 0.5rem;
        }
      }
    }

  }
</style>

