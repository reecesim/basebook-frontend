// ChatContainer.js
import React from "react";
import UsernameAndChatBox from "./UsernameAndChatBox";
import MessageList from "./MessageList";

function ChatContainer({
  username,
  setUsername,
  messages,
  setMessageToSend,
  sendMessage,
}) {
  return (
    <div className="chat-container">
      <UsernameAndChatBox
        sendMessage={sendMessage} // Pass the sendMessage function
      />
      <MessageList messages={messages} />
    </div>
  );
}

export default ChatContainer;
