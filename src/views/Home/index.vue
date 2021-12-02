<template>
	<div class="home__layout">
		<el-button @click="increment">{{ count }}</el-button>
		<el-button @click="decrement">{{ count }}</el-button>

		<el-card>
			<el-button @click="countModule.increment(2)">加({{ countModule.value }})</el-button>
			<el-button @click="countModule.decrement(1)">减({{ countModule.value }})</el-button>
		</el-card>

		<Count />
	</div>
</template>

<script lang="ts">
import { Confirm } from '@/decorators/confirm';
import { Options, Vue } from 'vue-class-component';
import CountModule from '@/store/modules/CountModule';
import Count from '@/components/Count/index.vue';

@Options({
	components: { Count },
})
export default class Home extends Vue {
	count = 0;
	countModule = CountModule;

	increment() {
		this.count++;
	}

	@Confirm({ cancelButtonText: 'Cancel' })
	decrement() {
		this.count--;
	}

	// beforeRouteEnter(to, from, next) {
	// 	console.log('🚀 ~ file: index.vue ~ line 25 ~ Home ~ beforeRouteEnter ~ to', to);
	// 	next();
	// }
}
</script>
