<template>
	<div>
		<PrismEditor v-model="code" :highlight="highlighter" line-numbers />
		<div>
			<span>value1: </span>
			<el-input :model-value="value1" @input="handleChange"> </el-input>
		</div>
		<div>
			<span>value2: </span>
			<el-input v-model="value2value"> </el-input>
			<el-button @click="handleResect">reset</el-button>
		</div>
	</div>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop, Model } from 'vue-property-decorator';
import { PrismEditor } from 'vue-prism-editor';

import prismjs from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css';

@Options({
	components: {
		PrismEditor,
	},
})
export default class PropsChild extends Vue {
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
