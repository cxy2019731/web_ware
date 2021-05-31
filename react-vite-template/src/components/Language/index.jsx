import { GlobalOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { gl, useI18nComputed, sl } from 'cxy-react-i18n';

export default (props) => {
	const i18nComputeds = useI18nComputed('i18nLangKeys');

	const menus = (
		<Menu onClick={({ key }) => sl(key)} selectedKeys={[gl()]}>
			{i18nComputeds.map((item) => (
				<Menu.Item key={item}>{fr(`global.language.${item}`)}</Menu.Item>
			))}
		</Menu>
	);
	return (
		<Dropdown overlay={menus} arrow>
			<GlobalOutlined style={{ color: '#1890ff', cursor: 'pointer' }} />
		</Dropdown>
	);
};
