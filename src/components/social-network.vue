<template>
<li class="social-networks__item" :class="className">
  <a class="social-networks__link" href="#">
    <svg class="social-networks__icon" :class="classNameIcon" :width="param.width" :height="param.height">
      <use :xlink:href="`#${name}`" />
    </svg>
  </a>
</li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      require: true,
      default: 'vk',
    },
    param: {
      type: Object,
      require: true,
      default: {
        width: '22px',
        height: '22px',
      }
    }
  },
  computed: {
    className() {
      return `social-networks__item--${this.name}`;
    },
    classNameIcon() {
      return `social-networks__icon--${this.name}`;
    }
  },
};
</script>

<style lang="scss">
.social-networks__link {
    fill: white;
    transition: fill 0.5s;

    &:hover {
        fill: #00B3FF;
    }
}
</style>
