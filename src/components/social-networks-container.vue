<template>
<li class="footer__contacts-item footer__contacts-item--social">
  <ul class="social-networks">
    <social_network v-for="(net, index) in nets" :key="index" :name="net" :param="params[net]" />
  </ul>
</li>
</template>
<script>
import social_network from './social-network.vue';
export default {
  components: {
    social_network,
  },
  data() {
    return {
      nets: ['vk', 'facebook', 'twiter', 'youtube', 'slack', 'rss'],
      params: {
        vk: {
          width: '22px',
          height: '22px',
        },
        facebook: {
          width: '10px',
          height: '19px',
        },
        twiter: {
          width: '19px',
          height: '15px',
        },
        youtube: {
          width: '18px',
          height: '13px',
        },
        slack: {
          width: '18px',
          height: '18px',
        },
        rss: {
          width: '16px',
          height: '16px',
        }
      },
    };
  },
};
</script>

<style lang="scss">
.social-networks {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(min-width: $tablet-width) {
        width: 60%;
        margin: 0 auto;
    }
    @media(min-width: $desktop-width) {
        width: 100%;
        margin: 0;
        align-self: center;
    }
}

.social-networks__link {
    display: block;
    margin: 0 auto;
}

.social-networks__item {
    min-width: 30px;
    align-self: center;
}

.social-networks__icon {
    margin: 0 auto;
    display: block;
}
</style>
