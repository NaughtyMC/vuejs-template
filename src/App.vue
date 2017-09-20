<template>
	<div id="app">
		<img v-bind:src="logo" />
		<router-view></router-view>
	</div>
</template>

<script>
import '../styles/main.css';
import logo from '../src/assets/logo.png';

export default {
	name: 'app',
	data() {
		return {
			logo,
		};
	},
};
</script>
