/*
 * @Author: itmanyong
 * @Date: 2021-04-08 13:48:22
 * @LastEditors: itmanyong
 * @Description: now file Description
 * @LastEditTime: 2021-04-08 14:02:09
 * @FilePath: \react-vite2-template\src\router\index.jsx
 */

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
/**
 * ********************************************************公共组件**********************************************************************************
 */
import App from "@/App";
import Layout from "@/layout/index";
import NotFound from "@/pages/404";
/**
 * ********************************************************页面导入**********************************************************************************
 */
import Home from "@/pages/Home";
import About from "@/pages/About";
import Login from "@/pages/Login";
/**
 * ********************************************************路由组件**********************************************************************************
 */
export default () => (
  <HashRouter basename="/">
    <Switch>
      <App>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Layout>
                <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Redirect to="/home" />
                </Switch>
              </Layout>
            )}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/notFound" component={NotFound} />
          <Redirect to="/notFound" />
        </Switch>
      </App>
    </Switch>
  </HashRouter>
);
