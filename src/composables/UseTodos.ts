import { reactive, watch } from 'vue';
import { Todo } from '@/ts/Todo.ts';
import { v4 } from 'uuid';

interface State {
	list: Todo[];
	newTodo: string;
}

export function useTodos() {
	const defaultTodos: Todo[] = [{ id: v4(), content: '写一个?', done: false }];
	const todos = JSON.parse(localStorage.getItem('todos')) || defaultTodos;

	const state = reactive<State>({ newTodo: '', list: reactive(todos) });

	function add() {
		if (state.newTodo) {
			state.list.push({ id: v4(), content: state.newTodo, done: false });
			state.newTodo = '';
		}
	}

	function done(todo: Todo) {
		todo.done = !todo.done;
	}

	function remove(index: number) {
		state.list.splice(index, 1);
	}

	function save() {
		console.log('🚀 ~ file: UseTodos.ts ~ line 42 ~ save ~ state.list', state.list);
		localStorage.setItem('todos', JSON.stringify(state.list));
	}

	watch(state.list, save);

	return { state, add, done, remove, save };
}
