<template>
	<el-card style="margin-top: 20px">
		<el-row :gutter="10">
			<el-col :span="6">
				<el-button @click="exampleModule.increment(2)">加({{ exampleModule.value }})</el-button>
				<el-button @click="exampleModule.asyncDecrement()" :loading="exampleModule.loading">减({{ exampleModule.value }})</el-button>
			</el-col>
			<el-col :span="12">
				<el-button>{{ exampleModule.user }}</el-button>
				<el-button @click="exampleModule.asyncUpdateUser()" type="primary">update user</el-button>
				<el-button @click="exampleModule.asyncUpdateUser2()" type="primary">update user 2</el-button>
			</el-col>
		</el-row>
	</el-card>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import ExampleModule from '@/store/modules/ExampleModule';

export default class Count extends Vue {
	private readonly exampleModule = ExampleModule;
}
</script>

<style scoped></style>
