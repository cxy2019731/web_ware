import css from './index.module.less';
import { Avatar, Modal } from 'antd';
import { _GLOBAL, _USER } from '@constant';
import { PoweroffOutlined, ExclamationCircleOutlined, SnippetsOutlined } from '@ant-design/icons';
import { randomHexColorCode } from '@utils';
import { httpLogout } from '@http';
import Hexagon from './components/Hexagon';
import { Curtain } from '@components';
import { v4 as uuidV4 } from 'uuid';

function setup(ctx) {
	const { setState } = ctx;
	ctx.initState({});
	const st = {};
	return st;
}

function HomeView(props) {
	const ctx = useConcent({ module: _GLOBAL, connect: [_USER], setup });

	const { state, moduleState: ms, connectedState: cs, cr } = ctx;

	// 退出账户
	const logout = () => {
		Modal.confirm({
			title: '确定退出当前登录账户?',
			icon: <ExclamationCircleOutlined />,
			content: '请注意保存数据/工作',
			centered: true,
			cancelText: `再想想`,
			okText: `确认退出`,
			async onOk() {
				const res = await httpLogout();
				if (res) {
					cr[_USER].resetStatus();
				}
			},
		});
	};
	const list = [
		{
			icon: <SnippetsOutlined />,
			title: `系统设置`,
		},
		{
			icon: <SnippetsOutlined />,
			title: `系统设置`,
		},
		{
			icon: <SnippetsOutlined />,
			title: `系统设置`,
		},
		{
			icon: <SnippetsOutlined />,
			title: `系统设置`,
		},
		{
			icon: <SnippetsOutlined />,
			title: `系统设置`,
		},
	];

	return (
		<div className={css.box}>
			{/* header */}
			<div className={css.header}>
				<div className={css.header_left}>
					<img src={ms.logo} className={css.logo} />
					<div className={css.title}>{ms.title || ''}</div>
				</div>
				<div className={css.header_right}>
					<div className={css.user}>
						{cs[_USER].info.avatar ? (
							<Avatar
								src={cs[_USER].info.avatar}
								style={{ backgroundColor: randomHexColorCode(), verticalAlign: 'middle' }}></Avatar>
						) : (
							<Avatar style={{ backgroundColor: randomHexColorCode(), verticalAlign: 'middle' }}>{cs[_USER].info.nickName}</Avatar>
						)}
						<span>{cs[_USER].info.nickName}</span>
					</div>
					<PoweroffOutlined className={css.exit} onClick={logout} />
				</div>
			</div>
			{/* content */}
			<div className={css.content}>
				{list.map((item) => (
					<Hexagon item={item} key={uuidV4()} />
				))}
			</div>
			<Curtain mode="" />
		</div>
	);
}

export default HomeView;
