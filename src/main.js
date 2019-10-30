import style from './scss/style.scss';
import sprite from './img/sprite.svg';
import computer from './img/computer.png';
import webps from './img/computer.webp';
import Vue from 'vue';
import App from './components/social-networks-container.vue';
import mobile_nav from './components/mobile_nav.vue';


const mobileButton = document.querySelector('.user-navigation__mobile-button');
const body = document.querySelector('body');
const briefs = document.querySelectorAll('.brief');

mobileButton.addEventListener('click', () => {
  body.classList.toggle('overlay');
  body.classList.toggle('overlay--none');
});

briefs.forEach(brief => {
  brief.addEventListener('click', (evt)=> {
    evt.preventDefault();
    //тут должно появляться модальное окно с неким брифом
    //не успел его изобразить
  });
});

const socialNets = new Vue ({
  el: '.footer__contacts-item--social-networks',
  render: h => h(App),
});

const mobNav = new Vue ({
  el: '#mobile-nav',
  render: h => h(mobile_nav, {
    props: {
      mobileButton,
      body,
    },
  }),
});
