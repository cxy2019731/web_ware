import * as dom_utils from "./dom";
/**
 * 获取当前环境变量-默认只有 开发=development 生产=development
 * @returns string
 */
function getEnv() {
	return process.env.NODE_ENV;
}

/**
 * 延迟函数
 * @param {number} ms 毫秒数
 * @returns true
 */
function delay(ms = 1000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

export default {
	getEnv,
	delay,
	...dom_utils
};
