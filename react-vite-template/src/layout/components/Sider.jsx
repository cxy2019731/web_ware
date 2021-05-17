import useConcent from 'useConcent';
import FontIcon from 'FontIcon';
import { _SETTINGS, _GLOBAL } from 'cstMod';
import { v4 as uuidV4 } from 'uuid';
import { useMemo, memo, useRef } from 'react';
import { Menu } from 'antd';
import './style.scss';
import PerfectScrollbar from 'perfect-scrollbar';
const { SubMenu } = Menu;

function setup(ctx) {
	const { setState: st } = ctx;
	ctx.initState({});
	return {};
}

function Sider(props) {
	const { menus = [] } = props;
	// 状态
	const ctx = useConcent({ module: _SETTINGS, connect: [_GLOBAL], setup, props });
	const {
		state: {},
		moduleState: {
			openKeys,
			selectedKeys,
			inlineIndent,
			inlineCollapsed,
			inlineCollapsedOpenWidth,
			inlineCollapsedShutWidth,
			mode,
			multiple,
			bgColor,
		},
		connectedState: {
			[_GLOBAL]: { location },
		},
		mr,
	} = ctx;
	console.log(location);
	// 字体图标样式
	const itemIconStyle = useMemo(() => {
		return {
			marginRight: 5,
		};
	}, []);
	// 点击菜单项触发
	const onMenuItemClick = ({ item, key, keyPath, domEvent }) => {};
	// subMenu展开关闭触发
	const onSubMenuOpenChange = (openKeys) => {
		mr.openKeysChange(openKeys);
	};
	// 选中时调用
	const onMenuItemSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
		mr.onSelectedKeysChange(selectedKeys);
	};
	// 递归菜单
	const renderMenuItemNodes = (list) =>
		list.map((item, index) => {
			if (item.children && item.children.length) {
				return (
					<SubMenu key={item.title} {...item} icon={<FontIcon size={14} name={item.icon} style={itemIconStyle} />}>
						{renderMenuItemNodes(item.children)}
					</SubMenu>
				);
			} else {
				return (
					<Menu.Item key={item.title} {...item} icon={<FontIcon size={14} name={item.icon} style={itemIconStyle} />}>
						{item.title || ''}
					</Menu.Item>
				);
			}
		});


	const attrProps = useMemo(() => {
		return {
			multiple,
			mode,
			inlineIndent,
			selectedKeys,
			openKeys,
			onOpenChange: onSubMenuOpenChange,
			onSelect: onMenuItemSelect,
			id: 'customMenusClassBox',
			style: {
				width: inlineCollapsed ? inlineCollapsedOpenWidth : inlineCollapsedShutWidth,
				background: bgColor,
			},
		};
	}, [multiple, mode, inlineIndent, selectedKeys, openKeys]);

	return <Menu {...attrProps}>{renderMenuItemNodes(menus)}</Menu>;
}

export default memo(Sider);
