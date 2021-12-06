import { Action, getModule, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import store, { preserveState } from '../index';

interface State {
	value: number;
	loading: boolean;
	user: {
		username: string;
		age: number;
	};
}

@Module({ store, preserveState, namespaced: true, name: 'count', dynamic: true })
class ExampleModule extends VuexModule implements State {
	value = 0;
	loading = false;
	user = { username: '', age: -1 };

	@Mutation
	public increment(delta = 1) {
		this.value += delta;
	}

	@Mutation
	public setLoading(delta: boolean) {
		this.loading = delta;
	}

	@Mutation
	public decrement(delta = 1) {
		this.value -= delta;
	}

	@Action({ commit: 'increment' })
	public asyncIncrement() {
		return 5;
	}

	@Action({ commit: 'decrement' })
	public asyncDecrement(): Promise<number> {
		this.context.commit('setLoading', true);
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(5);
				this.context.commit('setLoading', false);
			}, 2e3);
		});
	}

	@MutationAction({ mutate: ['user'] })
	public asyncUpdateUser(): Promise<{ user: State['user'] }> {
		return Promise.resolve({
			user: {
				username: Math.random() > 0.5 ? '迪丽热巴' : '古力娜扎',
				age: parseInt((Math.random() * 100).toString()),
			},
		});
	}

	@MutationAction({ mutate: ['user'] })
	public async asyncUpdateUser2(): Promise<{ user: State['user'] }> {
		return {
			user: {
				username: Math.random() > 0.5 ? '迪丽热巴' : '古力娜扎',
				age: parseInt((Math.random() * 100).toString()),
			},
		};
	}

	get doubleValue() {
		return this.value * 2;
	}
}

export default getModule<ExampleModule>(ExampleModule);
