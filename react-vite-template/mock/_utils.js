/**
 * 生成guid
 * @returns string
 */
export function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
/**
 * 当前时间戳
 * @returns number
 */
export function nowDateTime() {
	return new Date().getTime();
}

/**
 * 深拷贝
 * @param {any} target 拷贝的对象
 * @returns any
 */
export function deepClone(target) {
	// 定义一个变量
	let result;
	// 如果当前需要深拷贝的是一个对象的话
	if (typeof target === 'object') {
		// 如果是一个数组的话
		if (Array.isArray(target)) {
			result = []; // 将result赋值为一个数组，并且执行遍历
			for (let i in target) {
				// 递归克隆数组中的每一项
				result.push(deepClone(target[i]));
			}
			// 判断如果当前的值是null的话；直接赋值为null
		} else if (target === null) {
			result = null;
			// 判断如果当前的值是一个RegExp对象的话，直接赋值
		} else if (target.constructor === RegExp) {
			result = target;
		} else {
			// 否则是普通对象，直接for in循环，递归赋值对象的所有值
			result = {};
			for (let i in target) {
				result[i] = deepClone(target[i]);
			}
		}
		// 如果不是对象的话，就是基本数据类型，那么直接赋值
	} else {
		result = target;
	}
	// 返回最终结果
	return result;
}

/**
 * 生成多个数据
 * @param {number} num 个数
 * @param {object} instance 单个实例对象
 */
export function generateArr(num = 100, instance) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push({
			id: guid(),
			createDate: nowDateTime(),
			updateDate: nowDateTime(),
			...instance,
		});
	}
	return arr;
}
/**
 * 成功返回
 * @param {array|object} result 数据
 * @returns object
 */
 export function renderSuccess(result = null) {
	return {
		code: 0,
		message: `ok`,
		data: result,
	};
}
/**
 * 失败返回
 * @param {array|object} result 数据
 * @returns object
 */
export function renderError(message = '') {
	return {
		code: 1,
		message: message,
		data: null,
	};
}