import { reactive } from 'vue';
import { Todo } from '@/ts/todo';
import { v4 } from 'uuid';

interface State {
	list: Todo[];
	newTodo: string;
}

export function useTodos() {
	const defaultTodos: Todo[] = [{ id: v4(), content: '写一个', done: false }];
	const todos = JSON.parse(localStorage.getItem('todos')) || defaultTodos;

	const state = reactive<State>({
		newTodo: '',
		list: todos,
	});

	function add() {
		if (state.newTodo) {
			state.list.push({
				id: v4(),
				content: state.newTodo,
				done: false,
			});
			state.newTodo = '';
			save();
		}
	}
	function done(todo: Todo) {
		todo.done = !todo.done;
		save();
	}
	function remove(index: number) {
		state.list.splice(index, 1);
		save();
	}
	function save() {
		localStorage.setItem('todos', JSON.stringify(state.list));
	}

	return {
		state,
		add,
		done,
		remove,
		save,
	};
}
