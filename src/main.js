import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import fontawesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import config so we can set a default style
import { config } from "@fortawesome/fontawesome-svg-core";


// set the default style
config.styleDefault = "duotone";


// add FontAwesomeIcon to the Vue component
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
