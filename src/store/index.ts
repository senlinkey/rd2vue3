import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
	plugins: [createPersistedState({ key: 'rd2vue3-vuex' }), createLogger({})],
});
