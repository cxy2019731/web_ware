import { generateArr,renderSuccess,renderError } from '../_utils';

const tableName = `user`;

const tableData = [
	{
		userName: `admin`,
		passWord: `admin123`,
		userNick: `超管`,
		roles: ['superAdministrator'],
		auths: [],
		email: 'itmanyong@gmail.com',
		note: '超级管理员账号,无所不能',
		enable: true,
		department: '',
	},
	...generateArr(15, {
		userName: `@string(6,18)`,
		passWord: `@string(6,18)`,
		userNick: `@cname(2,6)`,
		enable: false,
		department: '',
		auths: [],
		email: '@email',
		'roles|1-2': ['ordinary', 'test'],
		'note|0-50': '@word',
	}),
];

export default [
	// 获取
	{
		url: `/${tableName}/get`,
		method: `GET`,
		timeout: 1500,
		statusCode: 200,
		response: ({ query }) => {
			const nowItem = tableData.find((l) => l.id === query.id);
			if (nowItem) {
				return renderSuccess(nowItem);
			} else {
				return renderError(`未找到相关信息`);
			}
		},
	},
	// 分页
	{
		url: `/${tableName}/page`,
		method: `GET`,
		timeout: 1500,
		statusCode: 200,
		response: ({ query }) => {
			const { current, pageSize } = query;
			const nowItem = deepClone(tableData).slice(current * (pageSize - 1) + 1, current * pageSize + 1);
			return renderSuccess({
				list: nowItem || [],
				total: nowItem.length || 0,
				current,
				pageSize,
			});
		},
	},
	// 登录
	{
		url: `/${tableName}/login`,
		method: `POST`,
		timeout: 1500,
		statusCode: 201,
		response: ({ body }) => {
			console.log(body);
			return renderSuccess({a:6});
		},
	},
];
