import useConcent from 'useConcent';
import { _SETTINGS } from 'cstMod';
import styles from './style.module.css';
import Sider from './components/Sider';
function LayoutView(props) {
	const {
		moduleState: { inlineCollapsed, inlineCollapsedOpenWidth, inlineCollapsedShutWidth },
	} = useConcent({ module: _SETTINGS });
	const menus = [
		{
			title: '菜单一',
			icon: 'aperture',
		},
		{
			title: '菜单二',
			icon: 'aperture',
			children: [
				{
					title: '菜单二-1',
					icon: 'aperture',
					children: [
						{
							title: '菜单二-1-1',
							icon: 'aperture',
						},
						{
							title: '菜单二-1-2',
							icon: 'aperture',
						},
						{
							title: '菜单二-1-3',
							icon: 'aperture',
						},
					],
				},
				{
					title: '菜单二-2',
					icon: 'aperture',
				},
				{
					title: '菜单二-3',
					icon: 'aperture',
				},
				{
					title: '菜单二-4',
					icon: 'aperture',
				},
			],
		},
		{
			title: '菜单三',
			icon: 'aperture',
		},
		{
			title: '菜单四',
			icon: 'aperture',
		},
		{
			title: '菜单五',
			icon: 'aperture',
		},
		{
			title: '菜单六',
			icon: 'aperture',
		},
		{
			title: '菜单七',
			icon: 'aperture',
		},
		{
			title: '菜单八',
			icon: 'aperture',
		},
		{
			title: '菜单九',
			icon: 'aperture',
		},
		{
			title: '菜单十',
			icon: 'aperture',
		},
		{
			title: '菜单十一',
			icon: 'aperture',
		},
		{
			title: '菜单十二',
			icon: 'aperture',
		},
		{
			title: '菜单十三',
			icon: 'aperture',
		},
		{
			title: '菜单十四',
			icon: 'aperture',
		},
		{
			title: '菜单十五',
			icon: 'aperture',
		},
	];
	return (
		<div className='fullScreen'>
			<div className={styles.sider}>
				<Sider menus={menus} />
			</div>
		</div>
	);
}

export default LayoutView;
