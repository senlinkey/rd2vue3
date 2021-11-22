<template>
	<div>
		<el-button @click="increment">{{ count }}</el-button>
		<el-button @click="decrement">{{ count }}</el-button>
	</div>
</template>

<script lang="ts">
import { Confirm } from '@/decorators/confirm';
import { Vue } from 'vue-class-component';

export default class Home extends Vue {
	count = 0;

	increment() {
		this.count++;
	}

	@Confirm({ cancelButtonText: '我不取消' })
	decrement() {
		this.count--;
	}
}
</script>

<style scoped></style>
