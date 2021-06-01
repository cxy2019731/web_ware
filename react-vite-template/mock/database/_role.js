import { guid, nowDateTime, renderSuccess, renderError } from '../_utils';

const tableName = `role`;

const tableData = [
	{
		id: guid(),
		createDate: nowDateTime(),
		updateDate: nowDateTime(),
		name: `超级管理员`,
		key: `superAdministrator`,
		auths: [],
	},
	{
		id: guid(),
		createDate: nowDateTime(),
		updateDate: nowDateTime(),
		name: `普通账号`,
		key: `ordinary`,
		auths: [],
	},
	{
		id: guid(),
		createDate: nowDateTime(),
		updateDate: nowDateTime(),
		name: `测试账号`,
		key: `test`,
		auths: [],
	},
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
];
