import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as ElementPlusIcon from '@element-plus/icons';

import '@/hooks/class-component-hooks';

import App from './App/index.vue';
import router from './router';
import store from './store';

import '@/styles/index.less';
import 'element-plus/dist/index.css';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

const app = createApp(App);

// element-plus icon
Object.keys(ElementPlusIcon).map((key) => {
	// @ts-ignore
	app.component(ElementPlusIcon[key].name, ElementPlusIcon[key]);
});

app.use(ElementPlus, { size: 'small', zIndex: 3000 }).use(store).use(router).mount('#app');
