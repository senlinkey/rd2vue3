<template>
	<div style="width: 660px; margin: 20px auto">
		<el-card shadow="never" :body-style="{ padding: '20px' }">
			<template #header>
				<span>TODO APP</span>
			</template>

			<el-form label-position="top" @submit.prevent>
				<el-form-item label="New Todo">
					<el-input v-model="todos.state.newTodo" @keyup.enter="todos.add"></el-input>
				</el-form-item>

				<el-form-item label="">
					<el-button type="primary" @click="todos.add" style="width: 100%">Add Todo</el-button>
				</el-form-item>

				<el-form-item label="Todo List" v-if="todos.state.list.length">
					<div v-for="(todo, index) in todos.state.list" :key="todo.id">
						<el-divider></el-divider>
						<div style="display: flex">
							<p style="flex: 1">{{ todo.content }}</p>
							<el-button type="primary" @click="todos.remove(index)">remove</el-button>
						</div>
					</div>
					<el-divider></el-divider>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script lang="ts">
import { Vue, setup } from 'vue-class-component';
import { useTodos } from '@/composables/use-todos';

export default class Todos extends Vue {
	todos = setup(() => useTodos());
}
</script>

<style scoped></style>
