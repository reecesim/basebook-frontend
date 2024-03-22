import React, { useState, useRef } from "react";

const UsernameAndChatBox = ({ sendMessage }) => {
  const [username, setUsername] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [messageToSend, setMessageToSend] = useState("");
  const [canSendMessage, setCanSendMessage] = useState(true);
  const [sendTimer, setSendTimer] = useState(0);

  const messageTimerRef = useRef(null);

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
      if (!canSendMessage) {
        // If the user cannot send a message yet, return
        return;
      }

      sendMessage(username, messageToSend); // Send username along with the message
      setMessageToSend(""); // Reset message input after sending
      setCanSendMessage(false); // Disable message sending temporarily

      // Start the send timer
      const interval = setInterval(() => {
        setSendTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Set up the timer to enable sending messages again after 2 seconds
      setTimeout(() => {
        clearInterval(interval);
        setCanSendMessage(true);
        setSendTimer(0);
      }, 2000);

      // Display the visual timer for 2 seconds
      setSendTimer(2);
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
          <button
            className="send-btn"
            onClick={handleMessageSubmit}
            disabled={!canSendMessage} // Disable button during countdown
          >
            Send
          </button>
          {canSendMessage ? (
            <div></div>
          ) : (
            <div className="send-timer">Please wait {sendTimer} seconds...</div>
          )}
        </>
      )}
    </div>
  );
};

export default UsernameAndChatBox;
