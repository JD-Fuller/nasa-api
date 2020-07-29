import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuePositionSticky from 'vue-position-sticky'

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuePositionSticky,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
