import Login from "@/pages/Login/index";
import Layout from "@/components/Layouts/index";
import Home from "@/pages/Home/index";
/**
 * -------------------------------route filed
 * key：指定唯一标识
 * name：路由名称
 * path：路由URL
 * component：展示组件
 * children：子路由集
 * auth：授权角色
 * exact：路由是否严格匹配
 * icon：路由图标
 * -------------------------------tip:
 * 1.在同一层级的路由，最后的重定向路由指向同层级第一个路由路径
 */

const routes = [
	{
		name: "登录",
		exact: true,
		path: "/login",
		component: Login,
		auth: []
	},
	{
		path: "/",
		component: Layout,
		children: [
			{
				name: "首页",
				path: "/home",
				component: Home
			}
		]
	}
];

export default routes;
