import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';


new Vue({ // eslint-disable-line no-new
	el: '#app',
	router,
	template: '<App />',
	components: { App },
	store,
});
