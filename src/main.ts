import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/index.less';
import 'element-plus/dist/index.css';

createApp(App) //
	.use(ElementPlus, { size: 'small', zIndex: 3000 })
	.use(store)
	.use(router)
	.mount('#app');
