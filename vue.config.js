module.exports = {
	lintOnSave: false,
	devServer: {
		quiet: true,
		clientLogLevel: 'none',
		port: 3000,
		open: true,
		hot: true,
		overlay: {
			warnings: false,
			errors: false,
		},
	},
};
