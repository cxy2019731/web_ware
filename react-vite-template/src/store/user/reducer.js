/*
 * @Author: itmanyong
 * @Date: 2021-04-08 15:23:07
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:23:07
 * @FilePath: \react-vite2-template\src\store\global\state.js
 */
import { setToken, getToken } from '@utils';
import { httpLogin } from '@http';
// 登录
export async function login({ username, password }) {
	const res =await httpLogin({ username, password });
	console.log(res)
	// setToken({ username, password });
	// return {
	// 	isLogin: true,
	// };
}
// 获取用户信息
export async function getUserInfo() {
	await new Promise((res, rej) => {
		setTimeout(() => {
			res(true);
		}, 1000);
	});
	return {
		info: { ...getToken(true) },
		initStatus: true,
	};
}
