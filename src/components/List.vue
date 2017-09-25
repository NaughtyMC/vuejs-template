<template>
	<div>
		<h1>My To Do List</h1>
		<br />
		<input v-model="newItem" >
		<button id="add-button" @click="addItemToList">Add</button>
		<ul>
			<li v-for="task in tasks" :key="task.index">{{ task }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'test',
	data() {
		return {
			tasks: this.$store.state.tasks,
			newItem: '',
		};
	},
	methods: {
		addItemToList() {
			this.$store.dispatch('addTask', this.newItem).then(() => {
				this.newItem = '';
			});
		},
	},
};
</script>
