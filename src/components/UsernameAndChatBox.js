import React, { useState } from "react";

const UsernameAndChatBox = ({ sendMessage }) => {
  const [username, setUsername] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [messageToSend, setMessageToSend] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value.slice(0, 15)); // Limit username to 15 characters
  };

  const handleUsernameSubmit = () => {
    if (username.trim() !== "") {
      setIsUsernameSet(true);
      setUsername(username);
    }
  };

  const handleMessageChange = (event) => {
    setMessageToSend(event.target.value.slice(0, 200)); // Limit message to 200 characters
  };

  const handleMessageSubmit = () => {
    if (messageToSend.trim() !== "") {
      console.log("user: " + username + " sending message: ", messageToSend);
      sendMessage(username, messageToSend); // Send username along with the message
      setMessageToSend(""); // Reset message input after sending
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.ctrlKey) {
      event.preventDefault();
      if (!isUsernameSet) {
        handleUsernameSubmit();
      } else {
        handleMessageSubmit();
      }
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && event.ctrlKey) {
      setMessageToSend(messageToSend + "\n");
    }
  };

  return (
    <div className="pos-relative padding-20">
      {!isUsernameSet ? (
        <>
          <textarea
            className="message-area"
            type="text"
            placeholder="Choose a username!"
            value={username}
            onChange={handleUsernameChange}
            onKeyPress={handleKeyPress}
          />
          <button className="username-btn" onClick={handleUsernameSubmit}>
            Done
          </button>
        </>
      ) : (
        <>
          <textarea
            className="message-area force-height"
            value={messageToSend}
            onChange={handleMessageChange}
            placeholder="Say something!"
            onKeyPress={handleKeyPress}
            onKeyUp={handleKeyUp}
          />
          <button className="send-btn" onClick={handleMessageSubmit}>
            Send
          </button>
        </>
      )}
    </div>
  );
};

export default UsernameAndChatBox;
