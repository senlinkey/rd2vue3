<template>
	<div>
		<PrismEditor v-model="code" :highlight="highlighter" line-numbers />

		<el-row :gutter="10" align="middle">
			<el-col :span="4">value:1</el-col>
			<el-col :span="16">
				<el-input :model-value="value1" @input="handleChange"> </el-input>
			</el-col>
		</el-row>

		<el-row :gutter="10" style="margin-top: 10px" align="middle">
			<el-col :span="4"> value2: </el-col>
			<el-col :span="16">
				<el-input v-model="value2value"> </el-input>
			</el-col>
			<el-col :span="4">
				<el-button @click="handleResect">reset</el-button>
			</el-col>
		</el-row>
		<el-row :gutter="10" style="margin-top: 10px" align="middle">
			<el-col :span="4"> obj: </el-col>
			<el-col :span="16">
				<el-input v-model="obj1.foo"> </el-input>
			</el-col>
		</el-row>
		<el-row :gutter="10" style="margin-top: 10px" align="middle">
			<el-col :span="4"> injectString: </el-col>
			<el-col :span="16">
				{{ injectString }}
			</el-col>
		</el-row>
		<el-row :gutter="10" style="margin-top: 10px" align="middle">
			<el-col :span="4"> todoProp: </el-col>
			<el-col :span="16">
				{{ todoProp }}
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop, Model, Inject, Watch } from 'vue-property-decorator';
import { PrismEditor } from 'vue-prism-editor';

import prismjs from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css';
import { Todo } from '@/ts/todo';
import { PropType } from 'vue';

@Options({
	components: {
		PrismEditor,
	},
})
export default class DecoratorChild extends Vue {
	// TIPS: propA: { type: Number }
	@Prop() readonly propA!: number;

	// TIPS: propB: { type: String, default: 'default value' }
	// 使用 reflect-metada 不支持  readonly propB!: string = 'default value'
	// 注解响应 vue, 下面响应ts
	@Prop({
		type: String,
		default: 'default value',
		validator(value: string) {
			return value.includes('a');
		},
	})
	readonly propB!: number;

	// @Model('username', { type: String, required: true })
	// syncedUsername!: string;
	@Prop({ type: String, required: true })
	value1!: string;

	@Emit('update:value1')
	handleChange(value) {
		return value;
	}

	@Model('value2', { type: String, required: true })
	value2value!: string;

	@Emit('reset')
	handleResect() {
		this.value2value = '';
	}

	@Model('obj', { type: Object, required: true })
	obj1: { [key: string]: string };

	// @Watch('obj.foo') // 直接监听对象会有问题
	@Watch('obj.foo', { deep: true })
	// @Watch('value1') //同时监听多个也是OK的
	watchValue1(value, oldValue) {
		console.log(value, oldValue);
	}

	@Inject({ from: 'tototo', default: 'yahaha' })
	injectString: string;

	@Prop({ type: Object as PropType<Todo>, required: true })
	readonly todoProp: Todo;

	mounted() {
		console.log(this.todoProp.id);
	}

	code = `
@Prop
readonly propA: number; ${this.propA}

@Prop({
	type: String,
	default: 'default value',
	validator(value) {
		return value.includes('a');
	},
})
readonly propB!: string; ${this.propB}

`;

	highlighter(code) {
		// @ts-ignore
		return prismjs.highlight(code, prismjs.languages.js);
	}
}
</script>

<style scoped></style>
