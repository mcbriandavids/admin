import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AppRoute from "./AppRoute";
import Categories from "./Categories";
import Details from "./Details";
import DashboardLayout from "./Layouts/DashboardLayout";
import HeaderLayout from "./Layouts/HeaderLayout";
import Login from "./Login";
import Posts from "./Posts";
import Profile from "./Profile";
import Settings from "./Settings";
import Users from "./Users";

const Routes = () => {
	return (
		<Router>
			<main>
				<Switch>
					<AppRoute
						exact={true}
						path={"/"}
						layout={HeaderLayout}
						component={Login}
					/>
					<AppRoute
						path={"/admin-dashboard"}
						layout={DashboardLayout}
						component={AdminDashboard}
					/>
					<AppRoute
						path={"/posts"}
						layout={DashboardLayout}
						component={Posts}
					/>
					<AppRoute
						path={"/categories"}
						layout={DashboardLayout}
						component={Categories}
					/>
					<AppRoute
						path={"/users"}
						layout={DashboardLayout}
						component={Users}
					/>
					<AppRoute
						path={"/settings"}
						layout={DashboardLayout}
						component={Settings}
					/>
					<AppRoute
						path={"/profile"}
						layout={DashboardLayout}
						component={Profile}
					/>
					<AppRoute
						path={"/details"}
						layout={DashboardLayout}
						component={Details}
					/>
				</Switch>
			</main>
		</Router>
	);
};

export default Routes;
