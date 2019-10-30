<template lang="html">
  <transition name="mobile-show">
  <nav v-if="showed" class="header__mobile-nav mobile-nav">
    <ul class="mobile-nav__menu">
      <li class="mobile-nav__menu-item">
        <a class="link link--header" href="#">С чего начать</a>
      </li>
      <li class="mobile-nav__menu-item">
        <a class="link link--header" href="#">Инструменты</a>
      </li>
      <li class="mobile-nav__menu-item">
        <a class="link link--header" href="#">Услуги</a>
      </li>
    </ul>
    <button @click="closeMenu" class="close-button mobile-nav__close-button">
    </button>
  </nav>
</transition>
</template>

<script>
export default {
  data() {
    return {
      showed: false,
    };
  },
  props: {
    body: {
      type: HTMLBodyElement,
      require: true,
    },
    mobileButton: {
      type: HTMLButtonElement,
      require: true,
    }
  },
  methods: {
    closeMenu() {
      this.body.classList.toggle('overlay');
      this.body.classList.toggle('overlay--none');
      this.showed ? this.showed = false : this.showed = true;
    }
  },
  mounted() {
    this.mobileButton.addEventListener('click', () => {
      this.showed ? this.showed = false : this.showed = true;
    });
  },
}
</script>

<style lang="scss">
.close-button {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 5%;
    left: 107%;
    border: none;
    background-color: transparent;
    &::before {
        @include pseudo-element;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        top: 50%;
        transform: rotate(45deg);
    }
    &::after {
        @include pseudo-element;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        top: 50%;
        transform: rotate(-45deg);
    }
    &:hover {
        animation: rotateButton 0.5s linear;
    }
}
.mobile-show-enter {
    opacity: 0;
}
.mobile-show-enter-active-to {
    opacity: 1;
}
.mobile-show-leave-active {
    opacity: 0;
}
.mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-color: #ffffff;
    display: block;
    padding-top: 10rem;
    z-index: 10;
    transition: opacity 2s;
}

.mobile-nav__menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mobile-nav__menu-item {
    margin-bottom: 2rem;
}

@keyframes rotateButton {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0);
    }
}
</style>
