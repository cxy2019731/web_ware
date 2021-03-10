import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import App from "@/App";

function renderRoutes(lists) {
  return lists.map((item, index) => renderRoute(item, index));
}

function renderRoute(route, index) {
  return (
    <Route
      key={route.path + index}
      path={route.path}
      exact={route.exact}
      render={(props) => {
        if (route?.children?.length) {
          return (
            <route.component {...props}>
              <Switch>
                {renderRoutes(route.children)}
                <Redirect to={route.children[0].path}></Redirect>
              </Switch>
            </route.component>
          );
        } else {
          return <route.component {...props}></route.component>;
        }
      }}
    />
  );
}

export default function Router() {
  return (
    <HashRouter>
      <App>
        <Switch>
          {renderRoutes(routes)}
          <Redirect to={routes[0].path}></Redirect>
        </Switch>
      </App>
    </HashRouter>
  );
}
