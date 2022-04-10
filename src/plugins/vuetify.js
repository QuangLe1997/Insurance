import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: "#7F47FA",
        secondary: "#62D680",
        gray: "#F9F9F9",
        error: "#F52D6A",
      },
    },
  },
});
