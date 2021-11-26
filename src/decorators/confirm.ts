import { ElMessageBox, ElMessage } from 'element-plus';
import { createDecorator } from 'vue-class-component';
export function Confirm({ cancelButtonText = '取消' }) {
	return createDecorator((options, key) => {
		const originalMethod = options.methods[key];
		options.methods[key] = function wrapperMethod(...args) {
			ElMessageBox.confirm('继续?', 'Warning', {
				confirmButtonText: '确认',
				cancelButtonText,
				type: 'warning',
			})
				.then(() => originalMethod.apply(this, args))
				.catch(() => ElMessage({ type: 'info', message: '已取消' }));
		};
	});
}
