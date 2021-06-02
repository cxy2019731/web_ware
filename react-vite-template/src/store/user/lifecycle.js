/*
 * @Author: itmanyong
 * @Date: 2021-04-08 15:24:50
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 15:29:50
 * @FilePath: \react-vite2-template\src\store\global\lifecycle.js
 */
import { init } from './reducer';
const lifecycle = {
	initState() {},
	initStateDone() {},
	loaded(dispatch, ms) {
		dispatch(init);
	},
	mounted() {},
	willUnmount() {},
};
export default lifecycle;
