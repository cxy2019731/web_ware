// 公共页面
import Layout from '@/layout/index';
import NotFound from '@/pages/notFound/index';
import Login from '@/pages/login/index';
import Home from '@/pages/home/index';

const routes = [
	{
		path: '/login',
		exact: true,
		component: Login,
	},
	{
		path: '/',
		component: Layout,
		routes: [
			{
				path: '/home',
				exact: true,
				component: Home,
				redirectPath: '/notFound', //404显示的页面
			},
			{
				path: '/notFound',
				exact: true,
				component: NotFound,
			},
		],
	},
];

export default routes;
