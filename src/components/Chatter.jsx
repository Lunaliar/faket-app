import React, { useState } from "react";
import Chat from "./Chat";
import Inputer from "./Inputer";
import { v4 as uuidv4 } from "uuid";
function Chatter() {
	const [messages, setMessages] = useState([]);
	const sender = (text, type) => {
		const newMessage = { text, sent: type, id: uuidv4() };
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};
	const clear = () => {
		setMessages([]);
	};
	console.log(messages);
	return (
		<div className="Chatter">
			<Chat messages={messages} />
			<Inputer sender={sender} />
		</div>
	);
}

export default Chatter;
