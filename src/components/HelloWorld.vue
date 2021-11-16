<template>
	<div>
		<el-alert>{{ message }}</el-alert>
		<el-button @click="onClick">{{ syncedStr }}</el-button>
	</div>
</template>

<script lang="ts">
// can use reflect-metadata
import { Prop, PropSync } from 'vue-property-decorator';
import { Vue } from 'vue-class-component';
import { v4 } from 'uuid';
export default class HelloWorld extends Vue {
	@Prop()
	readonly message!: string;

	@PropSync('str', { type: String })
	syncedStr: string;

	onClick() {
		this.syncedStr = v4();
	}
}
</script>
