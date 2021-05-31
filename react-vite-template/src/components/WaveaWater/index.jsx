import css from './index.module.less';
import { useReactive, useUpdateEffect } from 'ahooks';
import wave from './waves';
/**
 * 柔顺丝滑
 */
export default (props) => {
	const waveDomRef = React.useRef(null);
	const state = useReactive({
		pi: Math.PI,
		pi2: Math.PI * 2,
	});

	useUpdateEffect(() => {
		if (waveDomRef.current) {
			wave(waveDomRef.current);
		}
	}, [waveDomRef, waveDomRef.current]);

	return <div className={css.holder} ref={waveDomRef}></div>;
};
