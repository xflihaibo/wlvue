import {createApp} from 'vue';
import router from './router';
import App from './app.vue';
import 'element-plus/dist/index.css';
import installElementPlus from '@/plugins/element';
import '@/css/normalize.css';
import '@/css/tool.scss';

const app = createApp(App);
app.use(installElementPlus)
app.use(router);
app.mount('#app');

