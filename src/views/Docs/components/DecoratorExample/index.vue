<template>
	<el-card header="@Prop, @Model, @Emit, @Watch, @Provide, @Inject">
		<div>value1: {{ username }}</div>
		<div>value2: {{ password }}</div>
		<div>obj.foo: {{ obj.foo }}</div>
		<div>provideString: <el-input v-model="provideString" /></div>
		<DecoratorChild ref="decorateChild" :propA="1" propB="a123" v-model:obj="obj" v-model:value1="username" v-model:value2="password" @reset="handleReset" :todoProp="todo" />
	</el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Provide, Ref } from 'vue-property-decorator';
import DecoratorChild from './DecoratorChild.vue';
@Options({
	components: {
		DecoratorChild,
	},
})
export default class PropsExample extends Vue {
	todo = { id: 123, content: 'ceshi todo', done: false };
	username = '张三';
	password = '13';
	obj = {
		foo: 'bar',
	};

	// 只响应父组件的修改, 子组件修改没用
	@Provide({ to: 'tototo', reactive: true })
	provideString = 'helloworld';

	handleReset() {
		console.log('🚀 ~ file: index.vue ~ line 23 ~ PropsExample ~ handleReset ~ handleReset');
	}

	@Ref('decorateChild')
	readonly reference!: DecoratorChild;

	@Ref() //refKey 会映射到 $refs, 该 ref 会映射到 decorateChild
	// 如果不写, template ref = 括号内 = this
	// 如果写, template ref = 括号内 可以不等 this
	readonly decorateChild!: DecoratorChild;

	mounted() {
		console.log(this.reference);
		console.log(this.$refs.decorateChild);
		console.log(this.decorateChild);
	}
}
</script>

<style scoped></style>
