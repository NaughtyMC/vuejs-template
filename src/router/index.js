import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '../components/Hello';
import List from '../components/List';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Hello',
		component: Hello,
	},
	{
		path: '/to-do',
		name: 'ToDo',
		component: List,
	},
];

/* eslint-disable no-new */
export default new VueRouter({
	routes,
});
