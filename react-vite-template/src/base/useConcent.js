/**
 * 用户绑定函数组件和模块
 */
import { useConcent as useC2Module, cst } from 'concent';

export default function useConcent(options) {
	return useC2Module({ module: cst.MODULE_DEFAULT, ...options });
}
