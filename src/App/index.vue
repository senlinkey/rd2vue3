<template>
	<el-container class="layout__wrapper">
		<el-aside class="layout__aside" width="200px">
			<el-menu :default-active="$route.name" text-color="#fff" active-text-color="#f60" background-color="#545c64" router>
				<el-menu-item index="Home" :route="{ name: 'Home' }">
					<el-icon>
						<home-filled />
					</el-icon>
					<span>主页</span>
				</el-menu-item>
				<el-menu-item index="Todos" :route="{ name: 'Todos' }">
					<el-icon>
						<list />
					</el-icon>
					<span>TODO</span>
				</el-menu-item>

				<el-menu-item index="Docs" :route="{ name: 'Docs' }">
					<el-icon>
						<document />
					</el-icon>
					<span>文档</span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-main class="layout__content">
			<router-view v-slot="{ Component }">
				<transition name="fade-transform" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</el-main>
	</el-container>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
export default class App extends Vue {}
</script>

<style src="./index.less" lang="less" scoped />
