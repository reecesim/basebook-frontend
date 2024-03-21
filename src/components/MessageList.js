// MessageList.js
import React from "react";
import Message from "./Message";

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <div className="message-container" key={index}>
          <span className="message-username">{msg.username}</span>
          <span className="message-message">{msg.message}</span>
          <span className="message-charcount">{msg.message.length}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
