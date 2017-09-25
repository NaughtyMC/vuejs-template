import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tasks: ['buy food', 'play games', 'sleep'],
	},
	mutations: {
		addTask(state, payload) {
			state.tasks.push(payload);
		},
	},
	actions: {
		addTask(context, payload) {
			return new Promise((resolve) => {
				context.commit('addTask', payload);
				resolve();
			});
		},
	},
});
