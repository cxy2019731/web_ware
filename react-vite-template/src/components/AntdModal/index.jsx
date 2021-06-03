import { Modal } from 'antd';
import { memo, useMemo, useRef } from 'react';
import { FullscreenOutlined, FullscreenExitOutlined, CloseOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import css from './index.module.less';
import classnames from 'classnames';

function setup(ctx) {
	ctx.initState({
		isFull: false,
		isDarg: false,
		bounds: { left: 0, top: 0, bottom: 0, right: 0 },
	});

	const st = {
		change_isDarg: (isDarg) => ctx.setState({ isDarg }),
		change_bounds: (bounds) => ctx.setState({ bounds }),
		onFull: ctx.syncBool('isFull'),
	};
	return st;
}

export default memo((props) => {
	const {
		children,
		visible = false,
		closable = true,
		centered = true,
		destroyOnClose = true,
		wrapClassName = '',
		title = '模态框',
		afterClose,
		bodyStyle,
		cancelButtonProps,
		cancelText,
		closeIcon,
		confirmLoading,
		focusTriggerAfterClose,
		footer,
		forceRender,
		keyboard,
		mask,
		maskClosable,
		maskStyle,
		okButtonProps,
		okText,
		okType,
		style,
		width,
		zIndex,
		onCancel,
		onOk,
		isDrag = true,
		isFull = true,
	} = props;

	const draggleRef = useRef(null);

	const { state, settings: st } = useConcent({ setup, props });

	// 拖动事件
	const onDargStart = (event, uiData) => {
		const { clientWidth, clientHeight } = window?.document?.documentElement;
		const targetRect = draggleRef?.current?.getBoundingClientRect();
		st.change_bounds({
			left: -targetRect?.left + uiData?.x,
			right: clientWidth - (targetRect?.right - uiData?.x),
			top: -targetRect?.top + uiData?.y,
			bottom: clientHeight - (targetRect?.bottom - uiData?.y),
		});
	};

	// modal props
	const modalProps = useMemo(() => {
		return {
			destroyOnClose,
			afterClose,
			bodyStyle,
			cancelButtonProps,
			cancelText,
			centered,
			confirmLoading,
			focusTriggerAfterClose,
			footer,
			forceRender,
			keyboard,
			mask,
			maskClosable,
			maskStyle,
			okButtonProps,
			okText,
			okType,
			style,
			width,
			zIndex,
			onCancel,
			onOk,
		};
	}, [
		destroyOnClose,
		afterClose,
		bodyStyle,
		cancelButtonProps,
		cancelText,
		centered,
		confirmLoading,
		focusTriggerAfterClose,
		footer,
		forceRender,
		keyboard,
		mask,
		maskClosable,
		maskStyle,
		okButtonProps,
		okText,
		okType,
		style,
		width,
		zIndex,
		onCancel,
		onOk,
	]);
	// 是否可拖动
	const _isDarg = useMemo(() => {
		return isDrag && state.isDarg && !state.isFull;
	}, [isDrag, state.isDarg, state.isFull]);

	return (
		<Modal
			{...modalProps}
			visible={visible}
			closable={false}
			wrapClassName={`${wrapClassName} ${css.modal} ${state.isFull ? css.modal_full : ''}`}
			title={
				<>
					<div
						className={classnames({
							[css.title_left]: true,
							[css.title_left_isDarg]: !state.isFull,
							[css.title_left_full]:state.isFull
						})}
						onMouseOver={() => st.change_isDarg(false)}
						onMouseOut={() => st.change_isDarg(true)}>
						{title}
					</div>
					<div className={css.title_right}>
						{/* 全屏 */}
						<div className={css.title_full} onClick={st.onFull}>
							{isFull ? !state.isFull ? <FullscreenOutlined /> : <FullscreenExitOutlined /> : null}
						</div>
						{/* 关闭 */}
						<div className={css.title_exit} onClick={onCancel}>
							{closable ? closeIcon ? closeIcon : <CloseOutlined /> : null}
						</div>
					</div>
				</>
			}
			modalRender={(modal) => (
				<Draggable disabled={_isDarg} bounds={state.bounds} onStart={onDargStart}>
					<div ref={draggleRef}>{modal}</div>
				</Draggable>
			)}>
			{children}
		</Modal>
	);
});
