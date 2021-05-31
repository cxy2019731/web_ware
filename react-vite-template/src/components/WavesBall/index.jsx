/*
 * @Author: itmanyong
 * @Date: 2021-05-31 10:26:17
 * @Last Modified by:   itmanyong
 * @Last Modified time: 2021-05-31 10:26:17
 */
import { bg_png } from '@/static/index.js';
import css from './index.module.less';
function setup(ctx) {
	const { setState: set } = ctx;
	ctx.initState({});
	const st = {};
	return st;
}

function WavesBall(props) {
	const {} = useConcent({ setup, props });

	return (
		<div className={css.wavesBall}>
			<img src={bg_png} className={css.bgImg} />
		</div>
	);
}

export default WavesBall;
