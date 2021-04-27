/*
 * @Author: itmanyong
 * @Date: 2021-04-08 13:48:22
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 14:02:09
 * @FilePath: \react-vite2-template\src\router\index.jsx
 */

import { HashRouter, Switch, Redirect } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import routes from './routes';
import App from '@/App';

function renderRoutes(list) {
	return list.map((rc) => {
		const { path, component: Component, authority, redirectPath, routes, ...rest } = rc;
		const prop = {
			key: path,
			path,
			authority,
			redirectPath,
			...rest,
		};
		if (routes && routes.length) {
			return (
				<AuthorizedRoute
					{...prop}
					render={(props) => (
						<Component>
							<Switch>
								{renderRoutes(routes)}
								<Redirect to='/notFound' />
							</Switch>
						</Component>
					)}
				/>
			);
		}
		return <AuthorizedRoute {...prop} component={Component} />;
	});
}

export default () => (
	<HashRouter basename='/'>
		<Switch>
			<App>
				<Switch>{renderRoutes(routes)}</Switch>
			</App>
		</Switch>
	</HashRouter>
);
