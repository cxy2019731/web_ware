import legacy from '@vitejs/plugin-legacy';

module.exports = () =>
	legacy({
		targets: ['defaults', 'not IE 11'],
	});
