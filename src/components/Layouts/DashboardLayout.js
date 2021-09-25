import React from "react";
import Footer from "../Footer";
import DashboardHeader from "../DashboardHeader";

const DashboardLayout = (props) => {
	return (
		<>
			<DashboardHeader />
			{props.children}
			<Footer />
		</>
	);
};
export default DashboardLayout;
