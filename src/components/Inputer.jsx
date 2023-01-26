import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
function Inputer({ sender }) {
	const [input, setInput] = useState("");

	const handleKey = (e) => {
		if (e.shiftKey && e.code === "Enter") {
			sender(input, false);
			setInput("");
		} else if (e.code === "Enter") {
			sender(input, true);
			setInput("");
		}
	};

	return (
		<div className="Inputer">
			<AiOutlineSend
				onClick={() => {
					sender(input, false);
					setInput("");
				}}
				className="icon recieve"
				title="Shift + Enter"
			/>
			<input
				placeholder="Send a Message..."
				type="text"
				value={input}
				onKeyDown={handleKey}
				onChange={(e) => setInput(e.target.value)}
			/>
			<AiOutlineSend
				onClick={() => {
					sender(input, true);
					setInput("");
				}}
				className="icon send"
				title="Enter"
			/>
		</div>
	);
}

export default Inputer;
