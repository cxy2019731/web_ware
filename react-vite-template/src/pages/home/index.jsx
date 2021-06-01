import css from './index.module.less';

function setup(ctx) {
	const { setState } = ctx;
	ctx.initState({});
	const st = {};
	return st;
}

function HomeView(props) {
	const ctx = useConcent({ setup });
	return <div className={css.box}></div>;
}

export default HomeView;
