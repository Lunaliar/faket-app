import React from "react";
import { FaTheaterMasks } from "react-icons/fa";
function Sidebar() {
	return (
		<div className="Sidebar">
			<div className="Title">
				<FaTheaterMasks className="TitleIcon" />
				<h3>Faket App!</h3>
			</div>
			<div className="Buttons">
				<button>Clear</button>
				<button>Save</button>
			</div>
		</div>
	);
}

export default Sidebar;
