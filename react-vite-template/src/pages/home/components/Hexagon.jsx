import css from './Hexagon.module.less';

export default ({ icon, title }) => {
	return (
		<div className={css.hexagon_item}>
			<div className={css.hex_item}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={css.hex_item}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
