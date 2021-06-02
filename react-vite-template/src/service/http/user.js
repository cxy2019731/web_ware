/*
 * @Author: itmanyong
 * @Date: 2021-04-08 15:07:28
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:10:13
 * @FilePath: \react-vite2-template\src\service\http\user.js
 */
import request from '@request';
import { PROFIX_USER } from '@/service/prefix';
import cr from '@/base/cc_reducer';
import { _USER } from '@constant';
/**
 * 接口
 */
export const USER_LOGIN = `${PROFIX_USER}login`;

/**
 * 登录
 */
export async function httpLogin({ userName, passWord }) {
	const { code, data } = await request({
		url: USER_LOGIN,
		method: `POST`,
		data: { userName, passWord },
	});
	if (!code) {
		cr[_USER].login(data);
		return true;
	} else {
		return false;
	}
}
