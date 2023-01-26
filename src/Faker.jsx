import React from "react";
import Chatter from "./components/Chatter";
import Sidebar from "./components/Sidebar";

function Faker() {
	return (
		<div className="Faker">
			<Sidebar />
			<Chatter />
		</div>
	);
}

export default Faker;
