import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./styles/overrides.scss";
import { createRouter } from "./router";
/*Video monitoring plug in*/
Vue.config.productionTip = false;
import store from "./store";
const router = createRouter();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
