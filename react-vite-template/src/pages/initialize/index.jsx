import { useNavigate } from 'react-router-dom';
import { _HOME, _USER } from '@constant';
import { useInterval } from 'ahooks';
import css from './index.module.less';

function setup(ctx) {
	ctx.initState({
		progress: 0,
		targetProgress: 0,
	});

	const st = {
		changeProgress: () => ctx.setState({ progress: ctx.state.progress + 1 }),
		changeUserCount: (targetProgress) => ctx.setState({ targetProgress }),
	};

	return st;
}

export default (props) => {
	const navigate = useNavigate();

	const { state, settings: st } = useConcent({ module: _USER, setup });
	
	useInterval(st.changeProgress, state.progress < state.targetProgress ? 20 : null);
	// 用户登录完成
	React.useEffect(() => {
		if (state.isLogin) {
			st.changeUserCount(100);
		}
	}, [state.isLogin]);

	// 加载完成跳转
	React.useEffect(() => {
		if (state.progress >= 100) {
			navigate(_HOME);
		}
	}, [state.progress]);

	return (
		<div className={css.initialize}>
			<div className={css.percentage}>
				<span className={css.text}>{fr('global.loading.text')}</span>
				<div className={css.status}>
					<div className={css.charging}></div>
					<span className={css.progress}>
						<span>{state.progress}</span>
						<small>%</small>
					</span>
				</div>
				<div className={css.contrast}>
					<div className={css.blackhole}></div>
					<div className={css.lithium}>
						<i></i>
						<i></i>
						<i></i>
						<i></i>
					</div>
				</div>
			</div>
		</div>
	);
};
