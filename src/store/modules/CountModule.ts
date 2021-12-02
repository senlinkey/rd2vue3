import { VuexModule, Action, Mutation, Module, getModule } from 'vuex-module-decorators';
import store from '../index';
import { Confirm } from '@/decorators/confirm';

interface State {
	value: number;
	loading: boolean;
}

@Module({
	namespaced: true,
	name: 'count',
	dynamic: true,
	store,
})
class CountModule extends VuexModule implements State {
	value = 0;
	loading = false;

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
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(5);
				this.context.commit('setLoading', false);
			}, 2e3);
		});
	}

	get doubleValue() {
		return this.value * 2;
	}
}

export default getModule<CountModule>(CountModule);
