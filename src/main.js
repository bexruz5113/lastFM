import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.filter("pipe", function (value) {
  if (value) {
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    return "";
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
