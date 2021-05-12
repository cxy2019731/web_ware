const createViteServer = () => {
	const config = {
		port: 9000,
		proxy: {
			'/api': {
				target: 'http://192.168.0.127:8080',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	};

	return config;
};

module.exports = { createViteServer };
