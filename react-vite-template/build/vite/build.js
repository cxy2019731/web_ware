const createViteBuild = () => {
	const config = {
		target: 'es2015',
		outDir: 'dist',
		terserOptions: {
			compress: {
				keep_infinity: true,
				// 生产环境删除打印
				drop_console: true,
			},
		},
		brotliSize: false,
		chunkSizeWarningLimit: 2000,
	};

	return config;
};
module.exports = { createViteBuild };
