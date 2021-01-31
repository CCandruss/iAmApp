import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

Vue.config.productionTip = false

extend('required', {
  ...required,
  message: 'This field is required'
});

new Vue({
  el: '#app',
  components: {
    ValidationProvider
  },
  data: () => ({
    value: ''
  }),
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
