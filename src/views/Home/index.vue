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

	@Confirm({ cancelButtonText: 'Cancel' })
	decrement() {
		this.count--;
	}

	beforeRouteEnter(to, from, next) {
		console.log('🚀 ~ file: index.vue ~ line 25 ~ Home ~ beforeRouteEnter ~ to', to);
		next();
	}
}
</script>

<style scoped></style>
