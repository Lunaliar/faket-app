import React from "react";

function Message({ id, text, sent, recent }) {
	console.log(sent);

	return (
		<div className={`Message ${recent && "Recent"} ${sent && "Sent"}`}>
			{text}
		</div>
	);
}

export default Message;
