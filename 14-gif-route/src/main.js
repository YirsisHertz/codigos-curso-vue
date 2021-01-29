import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// Importaciones de Vue-AXIOS
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
