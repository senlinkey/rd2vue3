import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const STORAGE_KEY = 'rd2vue3-vuex';
export const preserveState = localStorage.getItem(STORAGE_KEY) !== null;

export default createStore({
	plugins: [createPersistedState({ key: 'rd2vue3-vuex' }), createLogger({})],
});
