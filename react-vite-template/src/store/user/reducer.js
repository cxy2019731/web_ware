/*
 * @Author: itmanyong
 * @Date: 2021-04-08 15:23:07
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:23:07
 * @FilePath: \react-vite2-template\src\store\global\state.js
 */
import { isTokenEffective, removeToken, getToken } from '@utils';
import { _USER_STORAGE } from '@constant';
// 登录
export function login(ply) {
	return {
		isLogin: true,
		token: ply.token || '',
		roles: ply.roles,
		auths: ply.auths,
		info: ply,
	};
}

// 重置
export function resetStatus() {
	return {
		token: '',
		isLogin: false,
		info: {},
		roles: [],
		auths: [],
	};
}

// 初始化
export function init() {
	const info = localStorage.getItem(_USER_STORAGE) || null;
	const isToken = isTokenEffective();
	if (isToken) {
		return {
			info: info ? JSON.parse(info) : {},
			token: getToken(),
			isLogin: true,
		};
	} else {
		removeToken();
		localStorage.removeItem(_USER_STORAGE);
	}
}
