<template>
	<el-card style="margin-top: 20px">
		<el-button @click="countModule.increment(2)">加({{ countModule.value }})</el-button>
		<el-button @click="countModule.asyncDecrement()" :loading="countModule.loading">减({{ countModule.value }})</el-button>
	</el-card>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import CountModule from '@/store/modules/CountModule';

export default class Count extends Vue {
	countModule = CountModule;

	mounted() {
		this.countModule.doubleValue;
		console.log('🚀 ~ file: index.vue ~ line 17 ~ Count ~ mounted ~ this.countModule.doubleValue', this.countModule.doubleValue);
	}
}
</script>

<style scoped></style>
