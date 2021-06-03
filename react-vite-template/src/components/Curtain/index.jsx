import css from './index.module.less';

export default (props) => {
	const [isShow, setIsShow] = React.useState(true);
	React.useEffect(() => {
		setTimeout(() => {
			setIsShow(false);
		}, 1490);
	}, []);
	if (!isShow) {
		return null;
	}
	return (
		<>
			<div className={css.box_top}></div>
			<div className={css.progress}></div>
			<div className={css.box_tbottom}></div>
		</>
	);
};
