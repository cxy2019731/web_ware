import { memo } from 'react';

// 模拟下用户的权限组-实际使用需要连接权限状态数据赋值于 currentAuthority 即可
const userRoles = ['ordinary', 'admin2']; //角色key
const userAuths = ['home', 'about', 'list', 'info']; //具体权限key

/**
 * 授权判定
 * @param {object} props 参数
 * 		children?:正常渲染的内容
 * 		authority?:可访问权限组  array | string
 * 		noMatch?:不可访问渲染内容  null | node
 * @returns node | null
 */
function Authorized(props) {
	const { children = null, authority, noMatch = '无权限' } = props;
	const currentAuthority = [...userRoles, ...userAuths];

	if (!authority) return children;

	const __authority = Array.isArray(authority) ? authority : [authority];

	if (__authority.some((i) => currentAuthority.includes(i))) return children;

	return noMatch;
}

export default memo(Authorized);
