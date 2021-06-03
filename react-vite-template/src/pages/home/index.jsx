import css from './index.module.less';
import { Avatar } from 'antd';
import { _GLOBAL, _USER } from '@constant';
import { PoweroffOutlined } from '@ant-design/icons';
import { randomHexColorCode } from '@utils';
import { httpLogout } from '@http';

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
	const logout = async () => {
		const res = await httpLogout();
		if (res) {
			cr[_USER].resetStatus();
		}
	};

	return (
		<div className={css.box}>
			<div className={css.header}>
				<div className={css.header_left}>
					<img src={ms.logo} className={css.logo} />
					<div className={css.title}>{ms.title || ''}</div>
				</div>
				<div className={css.header_right}>
					<div className={css.user}>
						{cs[_USER].info.avatar ? (
							<Avatar src={cs[_USER].info.avatar} style={{ backgroundColor: randomHexColorCode(), verticalAlign: 'middle' }}></Avatar>
						) : (
							<Avatar style={{ backgroundColor: randomHexColorCode(), verticalAlign: 'middle' }}>{cs[_USER].info.nickName}</Avatar>
						)}
						<span>{cs[_USER].info.nickName}</span>
					</div>
					<PoweroffOutlined className={css.exit} onClick={logout} />
				</div>
			</div>
		</div>
	);
}

export default HomeView;
