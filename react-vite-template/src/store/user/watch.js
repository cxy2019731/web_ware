/*
 * @Author: itmanyong
 * @Date: 2021-04-08 15:23:07
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:26:17
 * @FilePath: \react-vite2-template\src\store\global\watch.js
 */
import { _USER_STORAGE } from '@constant';
import { setToken } from '@utils';
import { defWatch } from 'concent';

export const w_all = defWatch(
	(n, o, f) => {
		if (n.token) {
			setToken(n.token);
		}
		if (n.info.id) {
			localStorage.setItem(_USER_STORAGE, JSON.stringify(n.info));
		}
	},
	['isLogin', 'info'],
);
