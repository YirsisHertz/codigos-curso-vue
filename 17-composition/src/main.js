import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(VueAxios, axios)
  .mount("#app");
