<template>
	<el-row :gutter="10">
		<el-col :span="12" v-for="item in list" :key="item">
			<component :is="item"></component>
		</el-col>
	</el-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PropsExample from './components/PropsExample/index.vue';

@Options({
	components: {
		PropsExample,
	},
})
export default class Docs extends Vue {
	list: string[] = ['PropsExample'];
}
</script>

<style scoped></style>
