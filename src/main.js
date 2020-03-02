import KeenUI from "keen-ui";
import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "keen-ui/dist/keen-ui.css";

Vue.config.productionTip = false;
Vue.use(KeenUI);

new Vue({
  render: h => h(App),
  components: {}
}).$mount("#app");
