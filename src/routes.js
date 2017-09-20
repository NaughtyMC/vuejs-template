import Hello from './components/Hello';
import List from './components/List';

export default [
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
