<template>
	<div class="home__layout">
		<el-button @click="increment">{{ count }}</el-button>
		<el-button @click="decrement">{{ count }}</el-button>
		<Example ref="example1" />
		<Example />
	</div>
</template>

<script lang="ts">
import { Confirm } from '@/decorators/confirm';
import { Options, Vue } from 'vue-class-component';
import { Ref } from 'vue-property-decorator';
import Example from '@/components/Example/index.vue';

@Options({
	components: { Example },
})
export default class Home extends Vue {
	private count = 0;

	@Ref()
	example1: Example;

	mounted() {
		console.log(this.example1);
	}

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
