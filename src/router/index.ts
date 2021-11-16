import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/todos',
		name: 'Todos',
		// route level code-splitting
		// this generates a separate chunk (todos.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "todos" */ '@/views/Todos.vue'),
	},
	{
		path: '/docs',
		name: 'Docs',
		component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
