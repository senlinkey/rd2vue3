<template>
	<el-card header="@props, @propsSync">
		<div>value1: {{ username }}</div>
		<div>value2: {{ password }}</div>
		<PropsChild :propA="1" propB="a123" v-model:value1="username" v-model:value2="password" />
	</el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PropsChild from './PropsChild.vue';

@Options({
	components: {
		PropsChild,
	},
})
export default class PropsExample extends Vue {
	username = '张三';
	password = '13';
}
</script>

<style scoped></style>
