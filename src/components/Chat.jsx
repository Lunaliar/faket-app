import React, { useState, useEffect } from "react";
import Message from "./Message";

function Chat({ messages }) {
	const [name, setName] = useState("Click me to Edit");
	const [editName, setEditName] = useState(false);
	const toggleEdit = () => setEditName((prevState) => !prevState);
	const nameKey = (e) => e.code === "Enter" && toggleEdit();
	useEffect(() => {
		const unsub = () => {
			if (!name) setName("Undefined");
			else return;
		};
		return () => {
			unsub();
		};
	}, [name, editName]);

	const checkRecent = (id, sent) => {
		for (let i = messages.length - 1; i >= 0; i--) {
			if (messages[i].sent === sent) {
				if (messages[i].id === id) return true;
				else return false;
			}
		}
	};

	return (
		<div className="Chat">
			<div className="Name">
				{editName ? (
					<div>
						<input
							placeholder={name}
							onKeyDown={nameKey}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				) : (
					<h4 onClick={toggleEdit}>{name}</h4>
				)}
			</div>
			<div className="Messages">
				{messages.map((msg) => {
					const recent = checkRecent(msg.id, msg.sent);
					console.log(msg);
					return (
						<Message
							id={msg.id}
							text={msg.text}
							sent={msg.sent}
							key={msg.id}
							recent={recent}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Chat;
