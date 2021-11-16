<template>
	<el-container class="layout__wrapper">
		<el-aside class="layout__aside" width="200px">
			<el-menu default-active="home" text-color="#fff" active-text-color="#f60" background-color="#545c64" router>
				<el-menu-item index="/" :route="{ name: 'Home' }">
					<el-icon><setting /></el-icon>
					<span>主页</span>
				</el-menu-item>

				<el-menu-item index="/todos" :route="{ name: 'Todos' }">
					<el-icon><setting /></el-icon>
					<span>TODO</span>
				</el-menu-item>

				<el-menu-item index="/docs" :route="{ name: 'Docs' }">
					<el-icon><setting /></el-icon>
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

<style lang="less" scoped>
.layout {
	&__wrapper {
		width: 100vw;
		height: 100vh;
	}

	&__aside {
		background-color: #545c64;
		.el-menu {
			border-right: none;
		}
	}
	&__content {
		background-color: #f3f5f7;
		overflow-x: hidden;
		overflow-y: scroll;
	}
}
</style>
