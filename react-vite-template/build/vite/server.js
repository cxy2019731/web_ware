const proxys = [['/base/api', 'http://localhost:9000']];
const httpsRE = /^https:\/\//;

const createViteServer = (list = proxys) => {
	const ret = [];

	for (const [prefix, target] of list) {
		const isHttps = httpsRE.test(target);
		ret[prefix] = {
			target: target,
			changeOrigin: true,
			ws: true,
			rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
			...(isHttps ? { secure: false } : {}),
		};
	}

	const config = {
		port: 9000,
		proxy: ret,
	};

	return config;
};

module.exports = { createViteServer };
