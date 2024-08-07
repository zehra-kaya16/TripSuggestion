import { createApp } from 'vue';
import App from './homePage.vue';
import vuetify from './plugins/vuetify'; // Vuetify eklentisini oluşturacağız
import 'vuetify/styles'; // Vuetify stillerini dahil edin
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
  .use(vuetify)
  .mount('#app');

  import 'vuetify/styles';
