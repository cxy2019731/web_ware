import { cst, useConcent } from 'concent';
/**
 * 只使用setup不绑定模块
 * @param {function} setup 注册机
 * @param {object} options 其他属性,同useConcent
 * @returns object
 */
export default function useSetup(setup, options = {}) {
	const { settings } = useConcent({ setup, module: cst.MODULE_DEFAULT, ...options });
	return settings;
}
